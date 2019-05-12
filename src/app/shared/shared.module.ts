import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/materials.module';

// Algolia library
@NgModule({
  imports: [CommonModule],
  exports: [
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class SharedModule { }
