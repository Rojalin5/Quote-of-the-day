const quote = document.getElementById("quote")
const author = document.getElementById("author")
const api= "https://api.quotable.io/random"
async function getquote(url){
    const response = await fetch(url);
    let data = await response.json();
    console.log(data)
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getquote(api)
function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---by " + author.innerHTML)
} 
function linked(){
    window.open(" https://www.linkedin.com/share?text=" + quote.innerHTML + " ---by " + author.innerHTML)
}