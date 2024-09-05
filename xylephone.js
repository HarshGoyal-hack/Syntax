// Define the notes and their corresponding key codes
const notes = [
    { note: 'C', keyCode: 49, audioSrc: 'https://s31.aconvert.com/convert/p3r68-cdx67/51zc3-gcslu.mp3' },
    { note: 'D', keyCode: 50, audioSrc: 'https://example.com/d.mp3' },
    { note: 'E', keyCode: 51, audioSrc: 'https://example.com/e.mp3' },
    { note: 'F', keyCode: 52, audioSrc: 'https://example.com/f.mp3' },
    { note: 'G', keyCode: 53, audioSrc: 'https://example.com/g.mp3' },
    { note: 'A', keyCode: 54, audioSrc: 'https://example.com/a.mp3' },
    { note: 'B', keyCode: 55, audioSrc: 'https://example.com/b.mp3' },
    { note: 'C', keyCode: 56, audioSrc: 'https://example.com/c.mp3' },
    { note: 'D', keyCode: 57, audioSrc: 'https://example.com/d.mp3' },
    { note: 'E', keyCode: 48, audioSrc: 'https://example.com/e.mp3' },
    { note: 'F', keyCode: 81, audioSrc: 'https://example.com/f.mp3' },
    { note: 'G', keyCode: 87, audioSrc: 'https://example.com/g.mp3' },
    { note: 'A', keyCode: 69, audioSrc: 'https://example.com/a.mp3' },
    { note: 'B', keyCode: 82, audioSrc: 'https://example.com/b.mp3' },
    { note: 'C', keyCode: 84, audioSrc: 'https://example.com/c.mp3' },
  ];
  
  // Get the xylophone bars
  const bars = document.querySelectorAll('.bar');
  
  // Add event listeners to the bars
  bars.forEach((bar, index) => {
    bar.addEventListener('click', () => {
      playNote(notes[index].audioSrc);
    });
  });
  
  // Add event listener to the document for key presses
  document.addEventListener('keydown', (event) => {
    const note = notes.find((note) => note.keyCode === event.keyCode);
    if (note) {
      playNote(note.audioSrc);
    }
  });
  
  // Function to play a note
  function playNote(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play();
  }