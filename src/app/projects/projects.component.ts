import { Component, OnInit } from '@angular/core';

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

  projWidth = "40%";
  projMargin = "0.33em";

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void
  {
    this.gameProjects = this.projectsService.getProjectsByType(ProjectType.Game);
    this.otherProjects = this.projectsService.getProjectsByType(ProjectType.Other);
  }
}
