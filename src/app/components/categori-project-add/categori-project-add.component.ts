import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategories } from 'src/app/models/Categories';
import { CategoriProjectService } from 'src/app/services/categori-project.service';


@Component({
  selector: 'app-categori-project-add',
  templateUrl: './categori-project-add.component.html',
  styleUrls: ['./categori-project-add.component.css']
})
export class CategoriProjectAddComponent implements OnInit {
project:any
  constructor(private Ps:CategoriProjectService,private router: Router) { }

  ngOnInit(): void { 
   this.project={
    name:""
   }
   }
   onSubmit(){
    this.Ps.addProduct(this.project).subscribe((res)=>{
      this.project=res
      this.router.navigate([`/admin/cat_project`])
    })
   }
  
  

}
