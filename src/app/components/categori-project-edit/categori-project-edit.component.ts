import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategories } from 'src/app/models/Categories';
import { IProject } from 'src/app/models/Projects';
import { CategoriProjectService } from 'src/app/services/categori-project.service';


@Component({
  selector: 'app-categori-project-edit',
  templateUrl: './categori-project-edit.component.html',
  styleUrls: ['./categori-project-edit.component.css']
})
export class CategoriProjectEditComponent implements OnInit {

  product: ICategories = {
    name: ''
  };
  id!: number | string;
  constructor(
    private activateRoute: ActivatedRoute,
    private cateProjectService: CategoriProjectService,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    this.cateProjectService.getProduct(this.id).subscribe((responsive) => {
      this.product = responsive;
      console.log(this.product);  
    }) 
  }
  onSubmit() {

    this.cateProjectService.updateProduct(this.product).subscribe(() =>{
      this.routes.navigate([`admin/cat_project`])

    })
    if(this.product){
      alert('bạn đã cập nhật thành công')
    }
  }

}
