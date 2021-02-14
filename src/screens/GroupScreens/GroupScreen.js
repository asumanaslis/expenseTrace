import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import ProgressBar from "../../components/ProgressBar";
import { ScrollView } from "react-native-gesture-handler";
import { VictoryPie } from "victory-native";
import Bullet from "../../components/Bullet";
import store from "../../redux/store";
import { navChanged, selectedGroupChanged } from "../../redux/actions";
import DropDownPicker from "react-native-dropdown-picker";
import { useSelector } from "react-redux";

const GroupScreen = ({ navigation }) => {
  const groupID = navigation.state.params.groupID;

  useEffect(() => {
    const didFocusSubscription = navigation.addListener("didFocus", () => {
      store.dispatch(selectedGroupChanged(groupID));
    });
    return () => {
      didFocusSubscription.remove();
    };
  }, []);

  const allExpenses = useSelector((state) => state.groupExpense);
  const expenses = () => {
    let groupData = [];
    for (let i = 0; i < allExpenses.length; i++) {
      if (allExpenses[i].groupID == groupID) {
        groupData = allExpenses[i];
        break;
      }
    }

    return groupData.expenses;
  };

  useEffect(() => {
    const didFocusSubscription = navigation.addListener("didFocus", () => {
      store.dispatch(navChanged(navigation.state.routeName));
    });
    return () => {
      didFocusSubscription.remove();
    };
  }, []);

  const totalPrice = () => {
    var sum = 0;

    expenses().map((item) => {
      sum += item.price;
    });

    return sum;
  };

  function renderProgressBar() {
    return expenses().map((item) => {
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
    return expenses().map((item) => {
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
    const colorScales = () => {
      if (expenses().length === 0) {
        return ["#808080"];
      } else {
        return expenses().map((item) => item.color);
      }
    };

    return (
      <>
        <VictoryPie
          data={
            expenses().length === 0
              ? [{ category: "empty", price: 100 }]
              : expenses()
          }
          x={"category"}
          y={"price"}
          labels={() => null}
          innerRadius={70}
          animate={{
            duration: 1000,
          }}
          style={{
            parent: {
              ...styles.shadow,
            },
          }}
          width={300}
          height={300}
          colorScale={colorScales()}
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
    <SafeAreaView
      style={{ alignItems: "center", flex: 1, backgroundColor: "#fff" }}
    >
      {/* Container: Month and Group DropDownPicker Menus */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          width: "90%",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 99999,
          minHeight: 50,
        }}
      >
        {/* Month */}
        <View style={{}}>
          <DropDownPicker
            items={[
              { label: "Ocak", value: 1 },
              { label: "Şubat", value: 2 },
              { label: "Mart", value: 3 },
              { label: "Nisan", value: 4 },
              { label: "Mayıs", value: 5 },
              { label: "Haziran", value: 6 },
              { label: "Temmuz", value: 7 },
              { label: "Ağustos", value: 8 },
              { label: "Eylül", value: 9 },
              { label: "Ekim", value: 10 },
              { label: "Kasım", value: 11 },
              { label: "Aralık", value: 12 },
            ]}
            defaultValue={new Date().getMonth() + 1}
            containerStyle={{ flex: 1, width: 130 }}
            style={{ borderWidth: 1 }}
            dropDownStyle={{ borderWidth: 1 }}
            labelStyle={{ fontSize: 16, color: "#000000" }}
            onChangeItem={(item) => console.log(item.label, item.value)}
            containerStyle={{ flex: 1, width: 130 }}
            style={{ borderWidth: 0 }}
            dropDownStyle={{ borderWidth: 0 }}
            labelStyle={{ fontSize: 16, color: "#000000" }}
            onChangeItem={(items) => setValue(items.value)}
            itemStyle={{ justifyContent: "center" }}
          />
        </View>

        {/* Group */}

        <View style={{}}>
          <DropDownPicker
            items={[
              { label: "Group", value: 1 },
              { label: "Member 1", value: 1 },
              { label: "Member 2", value: 1 },
            ]}
            defaultValue={1}
            containerStyle={{ flex: 1, width: 130 }}
            style={{ borderWidth: 0 }}
            dropDownStyle={{ borderWidth: 0 }}
            labelStyle={{ fontSize: 16, color: "#000000" }}
            onChangeItem={(item) => console.log(item.label, item.value)}
          />
        </View>
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
  );
};

const styles = StyleSheet.create({
  barContainer: {
    marginTop: 10,
    width: "90%",
    flex: 1,
  },
});

export default GroupScreen;
