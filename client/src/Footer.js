import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
// import { styles } from 'ansi-colors';



class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        width: 1400
			}
    }
  }

  componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	};

  handleScroll = (event) => {
		let scrollTop = window.scrollY,
        minWidth = 1400,
        width = Math.min(minWidth, 1400 - (3750 - scrollTop))
        width = width/14
		this.setState({
			style: {
        width: width
      }

		});
  };

  render(){
    return(
      <div className='footer'>
        <div className='footer_container' style={{width:`${this.state.style.width}%`, margin:'auto', backgroundColor:'#c7c7c7'}} >
          {data.map(item => (
            <div className='footer_item'>
              <h5>{item.title}</h5>
              <ul>
                {(item.lists).map(list => (
                  <li>{list}</li>
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
  {title: 'Company', lists:['About', 'Privacy', 'Terms']},
  {title: 'Partnership', lists:['Stores', 'Designers', 'Factories']},
  {title: 'Our media', lists:['Facebook', 'Instagram', 'Twitter']},
]