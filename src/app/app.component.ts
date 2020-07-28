import { Component } from '@angular/core';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tema-andrei';

  addTask(){}
  days: Day[] = [
    {value: 'L', viewValue: 'Luni'},
    {value: 'Ma', viewValue: 'Marti'},
    {value: 'Mi', viewValue: 'Miercuri'},
    {value: 'J', viewValue: 'Joi'},
    {value: 'V', viewValue: 'Vineri'},
    {value: 'S', viewValue: 'Sambata'},
    {value: 'D', viewValue: 'Duminica'}
  ];


}

interface Day {
  value: string;
  viewValue: string;
}




