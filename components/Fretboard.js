import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GuitarString from './GuitarString';

// .fretboard {
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     justify-content: center;
//   }

const styles = StyleSheet.create({
  fretboard: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Fretboard extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.fretboard} className="fretboard">
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
        </View>
      </View>
    );
  }
}

export default Fretboard;
