import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ArticleListeComponent } from './components/article-liste/article-liste.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AddArticleComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ProfileComponent,
    ArticleListeComponent,
    ArticleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
