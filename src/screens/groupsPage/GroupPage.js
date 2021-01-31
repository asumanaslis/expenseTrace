import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Color } from '../../assets/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { StyleVariables } from "../../styleVariable/StyleVariable"
export default class GroupPage extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.mainTitleText}>Groups</Text>
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
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        color: Color.backgroundColor,
        paddingTop: StyleVariables.height * 0.04
    },
    mainTitleText: {
        fontSize: RFPercentage(5),
        fontWeight: "bold",
        flexDirection: "row",
        textAlign: 'center'
    },
    mainComponent: {
        borderBottomWidth: 1,
        borderBottomColor: Color.secondColor,
        flexDirection: "row",
        marginTop: StyleVariables.height * 0.02
    },
    componentTexts: {
        flexDirection: "column",
        paddingHorizontal: StyleVariables.width * 0.05,
        paddingVertical: StyleVariables.height * 0.01
    },
    titleText: {
        fontSize: RFPercentage(3.2),
        fontWeight: "bold"
    },
    subtitleText: {
        fontSize: RFPercentage(2),
        color: Color.secondColor,
        textAlignVertical: "bottom",
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
        marginStart: 140,
        alignItems: "center"
    },
    iconStyle: {
        fontSize: RFPercentage(4),
        color: Color.textColor
    }
})