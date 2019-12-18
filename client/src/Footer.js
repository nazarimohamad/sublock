import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import './style.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_container">
          {data.map((item) => (
            <div className="footer_item">
              <h5>{item.title}</h5>
              <ul>
                {item.lists.map((list) => (
                  <li>{list}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer_item">
            <h5>Company</h5>
            <ul>
              <li>
                <Link className="link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/terms-and-conditions">
                  Terms & condition
                </Link>
              </li>
              <li>
                <Link className="link" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_copyRight">
          <p
            style={{
              padding: '2px',
              color: 'rgba(82,102,122)',
              textAlign: 'center'
            }}>
            Sublock is a Bteks branch @copyright-2019
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;

const data = [
  {
    title: 'Address',
    lists: ['Luise 38', 'Tallinn, Estonia', '+372 53866458']
  },
  // {title: 'Company', lists:['About', 'privacy-policy', 'terms-and-conditions']},
  { title: 'Partnership', lists: ['Stores', 'Designers', 'Factories'] }
  // {title: 'Our media', lists:['Facebook', 'Instagram', 'Twitter']},
];
