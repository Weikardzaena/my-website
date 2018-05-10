import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';

import { LegalComponent } from './legal.component';
import { LegalSiteComponent } from './legal-site/legal-site.component';
import { LegalOpenSansComponent } from './legal-open-sans/legal-open-sans.component';
import { LegalSourceCodeProComponent } from './legal-source-code-pro/legal-source-code-pro.component';

@NgModule({
  imports: [
    CommonModule,
    LegalRoutingModule
  ],
  declarations: [
    LegalComponent,
    LegalSiteComponent,
    LegalOpenSansComponent,
    LegalSourceCodeProComponent
  ]
})
export class LegalModule { }
