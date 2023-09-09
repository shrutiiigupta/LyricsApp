const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');

async function getSongs(url="") {
    const response = await fetch(url, {
        method: "GET",
        header: {
            "Authorization": "Bearer 7D5gGhDQmR2vWaIqYoH7J9mTd8Qbu7eWtBtEMFDqhjLbLDX_2POOt_P8RapHj8er"
        },
        params:{
            "q": search.value
        }
    });
    const data = await response.json();
    
    console.log(data.artist_names);
    
}

getSongs("https://api.genius.com/search");