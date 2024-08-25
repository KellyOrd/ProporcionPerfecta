// src/app/app.component.ts
import { Component } from'@angular/core';
import { RouterModule } from'@angular/router';
import { NavbarComponent } from'./navbar/navbar.component';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, NavbarComponent]
})
export class AppComponent {
  title = 'Proporción Perfecta';
}

