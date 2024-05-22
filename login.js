const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById('name').value;
    const grade = document.getElementById('grade').value;
    const contact = document.getElementById('contact').value;

    const user = { name, grade, contact };
    localStorage.setItem('user', JSON.stringify(user)); 
    window.location.href = './game.html'; 
});


songs = ['songs/A Night To Remember bea lauf.mp3', 'songs/bubblegum - newjeans.mp3', 'songs/A Lovely Night - Ryan Gosling.mp3', 'songs/Caminando - Isadora.mp3', 'songs/drama - aespa.mp3', 'songs/For The Lover That I Lost - SS.mp3', 'songs/Haegeum - Agust D.mp3', 'songs/hope is a dangerous ... - Lana.mp3', 'songs/On My Way - Alan Walker.mp3', 'songs/Run BTS.mp3', 'songs/the boy is mine - ariana.mp3', 'songs/the way things go - bea.mp3', 'songs/Tú - maye .mp3', 'songs/Wonderland- TS.mp3']

function trimSong(song) {
    const startIndex = song.indexOf('songs/') + 6;
    const endIndex = song.indexOf('.mp3');
    return song.substring(startIndex, endIndex);
}

const songSelect = document.getElementById('song');
songs.forEach((song) => {
    const option = document.createElement('option');
    var trimmedSong = trimSong(song); 
    option.value = song;
    option.text = trimmedSong;
    songSelect.appendChild(option);
});

songSelect.addEventListener('change', (event) => {
    const selectedSong = event.target.value;
    localStorage.setItem('selectedSong', selectedSong);
    console.log("Song changed to: " + selectedSong);
});