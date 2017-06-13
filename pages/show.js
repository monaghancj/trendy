import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import { Constants } from 'expo'
import { Link } from 'react-router-native'
import qs from 'querystring'
import { tail, replace, pathOr} from 'ramda'
import { connect } from 'react-redux'
import { Octicons } from '@expo/vector-icons'

const saveRepo = (dispatch, getState) => {
  const { db, repo } = getState()
  db.post(repo)
    .then(res => {
      if (res.ok) {
        history.push('/')
      }
    })
    .catch(err => console.log(err))
}

const getReadme = (url, title) => (dispatch) => {
  fetch(url)
    .then(res => res.text())
    .then(readme => dispatch({type: 'SET_REPO', payload:{readme, url, title} }))
}

class Show extends React.Component {
  componentDidMount() {
    const { url, title } = qs.parse(tail(this.props.location.search))
    const readmeUrl = replace('https://github.com', 'https://raw.githubusercontent.com', url) 
                                                        + '/master/README.md'
    this.props.dispatch(getReadme(readmeUrl, title))
  }
  render() {
    return (
      <View cls="jcsb" style={{ paddingTop: Constants.statusBarHeight }}>
        <View cls="h4 bg-lightgray jcsb aic flx-row">
          <Text cls="ml2 f4">Repo</Text>
          <Link to="/">
            <Text cls='mr2'>close</Text>
          </Link>
        </View>

        <View>
          <View cls='flx-row jcsb aic mh2 ml2'>
            <TouchableOpacity onPress={() => this.props.dispatch(saveRepo)}>
              <Octicons name="bookmark" size={32}/>
            </TouchableOpacity>
            <Text cls="ml2 f4">{pathOr('Repo', ['props','repo','title'], this)}</Text>
          </View>
          <ScrollView cls='ma2 h6'>
            <Text>{pathOr('', ['props','repo','readme'], this)}</Text>
          </ScrollView>
        </View>
        
        <View cls='absolute bottom-0 left-0 right-0 flx-row h4 bg-lightgray jcsa aic'>
          <Text>Footer</Text>
        </View>
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Show))
 