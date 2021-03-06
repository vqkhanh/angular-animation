import { bounceOutLeftAnimation, fadeInAnimation } from './../animations';
import { animate, animateChild, group, keyframes, query, stagger, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [

    trigger('todoAnimation', [
      transition(':enter', [
        group([
          query('h1' , [
            style({ transform: 'translateY(-20px)' }),
            animate(1000)
          ], { optional: true }),
          query('@todoAnimation2', 
            stagger(2000, animateChild()), { optional: true })
        ])
      ])
    ]),

    trigger('todoAnimation2', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '3000ms'
          }
        })
      ]),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ]),
    ])
    
  ]
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item: any) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

}
