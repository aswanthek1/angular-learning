import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WhishlistItem } from '../../shared/models/wishlistItem';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  getWishes() {
    let options = this.getStandardOptions()
    options.params = new HttpParams({///for adding query params
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wishes.json', options).pipe(catchError(this.handleError));
  }

  private handleError(error:any) {
    if(error.status === 0) {
      console.error('There is an error with the client network:', error.error)
    }
    else {
      console.error('Server side error: ', error.error)
    }

    return throwError(() => new Error('Cannot retriev wishes. Please try again'))
  }

  addWish(wish:WhishlistItem) {
    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', 'value-needed-for-authorization')
    return this.http.post('assets/wishes.json', wish, options)
  }
}
