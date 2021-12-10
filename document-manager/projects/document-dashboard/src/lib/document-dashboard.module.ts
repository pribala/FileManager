import { NgModule } from '@angular/core';
import { DocumentDashboardComponent } from './document-dashboard.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileManagerModule } from './file-manager/file-manager.module';


@NgModule({
  declarations: [
    DocumentDashboardComponent,
    FileManagerComponent
  ],
  imports: [
    FileManagerModule
  ],
  exports: [
    DocumentDashboardComponent,
    FileManagerModule,
    FileManagerComponent
  ]
})
export class DocumentDashboardModule { }
