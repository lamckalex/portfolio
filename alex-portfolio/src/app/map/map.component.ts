import { MapObject } from './../objects/map-object';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { tileLayer, latLng, circle, polygon, marker, icon, Map } from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {

  map: Map;

  @Input() mapObjs: MapObject[];

  ngOnChanges(changes: SimpleChanges) {
    if(changes.mapObjs){
      this.layers = [];

      this.mapObjs.forEach(mapObj => {
        let layer = marker([parseInt(mapObj.lat), parseInt(mapObj.lon)], {
          icon: icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/marker-icon.png',
            shadowUrl: 'assets/marker-shadow.png'
          })
        });
        if(mapObj.data){
          layer.bindPopup(mapObj.data)
            .openPopup()
          this.layers.push(layer);
        }        
      });

      if(this.layers.length == 1){
        let latLngs = [this.layers[0].getLatLng()];
        let markerBounds = L.latLngBounds(latLngs);
        this.map.fitBounds(markerBounds);
        this.map.setZoom(2);
        this.layers[0].openPopup();
      }

    }
  }

  constructor() { }

  ngOnInit() {

  }

  layers = [];

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  onMapReady(map: Map){
    this.map = map;
  }

}
