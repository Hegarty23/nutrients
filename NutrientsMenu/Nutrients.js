import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    ImageBackground,
    Alert,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from "react-native";
import axios from "axios";

export default class Drinks extends Component {
   constructor(props) {
        super(props);
        this.state = {
            meteors: {},
            isRefresh: false
        };
    }

    componentDidMount() {
        this.getMeteors()
    }

    getMeteors = () => {
        axios
            .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=Lwk2AknRDTuMpJqlFt2OiPM6fJOhfsi2tGbQb63Q")
            .then(response => {
                this.setState({ meteors: response.data.near_earth_objects })
            })
            .catch(error => {
                alert(error.message)
            })
    }
     keyExtractor= (item,index)=>index.toString()
     renderItem=({item})=>{
       var meteor= item
       var bgImage, speed, size
       if (meteor.threat_score<=30){
         bgImage=require("../food/Food.jpg")
         speed=require("../food/Softdrinks.jpg")
         size=100
       }
       else if (meteor.threat_score<=7){
         bgImage=require("../food/Rice.jpg")
         speed=require("../food/taco.jpg")
         size=150
       }
        else {
        bgImage=require("../food/morefastfood.jpg")
         speed=require("../food/cocktails.jpg")
         size=200
        }
        return (
          <View>
          <ImageBackground source={bgImage} style={styles.bgImage}>
          <View style={styles.gifContainer}>
           <Image source={speed} style={{width:size, height:size, alignSelf:"center"}}/>
           <View>
           <Text style={[styles.addTitle, {marginTop:400, marginLeft:50}]}>
           {item.name}
           </Text>
           <Text style={[styles.cardText, { marginTop: 20, marginLeft: 50 }]}>Closest to Earth - {item.close_approach_data[0].close_approach_date_full}></Text>
           <Text style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}>Minimum Diameter (KM) - {item.estimated_diameter.kilometers.estimated_diameter_min}</Text>
           <Text style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}>Maximum Diameter (KM) - {item.estimated_diameter.kilometers.estimated_diameter_max}</Text>
           <Text style={[styles.cardText, { marginTop: 5, marginLeft: 50 }]}>Missing Earth by (KM) - {item.close_approach_data[0].miss_distance.kilometers}</Text>
           </View>
           </View>
          </ImageBackground>
          </View>
         
        )
     }
    render() {
      if (Object.keys(this.state.Drinks).length === 0) {
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
      var meteorArray= Object.keys(this.state.meteors).map(meteorDate=>{
       return this.state.meteors[meteorDate]
      })
      var meteors=[].concat.apply([],meteorArray)
      meteors.forEach(function(element){
        var diameter=(element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max) / 2
        var threatScore=(diameter/element.close_approach_data[0].miss_distance.kilometers) * 1000000000
        element.threat_score=threatScore
      })
      meteors.sort(function(a,b){
        return b.threat_score-a.threat_score
      })
        return (
            <View
                style={{
                    flex: 1,
                }}>
                <FlatList
                keyExtractor={this.keyExtractor}
                data={meteors}
                renderItem={this.renderItem}
                horizontal={true}
                />
            </View>
        )
    }
    }
}

const styles=StyleSheet.create({
 bgImage:{flex:1, resizeMode:"contain", width:Dimensions.get("window").width, height:Dimensions.get("window").height},
 addTitle:{fontSize:20, marginBottom:10, fontWeight:"bold", color:"white"},
 cardText:{color:"white"}


})












