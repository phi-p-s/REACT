import { useState } from "react";
import Quote from "./Quote.js";
function App() {
  const [quote, setQuote] = useState(null);
  const fetchQuote = async () => {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const quote = await response.json();
    setQuote(quote);
  }

  return(
    <div>
      <button onClock={fetchQuote}>Fetch Random Quote</button>
      {quote ? <Quote quote={quote} constant={42}/>: null}
    </div>
  );

  }

export default App;
