export const sharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
//                      0     1    2    3     4    5     6    7    8     9    10   11
export const flats  = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

export const scales = [
    {
        name: 'Ionian (Major)',
        pattern: ['w', 'w', 'h', 'w', 'w', 'w', 'h'] // 'wwhwwwh' 
    },
    {
        name: 'Dorian',
        pattern: ['w', 'h', 'w', 'w', 'w', 'h', 'w'] // 'whwwwhw'
    },
    {
        name: 'Phrygian',
        pattern: ['h', 'w', 'w', 'w', 'h', 'w', 'w'] // 'hwwwhww'
    },
    {
        name: 'Lydian',
        pattern: ['w', 'w', 'w', 'h', 'w', 'w', 'h'] // 'wwwhwwh'
    },
    {
        name: 'Mixolydian',
        pattern: ['w', 'w', 'h', 'w', 'w', 'h', 'w']// 'wwhwwhw'
    },
    {
        name: 'Aeolian (Natural Minor)',
        pattern: ['w', 'h', 'w', 'w', 'h', 'w', 'w'] // 'whwwhww'
    },
    {
        name: 'Locrian',
        pattern: ['h', 'w', 'w', 'h', 'w', 'w', 'w'] // 'hwwhwww'
    },
    {
        name: 'Harmonic Minor',
        pattern: ['w', 'h', 'w', 'w', 'h', 'a', 'h'] // 'whwwhah'
    },
    {
        name: 'Arabic',
        pattern: ['h', 'a', 'h', 'w', 'h', 'a', 'h'] // 'hahwhah'
    },
    {
        name: 'Persian',
        pattern: ['h', 'a', 'h', 'h', 'w', 'a', 'h'] // 'hahhwah'
    },
    {
        name: 'Major Hexatonic',
        pattern: ['w', 'w', 'h', 'w', 'w', 'a'] // 'wwhwwa'
    },
    {
        name: 'Minor Hexatonic',
        pattern: ['w', 'h', 'w', 'w', 'a', 'w'] //'whwwaw'
    },
]
