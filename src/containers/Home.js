import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from 'actions';
import _debounce from 'lodash/debounce';
import _filter from 'lodash/filter';
import _isEmpty from 'lodash/isEmpty';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

class Home extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.titleText}>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
});

Home.propTypes = {
};

Home.defaultProps = {
};

const mapStateToProps = store => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
