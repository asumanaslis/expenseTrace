import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { navigate } from "../navigationRef";

import { Color } from '../../src/assets/colors'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleVariables } from "../../src/styleVariable/StyleVariable"

const GroupList = () => {
  return (
    <View style={styles.main}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <View style={styles.mainComponent}>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.componentTexts}>
            <View style={styles.horizontalTexts}>
              <Text style={styles.titleText}>Group Title</Text>
              <Text style={styles.subtitleText}>Group Subtitle</Text>
            </View>
            <Text style={styles.dateText}>30/01/2021</Text>
          </View>
        </View>
        <View style={styles.icon}>
          <Icon name="lock-closed-outline" style={styles.iconStyle}  ></Icon>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    color: Color.backgroundColor,
    paddingTop: StyleVariables.height * 0.04
  },
  mainComponent: {
    borderBottomWidth: 1,
    borderBottomColor: Color.secondColor,
    flexDirection: "row",
  },
  componentTexts: {
    flexDirection: "column",
    paddingHorizontal: StyleVariables.width * 0.05,
  },
  titleText: {
    fontSize: RFPercentage(3.2),
    fontWeight: "bold"
  },
  subtitleText: {
    fontSize: RFPercentage(2),
    color: Color.secondColor,
    textAlignVertical: "bottom",
    alignSelf: 'flex-end',
    marginStart: 5,
  },
  horizontalTexts: {
    flexDirection: "row",
  },
  dateText: {
    fontSize: RFPercentage(1.8),
    fontWeight: "600"
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    marginEnd: StyleVariables.width * 0.04
  },
  iconStyle: {
    fontSize: RFPercentage(4),
    color: Color.textColor,
    fontWeight: "bold",
    textAlign: 'right',
  }
})

export default GroupList;

