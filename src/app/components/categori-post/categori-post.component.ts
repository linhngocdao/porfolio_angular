import { Component, OnInit } from '@angular/core';
import { ICategories } from 'src/app/models/Categories';
import { CategoryPostService } from 'src/app/services/category-post.service';


@Component({
  selector: 'app-categori-post',
  templateUrl: './categori-post.component.html',
  styleUrls: ['./categori-post.component.css']
})
export class CategoriPostComponent implements OnInit {
  categories!: ICategories[];
  constructor(private postCatService: CategoryPostService ) { }

  ngOnInit(): void {
    this.onGetAll();
  }
  onGetAll() {
    this.postCatService.getAllCategoryPost().subscribe((data) => {
      this.categories = data;
    })
  }
  onremove(id:any){
    const confirm = window.confirm("ban co muon xoa hay k")
    if(confirm){
      this.postCatService.remove(id).subscribe(() =>{
        this.categories = this.categories.filter(item =>item.id !== id);
      })
    }
  }
}
