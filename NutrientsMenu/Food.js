 import React, { Component } from "react";
 
import {
    View,
    Text,
    StyleSheet,
    Alert,
    TouchableOpacity
} from "react-native";
import axios from "axios";

export default class ComponentDidMount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {}
        };
    }
componentDidMount(){
  this.getNutrients()
  try{
    setInterval(async()=>{
      this.getNutrients()
    },5000)
  }
catch(e){
  console.log(e)
}
} 
  getNutrients = () => {
        axios
            .get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response => {
                this.setState({ location: response.data })
            })
            .catch(error => {
                alert(error.message)
            })
}
  

render() {
    if (Object.keys(this.state.location).length === 0) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Loading</Text>
            </View>
        )
    } else {

        return (
        <View
        
        style={styles.infoContainer}>
      <Text style={styles.infoText}>Latitude:{this.state.location.latitude} </Text>
      <Text style={styles.infoText}>Longitude:{this.state.location.longitude} </Text>
      <Text style={styles.infoText}>Altitude:{this.state.location.altitude} </Text>
      <Text style={styles.infoText}>Velocity:{this.state.location.velocity} </Text>
         <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Drinks2")
                    }>
                    </TouchableOpacity>

    <Text>Eat more food with less carbohydrates and be sure to eat lots of veggies and make sure there is a balanced diet.</Text>
        </View>
        
        );
    }
}
}

        
    

const styles = StyleSheet.create({
  infoContainer:{
    flex: 0.2, 
    backgroundColor: 'white', 
    marginTop: -10, 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    padding: 30
  },
  infoText:{
    fontSize:15,
    color:"black",
    fontWeight:"boulder",
  }
    
});