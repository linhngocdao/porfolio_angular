import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategories } from '../models/Categories';


const apiUrl = 'http://localhost:3001/categoriesPosts'
@Injectable({
  providedIn: 'root'
})
export class CategoryPostService {

  constructor(private http: HttpClient) { }

  getAllCategoryPost(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(apiUrl);
  }

  getCategoryPost(id: number | string): Observable<ICategories> {
    return this.http.get<ICategories>(`${apiUrl}/${id}?_embed=post`);
  }

  addCategoryPost(category: ICategories): Observable<ICategories> {
    return this.http.post<ICategories>(apiUrl, category);
  }

  updateCategoryPost(category: ICategories): Observable<ICategories> {
    return this.http.put<ICategories>(`${apiUrl}/${category.id}`, category);
  }

  remove(id: number | string): Observable<ICategories>{
    return this.http.delete<ICategories>(`${apiUrl}/${id}`)
  }

}
