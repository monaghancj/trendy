import React from 'react'
import { Constants } from 'expo'
import { Octicons } from '@expo/vector-icons'
import { Link } from 'react-router-native'
import { View, Text, ListView, TouchableOpacity } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import { connect } from 'react-redux'
import { pluck } from 'ramda'

import { Row } from '../components/row'

const getBookmarks = (dispatch, getState) => {
  const { db } = getState()
  return db.allDocs({ include_docs: true }).then(res => {
    dispatch({ type: 'SET_BOOKMARKS', payload: pluck('doc', res.rows) })
  })  
}

class Bookmarks extends React.Component {
  componentDidMount(){
    this.props.dispatch(getBookmarks)
  }
  render () {
    return (
      <View>
        <View 
          cls='flx-row h4 bg-lightgray jcsb aic'
          style={{paddingTop: Constants.statusBarHeight}}
        >
          <TouchableOpacity>
            <Octicons name='mark-github' cls="f3 ml2" />
          </TouchableOpacity>

          <Text cls="black f2">Bookmarks</Text>

          <Link to='/'>
            <Octicons name="home" cls='f3 mr2' />
          </Link>
        </View>

        <ListView
          enableEmptySections
          dataSource={this.props.bookmarkDs}
          renderRow={({_id, ...doc}) => {
            return <Row key={_id} {...doc} />
          }}
        />
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Bookmarks))