import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Text, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Color } from './assets/colors';


export default class BottomNavigator extends Component {
    toggleOpen = () => { alert("sa") }

    render() {
        return (
            <View style={styles.Main}>
                <View style={styles.buttonSettings}>
                    <TouchableWithoutFeedback onPress={this.toggleOpen}>
                        <View style={[styles.button, styles.actionBtn]}>
                            <Ionicons name="add" size={32} color={Color.backgroundColor} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={styles.buttonBarSettings}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: 70 }}>
                        <TouchableOpacity onPress={() => { Alert.alert('click') }}>
                            <Ionicons name="person-outline" size={32} color={Color.buttonColor} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', }}>
                        <TouchableOpacity
                            onPress={() => { Alert.alert("click") }}
                        >
                            <Ionicons name="people-outline" size={42} color={Color.buttonColor} />
                        </TouchableOpacity>
                    </View>
                    {/* </View> */}
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    Main: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Color.secondColor
    },
    buttonSettings: {
        position: 'absolute',
        alignSelf: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
        bottom: 35,
        zIndex: 10
    },
    buttonBarSettings: {
        position: 'absolute',
        backgroundColor: Color.gray,
        bottom: 0,
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        position: 'absolute',
        top: 5,
        left: 5,
    },
    actionBtn: {
        backgroundColor: Color.buttonColor,
    }
});