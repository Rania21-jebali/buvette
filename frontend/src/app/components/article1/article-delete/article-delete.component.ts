import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/_services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-article-delete',
  templateUrl: './article-delete.component.html',
  styleUrls: ['./article-delete.component.css']
})
export class ArticleDeleteComponent implements OnInit {
  currentArticle: Article = {
    title: '',
    description: '',
    prix: 0,
    categorieId: 0,
    imageUrl: ''
  };
  message = '';
  isDeleted=false;
  constructor( private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getArticle(this.route.snapshot.params.id);
    this.isDeleted=false;
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
