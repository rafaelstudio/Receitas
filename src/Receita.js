import React, { Component } from 'react'
import { Text, StyleSheet, View,Image} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';

import ReceitaResumo from './ReceitaResumo';
import ReceitaIngradientes from './ReceitaIngredientes';
import ReceitaModo from './ReceitaModo';



const Abas = createMaterialTopTabNavigator({
    Resumo:{
      screen:ReceitaResumo
    },
    Ingredientes:{
      screen:ReceitaIngradientes
    },
    Preparo:{
      screen:ReceitaModo
    }
}, {
  tabBarPosition:'top',
  animationEnabled:true,
  tabBarOptions: {
      showIcon:false,
      style: {
          backgroundColor:'#EEEEEE'
      },
      labelStyle: {
          fontSize:14,
          height:47,
          lineHeight:47
      },
      activeTintColor:'#9c27b0',
      inactiveTintColor:'#CCCCCC'
  }
});

const AbasContainer = createAppContainer(Abas); // Coloquei em uma constante, 

export default class Receita extends Component {

  static navigationOptions = {
    title:'Receita',
    header:null
  };


  constructor(props){
    super(props)
    this.state = {

    };
       this.goBack = this.goBack.bind(this); 
  }

  goBack(){
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container} >
        <TouchableHighlight underlayColor="#CCC" onPress={this.goBack}>
            <Image source={require('../assets/Images/back.png')} style={styles.backImage}/>
        </TouchableHighlight>
          <Image source={{uri:this.props.navigation.state.params.imagem}} style={styles.imgReceita} />
          {/* Esta chamando o createAppContainer nessesario para aparecer as abas */}
        <AbasContainer screenProps={this.props.navigation.state.params.Abas} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20
  },
  backImage:{
    width:26,
    height:26
  },
  backButton:{
    width:26,
    height:26,
    marginLeft:10,
    marginTop:10,
    zIndex:99
  },
  imgReceita:{
    height:200,
    marginTop:-51,
  }
})
