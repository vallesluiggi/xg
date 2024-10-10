import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { IUser } from '../interfaces/Iuser';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content?: IUser;
  error ?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe({
      next: (data:IUser) => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.error = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.error = `Error with status: ${err.status}`;
        }
      }
    });
  }
}
