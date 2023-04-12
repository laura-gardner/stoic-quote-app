import React, {useState, useEffect} from "react";

const Quote = () => {

    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState({text : "", author : ""})

    useEffect(() => {
        fetch("https://stoic-quotes.com/api/quotes?num=100")
            .then(res => res.json())
            .then(data => setQuotes(data))
    }, [])

    const newQuote = () => {
        const randomNumber = Math.floor(Math.random()*quotes.length)
        setQuote(quotes[randomNumber])
    }

    return (
        <div className="quote--div">
            <p className="quote--text">{quote.text ? quote.text : "Click the icon below to display a quote from a Stoic philosopher"}</p>
            <p className="quote--author">{quote && quote.author}</p>
            <div className="quote--button" onClick={newQuote}>
               <i class="fa-solid fa-building-columns"></i>
            </div>
            
        </div>
    )
}

export default Quote;