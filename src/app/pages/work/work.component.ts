import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/Projects';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  Project!: IProject[];
  constructor(private projectService: ProjectService) { 
    this.showProject()
  }

  ngOnInit(): void {
  }
  showProject(){
    this.projectService.getAllPost().subscribe(data => {this.Project =data})
  }
}
