import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {

  days = [
    {name: 'Luni'},
    {name: 'Marti'},
    {name: 'Miercuri'},
    {name: 'Joi'},
    {name: 'Vineri'},
    {name: 'Sambata'},
    {name: 'Duminica'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
