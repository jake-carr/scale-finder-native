import React from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';
import { withNavigation } from 'react-navigation';
import { sharps, flats, scales } from '../constants.js';

// notepicker, button for each note

class HomePage extends React.Component {
  state = {
    selectedScaleIndex: 0,
    selectedNote: 'C',
    preference: sharps,
  }

  toggle = () => {
    if (this.state.preference === sharps) {
      this.setState({ preference: flats})
    } else {
      this.setState({ preference: sharps})
    }
  }

  renderButtons = () => {
    return (
      <React.Fragment>
        <Button
          title='Create scale'
          onPress={() => this.props.navigation.navigate('Scale', {
            preference: this.state.preference,
            selectedScaleIndex: this.state.selectedScaleIndex,
            selectedNote: this.state.selectedNote,
          })}
        ></Button>
        <Button
          title='Toggle'
          onPress={() => this.toggle}
        ></Button>
      </React.Fragment>
    );
  }

  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.selectedScaleIndex}
          style={{ height: 100, width: 200 }}
          onValueChange={(scale, itemIndex) => this.setState({ selectedScaleIndex: scale })}>
          {scales.map((scale, index) => {
            return <Picker.Item label={scale.name} value={index}></Picker.Item>
          })}
        </Picker>
        {this.renderButtons()}
      </View>

    );
  }
}

export default withNavigation(HomePage)