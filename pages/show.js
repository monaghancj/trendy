import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import { Constants } from 'expo'
import { Link } from 'react-router-native'

const readme = `
  this is an awesome read me!
`
class Show extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <View cls="" style={{ paddingTop: Constants.statusBarHeight }}>
        <View cls="h3 bg-lightgray jcsb aic flx-row">
          <Text cls="ml2 f4">Repo</Text>
          <Link to="/">
            <Text cls='mr2'>close</Text>
          </Link>
        </View>
        <ScrollView cls='ma2'>
          <Text>{readme}</Text>
        </ScrollView>
      </View>
    )
  }
}

export default wrap(Show)
 