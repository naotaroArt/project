import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-card-of-entries',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './list-card-of-entries.component.html',
  styleUrls: ['./list-card-of-entries.component.scss']
})
export class ListCardOfEntriesComponent implements OnChanges {
  @Input() card!: { isReadonly: boolean; text: string }; // Данные одной карточки
  @Output() saveEvent = new EventEmitter<string>();
  @Output() deleteEvent = new EventEmitter<void>();
  @Output() editEvent = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      text: [''],
    });
  }

  ngOnChanges() {
    if (this.card) {
      this.form.patchValue({ text: this.card.text });
      console.log('Card updated in form:', this.card);
    }
  }

  save() {
    console.log('Saving card:', this.card, 'with form value:', this.form.value);
    this.saveEvent.emit(this.form.value.text);
    this.card.isReadonly = true;
  }

  edit() {
    console.log('Editing card:', this.card);
    this.card.isReadonly = false;
    this.editEvent.emit();
  }

  delete() {
    console.log('Deleting card:', this.card);
    this.deleteEvent.emit();
  }
}
