import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { createApiResource } from '../../shared/utils/create-api-resource';

@Injectable({
    providedIn: 'root'
})
export class UserData {
    private http = inject(HttpClient);

    public userList = createApiResource(
        () => this.getAllUsers(),
        { initialValue: [], errorValue: [], autoFetch: true }
    );

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>('/users');
    }

    getUserById(userId: number): Observable<User> {
        return this.http.get<User>(`/users/${userId}`);
    }

    addUser(user: User): Observable<User> {
        return this.http.post<User>('/users', user);
    }

    updateUser(user: User): Observable<User> {
        return this.http.put<User>(`/users/${user.id}`, user);
    }

    deleteUser(userId: number): Observable<void> {
        return this.http.delete<void>(`/users/${userId}`);
    }
}
