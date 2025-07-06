import { Component } from '@angular/core';
import { BrandComponent } from '../brand/brand.component';
import { AppNavComponent } from '../app-nav/app-nav.component';
import { UserNavComponent } from '../user-nav/user-nav.component';

@Component({
  selector: 'app-sidebar',
  imports: [BrandComponent, AppNavComponent, UserNavComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
