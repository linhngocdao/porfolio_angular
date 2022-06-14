import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/Posts';
import { IProject } from 'src/app/models/Projects';
import { IUser } from 'src/app/models/User';
import { PostService } from 'src/app/services/post.service';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-website-layout',
  templateUrl: './website-layout.component.html',
  styleUrls: ['./website-layout.component.css']
})
export class WebsiteLayoutComponent implements OnInit {

  User!: IUser[];
  Posts!: IPost[];
  Project!: IProject[];
  constructor(
    private userServices: UserService,
    private postService: PostService,
    private projectService: ProjectService
    ) { 
    this.showUser()
    this.showPost()
    this.showProject()
  }

  ngOnInit(): void {
  }
  showUser(){
    this.userServices.getUser().subscribe(data => {this.User = data})
  }
  showPost(){
    this.postService.getPostLimit().subscribe(data => {this.Posts = data})
  }
  showProject(){
    this.projectService.getProjectLimit().subscribe(data => {this.Project =data})
  }
}
