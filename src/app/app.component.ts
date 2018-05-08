import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'George Nikolai Kotula';
  routes: object[];

  constructor(router: Router) {
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
  }
}
