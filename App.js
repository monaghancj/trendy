import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'
import { NativeRouter, Route, Switch } from 'react-router-native'

import List from './pages/list'
import Settings from './pages/settings'
import Show from './pages/show'

NativeTachyons.build({rem: 16}, StyleSheet)

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Route exact path="/" component={List} />
          <Switch>
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/:id" component={Show} />
          </Switch>
        </View>  
      </NativeRouter>
    )
  }
}
