export const findNoteIndex = (note, preference) => {
    return preference.indexOf(note);
}


export const halfStepUp = (index, preference) => {
    // one semitone increase
    if (index === 11) {
        return preference[0]
    } else {
        return preference[index + 1]
    }
}

export const wholeStepUp = (index, preference) => {
    // two semitone increase
    if (index === 10) {
        return preference[0];
    } else if (index === 11) {
        return preference[1];
    } else {
        return preference[index + 2]
    }
}

export const augmentedSecondUp = (index, preference) => {
    // three semitone increase 
    if (index === 9) {
        return preference[0];
    } else if (index === 10) {
        return preference[1];
    } else if (index === 11) {
        return preference[2];
    } else {
        return preference[index + 3]
    }
}

// pass in a pattern string, using 'w' for whole, 'h' for half, 'a' for aug2nd
export const createScale = (root, preference, pattern) => {
    let rootIndex = findNoteIndex(root, preference);
    let scale = [];
    scale.push(root);
    let recent = rootIndex;
    for (var i = 0; i < pattern.length; i++) {
        if (pattern[i] === 'w') {
            scale.push(wholeStepUp(recent, preference));
            recent = findNoteIndex(scale[i + 1], preference);
        } else if (pattern[i] === 'h') {
            scale.push(halfStepUp(recent, preference));
            recent = findNoteIndex(scale[i + 1], preference);
        } else if (pattern[i] === 'a') {
            scale.push(augmentedSecondUp(recent, preference));
            recent = findNoteIndex(scale[i + 1], preference);
        }
    }
    return scale
}