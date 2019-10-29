import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Square from './Square';

// .row {
//     display: flex;
//     flex-direction: row;
//     margin-bottom: -12px;
//   }

//   .row p {
//     width: 40px;
//     height: 20px;
//     margin-right: 10px;
//     margin-top: 3px;
//   }

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  p: {
    width: 40,
    height: 20,
    color: '#DCDCDC',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 3,
  },
  // fretLabel: {
  //   textAlign: 'center',
  //   paddingTop: 25,
  //   color: '#DCDCDC',
  //   textAlign: 'center',
  //   fontSize: 22,
  //   fontWeight: 'bold',
  // }
});

class GuitarString extends React.Component {
  //this.props.preference = array
  //this.props.root = starting point
  //this.props.scale = scalepattern

  renderFrets = () => {
    let root = this.props.root;
    let arr = [...this.props.preference];
    let full = arr.concat(arr, arr); // LOL
    let rootIndex = this.props.preference.indexOf(root);
    // const frets = [...Array(24).keys()];
    const frets = [...Array(12).keys()];
    // const labels = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24];
    const labels = [1, 3, 5, 7, 9, 12];

    return frets.map(idx => {
      const fret = idx + 1;
      return (
        <React.Fragment key={'square:' + idx}>
          <Square
            scale={this.props.scale}
            preference={this.props.preference}
            note={full[rootIndex + fret]}
            highlightAllRoots={this.props.highlightAllRoots}
          ></Square>
          {/* {this.props.showLabels && labels.includes(fret) && (
            <Text style={styles.fretLabel} className="fret-number">{fret}</Text>
          )} */}
        </React.Fragment>
      );
    });
  };

  render() {
    return (
      <View style={styles.row} className="row">
        <Text style={styles.p}>{this.props.root}</Text>
        {this.renderFrets()}
      </View>
    );
  }
}

export default GuitarString;
