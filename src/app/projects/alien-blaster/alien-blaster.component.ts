import { Component } from '@angular/core';

import { ProjectsService } from '../projects-service/projects.service';
import { ProjectBase } from '../projects-service/project-base';

@Component({
  selector: 'app-alien-blaster',
  templateUrl: './alien-blaster.component.html',
  styleUrls: ['./alien-blaster.component.css']
})
export class AlienBlasterComponent {

  project: ProjectBase;

  constructor (projectsService: ProjectsService) {
    this.project = projectsService.getProjectByName("alien-blaster");
  }
}
