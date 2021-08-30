import { PanierService } from './../../_services/panier.service';
import { Commande } from './../../models/commande.model';
import { Panier } from './../../models/panier.model';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/_services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  currentArticle: Article = {};
  currentIndex = -1;
  title = '';
  description='';
  categorie='';
  prix=0;
  imageUrl='';
  articles: Array<object> = [];
  article?: Article[];
  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getArticle(this.route.snapshot.params.id);
    this.retrieveArticle();
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
  

  setActiveArticle(article: Article, index: number): void {
    this.currentArticle = article;
    this.currentIndex = index;
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
  


}
