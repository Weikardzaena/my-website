import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '../projects-service/projects.service';
import { ProjectBase } from '../projects-service/project-base';

@Component({
  selector: 'app-negamax-chess',
  templateUrl: './negamax-chess.component.html',
  styleUrls: ['./negamax-chess.component.css']
})
export class NegamaxChessComponent implements OnInit {

  project: ProjectBase;

  constructor (private projectsService: ProjectsService) { }

  ngOnInit(): void
  {
    this.project = this.projectsService.getProjectByName("negamax-chess");
  }
}
