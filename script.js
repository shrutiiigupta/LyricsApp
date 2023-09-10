const form = document.getElementById('form');
const search = document.getElementById('search');
const resul = document.getElementById('result');

async function getSongs(songName = "") {
    const url = `https://api.genius.com/search?q=${songName}`
    const res = await fetch(url, {
        method: "GET",
        headers: {
            // "mode": "same-origin",
            "Authorization": "Bearer 7D5gGhDQmR2vWaIqYoH7J9mTd8Qbu7eWtBtEMFDqhjLbLDX_2POOt_P8RapHj8er"
        },
        
    });
    const data = await res.json();

    return data;
    
}


function createSongDiv(song) {
    const div = document.createElement('div');
    div.classList.add('song');

    const artistName = song.result.artist_names;
    const songUrl = song.result.url;

    div.innerHTML = `
        <h3>${artistName}</h3>
        <p><a href="${songUrl}" target="_blank">Lyrics here</a></p>
    `;

    return div;
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = search.value.trim();

    if (!searchTerm) {
        alert('Please type in a search term');
    } else {
        const data = await getSongs(searchTerm);
        const { response: { hits = [] } = {} } = data || {};

        resul.innerHTML = ''; // clear the previous results

        for (let i = 0; i < 10 && i < hits.length; i++) {
            const songDiv = createSongDiv(hits[i]);
            resul.appendChild(songDiv);
        }
    }
});