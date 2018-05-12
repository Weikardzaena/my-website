import { Component, OnInit } from '@angular/core';
import { LINK_GITHUB, LINK_LINKEDIN } from '../external-links';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  linkGitHub = LINK_GITHUB;
  linkLinkedIn = LINK_LINKEDIN;
  constructor() { }

  ngOnInit() {
  }

}
