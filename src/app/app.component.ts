import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

const LARGE_SIZE = "65em";
const MEDIUM_SIZE = "55em";
const SMALL_SIZE = "36em";
const XSMALL_SIZE = "100%";
const XLARGE_SIZE = "80em";

const LINK_WIDTH_SMALL = "22%";
const LINK_WIDTH_DEFAULT = "11em"; // 20% of MEDIUM_SIZE
const LINK_HORIZ_MARGIN_DEFAULT = "1em";
const LINK_HORIZ_MARGIN_SMALL = "0.3em";
const LINK_PADDING_DEFAULT = "0.6em";
const LINK_PADDING_SMALL = "0.6em";
const FONT_SIZE_DEFAULT = "1.25em";
const FONT_SIZE_SMALL = "1em";
const TITLE_FONT_SIZE_DEFAULT = "4rem";
const TITLE_FONT_SIZE_SMALL = "2.7rem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'George Nikolai Kotula';
  routes: object[];
  excludedRoutes = ["legal"];

  contentSize = MEDIUM_SIZE;
  linkWidth = LINK_WIDTH_DEFAULT;
  linkHorizMargin = LINK_HORIZ_MARGIN_DEFAULT;
  linkPadding = LINK_PADDING_DEFAULT;
  fontSize = FONT_SIZE_DEFAULT;
  titleFontSize = TITLE_FONT_SIZE_DEFAULT;

  constructor(router: Router, breakpointObserver: BreakpointObserver) {
    this.routes = [];
    let builder: string = "";

    // Build the strings based on the paths, but capitalize them:
    router.config.forEach(route => {
      if ((route.path !== undefined) && (route.path !== "")) {
        if (this.excludedRoutes.indexOf(route.path) < 0) {
          builder = "";
          builder += route.path.charAt(0).toUpperCase();
          builder += route.path.substr(1, route.path.length - 1);
          this.routes.push({path : route.path, name : builder});
        }
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
    this.linkWidth = LINK_WIDTH_DEFAULT;
    this.linkHorizMargin = LINK_HORIZ_MARGIN_DEFAULT;
    this.linkPadding = LINK_PADDING_DEFAULT;
    this.fontSize = FONT_SIZE_DEFAULT;
    this.titleFontSize = TITLE_FONT_SIZE_DEFAULT;
    console.log("Large!");
  }

  private ActivateMediumLayout(): void
  {
    this.contentSize = MEDIUM_SIZE;
    this.linkWidth = LINK_WIDTH_DEFAULT;
    this.linkHorizMargin = LINK_HORIZ_MARGIN_DEFAULT;
    this.linkPadding = LINK_PADDING_DEFAULT;
    this.fontSize = FONT_SIZE_DEFAULT;
    this.titleFontSize = TITLE_FONT_SIZE_DEFAULT;
    console.log("Medium!");
  }

  private ActivateSmallLayout(): void
  {
    this.contentSize = SMALL_SIZE;
    this.linkWidth = LINK_WIDTH_SMALL;
    this.linkHorizMargin = LINK_HORIZ_MARGIN_SMALL;
    this.linkPadding = LINK_PADDING_SMALL;
    this.fontSize = FONT_SIZE_SMALL;
    this.titleFontSize = TITLE_FONT_SIZE_SMALL;
    console.log("Small!");
  }

  private ActivateXLargeLayout(): void
  {
    this.contentSize = XLARGE_SIZE;
    this.linkWidth = LINK_WIDTH_DEFAULT;
    this.linkHorizMargin = LINK_HORIZ_MARGIN_DEFAULT;
    this.linkPadding = LINK_PADDING_DEFAULT;
    this.fontSize = FONT_SIZE_DEFAULT;
    this.titleFontSize = TITLE_FONT_SIZE_DEFAULT;
    console.log("XLarge!");
  }

  private ActivateXSmallLayout(): void
  {
    this.contentSize = XSMALL_SIZE;
    this.linkWidth = LINK_WIDTH_SMALL;
    this.linkHorizMargin = LINK_HORIZ_MARGIN_SMALL;
    this.linkPadding = LINK_PADDING_SMALL;
    this.fontSize = FONT_SIZE_SMALL;
    this.titleFontSize = TITLE_FONT_SIZE_SMALL;
    console.log("XSmall!");
  }
}
