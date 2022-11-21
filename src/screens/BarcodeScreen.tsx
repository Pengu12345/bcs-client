import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import {BarCodeEvent, BarCodeScanner} from 'expo-barcode-scanner';
import {styles} from "../style/Stylesheet";

export default function BarcodeScreen({route,navigation} : any) {
  const [hasPermission, setHasPermission] = useState<boolean|null>(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data } : BarCodeEvent) => {
    const params = route.params

    setScanned(true)

    let parsed_data = data.split(";")

    if(!validateData(parsed_data)) {
      Alert.alert("Error", "Couldn't read the QR code properly.")
      return
    }
    const id : number = +parsed_data[1];

    params.onScan(id)
    navigation.navigate('Store')
  };

  const validateData = (parsed_data : any[]) => {

    console.log(parsed_data)

    if(parsed_data.length != 2) return false
    if(parsed_data[0] !== "bcs") return false
    if(typeof(+parsed_data[1]) !== "number" ) return false

    return true
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}