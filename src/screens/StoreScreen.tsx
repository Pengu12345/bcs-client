import { useStripe } from "@stripe/stripe-react-native";
import React, { useEffect, useState } from "react";
import {Alert, Text, Button, SafeAreaView, View, FlatList} from "react-native";
import {styles} from "../style/Stylesheet";
import {ArticleComponent} from "../components/ArticleComponent";
import {API} from "../API";

import {Article, ArticleInfo, Basket} from "../types/Types";
import {BasketComponent} from "../components/BasketComponent";

export default function StoreScreen({navigation} : any) {

  const [articlesLoaded, setArticlesLoaded] = useState(false)
  const [articles, setArticles] = useState<Article[]>([])
  const [basket, setBasket] = useState<Basket>({articles:[]})

  const gotoCart = () => {
    navigation.navigate('Cart',{
      basket: basket,
      onRemove: removeArticleFromBasket
    })
  }

  const addArticleToBasket = (id:number) => {
    let new_basket = {...basket}
    let articles = new_basket.articles
    let found = articles.find((item) => item.article.id == id)

    if(found === undefined) {
      // Add the new item to the basket
      const toAdd = findArticleById(id);
      if(toAdd !== undefined) {
        articles.push({
          article: toAdd,
          quantity: 1
        });
      }
    } else {
      // Update the existing item
      found.quantity += 1;
    }

    setBasket(new_basket);

  }

  const removeArticleFromBasket = (id:number) => {
    let new_basket = {...basket}
    let articles = new_basket.articles
    let found = articles.find((item) => item.article.id == id)

    if(found !== undefined) {
      // Update the existing item
      if(found.quantity > 0) found.quantity -= 1;
      // Remove from basket if there's no more
      if(found.quantity === 0) new_basket.articles = new_basket.articles.filter((item) => item !== found)
    }

    setBasket(new_basket);

    return basket
  }

  const findArticleById = (id : number) => {
    return articles.find((item) => item.id == id);
  }

  const fetchAllArticles = async () => {
    const res  = await API.getArticles()
    setArticles(res)
    setArticlesLoaded(true)
  }

  useEffect(() => {
    fetchAllArticles();
  }, []);

  let allArticles = (<Text>Loading...</Text>)

  if(articlesLoaded) {
    allArticles = (
      <View style={styles.articleListContainer}>
        <FlatList data={articles} renderItem={({item}) =>
          <ArticleComponent article={item} onAdd={addArticleToBasket}/>
        }/>
      </View>
    )
  }

  let basketSize = 0
  basket.articles.forEach((item) => basketSize += item.quantity)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Store</Text>
      {allArticles}
      <Button title={"Check cart items (" + basketSize + ")"} onPress={gotoCart}/>
    </View>
  );
}