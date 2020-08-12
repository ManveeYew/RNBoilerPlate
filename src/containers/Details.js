import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from 'actions';
import {
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Container, Content } from 'native-base';
import * as Colors from 'themes/colors';

class Details extends Component {
  componentDidMount() {
  }

  onBack = () => {
    this.props.navigation.pop();
  }

  render() {
    const { fetching, filmDetails } = this.props;
    return (
      <Container style={{ backgroundColor: Colors.backgroundDark }}>
        <StatusBar barStyle="light-content"/>
        <Content
          contentContainerStyle={styles.container}
					enableResetScrollToCoords={false}
        >
        <Text>Details</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});

Details.propTypes = {
};

Details.defaultProps = {
};

const mapStateToProps = store => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
