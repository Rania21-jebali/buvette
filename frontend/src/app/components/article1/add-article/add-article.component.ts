import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/_services/article.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  article: Article = {
    title: '',
    description: '',
    prix: 0, 
    categorieId:0,
    imageUrl: ''
  };
  submitted = false;
  
  constructor(private articleService: ArticleService,private http: HttpClient) { }

  ngOnInit(): void {
  }

  saveArticle(): void {
    const data = {
      title: this.article.title,
      description: this.article.description,
      prix: this.article.prix,
      categorieId:this.article.categorieId,
      imageUrl:this.article.imageUrl
    };

    this.articleService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newArticle(): void {
    this.submitted = false;
    this.article = {
      title: '',
      description: '',
      prix: 0,
      categorieId:0,
      imageUrl:''
    };
  }
  
  

}
