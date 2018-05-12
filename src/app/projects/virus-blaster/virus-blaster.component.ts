import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '../projects-service/projects.service';
import { ProjectBase } from '../projects-service/project-base';

@Component({
  selector: 'app-virus-blaster',
  templateUrl: './virus-blaster.component.html',
  styleUrls: ['./virus-blaster.component.css']
})
export class VirusBlasterComponent implements OnInit {

  project: ProjectBase;

  constructor (private projectsService: ProjectsService) { }

  ngOnInit(): void
  {
    this.project = this.projectsService.getProjectByName("virus-blaster");
  }
}
