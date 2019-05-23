import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Lista from './src/Lista';
import Receita from './src/Receita';

const navegador = createStackNavigator({
  Lista :{
    screen:Lista
  },
  Receita:{
    screen:Receita
  }
});

export default createAppContainer(navegador);


