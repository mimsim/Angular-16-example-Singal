import { Component, ChangeDetectorRef, inject, Input, signal } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { UsersService } from '../shared/services/users.service';
import { IUser } from '../shared/interfaces/user.interface';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    NgIf,
    MatCardModule, 
    MatButtonModule
  ],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  cdr = inject(ChangeDetectorRef)
  signalService = inject(UsersService)
  @Input() user!: any;
  @Input() isCurrent = false;
  hilite = signal<boolean>(false);

  highLight(): void {
    this.hilite.set(!this.hilite())
    console.log(this.hilite())
  }

  setCurrent() {
    this.signalService.setSignal(this.user);
  }
}
