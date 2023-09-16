import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  signalMap = new Map<string, WritableSignal<unknown>>();


  constructor(
    public http: HttpClient
  ) { }

  getUsers(): Observable<any> {
    return this.http.get<any>('https://fakestoreapi.com/users');
  }

  getSignal(key: string) {
    if (!this.signalMap.has(key)) {
      this.signalMap.set(key, signal<undefined>(undefined))
    }
    return this.signalMap.get(key)
  }

  setSignal(key: string) {
    console.log('key', key)
    this.getSignal(key)
  }
}
