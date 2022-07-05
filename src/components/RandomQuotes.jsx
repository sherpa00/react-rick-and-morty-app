import {useDispatch,useSelector} from "react-redux";
import { getNewQuote } from "../actions/getNewQuote";

function RandomQuotes() {

    // random quote state
    const quote = useSelector(store => store);

    // quote dispatch
    const dispatch = useDispatch();

    // onClick handler
    const handleClick = () => {
        dispatch(getNewQuote());
        console.log(quote);
    }
    

    return ( 
        <div className="quotes">
            <h2>DAILY QUOTES FROM RICK-AND-MORTY</h2>
            <div className="quotes-area">
                <h5 id="left"><i className="fa fa-quote-left"></i></h5>
                <h3>{quote.what}</h3>
                <p>- {quote.who}, {quote.when}</p>
                <h5 id="right"><i className="fa fa-quote-right"></i></h5>
            </div>
            <button
                onClick={handleClick}
            >
                GET NEW QUOTE
            </button>
        </div>
     );
}

export default RandomQuotes;