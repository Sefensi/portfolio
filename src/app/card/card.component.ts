import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  hover!:boolean

  changeColor(e:any) {
    if (e.type === 'mouseenter') {
      e.target.querySelector('div.line').classList.add('change-color')
    }
    if (e.type === 'mouseleave') {
      e.target.querySelector('div.line').classList.remove('change-color')
    }
  }
}
