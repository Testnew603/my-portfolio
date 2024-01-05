import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './baner/baner/baner.component';
import { ContactComponent } from './contact/contact/contact.component';
import { EducationComponent } from './education/education/education.component';
import { PersonalInformationComponent } from './personal-information/personal-information/personal-information.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience/work-experience.component';
import { ResponsiveDirective } from './directives/responsive.directive';
import { CertificationComponent } from './certification/certification/certification.component';

@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    ContactComponent,
    EducationComponent,
    PersonalInformationComponent,
    ProjectsComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ResponsiveDirective,
    CertificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
