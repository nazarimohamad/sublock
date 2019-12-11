import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import {Link} from 'react-router-dom';



class Footer extends Component {

  render(){
    return(
      <div className='footer'>
        <div className='footer_container'>
          {data.map(item => (
            <div className='footer_item'>
              <h5>{item.title}</h5>
              <ul>
                {(item.lists).map(list => (
                  <li><Link to={list}>{list}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Footer;


const data = [
  {title: 'Account', lists:['Account', 'Saved Items', 'Orders', 'Return']},
  {title: 'Company', lists:['About', 'privacy-policy', 'terms-and-conditions']},
  {title: 'Partnership', lists:['Stores', 'Designers', 'Factories']},
  {title: 'Our media', lists:['Facebook', 'Instagram', 'Twitter']},
]