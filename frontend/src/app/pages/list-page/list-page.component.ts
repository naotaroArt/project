import { Component } from '@angular/core';
import { ListCardOfEntriesComponent } from '../../list-ui/list/list-card-of-entries.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [ListCardOfEntriesComponent],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss'
})
export class ListPageComponent {
  cards: { isReadonly: boolean, isDeleted: boolean }[] = [];
  
  addCard() {
    this.cards.push({ isReadonly: true, isDeleted: false });
  }
}
