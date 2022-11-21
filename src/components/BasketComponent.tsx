import {styles} from "../style/Stylesheet";
import {Button, FlatList, Text, View} from "react-native";
import React, {Component, useState} from "react";

import {Basket} from "../types/Types";

export function BasketComponent(props : {
  basket: Basket
  onRemove: (id : number) => void
}) {

  const basket = props.basket
  const articles = basket.articles

  function removeArticleFromBasket(id: number) {
    props.onRemove(id)
  }

  let list = (<Text style={styles.articleText}>Please add an item to the cart.</Text>)

  if(basket.articles.length != 0) {
    list = (
      <FlatList data={articles} renderItem={ ({item}) =>
        <View style={styles.basketItem}>
          <Text style={styles.articleText}>
            {item.article.name} ( x{item.quantity})
          </Text>
          <Button color={"#b27878"} title={"Remove 1"} onPress={() => removeArticleFromBasket(item.article.id)} />
        </View>
      }/>
    )
  }

  return(
    <View style={styles.basketListContainer}>
      {list}
    </View>
  );
}