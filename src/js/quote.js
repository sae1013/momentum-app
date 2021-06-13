let quotes = [
    {   
        id:1,
        text :"I don't go by the rule book... I lead from the heart, not the head",
        author:"Princess Diana"
        
    },
    {   
        id:2,
        text: "I don't go by the rule book, I lead from the heart",
        author: "Princess Diana"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.text;
author.innerText = todayQuote.author;