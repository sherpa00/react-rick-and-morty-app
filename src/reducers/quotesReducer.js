import quotesList from "../quotes.json"

const randomQuote = () => {
    let rand = Math.floor(Math.random() * quotesList.quotes.length);
    let quote = quotesList.quotes[rand];
    return quote;
}

const quoteReducer = (state = randomQuote(),action) => {
    switch (action.type) {
        case "GETNEWQUOTE":
            return randomQuote();
        default:
            return state;
    }
}

export default quoteReducer;
