import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnicalComponent } from './technical/technical.component';
import { SkillsComponent } from './skills/skills.component';
import { AwardsComponent } from './awards/awards.component';
const routes: Routes = [
  { path: 'education', component: EducationComponent},
  { path: '', component: AboutComponent},
  { path: 'Work', component: WorkComponent},
  { path: 'Projects', component: ProjectsComponent},
  { path: 'Technical', component: TechnicalComponent},
  { path: 'Skills', component: SkillsComponent},
  { path: 'Awards', component: AwardsComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
