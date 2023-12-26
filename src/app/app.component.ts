import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WhishlistItem } from '../shared/models/wishlistItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import {EventService} from '../shared/services/EventServices';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items:WhishlistItem[] = [
    new WhishlistItem('Learn Angular'),
    new WhishlistItem('Have a coffee', true),
    new WhishlistItem('Find grass that cut itself'),
  ]
  
  filter:any = () => {}

  constructor(events:EventService) {
    events.listen('removeWish', (wish:any) => {
      ////remove event here
      console.log(wish)
      let index = this.items.indexOf(wish)
      this.items.splice(index,1)
    })
  }

  // get visibleItems(): WhishlistItem[] {
  //   // let value = this.listFilter;
  //   // if(value === '0') {
  //   //   return this.items
  //   // }
  //   // else if(value === '1') {
  //   //   return this.items.filter((item) => !item.isCompleted)
  //   // }
  //   // else {
  //   //   return this.items.filter((item) => item.isCompleted)
  //   // }
  //   // return this.items.filter(filters[this.listFilter])
  //   return this.items.filter(this.filter)
  // }
}
