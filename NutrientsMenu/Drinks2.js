import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class UpdateScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Drink a lot of water, about 6-8 cups per day tea and other liquid with low sugar are included.
                As for your food, eat food low in carbohydrates and more of a balanced diet while making sure to mix up what is eaten. 
                Fastfood can be taken as a treat, maximum of once a week. If you have any othe enquiries please contact our Nutrients and Food company at 16936906996
              </Text>
            </View>
        )
    }
}
