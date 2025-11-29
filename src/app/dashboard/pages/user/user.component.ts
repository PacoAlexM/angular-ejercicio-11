import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req-response.interface';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UserService } from '@services/users.service';

@Component({
    selector: 'user',
    imports: [TitleComponent],
    // templateUrl: './user.component.html',
    template: `
        <my-title [title]="titleLabel()" />

        @if (user()) {
            <section>
                <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />

                <div>
                    <h3>{{ user()!.first_name }} {{ user()!.last_name }}</h3>
                    <p>{{ user()!.email }}</p>
                </div>
            </section>
        }
        @else {
            <p>Cargando información...</p>
        }
    `,
})
export default class UserComponent {
    private route = inject(ActivatedRoute);
    private usersService = inject(UserService);

    // public user = signal<User | undefined>(undefined);
    public user = toSignal(this.route.params.pipe(switchMap(({ id }) => this.usersService.getUserById(id))));

    public titleLabel = computed(() => {
        if (this.user())
            return `Información del usuario: ${this.user()!.first_name} ${this.user()!.last_name}`;

        return 'Información del usuario';
    });

    constructor() {
        this.route.params.subscribe(param => {
            console.log(param);
        });
    }
}
