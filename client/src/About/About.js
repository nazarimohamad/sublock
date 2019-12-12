import React from 'react';
import mohamad from '../images/mohamad.jpg';
import './about.scss';

const About = () => {
  return (
    <section className="about">
      <div className="about_hero">
        <h2>The Team</h2>
      </div>
      <div
        className="about_describ"
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="500">
        <p>
          We are a group of people that every one has it's own specialist that
          comunicate with each others very well. Our plan is to help and make
          the world more safe for living. We are not politician, we are
          ENGINEERS, so we decide to help the world according to our knowledge.
        </p>
      </div>
      {team.map((t) => (
        <div className="about_person">
          <div className="person_image" style={{ order: `${t.order}` }}>
            <img src={t.img} alt={t.name} />
          </div>
          <div className="person_text">
            <h2>{t.name}</h2>
            <p>{t.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;

const team = [
  {
    img: mohamad,
    order: 0,
    name: 'Payam Rafiee',
    description: 'thi is payam and he is good in blockchain'
  },
  {
    img: mohamad,
    order: 1,
    name: 'Maryam Rafiee',
    description: 'thi is payam and he is good in blockchain'
  },
  {
    img: mohamad,
    order: 0,
    name: 'Mohamad Nazari',
    description:
      'Full stack web and ios developer. have one year experiene in Blockchain and hands on AI'
  }
];
