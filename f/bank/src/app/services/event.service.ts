import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getBank(): Observable<any[]> {
    return this.http.get<any[]>('https://bank-backend-6f4p.onrender.com/get');
  }
  updateBank(id: string, bodyData: any): Observable<any> {
    return this.http.patch(`https://bank-backend-6f4p.onrender.com//update/${id}`, bodyData);
  }
}

