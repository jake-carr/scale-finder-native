import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { sharps, flats, scales, screenSize } from '../constants.js';
import {
  createScale,
  convertNoteToString
} from '../utils.js';
import Fretboard from './Fretboard';


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1%',
  },
  headerText: {
    color: '#ECECEC',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28, 
  },
  rootText: {
    color: '#23C486',
  },
  page: {
    backgroundColor: '#2B2B2B',
  },
  buttonContainer: {
    marginTop: '1%',
    marginLeft: '1%',
    marginRight: '1%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  highlightButton: {
    display: 'flex',
    width: 120,
    height: 30,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#7500A3',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: 5,
  },
  toggleButton: {
    display: 'flex',
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: '#900AC5',
    borderColor: 'transparent',
    justifyContent: 'center',
    textAlign: 'center',
  },
  toggleButtonText: {
    color: '#ECECEC',
    fontSize: 22,
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: '#ECECEC',
    fontSize: 14,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

const styles_small = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1%',
  },
  headerText: {
    color: '#ECECEC',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28, 
  },
  rootText: {
    color: '#23C486',
  },
  page: {
    backgroundColor: '#2B2B2B',
  },
  buttonContainer: {
    marginTop: '1%',
    marginLeft: '1%',
    marginRight: '1%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  highlightButton: {
    display: 'flex',
    width: 120,
    height: 30,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#7500A3',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: 5,
  },
  toggleButton: {
    display: 'flex',
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: '#900AC5',
    borderColor: 'transparent',
    justifyContent: 'center',
    textAlign: 'center',
  },
  toggleButtonText: {
    color: '#ECECEC',
    fontSize: 22,
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: '#ECECEC',
    fontSize: 14,
    justifyContent: 'center',
    textAlign: 'center',
  },
});

const styles_large = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5%',
  },
  headerText: {
    color: '#ECECEC',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 48, 
  },
  rootText: {
    color: '#23C486',
  },
  page: {
    backgroundColor: '#2B2B2B',
  },
  buttonContainer: {
    marginTop: '1%',
    marginLeft: '1%',
    marginRight: '1%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  highlightButton: {
    display: 'flex',
    width: 160,
    height: 40,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#7500A3',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: 5,
  },
  toggleButton: {
    display: 'flex',
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#900AC5',
    borderColor: 'transparent',
    justifyContent: 'center',
    textAlign: 'center',
  },
  toggleButtonText: {
    color: '#ECECEC',
    fontSize: 32,
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: '#ECECEC',
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

const styles_xl = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5%',
  },
  headerText: {
    color: '#ECECEC',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 54, 
  },
  rootText: {
    color: '#23C486',
  },
  page: {
    backgroundColor: '#2B2B2B',
  },
  buttonContainer: {
    marginTop: '1%',
    marginLeft: '1%',
    marginRight: '1%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  highlightButton: {
    display: 'flex',
    width: 200,
    height: 60,
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: '#7500A3',
    justifyContent: 'center',
    textAlign: 'center',
    marginRight: 5,
  },
  toggleButton: {
    display: 'flex',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: '#900AC5',
    borderColor: 'transparent',
    justifyContent: 'center',
    textAlign: 'center',
  },
  toggleButtonText: {
    color: '#ECECEC',
    fontSize: 36,
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: '#ECECEC',
    fontSize: 22,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

class ScalePage extends React.Component {
  state = {
    highlightAllRoots: false,
    preference: sharps,
    toggleButtonDisplay: '♭',
    styles: styles
  };

  componentDidMount() {
    if (screenSize === 'small') {
      this.setState({ styles: styles_small })
    } else if (screenSize === 'large') {
      this.setState({ styles: styles_large })
    } else if (screenSize === 'xl') {
      this.setState({ styles: styles_xl })
    }
  }


  highlightAllRoots = () => {
    this.setState({
      highlightAllRoots: !this.state.highlightAllRoots,
    });
  };

  toggle = () => {
    if (this.state.preference === sharps) {
      this.setState({
        preference: flats,
        toggleButtonDisplay: '♯',
        highlightAllRoots: false,
      });
    } else {
      this.setState({
        preference: sharps,
        toggleButtonDisplay: '♭',
        highlightAllRoots: false,
      });
    }
  };

  render() {
    let { navigation } = this.props;
    const { preference, highlightAllRoots } = this.state;
    let root = navigation.getParam('selectedNote');
    let rootIndex = navigation.getParam('selectedNoteIndex');
    let scaleIndex = navigation.getParam('selectedScaleIndex');
    let scale = scales[scaleIndex].pattern;
    let name = scales[scaleIndex].name;

    return (
      <View style={this.state.styles.page}>
        <View style={this.state.styles.buttonContainer}>
          <TouchableOpacity
            style={this.state.styles.highlightButton}
            onPress={this.highlightAllRoots}
          >
            <Text style={this.state.styles.buttonText}>Highlight Roots</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.styles.toggleButton} onPress={this.toggle}>
            <Text style={this.state.styles.toggleButtonText}>
              {this.state.toggleButtonDisplay}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={this.state.styles.header}>
          <Text style={this.state.styles.headerText}>
            <Text style={this.state.styles.rootText}>{convertNoteToString(this.state.preference[rootIndex])}</Text>
            {'  ' + name}
            </Text>
        </View>
        <Fretboard
          root={root}
          preference={preference}
          scale={createScale(rootIndex, preference, scale)}
          highlightAllRoots={highlightAllRoots}
        ></Fretboard>
      </View>
    );
  }
}

export default ScalePage;
