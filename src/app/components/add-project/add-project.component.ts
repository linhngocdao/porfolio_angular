import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { ICategories } from 'src/app/models/Categories';
import { IProject } from 'src/app/models/Projects';
import { CategoriProjectService } from 'src/app/services/categori-project.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  categorys!: ICategories[];
  date = new Date().toLocaleDateString("vi-VI",{ year: 'numeric' });
  post: IProject = {
    name: '',
    image:'',
    createAt: this.date,
    categoryProjectId: 0,
    shortDesc: '',
    desc: ''
  };
  constructor(
    private activateRoute: ActivatedRoute,
    private projectService: ProjectService ,
    private categoryProjectService: CategoriProjectService,
    private routes: Router,
) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.projectService.getPost(id).subscribe(data => {
        this.post = data
      })
    }
    this.onGetAllCategoryPost();
  }
  onGetAllCategoryPost() {
    this.categoryProjectService.getAllProducts().subscribe((data) => {
      this.categorys = data;
    })
  }

  async uploadImg(event: any) {
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/assignment22/image/upload";
    const CLOUDINARY_PRESET = "img-angular";
    const file = event.target.files[0];
    // console.log(event.target.files);
    
    const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", CLOUDINARY_PRESET);

          const response = await axios.post(CLOUDINARY_API, formData, {
              headers: {
                  "Content-Type": "application/form-data",
              },
          });
    this.post.image = response.data.url;
  }

  onSubmitPost() {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if (id) {
      this.projectService.updatePost(this.post).subscribe(() => {
        setTimeout(() => {
          this.routes.navigate(['admin/project']);
        }, 1000)
      })
    }
    this.projectService.addPost(this.post).subscribe(() => {
      setTimeout(() => {
        this.routes.navigate(['admin/project']);
      }, 1000)
    });

  
  }
}
