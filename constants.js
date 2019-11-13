import { Dimensions } from "react-native";

export const sharps = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#"
];

export const flats = [
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "Ab"
];

export const scales = [
    {
        name: "Ionian (Major)",
        pattern: ["w", "w", "h", "w", "w", "w", "h"]
    },
    {
        name: "Dorian",
        pattern: ["w", "h", "w", "w", "w", "h", "w"]
    },
    {
        name: "Phrygian",
        pattern: ["h", "w", "w", "w", "h", "w", "w"]
    },
    {
        name: "Lydian",
        pattern: ["w", "w", "w", "h", "w", "w", "h"]
    },
    {
        name: "Mixolydian",
        pattern: ["w", "w", "h", "w", "w", "h", "w"]
    },
    {
        name: "Aeolian (Natural Minor)",
        pattern: ["w", "h", "w", "w", "h", "w", "w"]
    },
    {
        name: "Locrian",
        pattern: ["h", "w", "w", "h", "w", "w", "w"]
    },
    {
        name: "Harmonic Minor",
        pattern: ["w", "h", "w", "w", "h", "a", "h"]
    },
    {
        name: "Blues",
        pattern: ["a", "w", "h", "h", "a"]
    },
    {
        name: "Major Pentatonic",
        pattern: ["w", "w", "a", "w"]
    },
    {
        name: "Minor Pentatonic",
        pattern: ["a", "w", "w", "a"]
    },
    {
        name: "Major Hexatonic",
        pattern: ["w", "w", "h", "w", "w", "a"]
    },
    {
        name: "Minor Hexatonic",
        pattern: ["w", "h", "w", "w", "a", "w"]
    },
    {
        name: "Arabic",
        pattern: ["h", "a", "h", "w", "h", "w", "w"]
    },
    {
        name: "Persian",
        pattern: ["h", "a", "h", "h", "w", "a", "h"]
    }
];

const { width, height } = Dimensions.get("window");

const determineScreenSize = (w, h) => {
    if (w >= 1366 && h >= 1024) {
        return "xl";
    } else if (w >= 1024 && h >= 768) {
        return "large";
    } else if (w <= 667 && h <= 375) {
        return "small";
    } else return "medium";
};

export const screenSize = determineScreenSize(width, height);
