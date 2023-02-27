import { useState } from "react";

function App() {
    const [quote, setQuote] = useState(null);
    return ( <
            div > {
                quote ? ( < h1 > The quote would be rendered here < /h1>): null} <
                    /div>
                )

            }

            export default App;