import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './style.min.css';
import './verticleTimelineContent.css';
import clickyGameImage from '../../assets/images/clicky-game.png';
import tipCalculatorImage from '../../assets/images/tip.png';
import mindStockImage from '../../assets/images/MindStock.png';
import friendFinderImage from '../../assets/images/FriendFinder.png';
import buddyImage from '../../assets/images/buddy.png';
import fugatchImage from '../../assets/images/fugatch.png';
import burgerImage from '../../assets/images/burger.png';
import bamazonImage from '../../assets/images/List Products.png';
import liriImage from '../../assets/images/liri.png';
import psychicGameImage from '../../assets/images/technics-q-c-640-480-1.png';
import crystalGameImage from '../../assets/images/technics-q-c-640-480-2.png';
import triviaGameImage from '../../assets/images/technics-q-c-640-480-5.png';
import gifTasticImage from '../../assets/images/technics-q-c-640-480-7.png';
import newYorkTimesSearchImage from '../../assets/images/technics-q-c-640-480-7.png';
import gsapBannerAd from '../../assets/images/gsap_banner_ad.png';
import spaceWarp from '../../assets/images/3d_space_warp.png';

function VerticleTimeline() {
  console.log(spaceWarp)
  return (
    <div>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img alt="3d space warp" className="contentImage" src={spaceWarp} />}
        >
          <h3 className="vertical-timeline-element-title">3D Space Warp</h3>
          <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: HTML, Javascript, three.js.</h4>
          <p> A spacewarp animation created using three.js.</p>
          <div> <a href="https://github.com/chris-warner/3D-Space-Warp">GitHub </a><a href="https://chris-warner.github.io/3D-Space-Warp/">Demo</a></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="December 2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img alt="gsapBannerAd" className="contentImage" src={gsapBannerAd} />}
        >
          <h3 className="vertical-timeline-element-title">GSAP Banner Ad</h3>
          <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: HTML, GSAP, Javascript.</h4>
          <p> A simple Banner Ad created using the GSAP animation library.</p>
          <div> <a href="https://github.com/chris-warner/gsap-animation">GitHub </a><a href="https://chris-warner.github.io/gsap-animation/">Demo</a></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img alt="Fugatch" className="contentImage" src={fugatchImage} />}
        >
          <h3 className="vertical-timeline-element-title">Fugatch</h3>
          <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: HTML, Bootstrap.</h4>
          <p> Fugatch is a simple HTML website created for my client to post videos about his watch collection.</p>
          <div> <a href="https://github.com/chris-warner/fugatch">GitHub </a><a href="https://www.fugatch.com">Demo</a></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element-work"
          date="July 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img alt="Buddy" className="contentImage" src={buddyImage} />}
        >
          <h3 className="vertical-timeline-element-title">Buddy</h3>
          <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: HTML, Bootstrap, React, Express, Sequelize, MySQL, Firebase.</h4>
          <p>Buddy is a full stack MERN application created that allows people to rent dogs from local shelters.</p>
          <div><a href="https://github.com/0dbtech/columbia-project3">GitHub </a><a href="https://aqueous-castle-76510.herokuapp.com/">Demo</a></div>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img alt="React Tip Calculator" className="contentImage" src={tipCalculatorImage} />}

        >
          <h3 className="vertical-timeline-element-title">React Tip Calculator</h3>
          <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: React and Javascript.</h4>
          <p>Tip calculator is a simple application that allow you to calculate a tip for your server. One of it's key features is the ability to divide the tip between multiple people. Simply fill out the form and click calculate and see the results.</p>
          <div> <a href="https://github.com/chris-warner/Career-Services-Coding-Challenge---Tip-Calculator">GitHub </a><a href="https://chris-warner.github.io/Career-Services-Coding-Challenge---Tip-Calculator/">Demo</a></div>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May - June 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img alt="Mind Stock" className="contentImage" src={mindStockImage} />}
        >
          <h3 className="vertical-timeline-element-title">MindStock</h3>
          <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: : HTML, CSS, Node.js, Express, handlebars, Sequelize, Heroku, JawsDB, MySQL. .</h4>
          <p>MindStock uses a personality assessment to figure out risk tolerance to help investors pick the right fund for them. It provides a starter guide through what a mutual fund is and what information is relevant to navigate the investment universe.</p>
          <div><a href="https://github.com/chris-warner/Mindstock">GitHub </a><a href="https://quiet-cove-26973.herokuapp.com/">Demo</a></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May - June 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          layout={'3-columns'}
          icon={<img alt="Clicky Game" className="contentImage" src={clickyGameImage} />}>
          <h3 className="vertical-timeline-element-title">Clicky Game</h3>
          <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: React.</h4>
          <p>Test your memory with Clicky Game. Click an image to begin, try not click the same image twice. Technologies used in this project: React, React-Bootstrap.
