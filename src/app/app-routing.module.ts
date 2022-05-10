import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { AwardsComponent } from "./components/awards/awards.component";
import { ContactComponent } from "./components/contact/contact.component";
import { EducationComponent } from "./components/education/education.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ReferencesComponent } from "./components/references/references.component";
import { SkillsComponent } from "./components/skills/skills.component";

const routes: Routes = [
    {
        path:'',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: 'education',
        component: EducationComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'skills',
        component: SkillsComponent
    },
    {
        path: 'Awards',
        component: AwardsComponent

    },
    {
        path: 'references',
        component: ReferencesComponent
    },
    {
        path:'contact',
        component: ContactComponent
    },
    {
        path: '**', // wildcard routing it's declaration should always in end 
        component: PageNotFoundComponent
    }
 
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
