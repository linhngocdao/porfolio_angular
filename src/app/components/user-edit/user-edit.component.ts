import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: IUser = {
    id: 0,
    name: '',
    position: '',
    about:'',
    image:''
  }
  id!: number;
  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']
    this.userService.getUserId(this.id).subscribe((responsive) => {
      this.user = responsive;
      // console.log(this.user);
    })
  }
  onEdit(){
    this.userService.edit(this.user).subscribe(() =>{
    })
    if(this.user){
      alert('bạn đã cập nhật thành công')
      this.router.navigate([this.user])
    }
  }
}


