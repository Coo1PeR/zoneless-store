import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private http = inject(HttpClient);
    private URL = environment.apiUrl;

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
