import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item} //Very simple and it's a spread Object as props
                
            />
        )
    })        
    
            // <Hero />
    return (
        <div>
            <Navbar />
         <Hero />// Just after updated.but it's not purpose in the github repository but this including reason for TOTAL WEBSITE IS READY
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
