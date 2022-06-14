import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   
  users!: IUser[];
  constructor(private userService: UserService ) { }

  ngOnInit(): void {
    this.onGetAll();
  }

  onGetAll() {
    this.userService.getUser().subscribe((data) => {
      this.users = data;
    })
  }


}
