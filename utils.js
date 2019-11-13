export const findNoteIndex = (note, preference) => {
  return preference.indexOf(note);
};

export const halfStepUp = (index, preference) => {
  if (index === 11) {
    return preference[0];
  } else {
    return preference[index + 1];
  }
};

export const wholeStepUp = (index, preference) => {
  if (index === 10) {
    return preference[0];
  } else if (index === 11) {
    return preference[1];
  } else {
    return preference[index + 2];
  }
};

export const augmentedSecondUp = (index, preference) => {
  if (index === 9) {
    return preference[0];
  } else if (index === 10) {
    return preference[1];
  } else if (index === 11) {
    return preference[2];
  } else {
    return preference[index + 3];
  }
};

export const createScale = (rootIndex, preference, pattern) => {
  let scale = [];
  scale.push(preference[rootIndex]);
  let recent = rootIndex;
  for (var i = 0; i < pattern.length; i++) {
    if (pattern[i] === "w") {
      scale.push(wholeStepUp(recent, preference));
      recent = findNoteIndex(scale[i + 1], preference);
    } else if (pattern[i] === "h") {
      scale.push(halfStepUp(recent, preference));
      recent = findNoteIndex(scale[i + 1], preference);
    } else if (pattern[i] === "a") {
      scale.push(augmentedSecondUp(recent, preference));
      recent = findNoteIndex(scale[i + 1], preference);
    }
  }
  return scale;
};

export const convertNoteToString = note => {
  if (note.charAt(1) === "b") {
    return note.charAt(0) + "♭";
  } else if (note.charAt(1) === "#") {
    return note.charAt(0) + "♯";
  } else {
    return note;
  }
};
