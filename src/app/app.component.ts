import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, CardComponent]
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  listLetters = "Hello, I'm World".split('')
  timeStep = 500
  items = [1, 2, 3, 4]


  constructor(private renderer: Renderer2) {
    
    console.log(this.listLetters)
  }

  ngOnInit(): void {
    for (let index = 0; index < this.listLetters.length-6; index++) {
      setTimeout( () => this.renderer.addClass(document.getElementById(`s-${index}`), 'random-color'), this.timeStep)
      this.timeStep += 500
      
    }
    // setInterval(() => console.log("Работает"), 1000)
    // setTimeout( () => this.renderer.addClass(document.getElementById('s-1'), 'random-color'), 1500)
    // setTimeout( () => this.renderer.addClass(document.getElementById('s-2'), 'random-color'), 2000)
    // setTimeout( () => this.renderer.addClass(document.getElementById('s-3'), 'random-color'), 2500)
    // setTimeout( () => this.renderer.addClass(document.getElementById('s-4'), 'random-color'), 3000)
    // setTimeout( () => this.renderer.addClass(document.getElementById('s-5'), 'random-color'), 3500)
    // setTimeout( () => this.renderer.addClass(document.getElementById('s-6'), 'random-color'), 4000)
    // setTimeout( () => this.renderer.addClass(document.getElementById('s-7'), 'random-color'), 5000)
    // setTimeout( () => this.renderer.addClass(document.getElementById('s-8'), 'random-color'), 6000)
  }
  
    addRandomColor() {
  

  }
}
