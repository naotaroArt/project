import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() cards: { isReadonly: boolean, isDeleted: boolean }[] = [];
  @Output() addCardEvent = new EventEmitter<void>();

  offReadonly(index: number) {
    this.cards[index].isReadonly = !this.cards[index].isReadonly;
  }

  onReadonly(index: number) {
    this.cards[index].isReadonly = !this.cards[index].isReadonly;
  }

  deleteCard(index: number) {
    this.cards.splice(index, 1);
  }
}
