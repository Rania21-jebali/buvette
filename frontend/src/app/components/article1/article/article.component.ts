import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/_services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PanierService } from 'src/app/_services/panier.service';
import { Panier } from 'src/app/models/panier.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  currentArticle: Article = {};
  currentIndex = -1;
  title = '';
  description='';
  categorie='';
  prix=0;
  imageUrl='';
  articles: Array<object> = [];
  article?: Article[];
  panier: Panier = {
    total: 0,
    quantite:0,
    articleId: 0, 
    commandeId:0,
  };
  submitted = false;
  constructor(private articleService: ArticleService,private panierService: PanierService,
    private route: ActivatedRoute,
    private router: Router) { }

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
  savePanier(): void {
    const data = {
      total: this.panier.total,
      quantite: this.panier.quantite,
      articleId: this.panier.articleId,
      commandeId:this.panier.commandeId,
    };

    this.panierService.create(data)
      .subscribe(
        (response:any) => {
          console.log(response);
          this.submitted = true;
        },
        (error:any) => {
          console.log(error);
        });
  }

  newArticle(): void {
    this.submitted = false;
    this.panier = {
      total:0 ,
      quantite:0,
      articleId: 0,
      commandeId:0,
    };
  }
  

}
