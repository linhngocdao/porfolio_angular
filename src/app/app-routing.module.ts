import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { CategoriPostAddComponent } from './components/categori-post-add/categori-post-add.component';
import { CategoriPostEditComponent } from './components/categori-post-edit/categori-post-edit.component';
import { CategoriPostComponent } from './components/categori-post/categori-post.component';
import { CategoriProjectAddComponent } from './components/categori-project-add/categori-project-add.component';
import { CategoriProjectEditComponent } from './components/categori-project-edit/categori-project-edit.component';
import { CategoriProjectComponent } from './components/categori-project/categori-project.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserComponent } from './components/user/user.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
  {path:"",children:[
    {path: "", component:WebsiteLayoutComponent },
    {path: "work", component:WorkComponent },
    {path: "blog", component:BlogComponent }
  ]},
  {path:"admin", component:AdminLayoutComponent, children:[
    {path:"user",children:[
      {path:"", component:UserComponent},
      {path:":id/edit", component:UserEditComponent}
    ]},
    {path:"post", children:[
      {path:"", component: ListPostComponent},
      {path:"add", component: AddPostComponent},
      {path:":id",component: AddPostComponent}
    ]},
    {path:"cat_post", children:[
      {path:"", component: CategoriPostComponent},
      {path:"add", component: CategoriPostAddComponent},
      {path:":id", component: CategoriPostEditComponent}
    ]},
    {path: "project", children:[
      {path:"", component: ListProjectComponent},
      {path: "add", component: AddProjectComponent},
      {path: ":id", component: AddProjectComponent}
    ]},
    {path:"cat_project", children:[
      {path:"",component: CategoriProjectComponent},
      {path: "add", component: CategoriProjectAddComponent},
      {path: ":id", component: CategoriProjectEditComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
