export class Article {
    id?: any;
    title?: string;
    description?: string;
    prix?: number ;
    categorieId?:number;
    image?:string;
  }
  export interface serverResponse  {
    count: number;
    articles: Article[]
  };
  