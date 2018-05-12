import { Injectable, OnInit } from '@angular/core';

import { ProjectBase } from './project-base';
import { VirusBlasterProject } from '../virus-blaster/virus-blaster-project';
import { AlienBlasterProject } from '../alien-blaster/alien-blaster-project';
import { NegamaxChessProject } from '../negamax-chess/negamax-chess-project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: ProjectBase[] = [];

  constructor() {
    this.loadProjects();
  }

  private loadProjects(): void
  {
    this.projects.push(new VirusBlasterProject(), new NegamaxChessProject(), new AlienBlasterProject());
  }

  public getProjectByName(name: string): ProjectBase
  {
    if (name !== null) {
      return this.projects.find(function(element) {
        return (element.getProjName() !== null) && (element.getProjName() === name.toLowerCase());
      });
    }
    return null;
  }

  public getProjects(): ProjectBase[]
  {
    return this.projects;
  }
}
