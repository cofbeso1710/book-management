import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    InputComponent,
    SelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    SelectComponent
  ]
})
export class SearchModule { }
