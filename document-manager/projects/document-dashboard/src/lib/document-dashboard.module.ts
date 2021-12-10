import { NgModule } from '@angular/core';
import { DocumentDashboardComponent } from './document-dashboard.component';
import { FileManagerModule } from './file-manager/file-manager.module';


@NgModule({
  declarations: [
    DocumentDashboardComponent,
  ],
  imports: [
    FileManagerModule
  ],
  exports: [
    DocumentDashboardComponent,
    FileManagerModule,
  ]
})
export class DocumentDashboardModule { }
