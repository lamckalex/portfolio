import { Component, OnInit } from '@angular/core';
import { MatCardObject } from './material-cards/mat-card-object';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  title = 'alex-portfolio';

  name = "Alex Lam"
  description = "I'm a Web Developer in Vancouver, BC, Canada. \n I have 3 years of web development experience, mainly focusing on Angular development.\n I have worked with several enterprise level projects for different companies. \n Feel free to reach out! \n"

  projects = [
    new MatCardObject(
      "Portfolio",
      "Web Based Resume",
      "To try out Angular Material Library",
      "assets/images/portfolio.png",
      ["Angular 6", "Font Awesome Angular Component", "Material Angular"]
    ),
    new MatCardObject(
      "ISS Tracker",
      "Leaflet Playground",
      "Testing around with Leaflet",
      "",
      ["Angular 6", "Leaflet", "ngx Leaflet"]
    )
  ]

  panels = [
    {
      title: "Front End Developer",
      subtitle: "Safe Software",
      from: "January 2018",
      to: "Current",
      description: [
        "Angular 6, AngularJs, HTML5, CSS and go.js(Canvas library)",
        "Automated end-to-end testing with protractor",
        "Working closely with backend team, designing and integrating RESTful services",
        "Source Control with enterprise Git and Agile Development using Jira",
        "Work with UX / UI Mockups to bring design to life",
        "Mentor co-op team members"

      ]
    },
    {
      title: "Software Developer",
      subtitle: "MDA",
      from: "June 2015",
      to: "January 2018",
      description: [
        "Angular 4, Redux, HTML5, CSS, Open Layers 4(Map services library), and vis.js(timeline library)",
        "Automated Testing: Unit testing with Jasmine, E2E testing with Protractor",
        "Integrated with REST services",
        "Source Control with enterprise Git and Agile Development using TargetProcess",
        "Work with UX / UI Mockups to bring design to life",
        "Mentor junior members of the team"
      ]
    }
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
