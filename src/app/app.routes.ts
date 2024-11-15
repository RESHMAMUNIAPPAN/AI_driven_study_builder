import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StudyPlanComponent } from './pages/studyplan/studyplan.component';
import { TopicselectionComponent } from './pages/topicselection/topicselection.component';
import { ExamdateselectionComponent } from './pages/examdateselection/examdateselection.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'progress',
        component:ProgressComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'studyplan',
        component:StudyPlanComponent
    },
    {
        path:'topicselection',
        component:TopicselectionComponent
    },
    {
        path:'examdateselection',
        component:ExamdateselectionComponent
    }
];
