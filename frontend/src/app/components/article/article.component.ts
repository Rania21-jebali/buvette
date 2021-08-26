import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/_services/article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = {
    title: '',
    description: '',
    prix: 0,
    categorieId: 0
  };
  currentArticle: Article = {};
  currentIndex = -1;
  title = '';
  description='';
  categorie='';
  prix=0;

  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getArticle(this.route.snapshot.params.id);
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
 
}
