import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'editable-text',
  templateUrl: 'src/templates/editable-text.html'
})

export class EditableTextComponent {
  @Input() displayText: string;
  @Input() inputType: string = 'text';
  @Output() editSender = new EventEmitter();
  editText: string;
  editModeActive: boolean = false;

  activateEditMode() {
    this.editText = this.displayText;
    this.editModeActive = true;
  }
  exitEditMode() {
    this.editModeActive = false;
  }
  submitAndExitEditMode() {
    this.editSender.emit(this.editText);
    this.exitEditMode();
  }
}
