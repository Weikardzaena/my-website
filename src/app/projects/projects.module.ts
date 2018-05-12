import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';

import { ProjectsComponent } from './projects.component';
import { AlienBlasterComponent } from './alien-blaster/alien-blaster.component';
import { NegamaxChessComponent } from './negamax-chess/negamax-chess.component';
import { VirusBlasterComponent } from './virus-blaster/virus-blaster.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectsComponent,
    AlienBlasterComponent,
    NegamaxChessComponent,
    VirusBlasterComponent
  ]
})
export class ProjectsModule { }
