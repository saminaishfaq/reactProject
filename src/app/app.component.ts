import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {Router} from '@angular/router';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycv-app';
  constructor(private route: Router){
    
   
  }
}
