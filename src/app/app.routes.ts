import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommentComponent} from './comment/comment.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ArticleComponent} from './article/article.component'
import {AboutusComponent} from "./aboutus/aboutus.component";

export const routes: Routes = [
  {path: '', redirectTo: '/blog', pathMatch: 'full'},
  {path: 'comment', component: CommentComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about-us', component: AboutusComponent},
  {path: '**', redirectTo: '/blog'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
