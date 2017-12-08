import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>zoo-database</h1>
    </div>
    <animal-list></animal-list>
  </div>
  `
})

export class AppComponent {

}
