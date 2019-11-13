import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { convertNoteToString } from "../utils";
import { screenSize } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    square: {
        width: 55,
        height: 35,
        marginRight: 5,
        justifyContent: "center",
        display: "flex"
    },
    text: {
        color: "#DCDCDC",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    root: {
        backgroundColor: "#900AC5"
    },
    scale: {
        backgroundColor: "#7500A3"
    },
    empty: {
        backgroundColor: "#6D6969"
    },
    highlight: {
        backgroundColor: "#23C486"
    }
});

const styles_small = StyleSheet.create({
    square: {
        width: 40,
        height: 25,
        marginRight: 5,
        justifyContent: "center",
        display: "flex"
    },
    text: {
        color: "#DCDCDC",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 18,
        fontWeight: "bold"
    },
    root: {
        backgroundColor: "#900AC5"
    },
    scale: {
        backgroundColor: "#7500A3"
    },
    empty: {
        backgroundColor: "#6D6969"
    },
    highlight: {
        backgroundColor: "#23C486"
    }
});

const styles_large = StyleSheet.create({
    square: {
        width: 70,
        height: 35,
        marginRight: 6,
        justifyContent: "center",
        display: "flex"
    },
    text: {
        color: "#DCDCDC",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 24,
        fontWeight: "bold"
    },
    root: {
        backgroundColor: "#900AC5"
    },
    scale: {
        backgroundColor: "#7500A3"
    },
    empty: {
        backgroundColor: "#6D6969"
    },
    highlight: {
        backgroundColor: "#23C486"
    }
});

const styles_xl = StyleSheet.create({
    square: {
        width: 90,
        height: 40,
        marginRight: 10,
        justifyContent: "center",
        display: "flex"
    },
    text: {
        color: "#DCDCDC",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    root: {
        backgroundColor: "#900AC5"
    },
    scale: {
        backgroundColor: "#7500A3"
    },
    empty: {
        backgroundColor: "#6D6969"
    },
    highlight: {
        backgroundColor: "#23C486"
    }
});

// const colors = {
//   root: '#900AC5',
//   scale: '#7500A3',
//   empty: '#6D6969',
//   highlight: '#23C486',
// };

class Square extends React.Component {
    state = {
        id: styles.empty,
        memory: styles.empty,
        styles: styles
    };

    highlight = () => {
        if (this.state.id !== styles.highlight) {
            this.setState({ memory: this.state.id });
            this.setState({ id: styles.highlight });
        } else {
            this.setState({ id: this.state.memory });
        }
    };

    assignID = props => {
        if (props.highlightAllRoots === false && props.note === props.scale[0]) {
            this.setState({ id: styles.root });
        } else if (this.state.id === styles.highlight) {
            return;
        } else if (
            props.highlightAllRoots === true &&
            props.note === props.scale[0]
        ) {
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
        if (screenSize === "small") {
            this.setState({ styles: styles_small });
        } else if (screenSize === "large") {
            this.setState({ styles: styles_large });
        } else if (screenSize === "xl") {
            this.setState({ styles: styles_xl });
        }
    }

    componentWillReceiveProps(props) {
        this.assignID(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={this.state.styles.square}
                onPress={this.highlight}
            >
                <View style={this.state.id}>
                    <Text style={this.state.styles.text}>
                        {convertNoteToString(this.props.note)}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Square;
