import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import events from '../../shared/services/EventServices';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  @Input() wishText!: string;
  @Input() fulfiled!: boolean;

  @Output() fulfiledChange = new EventEmitter<boolean>();

  get cssClasses() {
    return  this.fulfiled ? ['strikeOut', 'text-muted'] : []; 
  }

  toggleFulfiled() {
    // item.isCompleted = !item.isCompleted
    this.fulfiled = !this.fulfiled;
    this.fulfiledChange.emit(this.fulfiled)
  }

  removeWish() {
    events.emit('removeWish', this.wishText)
  }
}
