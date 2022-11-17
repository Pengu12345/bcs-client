import {styles} from "../style/Stylesheet";
import {Button, FlatList, Text, View} from "react-native";
import React, {Component} from "react";

import {Basket} from "../types/Types";

export function BasketComponent(props : {
  basket: Basket
  onRemove: (id : number) => void
}) {

  const basket = props.basket
  const articles = basket.articles

  function removeArticleToBasket() {
    props.remove(id)
  }

  return(
    <View style={styles.articleContainer}>
      <FlatList data={articles} renderItem={ ({articleInfo}) =>
        <Text>
          articleInfo.article.name
        </Text>
      }/>
    </View>
  );
}