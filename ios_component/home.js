'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  TextInput,
  Image,
} = ReactNative;


var Home = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'TabBarExample',

  getInitialState: function() {
    return {
      selectedTab: 'redTab',
      notifCount: 0,
      presses: 0,
      text: '',
    };
  },

 

  render: function() {
    return (
      <View style={[styles.tabContent, {backgroundColor: '#FFFFFF'}]}>
      <View style={[styles.topView, {backgroundColor: '#FF7F00'}]}>
         <Image
            style={styles.icon}
            source={require('../easyicon.png')}
          />
         <TextInput
            style={[styles.textInput, {backgroundColor: '#CD0000'}]}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            selectTextOnFocus={true}
          />
      </View>

      <View style={[{flex:1,backgroundColor:'#fe0000',height:10}]}>
         <Image
            style={{flex:1,height:100,resizeMode:Image.resizeMode.contain}}
            source={require('../e3deb8.png')}
          />
      </View>


        <Text style={styles.tabText}>123</Text>
      </View>
    );
  },

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',

  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  topView:{
    alignItems: 'center',
    width: 500,
    height: 68,
    flexDirection:'row',
    justifyContent:'center',
  },
  
  textInput:{
    height: 30,
    width:280,
    backgroundColor: '#CD0000',
    // flex:3
    marginTop:25,
    marginLeft:10,
  
  },
  icon:{
    height:25,
    width: 25,
    marginTop:15,
    marginLeft:0,
  }


  
});

module.exports = Home;
