import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../service/users.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  private id = 0;
  public user: any;
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });
  constructor(
    private usersService: UsersService,
    private myctivated: ActivatedRoute,
    private Location:Location
  ) {}

  ngOnInit(): void {
    this.id = this.myctivated.snapshot.params['id'];
    this.usersService.getUser(this.id).subscribe({
      next: (value) => {
        this.user = value;
        this.userForm = new FormGroup({
          name: new FormControl(this.user.name),
          age: new FormControl(this.user.age),
          email: new FormControl(this.user.email),
          phone: new FormControl(this.user.phone),
          address: new FormControl(this.user.address),
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  submit() {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      this.usersService.updateUser(this.id, user).subscribe({
        next: (value) => {
          this.Location.back()
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
