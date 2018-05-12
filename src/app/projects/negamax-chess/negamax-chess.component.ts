import { Component } from '@angular/core';

import { ProjectsService } from '../projects-service/projects.service';
import { ProjectBase } from '../projects-service/project-base';

@Component({
  selector: 'app-negamax-chess',
  templateUrl: './negamax-chess.component.html',
  styleUrls: ['./negamax-chess.component.css']
})
export class NegamaxChessComponent {

  project: ProjectBase;

  constructor (projectsService: ProjectsService) {
    this.project = projectsService.getProjectByName("negamax-chess");
  }
}
