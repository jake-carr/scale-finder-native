import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 5,
  },
  fretLabel: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    width: 55,
    lineHeight: 28,
  },
  double: {
    lineHeight: 20,
  },
  placeholder: {
    width: 35,
  },
});

export default class FretLabels extends Component {
  render() {
    const dots = [2, 4, 6, 8, 11];
    return (
      <View style={styles.row}>
        <Text styles={styles.placeholder}> </Text>
        {[...Array(12)].map((e, i) => (
          <View key={i} styles={styles.fret}>
            {dots.includes(i) ? (
              i === 11 ? (
                <Text style={[styles.fretLabel, styles.double]}>
                  &#8226;
                  {'\n'}
                  &#8226;
                </Text>
              ) : (
                <Text style={styles.fretLabel}>&#8226;</Text>
              )
            ) : (
              <Text style={styles.fretLabel}> </Text>
            )}
          </View>
        ))}
      </View>
    );
  }
}
