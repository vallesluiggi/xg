import { Injectable } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

const API_URL = 'http://localhost:6868/api';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private storageService: StorageService) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + '/breeds',  httpOptions );
  }

  getPublicContentById(id: string): Observable<any> {
    return this.http.get(API_URL + '/breeds/' + id,  httpOptions );
  }

  getPublicSearchCats(query: string): Observable<any> {
    return this.http.get(API_URL + '/breeds/search?q=' + query,  httpOptions );
  }

  getPublicContentImages(id:string): Observable<any> {
    return this.http.get(API_URL + '/images/'+id,  httpOptions );
  }

  getUserBoard(): Observable<any> {
    let token =   this.storageService.getUser().token; 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      })
    };
    return this.http.get(API_URL + '/users', httpOptions);
  }
  
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
