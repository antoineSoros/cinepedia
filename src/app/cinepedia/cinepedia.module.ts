import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinepediaComponent } from './cinepedia.component';
import {SharedModule} from '../shared/shared.module';
import {SeekComponent} from './seek/seek.component';

@NgModule({
  declarations: [CinepediaComponent, SeekComponent, ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    SharedModule,

  ]
})
export class CinepediaModule { }
