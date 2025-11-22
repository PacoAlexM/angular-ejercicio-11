import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';

@Component({
    selector: 'dashboard',
    imports: [RouterOutlet, SidemenuComponent],
    templateUrl: './dashboard.component.html',
})
export default class DashboardComponent {}
