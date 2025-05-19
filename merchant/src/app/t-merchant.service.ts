import { Injectable } from '@angular/core';
import { TMerchant } from './t-merchant';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/v1/test_merchant';


@Injectable({
  providedIn: 'root'
})
export class TMerchantService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<TMerchant[]> {
    return this.http.get<TMerchant[]>(baseUrl);
  }

  get(mid: any): Observable<TMerchant> {
    return this.http.get(`${baseUrl}/${mid}`);
  }

  public save(merchant: TMerchant){
    return this.http.post(baseUrl, merchant);
  }

  deleteMerchant(mid: number): Observable<Object>{
    return this.http.delete(`${baseUrl}/${mid}`);
  }

  getMerchantById(mid: number): Observable<TMerchant> {
    return this.http.get<TMerchant>(`${baseUrl}/${mid}`);
  }
  

  updateMerchant(mid: number, merchant: TMerchant): Observable<TMerchant> {
    return this.http.put(`${baseUrl}/${mid}`,merchant);
  }

  login(mid: number,merchant:TMerchant) {
    return this.http.post(`${baseUrl},${mid}`,merchant);
  }

}
