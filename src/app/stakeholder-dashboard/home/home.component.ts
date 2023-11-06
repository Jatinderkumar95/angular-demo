import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { from,  fromEvent,  mergeMap,  timer } from 'rxjs';
import {mergeAll,map, flatMap, exhaustMap} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products : any[]=[{title:'text'}];
  constructor(httpClient: HttpClient)
  {
    const productIds = [1,2,3,4,5];

    // for(let i = 0; i< productIds.length;i++){
    //   httpClient.get<any>(`https://dummyjson.com/products/${productIds[i]}`).subscribe((val) => {
    //    timer(1000).subscribe(_=>{
    //     this.products.push(val);
    //    } )
    //   });
    // }

    // from(productIds).pipe(map((value, index) => {
    //   return httpClient.get<any>(`https://dummyjson.com/products/${value}`);
    // })).subscribe((val) => {
    //  val.subscribe(res => this.products.push(res));
    // });

    // from(productIds).pipe(map((value, index) => {
    //   return httpClient.get<any>(`https://dummyjson.com/products/${value}`);
    // }),mergeAll()).subscribe((val) => {
    //   this.products.push(val);
    // });

    // from(productIds).pipe(mergeMap((value, index) => {
    //   return httpClient.get<any>(`https://dummyjson.com/products/${value}`);
    // })).subscribe((val) => {
    //   this.products.push(val);
    // });

    // from(productIds).pipe(flatMap((value, index) => {
    //   return httpClient.get<any>(`https://dummyjson.com/products/${value}`);
    // })).subscribe((val) => {
    //   this.products.push(val);
    // });

    // from(productIds).pipe(exhaustMap((value, index) => {
    //   return httpClient.get<any>(`https://dummyjson.com/products/${value}`);
    // })).subscribe((val) => {
    //   this.products.push(val);
    // });

    // fromEvent(document,'click').subscribe(
    //   (val : Event) => {
    //     this.products.push(val.type);
    //   }
    // )

  // httpClient.get<any>('https://dummyjson.com/products').subscribe((val) => console.log(val));
  }
}
