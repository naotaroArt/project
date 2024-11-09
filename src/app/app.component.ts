import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list-ui/list/list.component';
import { CommonModule } from '@angular/common'; 
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FirstProject';
  cards: { isReadonly: boolean, isDeleted: boolean }[] = [];
  
  addCard() {
    this.cards.push({ isReadonly: true, isDeleted: false });
  }
}
