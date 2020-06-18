import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeComponent } from './resume/resume.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {H} from "@angular/cdk/keycodes";


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    ExperienceComponent,
    ContactComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'resume',
        component: ResumeComponent
      },
      {
        path: 'experience',
        component: ExperienceComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
