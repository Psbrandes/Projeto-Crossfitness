import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';


export type MenuItem = {
  icon: string;
  label: string;
  routes?: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, RouterModule, MatListModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashbord',
      label: 'Dashbord',
      routes: 'dashbord',
    },
    {
      icon: 'video_library',
      label: 'Content',
      routes: 'content',
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      routes: 'analytics',
    },
    {
      icon: 'comments',
      label: 'Comments',
      routes: 'comments',
    },
  ]);
}
