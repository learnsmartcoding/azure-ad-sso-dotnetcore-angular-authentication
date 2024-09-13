// src/app/services/credit-card.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { CreditCardModel } from '../models/credit-card.model';

@Injectable({
  providedIn: 'root',
})
export class ClaimsApiService {
  private apiUrl = `${environment.apiUrl}/claims`; // Update with your API URL

  constructor(private http: HttpClient) {}

  getClaimsTokens(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
  getPublicEndpointData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/public-endpoint`);
  }
}
