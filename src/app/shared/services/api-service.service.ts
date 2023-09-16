import { Injectable, computed, signal } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public products = toSignal<IProduct[]>(this.http.get<IProduct[]>('https://fakestoreapi.com/products'));
  public products$ = toObservable(this.products);

  
  constructor(
    private http: HttpClient
  ) {}

  public cartItems = signal<IProduct[]>([]);
  public subTotal = computed(() => this.cartItems().reduce((prev: any, curr: IProduct) => {
    console.log('cartItems',this.cartItems)
    return prev + curr.price;
  }, 0));
  public totalItems = computed(() => this.cartItems().length);


  addProductSignal(product: IProduct) {
    this.cartItems.mutate((val) => {
      console.log('product',product)
      val.push(product);
    });
    this.products()?.forEach(a=>{
      if(a.id === product.id){
        a.rating.count = a.rating.count - 1;
      }
    })
  }

  removeProductSignal(id: number) {
    this.cartItems.mutate(val => {
      const product = val.splice(id, 1);
      this.products()?.forEach(a => {
        if (a.id === product[0].id) {
          a.rating.count = a.rating.count + 1;
        }
      })
    })
  }
}

