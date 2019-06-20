import { Component, OnInit } from '@angular/core';
import { UsersHttpService } from '../../services/users-http.service';
import { UserDTO, UsersDTO } from '../../models/users-dto.model';
import { User } from '../../models/user.model';
import { UsersFilter } from '../../models/users-filter.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  filter: UsersFilter;

  constructor(private usersHttpService: UsersHttpService) { }

  ngOnInit() {
    this.usersHttpService.getUsers().subscribe((data: UsersDTO) => {
      this.users = data.results.map((user: UserDTO) => {
        return {
          firstName: user.name.first,
          lastName: user.name.last,
          email: user.email,
          phone: user.phone,
          city: user.location.city,
          dob: user.dob
        };
      });
    });
  }
}
