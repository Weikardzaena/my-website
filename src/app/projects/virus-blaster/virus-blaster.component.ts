import { Component } from '@angular/core';

import { ProjectsService } from '../projects-service/projects.service';
import { ProjectBase } from '../projects-service/project-base';

@Component({
  selector: 'app-virus-blaster',
  templateUrl: './virus-blaster.component.html',
  styleUrls: ['./virus-blaster.component.css']
})
export class VirusBlasterComponent {

  project: ProjectBase;

  constructor(projectsService: ProjectsService) {
    this.project = projectsService.getProjectByName("virus-blaster");
  }
}
