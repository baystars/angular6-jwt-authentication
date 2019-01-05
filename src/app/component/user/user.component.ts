import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns = ['id', 'username', 'salary', 'age'];
  dataSource = new MatTableDataSource();

  constructor(private router: Router, private userService: UserService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
  }

  logout(): void {
    console.log('bye');
    this.tokenService.signOut();
    this.router.navigate(['']);
  }
}
