import React from 'react'
import { View, Text, ListView } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import Row from '../components/row'

const Repos = (props) => {
  return (
    <ListView
      cls="mt2"
      dataSource={props.dataSource}
      renderRow={ ({objectID, ...repo}) => {
        return <Row key={objectID} objectID={objectID} {...repo} />
      }}
    />
  )
}

export default wrap(Repos)