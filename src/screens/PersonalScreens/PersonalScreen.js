import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import ProgressBar from "../../components/ProgressBar";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { VictoryPie } from "victory-native";
import Bullet from "../../components/Bullet";
// import { navigate } from "../../navigationRef";
// import { firebase } from "../../firebase/config";
import { useSelector } from "react-redux";
import store from "../../redux/store";
import { navChanged } from "../../redux/actions";

const PersonalScreen = ({ navigation }) => {
  useEffect(() => {
    const didFocusSubscription = navigation.addListener("didFocus", () => {
      store.dispatch(navChanged(navigation.state.routeName));
    });
    return () => {
      didFocusSubscription.remove();
    };
  }, []);

  // const name = navigation.getParam("name");

  const expenses = useSelector((state) => state.personalExpense);
  // Logging Out
  // // const onLogoutPress = () => {
  // //   firebase
  // //     .auth()
  // //     .signOut()
  // //     .then(() => {
  // //       navigate("Welcome");
  // //     })
  // //     .catch((error) => {
  // //       alert(error);
  // //     });
  // // };

  const totalPrice = () => {
    var sum = 0;

    expenses.map((item) => {
      sum += item.price;
    });

    return sum;
  };

  function renderProgressBar() {
    return expenses.map((item) => {
      const expensePercentage = (item.price / totalPrice()) * 100;
      return (
        <ProgressBar
          key={item.id + "Bar"}
          data={item}
          percentage={expensePercentage}
          nav="PersonalCategory"
        />
      );
    });
  }

  function renderBullets() {
    return expenses.map((item) => {
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
      if (expenses.length === 0) {
        return ["#808080"];
      } else {
        console.log(expenses);
        return expenses.map((item) => item.color);
      }
    };

    return (
      <>
        <VictoryPie
          data={
            expenses.length === 0
              ? [{ category: "empty", price: 100 }]
              : expenses
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
      {/* Button For Logging Out */}
      {/* <Button title="Log Out" onPress={onLogoutPress} /> */}
      {/* Month Button */}
      <TouchableOpacity>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Text>Ekim </Text>
          <Image source={require("../../../assets/arrow-down-icon.png")} />
        </View>
      </TouchableOpacity>

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

export default PersonalScreen;
