import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '../projects-service/projects.service';
import { ProjectBase } from '../projects-service/project-base';

@Component({
  selector: 'app-alien-blaster',
  templateUrl: './alien-blaster.component.html',
  styleUrls: ['./alien-blaster.component.css']
})
export class AlienBlasterComponent implements OnInit {

  project: ProjectBase;

  constructor (private projectsService: ProjectsService) { }

  ngOnInit(): void
  {
    this.project = this.projectsService.getProjectByName("alien-blaster");
  }
}
