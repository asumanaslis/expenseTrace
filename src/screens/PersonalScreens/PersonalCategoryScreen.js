import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import randomColor from "randomcolor";
import { VictoryPie } from "victory-native";
import ExpenseList from "../../components/ExpenseList";
import { ScrollView } from "react-native-gesture-handler";
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleVariables } from "../../styleVariable/StyleVariable";

const PersonalCategoryScreen = ({ navigation }) => {
  const category = navigation.state.params.category;
  const categoryData = [
    {
      id: 1,
      category: category,
      price: Math.floor(Math.random() * 1000) + 1,
      color: randomColor(),
    },
    {
      id: 2,
      category: category,
      price: Math.floor(Math.random() * 1000) + 1,
      color: randomColor(),
    },
    {
      id: 3,
      category: category,
      price: Math.floor(Math.random() * 1000) + 1,
      color: randomColor(),
    },
    {
      id: 4,
      category: category,
      price: Math.floor(Math.random() * 1000) + 1,
      color: randomColor(),
    },
    {
      id: 5,
      category: category,
      price: Math.floor(Math.random() * 1000) + 1,
      color: randomColor(),
    },
    {
      id: 6,
      category: category,
      price: Math.floor(Math.random() * 1000) + 1,
      color: randomColor(),
    },
    {
      id: 7,
      category: category,
      price: Math.floor(Math.random() * 1000) + 1,
      color: randomColor(),
    },
  ];

  const totalPrice = () => {
    var sum = 0;

    categoryData.map((item) => {
      sum += item.price;
    });

    return sum;
  };

  function renderChartView() {
    const colorScales = categoryData.map((item) => item.color);

    return (
      <>
        <VictoryPie
          data={categoryData}
          x={"category"}
          y={"price"}
          labels={() => null}
          innerRadius={70}
          animate={{
            duration: 2000,
          }}
          style={{
            parent: {
              ...styles.shadow,
            },
          }}
          width={300}
          height={300}
          colorScale={colorScales}
        />

        <View
          style={{
            position: "absolute",
            top: "43%",
            left: "25%",
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 28, color: "#FFBA08" }}>
            {totalPrice()}₺
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16, color: "#FF0033" }}>
            -{totalPrice()}₺
          </Text>
        </View>
      </>
    );
  }

  function renderExpenseList() {
    return categoryData.map((item) => {
      return <ExpenseList key={item.id} data={item} />;
    });
  }

  return (
    <SafeAreaView
      style={{ alignItems: "center", flex: 1, backgroundColor: "#fff" }}
    >
      {/* Top Labels */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          width: "50%",
          flex: 1,
          zIndex: 99999,
          maxHeight: 45
        }}
      >


        {      /*  ------------------------------------------------------------------------------------------------------------*/}
        {/* Month */}
        <View style={{ flex: 1 }}>
          <DropDownPicker
            items={[
              { label: 'Ocak', value: 1 },
              { label: 'Şubat', value: 2 },
              { label: 'Mart', value: 3 },
              { label: 'Nisan', value: 4 },
              { label: 'Mayıs', value: 5 },
              { label: 'Haziran', value: 6 },
              { label: 'Temmuz', value: 7 },
              { label: 'Ağustos', value: 8 },
              { label: 'Eylül', value: 9 },
              { label: 'Ekim', value: 10 },
              { label: 'Kasım', value: 11 },
              { label: 'Aralık', value: 12 },
            ]}
            defaultValue={1}
            containerStyle={{ flex: 1, width: 130, }}
            style={{ borderWidth: 0, }}
            dropDownStyle={{ borderWidth: 0, }}
            labelStyle={{ fontSize: 16, color: "#000000", }}
            onChangeItem={item => console.log(item.label, item.value)}
          />
        </View>
        {      /*  ------------------------------------------------------------------------------------------------------------*/}

        <TouchableOpacity style={{ top: StyleVariables.height * 0.021 }}>
          <Text>{category}</Text>
        </TouchableOpacity>

      </View>

      {/* Chart */}
      <View style={{ alignItems: "center" }}>{renderChartView()}</View>
      {/* Expense List */}
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={{ flex: 1, marginTop: 10, width: "95%" }}
      >
        {renderExpenseList()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default PersonalCategoryScreen;
