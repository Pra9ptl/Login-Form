import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, TouchableOpacity, YellowBox } from 'react-native';
import { Icon } from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
console.disableYellowBox = true;

class MainActivity extends Component {
    static navigationOptions =
    {
        backgroundColor: '#C7B097',
        title: 'MainActivity',
    };

    state = {
        user: '',
        password: '',
    }

    saveUserHandler = ( inputName ) => {
        this.setState( {
          user: inputName
        } )
    }

    savePasswordHandler = ( inputpassword ) => {
        this.setState( {
          password: inputpassword
        } )
    }

    showData = () => {
        if(this.state.user == 'Jarvis' && this.state.password == '1234'){
           console.warn("Success");
           this.props.navigation.navigate('Second');
        } else {
           console.warn('Fail')
        }
    }

    render() {
        return(
            <View style={styles.container}>
               <View>
               <Icon
                  name='user'
                  type='evilicon'
                  color='#517fa4'
                  iconStyle={{fontSize: 70}}
                  />
               </View>
               <Text style={styles.head}>
                  Login Form
               </Text>

                <TextInput style={styles.inputBox}
                value = {this.state.user}
                onChangeText = {(user) => this.saveUserHandler(user) }
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>
                
                <TextInput style={styles.inputBox}
                value = {this.state.password}
                onChangeText = {(password) => this.savePasswordHandler(password) }
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#002f6c"
                ref={(input) => this.password = input}
                />

                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText} onPress={this.showData}>Login</Text>
                </TouchableOpacity>
            </View>
            
        )
    }

}

class SecondActivity extends Component {
    static navigationOptions =
   {
      title: 'SecondActivity',
   };
 
   render()
   {
      return(
         <View style = { styles.container }>
 
            <Text style = { styles.ActivityNameTextCss }> SecondActivity </Text>
 
         </View>
      );
   }
}


const styles = StyleSheet.create({
    container: {
       width: '100%',
       height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#81BEF7'
    },
    inputBox: {
         width: '90%',
        backgroundColor: '#eeeeee', 
        borderRadius: 15,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    head: {
      fontSize: 30,
      justifyContent: 'center'
    },
    button: {
        width: '90%',
        backgroundColor: 'green',
        borderRadius: 20,
        marginVertical: 10,
        paddingVertical: 20
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});

const Nav = createStackNavigator(
    {
      First: { screen: MainActivity },
      
      Second: { screen: SecondActivity }
    });

const LoginForm = createAppContainer(Nav);

export default LoginForm;
    
AppRegistry.registerComponent('LoginForm', () => LoginForm);