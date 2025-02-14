import React from 'react';
import Product from "./Product.js";
import "./Home.css";


function Home() {
    return (
        <div className="home">
        <div className="home__container">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/Feb/EN/1500x600_Hero-Tall_JN._CB655777066_.jpg"
                alt="Banner"
            />
        <div className="home__row">
          <Product
            id="15465458"
            title="New Apple iPhone 12 (128GB) - White"
            price={81900}
            image="data:image/webp;base64,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"
            rating={5}
          />

           <Product
            id="65465484"
            title="Nintendo Switch with neon red and neon blue Joy‑Con - Version 2 - HAC-001(-01)"
            price={31443.0}
            image="https://images-na.ssl-images-amazon.com/images/I/41V5KQ500IL.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="66566565"
            title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7)"
            price={185990}
            image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="45656566"
            title="Maison & Cuisine 6+2 Layer Fancy and Portable Foldable Collapsible Closet/Cabinet (Need to Be Assembled) (88130) (Wine Red)"
            price={1169}
            image="https://images-na.ssl-images-amazon.com/images/I/71ZgL9mGXzL._SL1500_.jpg"
            rating={2}
          />
          <Product
            id="45555495"
            title="Puma Men's Softride Rift Tech One8 Running Shoe"
            price={4000}
            image="https://images-na.ssl-images-amazon.com/images/I/51WEu%2BChNPL._UL1200_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="45454454"
            title="LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UM7290PTF (Ceramic Black)"
            price={34000}
            image="https://images-na.ssl-images-amazon.com/images/I/71qN7IK4H1L._SL1500_.jpg"
            rating={4}
          /> 
        </div> 
        </div>
        </div>


    )
}

export default Home
