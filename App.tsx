import { StripeProvider } from '@stripe/stripe-react-native';
import CheckoutScreen from './src/screens/CheckoutScreen';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import StoreScreen from "./src/screens/StoreScreen";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>

      <StripeProvider
        publishableKey="pk_test_51M52efBQoXdcBLGssCI6Sp2Uhfl6FeYa4bRD9aIHU54ZsVyg966Eh66gJW1wQPDKOVkUhiI3p8apQFhgIkclVgOR00jHE9iwaP"
        merchantIdentifier="merchant.com.example"
      >
      </StripeProvider>

      <Stack.Navigator>
        <Stack.Screen name={"Store"} component={StoreScreen}/>
        <Stack.Screen name={"Checkout"} component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
