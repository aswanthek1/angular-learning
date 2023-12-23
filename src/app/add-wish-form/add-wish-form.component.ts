import { Component, Output, EventEmitter } from '@angular/core';
import { WhishlistItem } from '../../shared/models/wishlistItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {

  @Output() addWish = new EventEmitter<WhishlistItem>();

  newWishText = '';

  addNewWish() {
    // this.items.push(new WhishlistItem(this.newWishText))
    this.addWish.emit(new WhishlistItem(this.newWishText))
    this.newWishText = ''
  }
}
