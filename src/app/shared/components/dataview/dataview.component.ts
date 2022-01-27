import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.scss']
})
export class DataviewComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
