import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ProductService } from '../../../shared/services/product-service';

@Component({
  selector: 'app-prodcut',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prodcut.component.html',
  styleUrl: './prodcut.component.css'
})
export class ProdcutComponent {

  @Input() product: { id: number, name: string, description: string, brand: string, gender: string, category: string, size: number[], color: string[], price: number, discountPrice: number, is_in_inventory: boolean, items_left: number, imageURL: string, slug: string };
  
  prodctService:ProductService = inject(ProductService);
  
  openDetails(product:any) {
    this.prodctService.showProductDetail(product)
  }
}
