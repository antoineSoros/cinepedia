import { NgModule } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  declarations: [FormBuilder, FormGroup,
  ],
  imports: [
    MatInputModule,
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    FlexLayoutModule

  ],
  exports: [FormGroup,
    MatFormFieldModule,
    FormBuilder,
    CommonModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatInputModule,


  ]
})
export class MaterialsModule { }
