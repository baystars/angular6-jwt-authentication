import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from '../../service/auth.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, public dialog: MatDialog, private authService: AuthService, private token: TokenService) {}

  username: string;
  password: string;

  login(): void {
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['user']);
      }
    );
  }
}
