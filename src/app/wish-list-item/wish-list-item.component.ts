import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../shared/services/EventServices';
import { WhishlistItem } from '../../shared/models/wishlistItem';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  // @Input() wishText!: string;
  @Input() wish!: WhishlistItem;
  // @Input() fulfiled!: boolean;

  @Output() fulfiledChange = new EventEmitter<boolean>();

  constructor(private events: EventService) {}

  get cssClasses() {
    return  this.wish.isCompleted ? ['strikeOut', 'text-muted'] : []; 
  }

  toggleFulfiled() {
    // item.isCompleted = !item.isCompleted
    this.wish.isCompleted = !this.wish.isCompleted;
    // this.fulfiledChange.emit(this.wish.isCompleted)
  }

  removeWish() {
    this.events.emit('removeWish', this.wish)
  }
}
