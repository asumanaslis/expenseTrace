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
        }}
      >
        <TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Ekim </Text>
            <Image source={require("../../../assets/arrow-down-icon.png")} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
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
