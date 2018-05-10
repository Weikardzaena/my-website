import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

const LINK_WIDTH_SMALL = "30%";
const LINK_WIDTH_DEFAULT = "11em";
const LINK_HORIZ_MARGIN_DEFAULT = "1em";
const LINK_HORIZ_MARGIN_SMALL = "0.3em";
const LINK_PADDING_DEFAULT = "0.6em";
const LINK_PADDING_SMALL = "0.6em";
const FONT_SIZE_DEFAULT = "1em";
const FONT_SIZE_SMALL = "0.85em";

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent {

  linkWidth = LINK_WIDTH_DEFAULT;
  linkHorizMargin = LINK_HORIZ_MARGIN_DEFAULT;
  linkPadding = LINK_PADDING_DEFAULT;
  fontSize = FONT_SIZE_DEFAULT;
  wrapperHeight: string;

  constructor(breakpointObserver: BreakpointObserver)
  {
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
    this.linkWidth = LINK_WIDTH_DEFAULT;
    this.linkHorizMargin = LINK_HORIZ_MARGIN_DEFAULT;
    this.linkPadding = LINK_PADDING_DEFAULT;
    this.fontSize = FONT_SIZE_DEFAULT;
    //console.log("Large!");
  }

  private ActivateMediumLayout(): void
  {
    this.linkWidth = LINK_WIDTH_DEFAULT;
    this.linkHorizMargin = LINK_HORIZ_MARGIN_DEFAULT;
    this.linkPadding = LINK_PADDING_DEFAULT;
    this.fontSize = FONT_SIZE_DEFAULT;
    //console.log("Medium!");
  }

  private ActivateSmallLayout(): void
  {
    this.linkWidth = LINK_WIDTH_SMALL;
    this.linkHorizMargin = LINK_HORIZ_MARGIN_SMALL;
    this.linkPadding = LINK_PADDING_SMALL;
    this.fontSize = FONT_SIZE_SMALL;
    //console.log("Small!");
  }

  private ActivateXLargeLayout(): void
  {
    this.linkWidth = LINK_WIDTH_DEFAULT;
    this.linkHorizMargin = LINK_HORIZ_MARGIN_DEFAULT;
    this.linkPadding = LINK_PADDING_DEFAULT;
    this.fontSize = FONT_SIZE_DEFAULT;
    //console.log("XLarge!");
  }

  private ActivateXSmallLayout(): void
  {
    this.linkWidth = LINK_WIDTH_SMALL;
    this.linkHorizMargin = LINK_HORIZ_MARGIN_SMALL;
    this.linkPadding = LINK_PADDING_SMALL;
    this.fontSize = FONT_SIZE_SMALL;
    //console.log("XSmall!");
  }
}
