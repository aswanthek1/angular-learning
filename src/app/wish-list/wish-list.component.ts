import { Component, Input } from '@angular/core';
import { WhishlistItem } from '../../shared/models/wishlistItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

 @Input() wishes: WhishlistItem[] = [];

  toggleItem(item:WhishlistItem) {
    item.isCompleted = !item.isCompleted
    console.log(item)
  }
}
