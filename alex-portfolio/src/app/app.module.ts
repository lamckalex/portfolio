import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SpaceStatsComponent } from './space-stats/space-stats.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatChipsModule } from '@angular/material/chips';

import {
  MatCardModule, MatButtonModule, MatExpansionModule,
} from '@angular/material';
import { MaterialCardsComponent } from './material-cards/material-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceStatsComponent,
    MapComponent,
    MaterialCardsComponent,
    
  ],
  imports: [
    FontAwesomeModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LeafletModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
