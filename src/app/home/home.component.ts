import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { LINK_GITHUB, LINK_LINKEDIN } from '../external-links';

const WIDTH_SMALL = "100%";
const WIDTH_DEFAULT = "66%";

const PADDING_LEFT_SMALL = "0em";

const PADDING_LEFT_DEFAULT = "4em";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  paddingLeft = PADDING_LEFT_DEFAULT;
  width = WIDTH_DEFAULT;

  linkGitHub = LINK_GITHUB;
  linkLinkedIn = LINK_LINKEDIN;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      if (result.matches) {
        this.ActivateSmallLayout();
      }
    });

    breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.matches) {
        this.ActivateDefaultLayout();
      }
    });
  }

  private ActivateDefaultLayout(): void
  {
    this.paddingLeft = PADDING_LEFT_DEFAULT;
    this.width = WIDTH_DEFAULT;
  }

  private ActivateSmallLayout(): void
  {
    this.paddingLeft = PADDING_LEFT_SMALL;
    this.width = WIDTH_SMALL;
  }
}
