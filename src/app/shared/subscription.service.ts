import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Assurez-vous que cette importation est correcte
import { Observable } from 'rxjs';
import { Subscription } from '../model/subscription.model';
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private baseUrl = 'http://localhost:8089/api'; // L'URL de votre API Backend

  constructor(private http: HttpClient) { }

  addSubscription(subscription: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(`${this.baseUrl}/subscription/add`, subscription);
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/subscription/list`);
  }

  getSubscriptionById(id: number): Observable<Subscription> {
    return this.http.get<Subscription>(`${this.baseUrl}/subscription/get/${id}`);
  }

  getSubscriptionsByType(type: string): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(`${this.baseUrl}/subscription/all/${type}`);
  }

  updateSubscription(subscription: Subscription): Observable<Subscription> {
    return this.http.put<Subscription>(`${this.baseUrl}/subscription/update`, subscription);
  }

  getSubscriptionsByDates(startDate: string, endDate: string): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(`${this.baseUrl}/subscription/all/${startDate}/${endDate}`);
  }}
