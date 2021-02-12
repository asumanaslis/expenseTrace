import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Picker extends Component {
    render() {
        return (
            <View>
                <Picker>
                    <Picker.Item label="Tarih" value="0" />
                    <Picker.Item label="Ocak" value="1" />
                    <Picker.Item label="Şubat" value="2" />
                    <Picker.Item label="Mart" value="3" />
                    <Picker.Item label="Nisan" value="4" />
                    <Picker.Item label="Mayıs" value="5" />
                    <Picker.Item label="Haziran" value="6" />
                    <Picker.Item label="Temmuz" value="7" />
                    <Picker.Item label="Ağustos" value="8" />
                    <Picker.Item label="Eylül" value="9" />
                    <Picker.Item label="Ekim" value="10" />
                    <Picker.Item label="Kasım" value="10" />
                    <Picker.Item label="Aralık" value="12" />
                </Picker>
            </View>
        )
    }
}
