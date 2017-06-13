import React from 'react'
import { View, Text, ListView, Switch } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import { Constants } from 'expo'
import { Link } from 'react-router-native'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })

const data = ds.cloneWithRows([
  { id: 1, name: 'Javascript' },
  { id: 2, name: 'Closure' }
])

const Row = wrap(props => {
  return (
    <View cls="bb flx-row jcsb aic">
      <Text cls='f4 pv2 ml3'>{props.name}</Text>
      <Switch cls='mr3' />
    </View>
  )
})
class Settings extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <View cls="" style={{ paddingTop: Constants.statusBarHeight }}>
        <View cls="h3 bg-lightgray jcsb aic flx-row">
          <Text cls='ml2 f4' >Settings</Text>
          <Link to="/" >
            <Text cls='mr3'>close</Text>   
          </Link>
        </View>
        <ListView
          cls="mt3"
          dataSource={data}
          renderRow={({ id, ...item }) => {
            return <Row key={id} {...item} />
          }}
        />
      </View>
    )
  }
}

export default wrap(Settings)