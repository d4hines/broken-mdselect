import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggleCheck = true;
  toggleGet = true;
  options = [
    { key: '1', value: '1', reference: null },
    { key: '2', value: '2', reference: null },
  ];

  get checks() {
    return [
      { formField: '1', description: '1' },
      { formField: '2', description: '2' },
      { formField: '3', description: '3' },
      { formField: '4', description: '4' },
      { formField: '5', description: '5' },
    ];
  }
  checks2 = [
    { formField: '1', description: '1' },
    { formField: '2', description: '2' },
    { formField: '3', description: '3' },
    { formField: '4', description: '4' },
    { formField: '5', description: '5' },
  ];

}
