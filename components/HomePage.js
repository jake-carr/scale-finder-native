import React from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import { withNavigation } from 'react-navigation';
import { sharps, flats, scales, screenSize } from '../constants.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create ({
  page: {
    backgroundColor: '#2B2B2B',
    width: '100%',
    height: '100%',
  },
  pickerItem: {
    color: '#ECECEC',
  },
  pickerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    marginTop: '15%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: '#900AC5',
    backgroundColor: '#7500A3',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ECECEC',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

const styles_small = StyleSheet.create ({
  page: {
    backgroundColor: '#2B2B2B',
    width: '100%',
    height: '100%',
  },
  pickerItem: {
    color: '#ECECEC',
  },
  pickerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    marginTop: '15%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 120,
    height: 40,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#900AC5',
    backgroundColor: '#7500A3',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ECECEC',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

const styles_large = StyleSheet.create ({
  page: {
    backgroundColor: '#2B2B2B',
    width: '100%',
    height: '100%',
  },
  pickerItem: {
    color: '#ECECEC',
  },
  pickerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '15%',
    paddingLeft: '30%',
    paddingRight: '30%',
  },
  buttonContainer: {
    marginTop: '20%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: '#900AC5',
    backgroundColor: '#7500A3',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ECECEC',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

const styles_xl = StyleSheet.create ({
  page: {
    backgroundColor: '#2B2B2B',
    width: '100%',
    height: '100%',
  },
  pickerItem: {
    color: '#ECECEC',
  },
  pickerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '15%',
    paddingLeft: '30%',
    paddingRight: '30%',
  },
  buttonContainer: {
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 240,
    height: 80,
    borderWidth: 2,
    borderColor: '#900AC5',
    backgroundColor: '#7500A3',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ECECEC',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

class HomePage extends React.Component {
  state = {
    selectedScaleIndex: 0,
    selectedNote: 'A',
    selectedNoteIndex: 0,
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

  renderButton = () => {
    return (
      <React.Fragment>
        <TouchableOpacity
          style={this.state.styles.button}
          title="View Scale"
          onPress={() =>
            this.props.navigation.navigate('Scale', {
              selectedScaleIndex: this.state.selectedScaleIndex,
              selectedNote: this.state.selectedNote,
              selectedNoteIndex: this.state.selectedNoteIndex,
            })
          }
        >
          <Text style={this.state.styles.buttonText}>View Scale</Text>
        </TouchableOpacity>
      </React.Fragment>
    );
  };

  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={this.state.styles.page}>
        <View style={this.state.styles.pickerContainer}>
          <Picker
            style={this.state.styles.picker}
            itemStyle={this.state.styles.pickerItem}
            selectedValue={this.state.selectedNote}
            style={{ height: 100, width: 200 }}
            onValueChange={(note, itemIndex) =>
              this.setState({ selectedNote: note, selectedNoteIndex: itemIndex })
            }
          >
            {sharps.map((note, index) => {
              return (
                <Picker.Item
                  key={note}
                  label={note}
                  value={index}
                ></Picker.Item>
              );
            })}
          </Picker>
          <Picker
            style={this.state.styles.picker}
            itemStyle={this.state.styles.pickerItem}
            selectedValue={this.state.selectedScaleIndex}
            style={{ height: 75, width: 300 }}
            onValueChange={(scale, itemIndex) =>
              this.setState({ selectedScaleIndex: scale })
            }
          >
            {scales.map((scale, index) => {
              return (
                <Picker.Item
                  key={scale.name}
                  label={scale.name}
                  value={index}
                ></Picker.Item>
              );
            })}
          </Picker>
        </View>
        <View style={this.state.styles.buttonContainer}>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

export default withNavigation(HomePage);
