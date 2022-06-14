import { Component, OnInit } from '@angular/core';
import { ICategories } from 'src/app/models/Categories';
import { CategoriProjectService } from 'src/app/services/categori-project.service';

@Component({
  selector: 'app-categori-project',
  templateUrl: './categori-project.component.html',
  styleUrls: ['./categori-project.component.css']
})
export class CategoriProjectComponent implements OnInit {
  category!: ICategories[];
  constructor(private categoryProjectService: CategoriProjectService) { }

  ngOnInit(): void {
    this.onGetAll();
  }
  onGetAll(){
    this.categoryProjectService.getAllProducts().subscribe((data) => {
      this.category = data
    })
  }
  onRemove(id: any){
    const confirm = window.confirm("ban co muon xoa hay k")
    if(confirm){
      this.categoryProjectService.removeProduct(id).subscribe(() =>{
        this.category = this.category.filter(item =>item.id !== id);
        console.log(id)
      })
    }
  }
}
