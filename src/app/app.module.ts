import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WorkComponent } from './pages/work/work.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListPostComponent } from './components/list-post/list-post.component';
import { UserComponent } from './components/user/user.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { CategoriPostComponent } from './components/categori-post/categori-post.component';
import { CategoriPostAddComponent } from './components/categori-post-add/categori-post-add.component';
import { CategoriPostEditComponent } from './components/categori-post-edit/categori-post-edit.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { CategoriProjectComponent } from './components/categori-project/categori-project.component';
import { CategoriProjectAddComponent } from './components/categori-project-add/categori-project-add.component';
import { CategoriProjectEditComponent } from './components/categori-project-edit/categori-project-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WebsiteLayoutComponent,
    AdminLayoutComponent,
    WorkComponent,
    BlogComponent,
    ListPostComponent,
    UserComponent,
    UserEditComponent,
    AddPostComponent,
    CategoriPostComponent,
    CategoriPostAddComponent,
    CategoriPostEditComponent,
    ListProjectComponent,
    AddProjectComponent,
    CategoriProjectComponent,
    CategoriProjectAddComponent,
    CategoriProjectEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
