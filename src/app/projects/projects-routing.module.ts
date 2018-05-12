import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { AlienBlasterComponent } from './alien-blaster/alien-blaster.component';
import { NegamaxChessComponent } from './negamax-chess/negamax-chess.component';
import { VirusBlasterComponent } from './virus-blaster/virus-blaster.component';

const PROJECTS_ROUTES: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'alien-blaster',
        component: AlienBlasterComponent
      },
      {
        path: 'negamax-chess',
        component: NegamaxChessComponent
      },
      {
        path: 'virus-blaster',
        component: VirusBlasterComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(PROJECTS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule { }
