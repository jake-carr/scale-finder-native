import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { sharps, flats, scales } from '../constants.js';
import { findNoteIndex, halfStepUp, wholeStepUp, augmentedSecondUp, createScale } from '../utils.js';
import Fretboard from './Fretboard';

// scales[selectedScaleIndex]
// createScale takes pattern and root 

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',

  },
  headerText: {
    color: '#ECECEC',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  page: {
    backgroundColor: '#2B2B2B'
  },
  buttonContainer: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
  },
  highlightButton: {
    display: 'flex',
    width: 120,
    height: 40,
    backgroundColor: '#7500A3',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: 5,
  },
  toggleButton: {
    display: 'flex',
    width: 120,
    height: 40,
    backgroundColor: '#900AC5',
    justifyContent: 'center',
    textAlign: 'center'
  },
  buttonText: {
    color: '#ECECEC',
    fontSize: 16,
    justifyContent: 'center',
    textAlign: 'center',
  }
});


class ScalePage extends React.Component {
  state = {
    highlightAllRoots: false,
    preference: sharps,
    toggleButtonDisplay: 'Flats',
  }

  highlightAllRoots = () => {
    if (this.state.highlightAllRoots) {
      this.setState({ highlightAllRoots: false })
    } else {
      this.setState({ highlightAllRoots: true })
    }
  }

  toggle = () => {
    if (this.state.preference === sharps) {
      this.setState({ preference: flats, toggleButtonDisplay: 'Sharps', highlightAllRoots: false})
    } else {
      this.setState({ preference: sharps, toggleButtonDisplay: 'Flats', highlightAllRoots: false})
    }
  }

  render() {
    let { navigation } = this.props;
    let root = navigation.getParam('selectedNote');
    let preference = navigation.getParam('preference');
    let scaleIndex = navigation.getParam('selectedScaleIndex');
    let scale = scales[scaleIndex].pattern;
    let name = scales[scaleIndex].name;
    let fullScale = createScale(root, preference, scale)

    return (
      <View style={styles.page}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.highlightButton}
            onPress={this.highlightAllRoots}>
            <Text style={styles.buttonText}>Highlight Roots</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={this.toggle}>
            <Text style={styles.buttonText}>Toggle {this.state.toggleButtonDisplay}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>{root + ' ' + name}</Text>
        </View>
        <Fretboard
          scale={fullScale}
          root={root}
          preference={this.state.preference}
          highlightAllRoots={this.state.highlightAllRoots}
        ></Fretboard>
      </View>

    );
  }
}

export default ScalePage

  // <Text>Scale: {createScale(this.props.root, this.props.preference, scalePattern)}</Text>