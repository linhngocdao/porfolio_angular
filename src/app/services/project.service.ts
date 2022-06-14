import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../models/Projects';

const apiUrl ='http://localhost:3001/projects'
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getAllPost(): Observable<IProject[]> {
    return this.http.get<IProject[]>(apiUrl);
  }
  getPostLimit(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${apiUrl}?_limit=2`)
  }
  getPost(id: string | number): Observable<IProject> {
    return this.http.get<IProject>(`${apiUrl}/${id}`);
  }

  addPost(post: IProject): Observable<IProject> {
    return this.http.post<IProject>(apiUrl, post);
  }

  updatePost(post: IProject): Observable<IProject> {
    return this.http.put<IProject>(`${apiUrl}/${post.id}`, post);
  }

  removePost(id: number | string): Observable<IProject> {
    return this.http.delete<IProject>(`${apiUrl}/${id}`);
  }
  getProjectLimit(): Observable<IProject[]> {
    return this.http.get<IProject[]>(`${apiUrl}?_limit=3`)
  }
}
