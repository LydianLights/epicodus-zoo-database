import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'editable-text',
  templateUrl: 'src/templates/editable-text.html'
})

export class EditableTextComponent {
  @Input() displayText: string;
  @Input() inputType: string = "text";
  @Input() selectOptions = [];
  @Input() initialOptionValue: string;
  editText: string;
  editModeActive: boolean = false;
  @Output() editSender = new EventEmitter();

  activateEditMode() {
    if (this.inputType === 'text') {
      this.editText = this.displayText;
    }
    if (this.inputType === 'select') {
      this.editText = this.initialOptionValue;
    }
    this.editModeActive = true;
  }
  exitEditMode() {
    this.editModeActive = false;
  }
  submitAndExitEditMode() {
    if (this.editText !== undefined) {
      this.editSender.emit(this.editText);
    }
    this.exitEditMode();
  }
}
