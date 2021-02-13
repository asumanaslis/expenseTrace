import React, { useState } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, Modal, StatusBar } from "react-native";
import ProgressBar from "../../components/ProgressBar";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import randomColor from "randomcolor";
import { VictoryPie } from "victory-native";
import Bullet from "../../components/Bullet";
import { BLUE } from "../../styles/colors";

import { ModalPicker } from "../../components/Picker"

const GroupScreen = () => {
  const data = [
    {
      id: 1,
      category: "Yeme-İçme",
      price: Math.floor(Math.random() * 1000) + 1,
      color: randomColor(),
    },
    {
      id: 2,
      category: "Market",
      price: Math.floor(Math.random() * 1000) + 1,
      color: randomColor(),
    },

    {
      id: 3,
      category: "Eğlence",
      price: Math.floor(Math.random() * 1000) + 1,
      color: randomColor(),
    },
    {
      id: 4,
      category: "Genel",
      price: Math.floor(Math.random() * 1000) + 1,
      color: randomColor(),
    },

    {
      id: 5,
      category: "Hediyeler",
      price: Math.floor(Math.random() * 1000) + 1,
      color: randomColor(),
    },
    {
      id: 6,
      category: "Tatil",
      price: Math.floor(Math.random() * 1000) + 1,
      color: randomColor(),
    },
  ];

  const totalPrice = () => {
    var sum = 0;

    data.map((item) => {
      sum += item.price;
    });

    return sum;
  };

  function renderProgressBar() {
    return data.map((item) => {
      const expensePercentage = (item.price / totalPrice()) * 100;
      return (
        <ProgressBar
          key={item.id + "Bar"}
          data={item}
          percentage={expensePercentage}
          nav="GroupCategory"
        />
      );
    });
  }

  function renderBullets() {
    return data.map((item) => {
      let expensePercentage = (item.price / totalPrice()) * 100;
      return (
        <Bullet
          key={item.id + "Bullet"}
          data={item}
          percentage={expensePercentage.toFixed(1)}
        />
      );
    });
  }
  function renderChartView() {
    const colorScales = data.map((item) => item.color);

    return (
      <>
        <VictoryPie
          data={data}
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

        <View style={{ position: "absolute", top: "45%", left: "33%" }}>
          <Text style={{ textAlign: "center", fontSize: 28, color: "#FFBA08" }}>
            {totalPrice()}₺
          </Text>
        </View>
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content"></StatusBar>
      <SafeAreaView
        style={{ alignItems: "center", flex: 1, backgroundColor: "#fff" }}
      >
        {/* Container: Create Group, Month and Group Buttons */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            width: "50%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Month */}
          <TouchableOpacity
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Eylül </Text>
              <Image source={require("../../../assets/arrow-down-icon.png")} />
            </View>

          </TouchableOpacity>

          {/* Group */}
          <TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Group Member 1</Text>
              <Image source={require("../../../assets/arrow-down-icon.png")} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          {/* CHART */}
          <View style={{ flex: 3 / 5, alignItems: "center" }}>
            {renderChartView()}
          </View>
          {/* BULLETS */}
          <View
            style={{
              flex: 2 / 5,
              marginLeft: 30,
              marginTop: 15,
            }}
          >
            {renderBullets()}
          </View>
        </View>
        {/* Main Screen Seperator */}
        <View
          style={{
            width: "90%",
            borderTopWidth: 1,
            borderTopColor: "#F7F7F7",
            marginBottom: 5,
          }}
        />
        {/* Expense Bars */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.barContainer}
        >
          {renderProgressBar()}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    marginTop: 10,
    width: "90%",
    flex: 1,
  },
  createGroupContainer: {
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: BLUE,
    width: "40%",
    height: "100%",
  },
  createGroupText: {
    marginTop: "10%",
    marginBottom: "10%",
    color: BLUE,
    fontSize: 18,
    textAlign: "center",
  },
});

export default GroupScreen;
