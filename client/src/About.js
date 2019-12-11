import React from 'react';
import './about.scss';
import ryan from './images/ryan.png';


const About = () => {
  return (
    <section className='about'>
      <div className='about_hero'>
       <h2>The Team</h2>
      </div>
      <div className='about_describ'>
        <p>We are a group of people that every one has it's own specialist that comunicate with each others very well.
          Our plan is to help and make the world more safe for living. We are not politician, we are ENGINEERS, so we
          decide to help the world according to our knowledge.
        </p>
      </div>
      {team.map(t => (
        <div className='about_person'>
          <div className='person_image' style={{order: `${t.order}`}}>
            <img src={ryan} alt={ryan} />
          </div>
          <div className='person_text'>
            <h2>{t.name}</h2>
            <p>{t.description}</p>
          </div>
        </div>
      ))}

    </section>
  );
}

export default About;


const team = [
  {img: ryan, order: 0, name: 'Payam Rafiee', description: 'thi is payam and he is good in blockchain'},
  {img: ryan, order: 1, name: 'Maryam Rafiee', description: 'thi is payam and he is good in blockchain'},
  {img: ryan, order: 0, name: 'Ryan Nazari', description: 'thi is payam and he is good in blockchain'},
]