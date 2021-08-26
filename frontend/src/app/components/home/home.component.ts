import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/_services/article.service';
import { Commande } from 'src/app/models/commande.model';
import { CartService } from 'src/app/_services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  article?: Article[];
  currentArticle: Article = {};
  currentIndex = -1;
  title = '';
  description='';
  categorie='';
  prix=0;
  commande: Commande = {
    quantite: 0,
    total:0,
    description: '',
    articleId: 0
  };
  articles: Array<object> = [];
  
  constructor(private articleService: ArticleService,private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveArticle();
    this.getArticle(this.route.snapshot.params.id);
  }
  retrieveArticle(): void {
    this.articleService.getAll()
      .subscribe(
        (data : any)=> {
          this.article = data;
          console.log(data);
        },
        (error: any) => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveArticle();
    this.currentArticle = {};
    this.currentIndex = -1;
  }

  setActiveArticle(article: Article, index: number): void {
    this.currentArticle = article;
    this.currentIndex = index;
  }
  
  removeAllArticles(): void {
    this.articleService.deleteAll()
      .subscribe(
        (response: any) => {
          console.log(response);
          this.refreshList();
        },
        (error: any) => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.currentArticle = {};
    this.currentIndex = -1;

    this.articleService.findByTitle(this.title)
      .subscribe(
        (data: any) => {
          this.article = data;
          console.log(data);
        },
       ( error: any) => {
          console.log(error);
        });
  }
  getArticle(id: string): void {
    this.articleService.get(id)
      .subscribe(
        data => {
          this.currentArticle = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
 
 
}


