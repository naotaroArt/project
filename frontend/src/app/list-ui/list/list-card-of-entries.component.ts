import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-card-of-entries',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list-card-of-entries.component.html',
  styleUrl: './list-card-of-entries.component.scss'
})
export class ListCardOfEntriesComponent {
  @Input() cards: { isReadonly: boolean, isDeleted: boolean }[] = [];
  @Output() addCardEvent = new EventEmitter<void>();

  offReadonly(index: number) {
    this.cards[index].isReadonly = false;
  }

  onReadonly(index: number) {
    this.cards[index].isReadonly = true;
  }

  deleteCard(index: number) {
    this.cards.splice(index, 1);
  }
}
