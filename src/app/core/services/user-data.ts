import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/userModel';
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

    public createUserResource(userId: number) {
        return createApiResource(
            () => this.getUserById(userId),
            { initialValue: null, errorValue: null, autoFetch: true }
        );
    }

    getAllUsers(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>('/users');
    }

    getUserById(userId: number): Observable<UserModel> {
        return this.http.get<UserModel>(`/users/${userId}`);
    }

    addUser(user: UserModel): Observable<UserModel> {
        return this.http.post<UserModel>('/users', user);
    }

    updateUser(user: UserModel): Observable<UserModel> {
        return this.http.put<UserModel>(`/users/${user.id}`, user);
    }

    deleteUser(userId: number): Observable<void> {
        return this.http.delete<void>(`/users/${userId}`);
    }
}
