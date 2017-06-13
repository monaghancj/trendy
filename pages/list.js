import React from 'react'
import Header from '../containers/header'
import Repos from '../containers/repos'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'

const getTrendingRepos = (dispatch) => {
  dispatch({type: 'ISLOADING', payload: true})
  return fetch('https://runkit.io/twilson63/58f64c0ce5dc270012c6eaa6/branches/master')
    .then(res => res.json())
    .then(repos => {
      dispatch({type: 'ISLOADING', payload: false})
      dispatch({type: 'SET_REPOS', payload: repos})
    })
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginTop: 472
  }
})

class List extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTrendingRepos)
  } 
  render() {
    if (this.props.loading) {
      return (
        <View cls="jcc aic">
          <ActivityIndicator
            size="large"
            animating
            style={[styles.centering, {height: 80}]}
          />
        </View>
      )
    }
    return (
      <View>
        <Header />
        <Repos dataSource={this.props.dataSource} />
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(List)