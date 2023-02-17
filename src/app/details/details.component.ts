import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  private id=0;
  public user:any;
  constructor(
    private usersService: UsersService,
    private myctivated: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.myctivated.snapshot.params['id'];
    this.usersService.getUser(this.id).subscribe({
      next: (value) => {
        this.user = value;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
