import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { Img2Component } from './img2/img2.component';
import { ProgressComponent } from './progress/progress.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { CardComponent } from './card/card.component';
import { SkillsComponent } from './skills/skills.component';
import { OpenSourceComponent } from './open-source/open-source.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AchivementsComponent } from './achivements/achivements.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    Img2Component,
    ProgressComponent,
    HorizontalComponent,
    CardComponent,
    SkillsComponent,
    OpenSourceComponent,
    BlogsComponent,
    AchivementsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
