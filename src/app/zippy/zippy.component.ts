import { Component, Input, OnInit } from '@angular/core';
import { expandCollapse } from './zippy.component.animations';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [expandCollapse]
})
export class ZippyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('title') title: string = '';
  isExpanded: boolean = false;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }

}
