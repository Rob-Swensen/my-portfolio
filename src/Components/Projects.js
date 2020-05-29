import React from 'react';
import Movie_Machine from '../Pics/Movie_Machine.JPG';
import '../styles/projects.scss';
import Remy_Roo from '../Pics/Remy_Roo.JPG';

function Projects(){
    return(
        <div className='projects'>
            <h1>-My Projects-</h1>
            <section className='project-section'>
                <img className='project-image' src={Movie_Machine} alt='movie machine'/>
                <section className='project-text'>
                    <h2>Movie Machine</h2>
                    <p className='position-title'>DevMountain Student Developer - May 2020</p>
                    <p className='project-description'>Movie Machine is a movie search tool developed by me and two other student developers at DevMountain.  Users can browse based on title or categories. If the user has an account, they can add movies to a watch list.</p>
                    <p className='project-description'>This project was built using React.js, React Redux, and Sass for the front-end. Back-end was built using Express, Massive, PostgreSQL, and Node.js.  The application makes over a dozen API calls to an online movie database to fetch and display movie titles, posters, descriptions and trailers for tens of thousands of movies.</p>
                </section>
            </section>
            <section className='project-section'>
                <img className='project-image' src={Remy_Roo} alt='movie machine'/>
                <section className='project-text'>
                    <h2>Remy + Roo</h2>
                    <p className='position-title'>DevMountain Student Developer - April 2020</p>
                    <p className='project-description'>Remy and Roo is an e-commerce web application developed for a real business selling dog bandanas on Amazon.  My goal for this project was to expand the online presence for this business and provide alternative selling methods outside of Amazon.com.</p>
                    <p className='project-description'>This application was build using React.js, React Redux, and Sass for the front-end.  Node.js, Express, Massive, and PostgreSQL were used for back-end with several relational database tables. Amazon S3 was used for photo storage and retrieval and Stripe API was used for product checkout and payment security.</p>
                </section>
            </section>
        </div>
    )
}

export default Projects;