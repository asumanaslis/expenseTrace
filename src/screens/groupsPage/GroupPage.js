
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class GroupPage extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#1e1e1e", flex: 1 }}>
                <Text style={{ color: "#ffff", alignItems: 'center', flexDirection: "row", justifyContent: 'center' }}> textInComponent </Text>
            </View>
        )
    }
}
