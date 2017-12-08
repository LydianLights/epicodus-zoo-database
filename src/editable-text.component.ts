import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'editable-text',
  templateUrl: 'src/templates/editable-text.html'
})

export class EditableTextComponent {
  @Input() displayText: string;
}
