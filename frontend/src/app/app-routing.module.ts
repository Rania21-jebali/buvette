import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddArticleComponent } from './components/article1/add-article/add-article.component';
import { BoardUserComponent } from './components/board/board-user/board-user.component';
import { BoardModeratorComponent } from './components/board/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './components/board/board-admin/board-admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ArticleListeComponent } from './components/article1/article-liste/article-liste.component';
import { ArticleDetailsComponent } from './components/article1/article-details/article-details.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
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


const routes: Routes = [
  { path: "login" , component : LoginComponent },
  { path: "signup" , component : SignupComponent },
  { path: "" , component : HomeComponent },
  { path: "addArticle" , component : AddArticleComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'profile', component: ProfileComponent },
  { path: "ArticleList" , component : ArticleListeComponent },
  { path: "articleD/:id" , component : ArticleComponent },
  { path: "article/:id" , component : ArticleDetailsComponent },
  { path: 'file', component: FormUploadComponent },
  { path: 'fileList', component: ListUploadComponent },
  { path: 'fileDetails', component: DetailsUploadComponent },
  { path: 'users', component: UserListeComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'image', component: AddImageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'coeffee', component: CoeffeeComponent },
  { path: 'cake', component: CakeComponent },
  { path: 'sandwitch', component: SandwitchComponent },
  { path: 'drinks', component: DrinksComponent },
  { path: 'jus', component: JusComponent },
  { path: 'shop/:id', component: ShopComponent },
  { path: 'checkout', component: CheckoutComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
