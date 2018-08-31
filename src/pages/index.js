import React from 'react'
import Link from 'gatsby-link'



const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <img src="https://avatars0.githubusercontent.com/u/9013363?s=400&v=4"/> 
    <p>Welcome to my new Gatsby site.</p>
    <p>My name is Haile (highly). Welcome to my first Gatsby site. This site was made in order to obtain a ticket for the freeCodeCamp Hackathon in October! I am almost finished with my undergraduate degree in Cogntivie Science 🧠 from UC Berkeley. GO BEARS! 🐻 My passion is the web. 🌐 I have fallen in love with the many aspects of web development and applications. I've also become interested in the field of UI/UX which I feel ties directly with the World Wide Web. Hope to make some awesome apps and ideas with the JAMStack!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
