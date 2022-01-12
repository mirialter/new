import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  options = {
    headers: new HttpHeaders({ 'content-Type': 'application/json' })
  };
  url = 'http://localhost:5900'
  imageNum = ''

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any>(`${this.url}/api/getData/getAllData`)
  }
  getCategory(): Observable<any[]> {
    return this.http.get<any>(`${this.url}/api/getData/getCategory`)
  }
  addCategory(query:object):Observable<any[]>{
    return this.http.post<any[]>(`${this.url}/api/updateData/addCategory`,query,this.options)
  }
  addBookmark(query:object):Observable<any[]>{
    return this.http.post<any[]>(`${this.url}/api/updateData/addBookmark`,query,this.options)
  }
}
