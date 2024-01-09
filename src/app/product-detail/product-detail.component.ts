import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../shared/services/product-service';
import { SetBackground } from '../CustomDirectives/setBackground.directive';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, SetBackground],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {

  showDetail:boolean = false
  product:any = null;

  productService:ProductService = inject(ProductService)

  ngOnInit(): void {
    this.productService.toggleProductDetail.subscribe((data:any) => {
      this.product = data
      // console.log(this.product)
    })
  }
  hideDetail() {
    this.product = null
  }
}
