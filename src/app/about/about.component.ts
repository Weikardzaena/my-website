import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /*
     * Routing to fragments is broken in Angular as of 12-05-18.
     * This workaround is pulled from the bug tracking thread on github:
     * https://github.com/angular/angular/issues/6595#issuecomment-360255760
     */
    this.route.fragment.subscribe((hash: string) =>{
      if (hash) {
        const comp = document.getElementById(hash);
        if (comp) {
          comp.scrollIntoView();
        }
      } else {
        window.scrollTo(0, 0);
      }
    });
  }

}
