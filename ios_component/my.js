/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var React=require('react-native')
var{
  
  StyleSheet,
  Text,
 View,
} = React;





var  My= React.createClass({
  getInitialState: function() {
      return {
          selectedTab: 'main'
      };
  },
  render:function() {
    return (
      <View style={Style.container}>
        <Text style={Style.welcome}>
          我的
        </Text>
        <Text style={Style.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={Style.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
})

var  Style = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});


module.exports = My;
