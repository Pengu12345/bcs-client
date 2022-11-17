export type Article = {
  id : number
  name : string
  price: number
}

export type ArticleInfo = {
  article : Article
  quantity : number
}

export type Basket = {
  articles : ArticleInfo[]
}