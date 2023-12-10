import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommentComponent} from './comment/comment.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ArticleComponent} from './article/article.component'
import {AboutusComponent} from "./aboutus/aboutus.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

export const routes: Routes = [
  {path: '', redirectTo: '/article', pathMatch: 'full'},
  {path: 'comment', component: CommentComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about-us', component: AboutusComponent},
  {path: '**', redirectTo: '/article'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule,FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
