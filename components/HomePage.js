import React from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import { withNavigation } from 'react-navigation';
import { sharps, flats, scales } from '../constants.js';

// notepicker, button for each note

class HomePage extends React.Component {
  state = {
    selectedScaleIndex: 0,
    selectedNote: 'C',
  };

  renderButtons = () => {
    return (
      <React.Fragment>
        <Button
          title="Create scale"
          onPress={() =>
            this.props.navigation.navigate('Scale', {
              selectedScaleIndex: this.state.selectedScaleIndex,
              selectedNote: this.state.selectedNote,
            })
          }
        ></Button>
      </React.Fragment>
    );
  };

  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View>
        <Picker
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
        {this.renderButtons()}
      </View>
    );
  }
}

export default withNavigation(HomePage);
