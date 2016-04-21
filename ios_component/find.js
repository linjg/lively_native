
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





var  Find= React.createClass({
  getInitialState: function() {
      return {
          selectedTab: 'main'
      };
  },
  render:function() {
    return (
      <View>
      <Text>Find</Text>
      </View>
    );
  }
})

var  Style = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7EAEC'
  },
  navigator: {
    backgroundColor: '#E7EAEC'
  }
});


module.exports = Find;
