const cart= null;

module.exports = class Cart{

    static save(article){
    if(cart)
    {
   const existingArticleindex=cart.articles.findIndex(p => p.id== article.id);
   console.log('existingArticleindex: ',existingArticleindex)
   if(existingArticleindex>=0){
    const existingArticle=cart.articles[existingArticleindex];
    const existingqty = existingArticle.quantite;
    existingArticle.quantite+=1;
    cart.articles[existingArticleindex]=existingArticle;
    cart.total+=article.prix;

   }else{
    article.quantite=1;
    cart.articles.push(article);
    cart.total+=article.prix;

   }
    }else{
        cart ={ articles : [], total:0};
        article.quantite=1;
        cart.articles.push(article);
        cart.total=article.prix;
    }
    }
    static getCart(){
        return cart;
    }
}
