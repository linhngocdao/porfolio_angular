import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/Projects';
import { ProjectService } from 'src/app/services/project.service';



@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  projects!: IProject[];
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.onGetAll();
  }

  onGetAll(){
    this.projectService.getAllPost().subscribe((data) => {
      this.projects = data
    })
  }
  onRemove(id: any){
    const confirm = window.confirm("ban co muon xoa hay k")
    if(confirm){
      this.projectService.removePost(id).subscribe(() =>{
        this.projects = this.projects.filter(item =>item.id !== id);
        console.log(id)
      })
    }
  }
}
