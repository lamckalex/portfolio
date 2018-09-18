import { MapObject } from './../objects/map-object';
import { OpenNotifyService } from './../services/open-notify.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-space-stats',
  templateUrl: './space-stats.component.html',
  styleUrls: ['./space-stats.component.css']
})
export class SpaceStatsComponent implements OnInit {

  // people: {craft: string, name: string}[];
  // issPos: {
  //   lat: string,
  //   lon: string,
  //   timestamp: string
  // };

  // iss:{
  //   passengers: { craft: string, name: string }[],
  //   position: any
  // }

  mapObjs: MapObject[] = [];

  constructor(private ons: OpenNotifyService) { }

  ngOnInit() {

    forkJoin(
      this.ons.getPeopleInSpace(),
      this.ons.getIssNow()
    )
      .subscribe(([peopleResponse, issResponse]: any[]) => {
        
        let peopleInSpace = peopleResponse.people;

        let lat = issResponse['iss_position']['latitude'];
        let lon = issResponse['iss_position']['longitude']
        let timestamp = issResponse['timestamp']

        let passengersOnIss = [];

        peopleInSpace.forEach(function(person){
          if(person.craft === "ISS"){
            passengersOnIss.push(person);
          }
        })

        let data = "";
        data = data.concat("<div>Spacecraft: ISS </div>");
        data = data.concat("<div>Latitude: " + lat + "</div>");
        data = data.concat("<div>Longitude: " + lon + "</div>");
        data = data.concat("<div>Timestamp: " + timestamp + "</div>");

        data = data.concat("<div>Passengers </div>");

        data= data.concat('<ul>')
        passengersOnIss.forEach(function(passenger, index){
          data = data.concat("<li>Passenger " + index + " " + passenger.name + "</li>")
        })
        data = data.concat('</ul>')
        this.mapObjs = [];

        this.mapObjs.push(
          new MapObject(lat, lon, data)
        )
        

        

      });
  }
}
