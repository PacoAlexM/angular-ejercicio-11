import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
    selector: 'users',
    imports: [TitleComponent, RouterLink],
    templateUrl: './users.component.html',
})
export default class UsersComponent {
    public usersService = inject(UserService);

    constructor() {}
}
