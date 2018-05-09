import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LegalComponent } from './legal.component';
import { LegalSiteComponent } from './legal-site/legal-site.component';
import { LegalOpenSansComponent } from './legal-open-sans/legal-open-sans.component';
import { LegalSourceCodeProComponent } from './legal-source-code-pro/legal-source-code-pro.component';

const LEGAL_ROUTES: Routes = [
  {
    path: '',
    component: LegalComponent,
    children: [
      {
        path: 'site',
        component: LegalSiteComponent
      },
      {
        path: 'open-sans',
        component: LegalOpenSansComponent
      },
      {
        path: 'source-code-pro',
        component: LegalSourceCodeProComponent
      },
      {
        path: '',
        redirectTo: 'site',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(LEGAL_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class LegalRoutingModule { }
