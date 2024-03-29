import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomClassDirective } from '../CustomDirectives/custom-class.directive';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, CustomClassDirective],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = 'Womens watch';

  updateSearchText(event: any){
      this.searchText = event.target.value;
  }

  @Output() searchTextChanged:EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText)
  }
}
