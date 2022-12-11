import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Order } from './order';
//import { Order } from './order-controller/order';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {

   }
   public addOrder(order:Order): Observable<any>{
    console.log("service");
    console.log(order);
     return this.http.post<any>("http://localhost:8089/api/order/add", order,{responseType:'Text' as 'json'});
   }

   public getAllOrder(){
    console.log("inside Order Service");
    return this.http.get("http://localhost:8089/api/order");
   }
}
