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
        alignItems: 'center'
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
            highlightAllRoots={this.props.highlightAllRoots}
          />
          <GuitarString
            scale={this.props.scale}
            preference={this.props.preference}
            root="B"
            highlightAllRoots={this.props.highlightAllRoots}
          />
          <GuitarString
            scale={this.props.scale}
            preference={this.props.preference}
            root="G"
            highlightAllRoots={this.props.highlightAllRoots}
          />
          <GuitarString
            scale={this.props.scale}
            preference={this.props.preference}
            root="D"
            highlightAllRoots={this.props.highlightAllRoots}
          />
          <GuitarString
            scale={this.props.scale}
            preference={this.props.preference}
            root="A"
            highlightAllRoots={this.props.highlightAllRoots}
          />
          <GuitarString
            scale={this.props.scale}
            preference={this.props.preference}
            root="E"
            highlightAllRoots={this.props.highlightAllRoots}
            showLabels={true}
          />
        </View>
      </View>
    );
  }
}

export default Fretboard;
