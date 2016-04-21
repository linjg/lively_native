/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var React=require('react-native')
var{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} = React;



var Home =require("./ios_component/home");
var Find =require("./ios_component/find");
var My =require("./ios_component/my");

var  lively_native= React.createClass({
  getInitialState: function() {
      return {
          selectedTab: 'Home'
      };
  },
  render:function() {
    return (
       <TabBarIOS>
           <TabBarIOS.Item 
                selected={this.state.selectedTab === 'Home'}
                title="主页"
                name="Home"
                icon={{uri: './image/flux.png', isStatic: true}}
                onPress={() => {
                    this.setState({
                      selectedTab: 'Home'
                    });
                }}>
               <NavigatorIOS style={Style.container}
                    tintColor={'#333344'}
                    initialRoute={{
                      title: '主页',
                      component: Home
                    }}
                    itemWrapperStyle={Style.navigator} />
            </TabBarIOS.Item>
            <TabBarIOS.Item 
                selected={this.state.selectedTab === 'find'}
                title="发现"
                name="find"
                icon={{uri: './image/flux.png', isStatic: true}}
                onPress={() => {
                    this.setState({
                      selectedTab: 'find'
                    });
                }}>
                <NavigatorIOS style={Style.container}
                    tintColor={'#333344'}
                    initialRoute={{
                      title: '发现',
                      component: Find
                    }}
                    itemWrapperStyle={Style.navigator} />
            </TabBarIOS.Item>
            <TabBarIOS.Item 
                selected={this.state.selectedTab === 'my'}
                title="我的"
                name="my"
                icon={{uri: './image/flux.png', isStatic: true}}
                onPress={() => {
                    this.setState({
                      selectedTab: 'my'
                    });
                }}>
                 <NavigatorIOS style={Style.container}
                    tintColor={'#333344'}
                    initialRoute={{
                      title: '我的',
                      component: My
                    }}
                    itemWrapperStyle={Style.navigator} />
            </TabBarIOS.Item>
       </TabBarIOS>
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


AppRegistry.registerComponent('lively_native', () => lively_native);
