import { Component, OnInit } from '@angular/core';

import { ProjectsService } from './projects-service/projects.service';
import { ProjectBase } from './projects-service/project-base';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectBase[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void
  {
    this.projects = this.projectsService.getProjects();
  }
}
