import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../service/users.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent {
  constructor(private usersService: UsersService, private Location: Location) {}
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });
  get validName() {
    return this.userForm.controls['name'].valid;
  }
  get validAge() {
    return this.userForm.controls['age'].valid;
  }
  get validEmail() {
    return this.userForm.controls['email'].valid;
  }
  get validPhone() {
    return this.userForm.controls['phone'].valid;
  }
  get validAddress() {
    return this.userForm.controls['address'].valid;
  }
  submit() {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      this.usersService.newUser(user).subscribe({
        next: (value) => {
          this.Location.back();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
