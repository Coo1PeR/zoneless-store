import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../../environments/environment';
import { signalFromRequest } from '../../shared/signal-from-request';

@Injectable({
    providedIn: 'root'
})
export class UserData {
    private http = inject(HttpClient);
    private URL = environment.apiUrl;

    public userList = signalFromRequest<User[]>(this.getAllUsers(), {
        initialValue: [],
        errorValue: [],
        onError: (err) => console.error('an error occurred while loading the list of buyers', err),
    });

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.URL}/users`);
    }

    getUserById(userId: number): Observable<User> {
        return this.http.get<User>(`${this.URL}/users/${userId}`);
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.URL}/users`, user);
    }

    updateUser(user: User): Observable<User> {
        return this.http.put<User>(`${this.URL}/users/${user.id}`, user);
    }

    deleteUser(userId: number): Observable<void> {
        return this.http.delete<void>(`${this.URL}/users/${userId}`);
    }
}
