import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { IProduct } from '../shared/interfaces/product.interface';
import { ApiServiceService } from '../shared/services/api-service.service';

interface Product {
  id: number;
  name: string;
  price: number;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Product A', price: 10 },
  { id: 2, name: 'Product B', price: 15 },
  { id: 3, name: 'Product C', price: 20 },
];
@Component({
  selector: 'app-my-card',
  standalone: true,
  imports: [
    CommonModule,
    NgFor, NgIf,
  ],
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCardComponent {
 // Define a signal for the list of items
 products = signal(PRODUCTS);

 // Define a computed value for the total price
 totalPrice = computed(() => {
   return this.cart().reduce((acc, curr) => acc + curr.price, 0);
 });

 selectProductsIds = computed(() => {
   return this.cart().map((proudct) => proudct.id);
 });

 cart = signal<Product[]>([]);

 removeFromCart(product: Product) {
   this.cart.update((ids) => {
     return ids.filter((i) => i.id !== product.id);
   });
 }

 addToCart(product: Product) {
   this.cart.update((products) => {
     return [...products, product];
   });
 }
  // cartItems: IProduct[] = [];

  // constructor(
  //   public apiServiceService: ApiServiceService
  // ) { }

  // ngOnInit() {}

  // remove(i: number) {
  //   this.apiServiceService.removeProductSignal(i);
  // }

}
