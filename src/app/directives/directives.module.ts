import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableSpanDirective } from './editable-span.directive';



@NgModule({
  declarations: [
    EditableSpanDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EditableSpanDirective
  ]
})
export class DirectivesModule { }