</p>
          <div> <a href="https://github.com/chris-warner/clicky-game">GitHub </a><a href="https://chris-warner.github.io/clicky-game/">Demo</a></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April - May 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img alt="Eat Da Burger" className="contentImage" src={burgerImage} />}
        >
          <h3 className="vertical-timeline-element-title">Eat Da Burger</h3>
          <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project:  HTML, CSS, Node.js, Express, Handlebars, Sequelize, Heroku, JawsDB, MySQL.</h4>
          <p>Eat Da Burger is a node applicastion that utilized express, express-handlebars and mysql. Enter a burger in the textbox and hit submit to add the burger to the queue. This adds a burger to the table in mysql. Hit Devour It to "devour" the burger, and check "devoured" in said database to true.</p>
          <div> <a href="https://github.com/chris-warner/burger    ">GitHub </a><a href="https://fathomless-journey-20923.herokuapp.com/">Demo</a></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img alt="Friend Finder" className="contentImage" src={friendFinderImage} />}
        >
          <h3 className="vertical-timeline-element-title">FriendFinder</h3>
          <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: HTML, CSS, Node.js, Express, Sequelize, Heroku.</h4>
          <p>Friend finder is a survey that finds your most compatible match. It takes your survey data and compares it to a list of prior results to find the person most compatible with your personality traits.</p>
          <div> <a href="https://github.com/chris-warner/FriendFinder">GitHub </a><a href="https://afternoon-temple-47575.herokuapp.com/">Demo</a></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img alt="bamazon" className="contentImage" src={bamazonImage} />}
        >
          <h3 className="vertical-timeline-element-title">bamazon</h3>
          <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: Javascript, Node.js, MySQL and express. Bamazon is an Amazon-like storefront utilizing Node and MySQL. </h4>
          <p>To use it, type node bamazonCustomer.js in the terminal. You will be presented with a database of products. Enter the product ID you would like to to purchase and quantity of items in the following terminal prompt. If there are enough items in stock, the purchase will be successful and you will be presented with the order total. The stock_quantity field will then be updated in mysql to reflect the current value. This is a program that runs in the terminal so there is no live demo.</p>
          <div> <a href="https://github.com/chris-warner/bamazon">GitHub </a></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March - May 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img alt="Liri Node App" className="contentImage" src={liriImage} />}>
          <h3 className="vertical-timeline-element-title">Liri Node App</h3>
          <h4 className="vertical-timeline-element-subtitle"> Javascript, Node.js, axios, dotenv, Spotify API, Bands in Town API. </h4>
          <p>Use Liri to find the latest Concerts, Bands, and songs you love, from your console. Using Spotify, Bandsintown and omdb, Liri can retrieve concert dates for your favorite bands, movie information for your favorite films, song information for you favorite songs. This is a program that runs in the terminal so there is no live demo.</p>
          <div> <a href="https://github.com/chris-warner/liri-node-app">GitHub </a></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img alt="psychic game" className="contentImage" src={psychicGameImage} />}>
          <h3 className="vertical-timeline-element-title">Psychic Game</h3>
          <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: HTML, CSS, javascript and JQuery.</h4>
          <p>Try and guess what letter the computer picks by pressing keys. If you guess right, you win a point. If you fail to guess correctly 10 times you loose a point.</p>
          <div>  <a href="https://github.com/chris-warner/Psychic-Game/">GitHub </a><a href="https://chris-warner.github.io/Psychic-Game/">Demo</a></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img alt="Crystal Game" className="contentImage" src={crystalGameImage} />}
        >
          <h3 className="vertical-timeline-element-title">Crystal Game</h3>
          <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: HTML, CSS, javascript and JQuery.</h4>
          <p>You will be given a random number at the start of the game. There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score. You win the game by matching your total score to the random number, you lose if the total score goes above the random number. The value of each crystal is hidden from you until you click on it. Each time when the game starts, the game will change the values of each crystal. </p>
          <div> <a href="https://chris-warner.github.io/unit-4-game/">GitHub </a><a href="https://chris-warner.github.io/Crystal-Collector/">Demo</a></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img alt="Trivia Game" className="contentImage" src={triviaGameImage} />}

        >
          <h3 className="vertical-timeline-element-title">Trivia Game</h3>
          <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: HTML, CSS, javascript and JQuery.</h4>
          <p>Technologies used in this project: html, css, javascript and jquery. You have 30 seconds to answer the trivia questions. When the timer counts down to zero, you will be presented with the score displaying how many questions you answered correctly, how many you answered incorrectly and how many questions you didn't answer. </p>
          <div> <a href="https://github.com/chris-warner/TriviaGame">GitHub </a><a href="https://chris-warner.github.io/TriviaGame/">Demo</a></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img alt="GifTastic" className="contentImage" src={gifTasticImage} />}
        >
          <h3 className="vertical-timeline-element-title">GifTastic</h3>
          <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: HTML, CSS, Giphy API, javascript and JQuery.</h4>
          <p>This program displays animal gifs based on the selected animal button. If the animal you would like to search for doesn't exist, type in the name of the animal in the text field and hit submit. This will add the animal to the list of animal buttons. Click the buttons search giphy for animated img! </p>
          <div>  <a href="https://github.com/chris-warner/GifTastic">GitHub </a><a href="https://chris-warner.github.io/GifTastic/">Demo</a></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img alt="New York Times Search " className="contentImage" src={newYorkTimesSearchImage} />}
        >
          <h3 className="vertical-timeline-element-title">New York Times Search</h3>
          <h4 className="vertical-timeline-element-subtitle"> Technologies used in this project: HTML, CSS, Yelp API, New York City Department of Health API, Google Maps API, javascript and JQuery.</h4>
          <p>This project utilized the New York Times API to search there archive. You can a start and date to narrow down your search results.</p>
          <div>
            <a href="https://github.com/chris-warner/New-York-Times-Search/">GitHub </a>
            <a href="https://chris-warner.github.io/New-York-Times-Search/">Demo</a>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );

}

export default VerticleTimeline;