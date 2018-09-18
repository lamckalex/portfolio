import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SpaceStatsComponent } from './space-stats/space-stats.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import {
  MatCardModule, MatButtonModule,
} from '@angular/material';
import { MaterialCardsComponent } from './material-cards/material-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceStatsComponent,
    MapComponent,
    MaterialCardsComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    HttpClientModule,
    LeafletModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
