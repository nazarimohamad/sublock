import React, {useState} from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './style.scss';


const Contact = () => {

  const [name, setName] = useState(''),
        [email, setEmail] = useState(''),
        [message, setMessage] = useState('');

  const classes = useStyles();
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('/contact', {
      name,
      email,
      message
    })
    .then(response => {
      setName('')
      setEmail('')
      setMessage('')
      console.log(response)
    })
    .catch(error => {
      console.log(error.response)
    })
  }
  return(
    <div className='contact' data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
      <h2>you are wellcome to contact to us</h2>
      <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
          label="name"
          id="outlined-basic"
          variant="outlined"
          type='text'
          value={name}
          name='name'
          placeholder='your name'
          onChange={(e) => (setName(e.target.value))}
        />
        <TextField
          label="email address"
          id="outlined-basic"
          variant="outlined"
          type='text'
          value={email}
          name='email'
          placeholder='your email address'
          onChange={(e) => (setEmail(e.target.value))}
        />
        <TextField
          id="outlined-multiline-static"
          label="message"
          rows="8"
          variant="outlined"
          multiline
          type='text'
          value={message}
          name='message'
          placeholder='write a message'
          onChange={(e) => (setMessage(e.target.value))}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          type='submit'>send</Button>
      </form>
    </div>
  );
}

export default Contact;


const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  button: {
    margin: theme.spacing(1),
    width: '100%',
    height: 50,
    backgroundColor: '#003443'
  },
}));