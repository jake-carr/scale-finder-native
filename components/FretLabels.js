import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { screenSize, assignStyles } from '../constants';

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 25,
    marginTop: 0,
  },
  fretLabel: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    width: 60,
    lineHeight: 28,
  },
  double: {
    lineHeight: 20,
  },
  placeholder: {
    width: 40,
  },
});

const styles_small = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: '2.5%',
    marginTop: 5
  },
  fretLabel: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    width: 45,
    lineHeight: 28,
  },
  double: {
    lineHeight: 20,
  },
  placeholder: {
    width: 0,
  },
});

const styles_large = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: '2.5%',
    marginTop: 5,
  },
  fretLabel: {
    textAlign: 'center',
    color: 'white',
    fontSize: 46,
    width: 76,
    lineHeight: 50,
  },
  double: {
    lineHeight: 30,
    marginLeft: 5,
  },
  placeholder: {
    width: 0,
  },
});

const styles_xl = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 35,
    marginTop: 10,
  },
  fretLabel: {
    textAlign: 'center',
    color: 'white',
    fontSize: 50,
    width: 100,
    lineHeight: 50,
  },
  double: {
    lineHeight: 40,
    marginLeft: 5,
  },
  placeholder: {
    width: 0,
  },
});

export default class FretLabels extends Component {
  state = {
    styles: styles
  }

  componentDidMount() {
    assignStyles(screenSize);
  }


  render() {
    const dots = [2, 4, 6, 8, 11];
    return (
      <View style={this.state.styles.row}>
        <Text styles={this.state.styles.placeholder}> </Text>
        {[...Array(12)].map((e, i) => (
          <View key={i} styles={this.state.styles.fret}>
            {dots.includes(i) ? (
              i === 11 ? (
                <Text style={[this.state.styles.fretLabel, this.state.styles.double]}>
                  &#8226;
                  {'\n'}
                  &#8226;
                </Text>
              ) : (
                <Text style={this.state.styles.fretLabel}>&#8226;</Text>
              )
            ) : (
              <Text style={this.state.styles.fretLabel}> </Text>
            )}
          </View>
        ))}
      </View>
    );
  }
}
