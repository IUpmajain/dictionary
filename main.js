let form = document.querySelector('form')
let input = document.querySelector('input')
let words = document.querySelector('h2')
let cardtext = document.querySelector('#cardtext') 
let mean1 = document.querySelector('.meaning1')
let phot = document.querySelector('#phont')


const getquote = (async (e)=>{
    e.preventDefault();
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
    const data = await res.json();
    console.log(data)
    words.innerText = `${input.value}`;
    cardtext.innerText = `Synonyms: ${data[0].meanings[0].synonyms[0]}`
    phot.innerText = `${data[0].phonetics[1].text}`
    mean1.innerText = `(${data[0].meanings[0].partOfSpeech}) ${data[0].meanings[0].definitions[0].definition}`
    sound.setAttribute('src', `${data[0].phonetics[1].audio}`);
})
form.addEventListener('submit', getquote)

function playsound(){
    sound.play()
}