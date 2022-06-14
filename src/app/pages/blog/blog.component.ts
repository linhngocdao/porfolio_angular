import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/Posts';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  Posts!: IPost[];
  constructor(
    private postService: PostService
  ) {this.showPost() }

  ngOnInit(): void {
  }
  showPost(){
    this.postService.getAllPost().subscribe(data => {this.Posts = data})
  }
}
