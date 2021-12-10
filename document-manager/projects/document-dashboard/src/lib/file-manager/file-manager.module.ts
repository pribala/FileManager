import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FileManagerComponent } from './file-manager.component';
import { FileManagerRoutingModule } from './file-manager-routing.module';


@NgModule({
  declarations: [
    FileManagerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FileManagerRoutingModule
  ]
})
export class FileManagerModule { }
