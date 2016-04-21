/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var React=require('react-native')
var{
  
  StyleSheet,
  Text,
  Image,
 View,
} = React;





var  Home= React.createClass({
  getInitialState: function() {
      return {
          selectedTab: 'main'
      };
  },
  render:function() {
    return (
      <View style={Style.container}>
        <View style={Style.Image_outer}>
           <View style={{height:20,backgroundColor:'#333333'}}></View>
        </View>
        <View style={Style.Image_outer}>
          <View style={{height:20,backgroundColor:'#333333'}}></View>
        </View>
      </View>
    );
  }
})

var  Style = React.StyleSheet.create({
  container: {
    flexDirection:'row',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Image_s:{
    
  },
  Image_outer:{
     flex: 1,
  }
});


module.exports = Home;
