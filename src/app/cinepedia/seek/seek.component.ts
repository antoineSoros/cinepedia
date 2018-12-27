import {Component, Input, OnInit, } from '@angular/core';



@Component({
  selector: 'app-seek',
  templateUrl: './seek.component.html',
  styleUrls: ['./seek.component.css']
})

export class SeekComponent implements OnInit {
  @Input() movieTitle: string;

  constructor() {

  }

  ngOnInit() {
  }

}
