import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../service/users.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  users: any;
  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (value) => {
        this.users = value;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteUser(value: any) {
    if (confirm('Are you sure you want to delete?!!')) {
      this.usersService.deleteUser(value).subscribe({
        next: (value) => {
          window.location.reload()
        },
        error: (err) => {
          console.log(err);
        },
      });
    } 
  }
}
