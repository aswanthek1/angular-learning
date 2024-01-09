import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class ProductService {

    toggleProductDetail:EventEmitter<boolean> = new EventEmitter<boolean>()
    
    showProductDetail(product:any) {
        this.toggleProductDetail.emit(product)
    }
}