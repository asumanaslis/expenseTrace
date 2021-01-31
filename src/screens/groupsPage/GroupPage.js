import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Color } from '../../assets/colors'
import Icon from 'react-native-vector-icons/Ionicons';

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
                        <Icon name="lock-closed-outline" size={30} color="black" ></Icon>
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
                        <Icon name="lock-closed-outline" size={30} color="black" ></Icon>
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
        paddingTop: 30
    },
    mainTitleText: {
        fontSize: 35,
        fontWeight: "bold",
        flexDirection: "row",
        textAlign: 'center'
    },
    mainComponent: {
        borderBottomWidth: 1,
        borderBottomColor: Color.secondColor,
        flexDirection: "row",
        marginTop: 20
    },
    componentTexts: {
        flexDirection: "column",
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    titleText: {
        fontSize: 23,
        fontWeight: "bold"
    },
    subtitleText: {
        fontSize: 16,
        color: Color.secondColor,
        textAlignVertical: "bottom",
    },
    horizontalTexts: {
        flexDirection: "row",
    },
    dateText: {
        fontSize: 13,
        fontWeight: "600"
    },
    icon: {
        flexDirection: "row",
        marginStart: 140,
        alignItems: "center"
    }
})