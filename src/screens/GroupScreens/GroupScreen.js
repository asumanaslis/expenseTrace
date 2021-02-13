import React, { useState } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, Picker } from "react-native";
import ProgressBar from "../../components/ProgressBar";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import randomColor from "randomcolor";
import { VictoryPie } from "victory-native";
import Bullet from "../../components/Bullet";
import { BLUE } from "../../styles/colors";
import { navigate } from "../../navigationRef";
import { StyleVariables } from "../../styleVariable/StyleVariable"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StatusBar } from "expo-status-bar";
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import { Color } from "../../assets/colors";


const GroupScreen = () => {
  const [value, setValue] = useState(null);
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
        <StatusBar barStyle="dark-content"></StatusBar>

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
          <Text style={{ textAlign: "center", fontSize: RFPercentage(5), color: "#FFBA08" }}>
            {totalPrice()}₺
          </Text>
        </View>
      </>
    );
  }

  const sheetRef = React.useRef(null);

  return (
    <SafeAreaView
      style={{ alignItems: "center", flex: 1, backgroundColor: "#fff" }}
    >
      {/* Container: Create Group, Month and Group Buttons */}
      <View
        style={{
          flexDirection: "row",
          marginTop: StyleVariables.height * 0.035,
          width: "90%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Create Group Button */}
        <View style={styles.createGroupContainer}>
          <TouchableOpacity
            onPress={() => {
              navigate("AllGroups");
            }}
          >
            <Text style={styles.createGroupText}>Create Group</Text>
          </TouchableOpacity>
        </View>

        {      /*  ------------------------------------------------------------------------------------------------------------*/}
        {/* Month */}

        <View style={{ flex: 1 }}>

          <DropDownPicker
            items={[
              { label: 'Ocak', value: '1' },
              { label: 'Şubat', value: '2' },
              { label: 'Mart', value: '3' },
              { label: 'Nisan', value: '4' },
              { label: 'Mayıs', value: '5' },
              { label: 'Haziran', value: '6' },
              { label: 'Temmuz', value: '7' },
              { label: 'Ağustos', value: '8' },
              { label: 'Eylül', value: '9' },
              { label: 'Ekim', value: '10' },
              { label: 'Kasım', value: '11' },
              { label: 'Aralık', value: '12' },
            ]}
            defaultValue={'1'}
            containerStyle={{ flex: 1, width: 130 }}
            style={{ borderWidth: 0 }}
            dropDownStyle={{ borderWidth: 0 }}
            labelStyle={{ fontSize: 16, color: "#000000" }}
            onChangeItem={items => setValue(items.value)}
            itemStyle={{justifyContent: 'center'}}
            

          />

          {      /*  ------------------------------------------------------------------------------------------------------------*/}
        </View>



        {/* Group */}
        <TouchableOpacity
          onPress={() => {
            navigate("GroupMember");
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Group </Text>
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
            marginLeft: StyleVariables.width * 0.02,
            marginTop: StyleVariables.height * 0.03,
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
          marginBottom: StyleVariables.height * 0.01,
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
  );
};

const styles = StyleSheet.create({
  barContainer: {
    marginTop: StyleVariables.height * 0.01,
    width: "90%",
    flex: 1,
  },
  createGroupContainer: {
    marginRight: StyleVariables.width * 0.02,
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
    fontSize: RFPercentage(2.5),
    textAlign: "center",
  },
});

export default GroupScreen;
