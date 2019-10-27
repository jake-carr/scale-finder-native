import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  square: {
    width: 50,
    height: 30,
    marginRight: 5,
    justifyContent: 'center',
    display: 'flex',
  },
  text: {
    color: '#DCDCDC',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  root: {
    backgroundColor: '#900AC5',
  },
  scale: {
    backgroundColor: '#7500A3',
  },
  empty: {
    backgroundColor: '#6D6969',
  },
  highlight: {
    backgroundColor: '#23C486',
  },
});

const colors = {
  root: '#900AC5',
  scale: '#7500A3',
  empty: '#6D6969',
  highlight: '#23C486',
};

class Square extends React.Component {
  state = {
    id: styles.empty,
    memory: null,
  };

  highlight = () => {
    if (this.state.id !== styles.highlight) {
      this.setState({ memory: this.state.id });
      this.setState({ id: styles.highlight });
    } else {
      this.setState({ id: this.state.memory });
      this.setState({ memory: null });
    }
  };

  assignID = props => {
    if (props.highlightAllRoots === true && props.note === props.scale[0]) {
      this.setState({ id: styles.highlight });
    } else if (props.note === props.scale[0]) {
      this.setState({ id: styles.root });
    } else if (props.scale.includes(props.note)) {
      this.setState({ id: styles.scale });
    } else {
      this.setState({ id: styles.empty });
    }
  };

  componentDidMount() {
    this.assignID(this.props);
  }

  componentWillReceiveProps(props) {
    this.assignID(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.square} onPress={this.highlight}>
        <View style={this.state.id}>
          <Text style={styles.text}>{this.props.note}</Text>
          {/* <Text style={styles.text}>{this.props.label}</Text> */}
        </View>
      </TouchableOpacity>
    );
  }
}

export default Square;
