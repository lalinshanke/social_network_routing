import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css']
})
export class DepartComponent implements OnInit {

  constructor( private router: Router ) { }

  department = [
    {id: '1', name: 'HTML'},
    {id: '2', name: 'CSS'},
    {id: '3', name: 'Photoshop'}
  ];

  ngOnInit() {
  }

}
