import React from 'react'
import Header from '../containers/header'
import Repos from '../containers/repos'
import NativeTachyons from 'react-native-style-tachyons'
import { View } from 'react-native'

class List extends React.Component {
  componentDidMount() {

  } 
  render() {
    return (
      <View>
        <Header />
        <Repos />
      </View>
    )
  }
}

export default List