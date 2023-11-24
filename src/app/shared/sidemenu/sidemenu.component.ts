import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styles: ``,
})
export class SidemenuComponent {
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((routes) => routes && routes.path)
    .filter((routes) => !routes.path?.includes(':'));

  constructor() {
    // const dashboardRoutes = routes
    //   .map((route) => route.children ?? [])
    //   .flat()
    //   .filter((routes) => routes && routes.path)
    //   .filter((routes) => !routes.path?.includes(':'));
    // console.log(dashboardRoutes);
  }
}
