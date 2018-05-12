import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';

import { ProjectsComponent } from './projects.component';
import { AlienBlasterComponent } from './alien-blaster/alien-blaster.component';
import { NegamaxChessComponent } from './negamax-chess/negamax-chess.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectsComponent,
    AlienBlasterComponent,
    NegamaxChessComponent
  ]
})
export class ProjectsModule { }
