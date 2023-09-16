import { Component,OnInit,computed,inject, signal } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { UserDetailsComponent } from "../user-details/user-details.component";
import { UsersService } from '../shared/services/users.service';
import { IUser } from '../shared/interfaces/user.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-users',
    standalone: true,
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    imports: [
      CommonModule, 
      NgFor, 
      UserDetailsComponent,
      MatButtonModule
    ]
})
export class UsersComponent implements OnInit {
  usersService = inject(UsersService)
  users: Array<IUser> = [];
  currentUser: IUser | undefined;
  firstName = signal('First Name test');
  lastName = signal('Last Name test');

  signalCounter = 0;

  ngOnInit() {
    this.usersService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }
  setCurrent(user: any){
    this.currentUser = user;
  }

  fullName = computed(() => {
    this.signalCounter++;
    console.log('signal name change');
    return `${this.firstName()} ${this.lastName()}`;
  });

  changeName() {
    this.firstName.set('Signal Spider');
    this.lastName.set('Man');
  }
}
