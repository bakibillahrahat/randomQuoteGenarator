/******************************************
project 1 - Random Quote Generator
******************************************/

/***
 * `quotes` array
 ***/
const quotes = [
    {
        quote: "The only source of knowledge is experience.",
        source: "brainyquote",
        ciatation: "Albert Einstein",
        year: 1996
    },
    {
        quote: "Silence is source of great strength",
        source: "facebook",
        ciatation: "Lao Tzu",
        year: 2000
    },
    {
        quote: "Everything human is pathetic. The secret source of humor itself is not joy but sorrow. There is no humor in heaven.",
        source: "twitter",
        ciatation: "Mark Twain",
        year: 1998
    },
    {
        quote: "Your greatest awakening comes, when you are aware about your infinite nature.",
        source: "goodreads",
        ciatation: "Amit Ray",
        year: 2003
    },
    {
        quote: "I give no sources, because it is indifferent to me whether what I have thought has already been thought before me by another ",
        source: "twitter",
        ciatation: "Ludwig Wittgenstein",
        year: 2001
    },
    {
        quote: "Anything intelligent always looks for its source—it’s the oldest law of the universe.",
        source: "facebook",
        ciatation: "Misba",
        year: 2005
    },
    {
        quote: "Creativity is not so much a boundless well, but an all-you-can-eat buffet of elements for your creative endeavor.",
        source: "godreads",
        ciatation: "Lao Tzu",
        year: 1965
    },
    {
        quote: "Breathe in that vital connection to the life source and sensual beauty everywhere. Feel loved and strong.",
        source: "quora",
        ciatation: "Jay Woodman",
        year: 2002
    },
    {
        quote: "Earth is the source of light.",
        source: "goodreads",
        ciatation: "Dejan Stojanovic,",
        year: 2009
    },
    {
        quote: "These days, the word Source is coming frequently, ever since that man asked to meet",
        source: "facebook",
        ciatation: "Lao Tzu",
        year: 2010
    }
]
/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(){
    for(let i = 0; i < quotes.length; i++){
        let randIndex = Math.floor((Math.random() * 10) + i);
        return quotes[randIndex];
    }
}

/***
 * `printQuote` function
 ***/
//  console.log(getRandomQuote());
getRandomQuote();
/***
 * click event listener for the print quote button
 ***/
const loadQuote = document.querySelector("#load-quote");

loadQuote.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("click");
    let value = getRandomQuote();
    renderQoute(value);
    saveToLocalStorage(value);
});

// render quote list
function renderQoute(quote) {
    const quoteBox = document.querySelector(".quote-box");
    quoteBox.innerHTML = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}<span class="citation">${quote.ciatation}</span><span class="year">${quote.year}</span></p>`;
}

// Implement local storage
// cheack local storage
function checkLocalStorage() {
    let todoArray = [];
    if(localStorage.getItem("quote")){
        const quoteList = localStorage.getItem("quote");
        todoArray = JSON.parse(quoteList);
    }else{
        todoArray = [];
    }
    return todoArray;
}

// set value local storage

function saveToLocalStorage(quote) {
    const arr = checkLocalStorage();
    arr.push(quote);
    localStorage.setItem("quote", JSON.stringify(arr));
    arr = [];
}

// get value from local storage() 
function renderFromLocalStorage() {
    const arr = checkLocalStorage();

    if(arr) {
        for(let i = 0; i < arr.length; i++) {
            renderQoute(arr[i]);
        }
    }
}

renderFromLocalStorage();