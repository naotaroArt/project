import { Component } from '@angular/core';
import { ListCardOfEntriesComponent } from '../../list-ui/list/list-card-of-entries.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ListCardOfEntriesComponent, CommonModule],
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent {
  cards: { isReadonly: boolean; text: string }[] = [];

  addCard() {
    this.cards.push({ isReadonly: false, text: '' });
  }

  saveCard(text: string, index: number) {
    this.cards[index].text = text;
  }

  deleteCard(index: number) {
    this.cards.splice(index, 1);
  }

  editCard(index: number) {
    console.log(`Editing card at index ${index}`);
  }
}
