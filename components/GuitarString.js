import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { screenSize, assignStyles } from '../constants';
import Square from './Square';

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  p: {
    marginRight: '2%',
    color: '#DCDCDC',
    fontSize: 22,
    paddingTop: '0.3%',
    textAlign: 'center',
    textAlignVertical: 'center',  
  },
});

const styles_small = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 3,
    width: '100%',
    justifyContent: 'center',
  },
  p: {
    marginRight: '2%',
    color: '#DCDCDC',
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center',  
  },
});

const styles_large = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
    width: '100%',
    justifyContent: 'center',
  },
  p: {
    marginRight: '2%',
    color: '#DCDCDC',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: '0.25%',
    textAlign: 'center',
    textAlignVertical: 'center',  
  },
});

const styles_xl = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
    width: '100%',
    justifyContent: 'center',
    marginTop: 5,
  },
  p: {
    marginRight: '2%',
    color: '#DCDCDC',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',  
  },
});


class GuitarString extends React.Component {

  state = {
    styles: styles
  }

  componentDidMount() {
    assignStyles(screenSize);
  }

  renderFrets = () => {
    let root = this.props.root;
    let arr = [...this.props.preference];
    let full = arr.concat(arr, arr);
    let rootIndex = this.props.preference.indexOf(root);
    const frets = [...Array(12).keys()];

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
        </React.Fragment>
      );
    });
  };

  render() {
    return (
      <View style={this.state.styles.row} className="row">
        <Text style={this.state.styles.p}>{this.props.root}</Text>
        {this.renderFrets()}
      </View>
    );
  }
}

export default GuitarString;
