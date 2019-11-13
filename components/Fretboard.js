import React from 'react';
import { StyleSheet, View } from 'react-native';
import GuitarString from './GuitarString';
import FretLabels from './FretLabels';
import { screenSize } from '../constants'

const styles = StyleSheet.create({
  fretboard: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '2%',
  },
});

const styles_small = StyleSheet.create({
  fretboard: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '2%',
    display: 'flex',
    flexDirection: 'column',
  }
});

const styles_large = StyleSheet.create({
  fretboard: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '2%',
    marginTop: '-3%'
  },
});

const styles_xl = StyleSheet.create({
  fretboard: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '2%',
    marginTop: '-3%'
  },
});


class Fretboard extends React.Component {
  state = {
    styles: styles
  }

  componentDidMount() {
    if (screenSize === 'small') {
      this.setState({ styles: styles_small })
    } else if (screenSize === 'large') {
      this.setState({ styles: styles_large })
    } else if (screenSize === 'xl') {
      this.setState({ styles: styles_xl })
    }
  }


  renderGuitarStrings = () => {
    const roots = ['E', 'B', 'G', 'D', 'A', 'E']
    const keys = ['E2', 'B', 'G', 'D', 'A', 'E']

    return roots.map((value, idx) => {
      return (
        <GuitarString
          scale={this.props.scale}
          preference={this.props.preference}
          root={value}
          key={keys[idx]}
          highlightAllRoots={this.props.highlightAllRoots}
        ></GuitarString>
      );
    });
  };

  render() {
    return (
      <View>
        <View style={this.state.styles.fretboard} className="fretboard">
          {this.renderGuitarStrings()}
          <FretLabels />
        </View>
      </View>
    );
  }
}

export default Fretboard;
