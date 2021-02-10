import React, { Component } from 'react'
import { Text, View, Modal, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export default class BottomPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    show = () => {
        this.setState({ show: true })
    }

    close = () => {
        this.setState({ show: false })
    }

    renderOutsideTouchable(OnTouch) {
        const view = <View style={{ flex: 1, width: "100%" }}></View>
        if (!OnTouch) return view

        return (
            <TouchableWithoutFeedback onPress={OnTouch} style={{ flex: 1, width: "100%" }}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    renderTitle = () => {
        const { show } = this.state
        return (
            <View>
                <Text style={{ color: "#1e1e1e", fontSize: 20, fontWeight: "bold", margin: 15 }}>{title}</Text>
            </View>
        )
    }

    renderContent = () => {
        const { data } = this.props
        return (
            <View>
                <FlatList style={{
                    marginBottom: 20
                }}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={this.renderItem}
                    extraData={data}
                    keyExtractor={(item, index => index.toString())}
                    ItemSeparatorComponent={this.renderSeperator}
                    contentContainerStyle={{ paddingBottom: 40 }}
                >
                </FlatList>
            </View >
        )
    }

    renderItem = ({ item }) => {
        return (
            <View>
                <Text>{item.name}</Text>
            </View>
        )
    }

    renderSeperator = () => {
        <View style={{
            opacity: 0.1,
            backgroundColor: " #182e44",
            height: 1
        }}></View>
    }

    render() {
        let { show } = this.state
        const { OnTouchOutside, title } = this.props;

        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{ flex: 1, backgroundColor: "#000000", justifyContent: "flex-end" }}>
                    {this.renderOutsideTouchable(OnTouchOutside)}
                    <View style={{
                        backgroundColor: "#ffffff", width: "100%",
                        borderTopLeftRadius: 10, borderTopRightRadius: 10,
                        paddingHorizontal: 10,
                    }}>
                        {this.renderTitle()}
                        {this.renderContent()}
                    </View>
                </View>
            </Modal>
        )
    }
}
