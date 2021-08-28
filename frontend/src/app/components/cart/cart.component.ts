import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/_services/article.service';
import { Commande } from 'src/app/models/commande.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  currentArticle: Article = {
    title: '',
    description: '',
    prix: 0,
    categorieId: 0
  };
  commande: Commande = {
    quantite: 0,
    total:0,
    description: '',
    articleId: 0
  };
  currentCommande: Commande = {
    quantite: 0,
    total:0,
    description: '',
    articleId: 0
  };
  public article: any = [];
  message = '';
  submitted = false;
  title = 'fileUpload';
  images: any;
  multipleImages = [];
  public grandTotal !: number;
  currentIndex = -1;
  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.message = '';
      this.getArticle(this.route.snapshot.params.id);
      this.getCommande(this.route.snapshot.params.id);
    }
    setActiveArticle(article: Article, index: number): void {
      this.currentArticle = article;
      this.currentIndex = index;
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
        getCommande(id: string): void {
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
        removeArticle(id: string): void {
          this.articleService.delete(id)
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
              
          
