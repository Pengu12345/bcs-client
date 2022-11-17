import {styles} from "../style/Stylesheet";
import {Button, FlatList, Text, View} from "react-native";
import React, {Component} from "react";

import {Article} from "../types/Types";

export function ArticleComponent(props : {
    article: Article
    onAdd: (id : number) => void
  }) {

  const article = props.article

  const id = article.id
  const name = article.name
  const price = article.price / 100

  function addArticleToBasket() {
    props.onAdd(id)
  }

  return(
    <View style={styles.articleContainer}>
      <Text style={styles.articleText}> {name} -- {price}€</Text>

      <Button title={"Add to basket"} onPress={addArticleToBasket} />
    </View>
  );
}