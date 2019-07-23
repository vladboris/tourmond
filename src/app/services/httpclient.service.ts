import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  public fetch(url: string): Observable<any> {
    return this.http.get(url);
  }

  public post(url: string, body: any, options?: any): Observable<any> {
    return this.http.post<string>(url, body, options);
  }
}
