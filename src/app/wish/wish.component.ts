import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { EventService } from '../../shared/services/EventServices';
import { WishService } from './wish.service';
import { WhishlistItem } from '../../shared/models/wishlistItem';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {
  items : WhishlistItem[] = [];
  
  filter:any = () => {}

  constructor(events:EventService, private wishService: WishService) {
    events.listen('removeWish', (wish:any) => {
      ////remove event here
      console.log(wish)
      let index = this.items.indexOf(wish)
      this.items.splice(index,1)
    })
  }
  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data:any) => {
        this.items = data;
      },
      (error:any) => {
        alert(error.message)
      }
    )
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