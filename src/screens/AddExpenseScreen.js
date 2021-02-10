import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomSheet from "reanimated-bottom-sheet";
import { Colors } from "../styles/index";

import DropDownPicker from "react-native-dropdown-picker";

const AddExpenseScreen = () => {
  const sheetRef = React.useRef(null);
  const [headerValue, onChangeExpense] = useState("Expense Header");
  const [categoryValue, onChangeCategory] = useState("Category Subtitle");
  const [priceValue, onChangePrice] = useState("Price");

  const renderContent = () => (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <View style={styles.border}></View>

      <DropDownPicker
        items={[
          { label: "Yeme-İçme", value: "yemeicme" },
          { label: "Market", value: "market" },
          { label: "Eğlence", value: "eglence" },
          { label: "Genel", value: "genel" },
          { label: "Hediyeler", value: "hediyeler" },
          { label: "Tatil", value: "tatil" },
        ]}
        defaultIndex={0}
        containerStyle={{ height: 50, marginTop: 50 }}
        style={{ backgroundColor: Colors.lightGrey }}
        dropDownStyle={{ backgroundColor: Colors.lightGrey, fontSize: 30 }}
        labelStyle={{ fontSize: 20, color: "#000000" }}
        onChangeItem={(item) => console.log(item.label, item.value)}
      />

      <View style={{}}>
        <TextInput
          style={styles.inputHeader}
          onChangeText={(text) => onChangeExpense(text)}
          value={headerValue}
        />
        <View style={styles.inputArea}>
          <TextInput
            style={styles.inputCategory}
            onChangeText={(text) => onChangeCategory(text)}
            value={categoryValue}
            onFocus={() => sheetRef.current.snapTo(2)}
          />
          <TextInput
            style={styles.inputPrice}
            onChangeText={(text) => onChangePrice(text)}
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
          alignItems: "center",
          justifyContent: "center",
        }}
      ></View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={["50%"]}
        borderRadius={10}
        renderContent={renderContent}
      />
      <TouchableOpacity
        style={{ alignSelf: "center", height: 30, width: 60 }}
        onPress={() => sheetRef.current.snapTo(0)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.tabBar,
    padding: 16,
    height: 450,
  },
  border: {
    borderColor: "#1e1e1e",
    borderWidth: 3,
    alignSelf: "center",
    width: 100,
    borderRadius: 20,
  },
  inputArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputHeader: {
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.lightGrey,
    paddingStart: 20,
    fontSize: 20,
    marginTop: 50,
  },
  inputCategory: {
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.lightGrey,
    paddingStart: 20,
    fontSize: 20,
    marginTop: 50,
    width: 220,
  },
  inputPrice: {
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.lightGrey,
    paddingStart: 20,
    fontSize: 20,
    marginTop: 50,
    width: 100,
  },
  moneyLogo: {
    backgroundColor: Colors.lightGrey,
    width: 40,
    borderRadius: 5,
    fontSize: 20,
    marginTop: 50,
  },
  moneyText: {
    fontSize: 25,
    textAlign: "center",
    top: 12,
  },
});

export default AddExpenseScreen;

// import React from "react";
// import { View, StyleSheet } from "react-native";

// const AddExpenseScreen = () => {
//   return <View style={{ margin: 100 }}></View>;
// };

// const styles = StyleSheet.create({});

// export default AddExpenseScreen;
