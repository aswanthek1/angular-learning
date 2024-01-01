import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prodcut',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prodcut.component.html',
  styleUrl: './prodcut.component.css'
})
export class ProdcutComponent {
  @Input() product: { id: number, name: string, description: string, brand: string, gender: string, category: string, size: number[], color: string[], price: number, discountPrice: number, is_in_inventory: boolean, items_left: number, imageURL: string, slug: string };
}
