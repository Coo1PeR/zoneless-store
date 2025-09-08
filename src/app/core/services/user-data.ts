import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/userModel';
import { createApiResource } from '../../shared/utils/create-api-resource';
import { CartModel } from '../models/cart-model';

@Injectable({
    providedIn: 'root'
})
export class UserData {
    private http = inject(HttpClient);

    public userList = createApiResource(
        () => this.getAllUsers(),
        { initialValue: [], errorValue: [], autoFetch: true }
    );

    public cartList = createApiResource(
        () => this.getAllCards(),
        { initialValue: [], errorValue: [], autoFetch: true }
    );

    public createUserResource(userId: number) {
        return createApiResource(
            () => this.getUserById(userId),
            { initialValue: null, errorValue: null, autoFetch: true }
        );
    }

    /** USERS */
    /** Get all users */
    getAllUsers(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>('/users');
    }

    /** Get user by id
     * @param userId - user ID */
    getUserById(userId: number): Observable<UserModel> {
        return this.http.get<UserModel>(`/users/${userId}`);
    }

    /** Add new user
     * @param user - user model */
    addUser(user: UserModel): Observable<UserModel> {
        return this.http.post<UserModel>('/users', user);
    }

    /** Update user
     * @param user - user model */
    updateUser(user: UserModel): Observable<UserModel> {
        return this.http.put<UserModel>(`/users/${user.id}`, user);
    }

    /** Delete user
     * @param userId - user ID */
    deleteUser(userId: number): Observable<void> {
        return this.http.delete<void>(`/users/${userId}`);
    }

    /** CARDS */

    /** Get all users carts */
    getAllCards(): Observable<CartModel[]> {
        return this.http.get<CartModel[]>('/carts');
    }
}
