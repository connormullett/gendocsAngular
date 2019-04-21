import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserLogin } from 'src/app/models/userLogin';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean;
  public userName: string;

  constructor(private _authService: AuthService) {
    this.checkUserStatus();
    this.getUserName();
  }

  getUserName() {
    this._authService.username().subscribe( (user: UserLogin) => this.userName = user.name);
  }

  checkUserStatus() {
    if(this._authService.isLoggedIn) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  ngOnInit() {
  }

}
