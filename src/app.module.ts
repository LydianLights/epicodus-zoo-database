import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { NewAnimalComponent } from './new-animal.component';
import { EditableTextComponent } from './editable-text.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AnimalListComponent, NewAnimalComponent, EditableTextComponent],
  bootstrap: [AppComponent]
})

export class AppModule {}
