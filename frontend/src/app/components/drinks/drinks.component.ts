import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/_services/article.service';


@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  article?: Article[];
  currentArticle: Article = {};
  currentIndex = -1;
  title = '';
  description='';
  categorieId=0;
  prix=0;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.retrieveArticle();
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


}
