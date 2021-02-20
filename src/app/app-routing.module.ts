import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchivementsComponent } from './achivements/achivements.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OpenSourceComponent } from './open-source/open-source.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path:'skills',component:SkillsComponent
  },
  {
    path:'open-source',component:OpenSourceComponent
  },
  {
    path:'blogs',component:BlogsComponent
  },
  {
    path:'achivements',component:AchivementsComponent
  },
  {
    path:'contacts',component:ContactsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
