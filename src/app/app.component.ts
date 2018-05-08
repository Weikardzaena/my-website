import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

const LARGE_SIZE = "65em";
const MEDIUM_SIZE = "55em";
const SMALL_SIZE = "36em";
const XSMALL_SIZE = "100%";
const XLARGE_SIZE = "80em";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'George Nikolai Kotula';
  routes: object[];
  contentSize = MEDIUM_SIZE;

  constructor(router: Router, breakpointObserver: BreakpointObserver) {
    this.routes = [];
    let builder: string = "";

    // Build the strings based on the paths, but capitalize them:
    router.config.forEach(route => {
      if ((route.path !== undefined) && (route.path !== "")) {
        builder = "";
        builder += route.path.charAt(0).toUpperCase();
        builder += route.path.substr(1, route.path.length - 1);
        this.routes.push({path : route.path, name : builder});
      }
    });

    // XSmall layout:
    breakpointObserver.observe([
      Breakpoints.XSmall
    ]).subscribe(result => {
      if (result.matches) {
        this.ActivateXSmallLayout();
      }
    });

    // Small layout
    breakpointObserver.observe([
      Breakpoints.Small
    ]).subscribe(result => {
      if (result.matches) {
        this.ActivateSmallLayout();
      }
    });

    // Medium tablet layout
    breakpointObserver.observe([
      Breakpoints.Medium
    ]).subscribe(result => {
      if (result.matches) {
        this.ActivateMediumLayout();
      }
    });

    // Large layout
    breakpointObserver.observe([
      Breakpoints.Large
    ]).subscribe(result => {
      if (result.matches) {
        this.ActivateLargeLayout();
      }
    });

    // XLarge layout
    breakpointObserver.observe([
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.matches) {
        this.ActivateXLargeLayout();
      }
    });
  }

  private ActivateLargeLayout(): void
  {
    this.contentSize = LARGE_SIZE;
    console.log("Large!");
  }

  private ActivateMediumLayout(): void
  {
    this.contentSize = MEDIUM_SIZE;
    console.log("Medium!");
  }

  private ActivateSmallLayout(): void
  {
    this.contentSize = SMALL_SIZE;
    console.log("Small!");
  }

  private ActivateXLargeLayout(): void
  {
    this.contentSize = XLARGE_SIZE;
    console.log("XLarge!");
  }

  private ActivateXSmallLayout(): void
  {
    this.contentSize = XSMALL_SIZE;
    console.log("XSmall!");
  }
}
