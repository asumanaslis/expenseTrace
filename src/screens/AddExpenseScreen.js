import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Keyboard,
} from "react-native";
import store from "../redux/store";
import { perExpenseAdded, grExpenseAdded } from "../redux/actions";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomSheet from "reanimated-bottom-sheet";
import { Colors } from "../styles/index";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { dimensions } from "../styles/index";
import { navigate } from "../navigationRef";
import DropDownPicker from "react-native-dropdown-picker";
import { useSelector } from "react-redux";

const AddExpenseScreen = (props) => {
  const sheetRef = React.useRef(null);
  const [categoryType, onChangeCategoryType] = useState("Market");
  const [headerValue, onChangeExpense] = useState("");
  const [categoryValue, onChangeCategory] = useState("");
  const [priceValue, onChangePrice] = useState("");

  const previousScreen = useSelector((state) => state.previousScreen.routeName);
  const groupID = useSelector((state) => state.selectedGroup.selectedGroup);
  console.log(groupID);
  const clearStates = () => {
    onChangeCategory("");
    onChangeExpense("");
    onChangePrice("");
  };

  const addExpense = () => {
    if (previousScreen === "Personal") {
      const expense = {
        category: categoryType,
        title: headerValue,
        subtitle: categoryValue,
        price: parseInt(priceValue),
      };
      store.dispatch(perExpenseAdded(expense));
      navigate("Personal");
    } else if (previousScreen === "Group") {
      const expense = {
        category: categoryType,
        title: headerValue,
        subtitle: categoryValue,
        price: parseInt(priceValue),
        groupID,
      };
      store.dispatch(grExpenseAdded(expense));
      navigate("Group");
    }
    clearStates();
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        sheetRef.current.snapTo(1); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        sheetRef.current.snapTo(0); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

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
        onChangeItem={(item) => onChangeCategoryType(item.label)}
      />
      <View style={{}}>
        <TextInput
          style={styles.inputHeader}
          onChangeText={(text) => onChangeExpense(text)}
          value={headerValue}
          placeholder="Expense Header"
        />
        <View style={styles.inputArea}>
          <TextInput
            style={styles.inputCategory}
            onChangeText={(text) => onChangeCategory(text)}
            value={categoryValue}
            placeholder="Category Subtitle"
          />
          <TextInput
            style={styles.inputPrice}
            onChangeText={(text) => onChangePrice(text)}
            value={priceValue}
            placeholder="Price"
          />
          <View style={styles.moneyLogo}>
            <Text style={styles.moneyText}>₺</Text>
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            height: 50,
            borderRadius: 5,
            backgroundColor: Colors.lightGrey,
            marginTop: 50,
            width: 220,
            alignItems: "center",
          }}
          onPress={() => {
            addExpense();
          }}
        >
          <Text style={{ fontSize: 25, textAlign: "center", top: 12 }}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <KeyboardAwareScrollView extraHeight={10}>
      <View style={{ height: dimensions.height }}>
        <View
          style={{
            backgroundColor: "#ffffff",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        ></View>
        <BottomSheet
          ref={sheetRef}
          initialSnap={0}
          snapPoints={["65%", "85%"]}
          borderRadius={10}
          renderContent={renderContent}
          enabledContentTapInteraction={false}
          enabledInnerScrolling={false}
        />
        <TouchableOpacity
          style={{ alignSelf: "center", height: 30, width: 60 }}
          onPress={() => sheetRef.current.snapTo(0)}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.tabBar,
    padding: 16,
    height: dimensions.height,
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
