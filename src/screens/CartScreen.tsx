import { useStripe } from "@stripe/stripe-react-native";
import React, { useEffect, useState } from "react";
import {Alert, Text, Button, SafeAreaView, View, FlatList} from "react-native";
import {styles} from "../style/Stylesheet";
import {ArticleComponent} from "../components/ArticleComponent";
import {API} from "../API";

import {Article, ArticleInfo, Basket} from "../types/Types";
import {BasketComponent} from "../components/BasketComponent";

export default function CartScreen({route, navigation} : any) {

  let {basket, onRemove} = route.params

  const removeArticle = (id : number) => {
    basket = onRemove(id)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <BasketComponent basket={basket} onRemove={removeArticle} />

      <Button color="#B29078FF" title={"Proceed to checkout"} onPress={()=>{}} disabled={basket.articles.length <= 0}/>

    </View>
  );
}