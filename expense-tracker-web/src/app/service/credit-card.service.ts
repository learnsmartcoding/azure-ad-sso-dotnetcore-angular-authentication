// src/app/services/credit-card.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { CreditCardModel } from '../models/credit-card.model';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  private apiUrl = `${environment.apiUrl}/CreditCard`; // Update with your API URL

  constructor(private http: HttpClient) {}

  getCreditCards(userId: number): Observable<CreditCardModel[]> {
    return this.http.get<CreditCardModel[]>(`${this.apiUrl}/${userId}`);
  }
}
