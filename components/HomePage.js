import React from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import { withNavigation } from 'react-navigation';
import { sharps, flats, scales } from '../constants.js';
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
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#900AC5',
    backgroundColor: '#7500A3',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ECECEC',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

class HomePage extends React.Component {
  state = {
    selectedScaleIndex: 0,
    selectedNote: 'A',
  };

  renderButton = () => {
    return (
      <React.Fragment>
        <TouchableOpacity
          style={styles.button}
          title="Create Scale"
          onPress={() =>
            this.props.navigation.navigate('Scale', {
              selectedScaleIndex: this.state.selectedScaleIndex,
              selectedNote: this.state.selectedNote,
            })
          }
        >
          <Text style={styles.buttonText}>Create Scale</Text>
        </TouchableOpacity>
      </React.Fragment>
    );
  };

  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            itemStyle={styles.pickerItem}
            selectedValue={this.state.selectedNote}
            style={{ height: 100, width: 200 }}
            onValueChange={(note) =>
              this.setState({ selectedNote: note })
            }
          >
            {sharps.map((note) => {
              return (
                <Picker.Item
                  key={note}
                  label={note}
                  value={note}
                ></Picker.Item>
              );
            })}
          </Picker>
          <Picker
            style={styles.picker}
            itemStyle={styles.pickerItem}
            selectedValue={this.state.selectedScaleIndex}
            style={{ height: 100, width: 200 }}
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
        <View style={styles.buttonContainer}>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

export default withNavigation(HomePage);
