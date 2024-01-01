import { Component } from '@angular/core';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './search/search.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ WishComponent, ContactComponent, ProductListComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  searchText:string = '';


  setSearchText(value:string) {
    this.searchText = value;
  }
}
