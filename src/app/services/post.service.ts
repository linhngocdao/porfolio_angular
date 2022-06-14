import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/Posts';


const apiUrl = "http://localhost:3001/posts";
@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http : HttpClient) { }
  
  getAllPost(): Observable<IPost[]> {
    return this.http.get<IPost[]>(apiUrl);
  }
  getPostLimit(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${apiUrl}?_limit=2`)
  }
  getPost(id: string | number): Observable<IPost> {
    return this.http.get<IPost>(`${apiUrl}/${id}`);
  }

  addPost(post: IPost): Observable<IPost> {
    return this.http.post<IPost>(apiUrl, post);
  }

  updatePost(post: IPost): Observable<IPost> {
    return this.http.put<IPost>(`${apiUrl}/${post.id}`, post);
  }

  removePost(id: number | string): Observable<IPost> {
    return this.http.delete<IPost>(`${apiUrl}/${id}`);
  }
}
