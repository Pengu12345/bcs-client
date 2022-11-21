import { useStripe } from "@stripe/stripe-react-native";
import React, { useEffect, useState } from "react";
import {Alert, Text, Button, SafeAreaView, View, FlatList} from "react-native";
import {styles} from "../style/Stylesheet";
import {ArticleComponent} from "../components/ArticleComponent";
import {API} from "../API";

import {Article, ArticleInfo, Basket} from "../types/Types";
import {BasketComponent} from "../components/BasketComponent";

export default function CartScreen({route, navigation} : any) {

  let {basket_data, onRemove} = route.params

  const [basket,setBasket] = useState(basket_data)

  const removeArticle = (id : number) => {
    setBasket(onRemove(id))
  }

  const gotoCheckoutScreen = () => {
    navigation.navigate('Checkout', {
      basket:basket
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <BasketComponent basket={basket} onRemove={removeArticle} />

      <Button color="#B29078FF" title={"Proceed to checkout"} onPress={gotoCheckoutScreen} disabled={basket.articles.length <= 0}/>

    </View>
  );
}