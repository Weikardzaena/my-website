import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'George Nikolai Kotula';
  routes: object[];

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

    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.ActivateMobileLayout();
      } else {
        this.ActivateDesktopLayout();
      }
    });
  }

  private ActivateMobileLayout(): void
  {
    console.log("Mobile!");
  }

  private ActivateDesktopLayout(): void
  {
    console.log("Desktop!");
  }
}
