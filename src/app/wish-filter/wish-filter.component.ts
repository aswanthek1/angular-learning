import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WhishlistItem } from '../../shared/models/wishlistItem';

const filters = [
  (item:WhishlistItem) => item,
  (item:WhishlistItem) => !item.isCompleted,
  (item:WhishlistItem) => item.isCompleted
]

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {
  ngOnInit(): void {
    this.changeFilter(0)
  }

  @Output() filter = new EventEmitter<any>()

  listFilter: any = '0';

  changeFilter(value:any) {
    this.filter.emit(filters[value])
  }

}
