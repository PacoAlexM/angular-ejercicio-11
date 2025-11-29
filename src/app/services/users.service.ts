import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { UserResponse, UsersResponse } from '@interfaces/req-response.interface';
import { State } from '@interfaces/state.interface';
import { delay, map } from 'rxjs';



@Injectable({
    providedIn: 'root',
})
export class UserService {
    private http = inject(HttpClient);

    #state = signal<State>({
        users: [],
        loading: true,
    });

    public users = computed(() => this.#state().users);
    public loading = computed(() => this.#state().loading);

    constructor() {
        this.http.get<UsersResponse>('https://reqres.in/api/users', { headers: new HttpHeaders().append('x-api-key', 'reqres-free-v1') })
            .pipe(delay(1000))
            .subscribe(res => {
                this.#state.set({
                    loading: false,
                    users: res.data,
                })
            });
    }

    getUserById(id: string) {
        return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`, { headers: new HttpHeaders().append('x-api-key', 'reqres-free-v1') })
            .pipe(
                delay(1000),
                map(res => res.data)
            );
    }
}
