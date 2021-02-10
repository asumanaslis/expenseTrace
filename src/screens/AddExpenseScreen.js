import * as React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TextInput, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { Color } from '../assets/colors';

import DropDownPicker from 'react-native-dropdown-picker';
import { ScreenContainer } from 'react-native-screens';



export default function AddExpenseScreen() {

  const sheetRef = React.useRef(null);


  const [headerValue, onChangeExpense] = React.useState('Expense Header');
  const [categoryValue, onChangeCategory] = React.useState('Category Subtitle');
  const [priceValue, onChangePrice] = React.useState('Price');

  const renderContent = () => (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <View style={styles.border} ></View>

      <DropDownPicker
        items={[
          { label: 'Yeme-İçme', value: 'yemeicme' },
          { label: 'Market', value: 'market' },
          { label: 'Eğlence', value: 'eglence' },
          { label: 'Genel', value: 'genel' },
          { label: 'Hediyeler', value: 'hediyeler' },
          { label: 'Tatil', value: 'tatil' },
        ]}
        defaultIndex={0}
        containerStyle={{ height: 50, marginTop: 50 }}
        style={{ backgroundColor: Color.darkGray }}
        dropDownStyle={{ backgroundColor: Color.darkGray, fontSize: 30, }}
        labelStyle={{ fontSize: 20, color: "#000000" }}
        onChangeItem={item => console.log(item.label, item.value)}
      />

      <View style={{}}>
        <TextInput
          style={styles.inputHeader}
          onChangeText={text => onChangeExpense(text)}
          value={headerValue}
        />
        <View style={styles.inputArea}>

          <TextInput
            style={styles.inputCategory}
            onChangeText={text => onChangeCategory(text)}
            value={categoryValue}
            onFocus={() => sheetRef.current.snapTo(2)}

          />
          <TextInput
            style={styles.inputPrice}
            onChangeText={text => onChangePrice(text)}
            value={priceValue}
          />
          <View style={styles.moneyLogo}>
            <Text style={styles.moneyText}>₺</Text>
          </View>

        </View>
      </View>
    </View>
  );


  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={["50%"]}
        borderRadius={10}
        renderContent={renderContent}
      />
      <TouchableOpacity
        style={{ alignSelf: 'center', height: 30, width: 60 }}
        onPress={() => sheetRef.current.snapTo(0)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: Color.gray,
    padding: 16,
    height: 450
  },
  border: {
    borderColor: "#1e1e1e",
    borderWidth: 3,
    alignSelf: "center",
    width: 100,
    borderRadius: 20
  },
  inputArea: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputHeader: {
    height: 50,
    borderRadius: 5,
    backgroundColor: Color.darkGray,
    paddingStart: 20,
    fontSize: 20,
    marginTop: 50,
  },
  inputCategory: {
    height: 50,
    borderRadius: 5,
    backgroundColor: Color.darkGray,
    paddingStart: 20,
    fontSize: 20,
    marginTop: 50,
    width: 220
  },
  inputPrice: {
    height: 50,
    borderRadius: 5,
    backgroundColor: Color.darkGray,
    paddingStart: 20,
    fontSize: 20,
    marginTop: 50,
    width: 100,
  },
  moneyLogo: {
    backgroundColor: Color.darkGray,
    width: 40,
    borderRadius: 5,
    fontSize: 20,
    marginTop: 50
  },
  moneyText: {
    fontSize: 25,
    textAlign: "center",
    top: 12
  },
})