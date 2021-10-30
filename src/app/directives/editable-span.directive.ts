import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appEditableSpan]',
})
export class EditableSpanDirective {
  @Input('appEditableSpan') taskTitle!: string;
  @Output() isChanged = new EventEmitter<boolean>();

  // isChanged!: boolean;
  constructor(private el: ElementRef) {}

  @HostListener('dblclick') onDblClick() {
    console.log(this.el);
    const parent = this.el.nativeElement.parentNode;
    const input = document.createElement('input');
    input.value = this.taskTitle;
    parent.appendChild(input);
    parent.removeChild(this.el.nativeElement);
    this.el.nativeElement;
    this.el.nativeElement.remove;
  }
}
