import { Portfolio } from './objects/portfolio';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardObject } from './material-cards/mat-card-object';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  //Push to github pages
  // ng build --prod --base-href "https://lamckalex.github.io/portfolio"
  // ngh --dir=dist/alex-portfolio

export class AppComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  title = 'alex-portfolio';

  myPortfolio: Portfolio;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('assets/portfolio.json')
      .subscribe(data => {
        this.myPortfolio = Object.assign(new Portfolio(), data);
      });

  }

}
