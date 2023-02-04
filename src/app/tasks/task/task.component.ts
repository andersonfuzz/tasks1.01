import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  ELEMENT_DATA: any[] = [
    { id: 1, name: 'Hydrogen', description: '1.0079'},
    { id: 2, name: 'Helium', description: '4.0026'},
    { id: 3, name: 'Lithium', description: '6.941,'},
    { id: 4, name: 'Beryllium', description: '9.0122'},
    { id: 5, name: 'Boron', description: '10.811'},
    { id: 6, name: 'Carbon', description: '12.010'},
    { id: 7, name: 'Nitrogen', description: '14.0067'},
    { id: 8, name: 'Oxygen', description: '15.999'},
    { id: 9, name: 'Fluorine', description: '18.9984'},
    { id: 10, name: 'Neon', description: '20.179'},
  ];
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource = this.ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
