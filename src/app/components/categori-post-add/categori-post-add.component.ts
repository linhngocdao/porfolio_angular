import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategories } from 'src/app/models/Categories';
import { CategoryPostService } from 'src/app/services/category-post.service';

@Component({
  selector: 'app-categori-post-add',
  templateUrl: './categori-post-add.component.html',
  styleUrls: ['./categori-post-add.component.css']
})
export class CategoriPostAddComponent implements OnInit {
  categories: ICategories ={
    id: 0,
    name: ''
  }
  constructor(private CategoriesService: CategoryPostService, private router: Router) { }

  ngOnInit(): void {
  }
  onAdd(){
    this.CategoriesService.addCategoryPost(this.categories).subscribe(() => {
      this.router.navigate(['admin/cat_post'])
    })
  }
}
