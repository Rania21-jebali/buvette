import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/_services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-liste',
  templateUrl: './article-liste.component.html',
  styleUrls: ['./article-liste.component.css']
})
export class ArticleListeComponent implements OnInit {

  article?: Article[];
  currentArticle: Article = {};
  currentIndex = -1;
  title = '';
  description='';
  categorie='';
  prix=0;
  imageUrl='';
  message = '';
  isDeleted=false;
  articles: Array<object> = [];
  

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.retrieveArticle();
    this.isDeleted=false;
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
          this.isDeleted=true;
        },
        (error: any) => {
          console.log(error);
          this.isDeleted=false;
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
  deleteArticle(): void {
    this.message = '';
    this.articleService.delete(this.currentArticle.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/articles']);
          this.message = response.message ? response.message : 'This article was deleted successfully!';
          this.isDeleted=true;
        },
        error => {
          console.log(error);
          this.isDeleted=false;
        });
  }

}

