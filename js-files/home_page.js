const quote_paragraph = document.getElementById("quote-of-the-day-paragraph");
const slideshow = document.getElementById('slideshow');


function get_quote() {
    const url = `https://api.allorigins.win/raw?url=https://zenquotes.io/api/random`
    fetch(url)
        .then(res => {
            return res.json() // Converts JSON response into a JS object.
        })
        .then(data => {
            console.log(data);
            quote_paragraph.innerHTML = `${data[0].q}`;
})
        .catch(err => {
          alert("Error loading Quote. Please check the API.");
        })
}

slideshow.innerHTML = ""
function display_slideshow() {
    memes = [
        "meme1.jpg",
        "meme2.jpg",
        "meme3.jpg",
        "meme4.jpg",
        "meme5.jpg",
        "meme6.jpg"
    ];
    
    let index = 0;
    
    // Slideshow start
    
    setInterval(() => {
        index = (index + 1) % memes.length // Loops back to 0
        slideshow.src = `images/${memes[index]}`;
        slideshow.alt = `Meme${memes[index]+1}`;
    }, 3000);
}

window.onload = get_quote();
window.onload = display_slideshow();