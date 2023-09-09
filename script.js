const form = document.getElementById('form');
const search = document.getElementById('search');
const resul = document.getElementById('result');

async function getSongs(songName = "") {
    const url = `https://api.genius.com/search?q=${songName}`
    const res = await fetch(url, {
        method: "GET",
        headers: {
            "mode": "same-origin",
            "Authorization": "Bearer 7D5gGhDQmR2vWaIqYoH7J9mTd8Qbu7eWtBtEMFDqhjLbLDX_2POOt_P8RapHj8er"
        },
        // params:{
        //     "q": "blank space"
        // }
    });
    const data = await res.json();
    const {response: {hits= []} = {} } = data || {};
    // const {response: {hits: {result} = []} = {} } = data || {};

    console.log(hits);
    return data;
    
}

const data = getSongs(`${search.value}`);