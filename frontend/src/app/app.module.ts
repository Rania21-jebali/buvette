import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddArticleComponent } from './components/article1/add-article/add-article.component';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BoardAdminComponent } from './components/board/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board/board-user/board-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ArticleListeComponent } from './components/article1/article-liste/article-liste.component';
import { ArticleDetailsComponent } from './components/article1/article-details/article-details.component';
import { UserListeComponent } from './components/user/user-liste/user-liste.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { AddImageComponent } from './components/add-image/add-image.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CoeffeeComponent } from './components/categorie/coeffee/coeffee.component';
import { CakeComponent } from './components/categorie/cake/cake.component';
import { SandwitchComponent } from './components/categorie/sandwitch/sandwitch.component';
import { DrinksComponent } from './components/categorie/drinks/drinks.component';
import { JusComponent } from './components/categorie/jus/jus.component';
import { ArticleComponent } from './components/article1/article/article.component';
import { ShopComponent } from './components/shop/shop.component';
import { CheckoutComponent } from './components/checkout/checkout.component';




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
    ArticleDetailsComponent,
    UserListeComponent,
    AddImageComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    UserDetailsComponent,
    CoeffeeComponent,
    CakeComponent,
    SandwitchComponent,
    DrinksComponent,
    JusComponent,
    ArticleComponent,
    ShopComponent,
    CheckoutComponent
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
