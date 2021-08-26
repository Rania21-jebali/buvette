import {Article} from "./article.model";

export class CartModelServer {
  total!: Number;
  data!: [{
    article: Article,
    numInCart: Number
  }];
}

export class CartModelPublic {
  total!: Number;
  prodData!: [{
    id: Number,
    incart: Number
  }]
}