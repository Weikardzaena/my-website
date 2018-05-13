import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';

import { ProjectsService } from './projects-service/projects.service';
import { ProjectBase, ProjectType } from './projects-service/project-base';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  gameProjects: ProjectBase[];
  otherProjects: ProjectBase[];

  isViewingProj: boolean = false;

  projWidth = "40%";
  projMargin = "0.33em";

  constructor(private projectsService: ProjectsService,
              private router: Router,
              private activatedRoute: ActivatedRoute)
  {
    // TODO: resize things on screen size changes.
  }

  ngOnInit(): void
  {
    // Get all the projects from the service:
    this.gameProjects = this.projectsService.getProjectsByType(ProjectType.Game);
    this.otherProjects = this.projectsService.getProjectsByType(ProjectType.Other);

    // When we navigate to /projects, show everything on the page,
    // else, hide everything but the active project.
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === "/projects") {
          this.isViewingProj = false;
        } else {
          this.isViewingProj = true;
        }
      }
    });

    // Prevent direct URL navigation from showing everything on the screen:
    if (this.router.url !== '/projects') {
      this.isViewingProj = true;
    }
  }

  onBackClick(): void
  {
    history.back();
  }
}
