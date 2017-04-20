// let notes = [{pitch: 'A', beats: 1}, {pitch: 'C#', beats: 2}, {pitch:'D', beats: 4}];
// // Play the song at 400 beats per minute.
// playSong(notes, 400);

let newSong = parseSong(prompt('enter a song'));

// playSong(newSong, 400);

const onComplete = function () {
   console.log('Song finished playing');
   let newSong = parseSong(prompt('enter a song'));
   playSong(newSong, 800, onComplete);
}


playSong(newSong, 800, onComplete);


function Note(pitch, beats=1){
  this.pitch = pitch;
  this.beats = beats
}

function parseNote(str){
  let noteString = str.split('*');
  let newNote = new Note(noteString[0], noteString[1]);
  return newNote;
}


function parseSong(str){
  let result = [];
  let arrayOfNotes = str.split(' ');
  for (note of arrayOfNotes){
    result.push(parseNote(note));
  }
  return result;
};
