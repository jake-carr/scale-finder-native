import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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

  render() {
    return (
      <View>
        <View style={this.state.styles.fretboard} className="fretboard">
          <GuitarString
            scale={this.props.scale}
            preference={this.props.preference}
            root="E"
            key="E"
            highlightAllRoots={this.props.highlightAllRoots}
          />
          <GuitarString
            scale={this.props.scale}
            preference={this.props.preference}
            root="B"
            key="B"
            highlightAllRoots={this.props.highlightAllRoots}
          />
          <GuitarString
            scale={this.props.scale}
            preference={this.props.preference}
            root="G"
            key="G"
            highlightAllRoots={this.props.highlightAllRoots}
          />
          <GuitarString
            scale={this.props.scale}
            preference={this.props.preference}
            root="D"
            key="D"
            highlightAllRoots={this.props.highlightAllRoots}
          />
          <GuitarString
            scale={this.props.scale}
            preference={this.props.preference}
            root="A"
            key="A"
            highlightAllRoots={this.props.highlightAllRoots}
          />
          <GuitarString
            scale={this.props.scale}
            preference={this.props.preference}
            root="E"
            key="E2"
            highlightAllRoots={this.props.highlightAllRoots}
            showLabels={true}
          />
          <FretLabels />
        </View>
      </View>
    );
  }
}

export default Fretboard;
