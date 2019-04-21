import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData: User;

  constructor(private _service: AuthService) {
    this.getMe();
  }

  getMe() {
    this._service.getMe().subscribe( (data: User) => {
      this.profileData = data;
      console.log(this.profileData);
    })
  }

  ngOnInit() {
  }

}
