import React, { Component, useState } from 'react'
import { Text, View, LogBox, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { FlatList, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
// import { BottomPopup } from "../../components/bottomPopUp"

import Icon from 'react-native-vector-icons/FontAwesome';

import { VictoryPie } from "victory-native";
import { Color } from '../../assets/colors';
import { StyleVariables } from '../../styleVariable/StyleVariable';
import { RFPercentage } from 'react-native-responsive-fontsize';

const data = [
    {
        id: 1,
        expenseTitle: "Yeme-İçme",
        price: 2500,
        color: "#FF8552",
    },
    {
        id: 2,
        expenseTitle: "Market",
        price: 1100,
        color: "#301934",
    },

    {
        id: 3,
        expenseTitle: "Eğlence",
        price: 580,
        color: "#DB6C79",
    },
    {
        id: 4,
        expenseTitle: "Genel",
        price: 1000,
        color: "#297373",
    },

    {
        id: 5,
        expenseTitle: "Hediyeler",
        price: 10,
        color: "#FAE3E3",
    },
    {
        id: 6,
        expenseTitle: "Tatil",
        price: 5000,
        color: "#846B8A",
    },

    {
        id: 7,
        expenseTitle: "Mutfak masrafı",
        price: 4000,
        color: "#EA2B1F",
    },
];

const Item = ({ expenseTitle }) => (
    <View style={styles.main}>
        <View style={styles.mainComponent}>
            <View style={{ flexDirection: "column" }}>
                <View style={styles.componentTexts}>
                    <View style={styles.horizontalTexts}>
                        <Text style={styles.titleText}>{expenseTitle}</Text>
                        <Text style={styles.subtitleText}>Expense Subtitle</Text>
                    </View>
                    <Text style={styles.dateText}>30/01/2021</Text>
                </View>
            </View>
            <View style={styles.price}>
                <Text style={styles.priceText}>32₺</Text>
            </View>
        </View>
    </View>
);

const expenseTitleExpenseGroup = () => {

    const renderItem = ({ item }) => (
        <Item expenseTitle={item.expenseTitle} />
    );

    let popUpRef = React.createRef()

    const onShowPopUp = () => {
        popUpRef.show()
    }

    const popuplist = [
        {
            id: 1,
            name: "task"
        },
        {
            id: 2,
            name: "as"
        },
        {
            id: 3,
            name: "da"
        },
    ]

    const onClosePopUp = () => {
        popUpRef.close()
    }

    const totalPrice = () => {
        var sum = 0;

        data.map((item) => {
            sum += item.price;
        });

        return sum;
    };

    const missPrice = () => {
        var sum = -850;

        return sum;
    }

    function renderChartView() {
        const colorScales = data.map((item) => item.color);

        return (
            <>
                <VictoryPie
                    data={data}
                    x={"expenseTitle"}
                    y={"price"}
                    labels={() => null}
                    innerRadius={100}
                    animate={{
                        duration: 1000,
                    }}
                    style={{
                        parent: {
                            ...styles.shadow,
                        },
                    }}
                    width={350}
                    height={350}
                    colorScale={colorScales}
                />

                <View style={styles.pricesArea}>
                    <Text style={styles.totalPrice}>
                        {totalPrice()}₺
              </Text>
                    <Text style={styles.missPrice}>
                        {missPrice()}₺
              </Text>
                </View>
            </>
        );
    }

    return (
        <>
            <StatusBar barStyle="dark-content"></StatusBar>
            <SafeAreaView>
                <ScrollView>

                    <View style={styles.pickers}>
                        <TouchableWithoutFeedback style={styles.dropDown} onPress={onShowPopUp}>
                            <Text style={styles.textStyle}>Ekim</Text>
                            <Icon name="sort-down" size={25} style={styles.icons} />
                        </TouchableWithoutFeedback>
                        {
                            //         <BottomPopup
                            //          title="selamualeyke"
                            //          ref={(target) => popUpRef = target}
                            //          OnTouchOutside={onClosePopUp}
                            //          data={popuplist}
                            //      >
                            //      </BottomPopup>
                        }
                        <TouchableWithoutFeedback style={styles.dropDown} onPress={onShowPopUp}>
                            <Text style={styles.textStyle}>Yeme-İçme</Text>
                            <Icon name="sort-down" size={25} style={styles.icons} />
                        </TouchableWithoutFeedback>
                        {
                            //         <BottomPopup
                            //          title="selamualeyke"
                            //          ref={(target) => popUpRef = target}
                            //          OnTouchOutside={onClosePopUp}
                            //          data={popuplist}
                            //      >
                            //      </BottomPopup>
                        }
                    </View>

                    <View style={styles.cake}>
                        {renderChartView()}
                    </View>

                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />

                    <View style={{ padding: 50 }}></View>
                </ScrollView>

            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    dropDown: {
        flexDirection: "row",
        alignItems: "center",
    },
    textStyle: {
        fontSize: RFPercentage(3)
    },
    icons: {
        color: "#000000",
        paddingStart: StyleVariables.width * 0.02,
    },
    pickers: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: StyleVariables.height * 0.02
    },
    cake: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    pricesArea: {
        position: "absolute",
        top: "43%",
        left: "36%"
    },
    totalPrice: {
        fontSize: 40,
        color: Color.yellow,
        flexDirection: "column",
        justifyContent: 'center',
        textAlign: "center"
    },
    missPrice: {
        fontSize: RFPercentage(3),
        color: Color.red,
        flexDirection: "column",
        justifyContent: 'center',
        textAlign: "center"
    },
    main: {
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
        alignSelf: 'flex-end',
        marginStart: 5
    },
    horizontalTexts: {
        flexDirection: "row",
    },
    dateText: {
        fontSize: RFPercentage(2),
        fontWeight: "600",
        marginTop: StyleVariables.width * 0.01
    },
    price: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end",
        marginEnd: StyleVariables.width * 0.04
    },
    priceText: {
        fontSize: RFPercentage(3.7),
        fontWeight: "bold",
        textAlign: 'right',
    },
    iconStyle: {
        fontSize: RFPercentage(4),
        color: Color.textColor
    }
})

export default expenseTitleExpenseGroup;