import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/Posts';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  posts!: IPost[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.onGetAll();
  }

  onGetAll(){
    this.postService.getAllPost().subscribe((data) => {
      this.posts = data
    })
  }
  onRemove(id: any){
    const confirm = window.confirm("ban co muon xoa hay k")
    if(confirm){
      this.postService.removePost(id).subscribe(() =>{
        this.posts = this.posts.filter(item =>item.id !== id);
        console.log(id)
      })
    }
  }
}
