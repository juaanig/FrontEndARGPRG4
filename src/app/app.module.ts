import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { ExperienceComponent } from './experience/experience.component';
import { HttpClientModule } from '@angular/common/http';
import { StudiesComponent } from './studies/studies.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**' ,component: PageNotFoundComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainComponent,
    ExperienceComponent,
    StudiesComponent,
    SkillsComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
