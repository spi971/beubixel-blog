import { Component } from '@angular/core';
import { MobileNavComponent } from "../mobile-nav/mobile-nav.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [MobileNavComponent]
})
export class NavbarComponent {

}
