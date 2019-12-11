import React from 'react';


const PrivacyPolicy = () => {
  return(
    <div className='privacyPolicy' style={styles.privacy}>
      <div className='container' style={styles.container}>
        <h6 style={styles.headline}>Privacy Policy</h6>
        {privacyPolicy.map(p => (
          <p style={styles.paragraph}>
            {p}
          </p>
        ))}

      </div>
    </div>
  );
}

export default PrivacyPolicy;


const styles={
  privacy: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container:{
    position:'absolute',
    width: '60%',
    height: '70vh',
    boxShadow: '0 0 25px 2px rgba(0,0,0, 0.3)',
    padding: '2%',
    overflowY: 'scroll',

  },
  headline: {
    fontSize: '1.3rem',
    color:'#003443',
    marginBottom: '3%'
  },
  paragraph: {
    marginTop: '1.5%',
    fontSize:'1rem',
    lineHeight: '1.6rem',
    color: '#46433f'
  },
  break: {
    lineHeight: '2.5rem'
  }
}


const privacyPolicy = [
  "Your privacy is important to us. It is sublock's policy to respect your privacy regarding any\
  information we may collect from you across our website, http://seylebas.herokuapp.com/, and other sites we own and operate.",
  "We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and\
  lawful means, with your knowledge and consent.",
  "We also let you know why we’re collecting it and how it will be used.",
  "We only retain collected information for as long as necessary to provide you with your requested service. What data we\
  store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access,\
  disclosure, copying, use or modification.",
  " We don’t share any personally identifying information publicly or with third-parties, except when required to by law.",
  "Our website may link to external sites that are not operated by us. Please be aware that we have no control over the\
  content and practices of these sites, and cannot accept responsibility or liability for their respective privacy\
  policies.",
  "You are free to refuse our request for your personal information, with the understanding that we may be unable to\
  provide you with some of your desired services",
  "Your continued use of our website will be regarded as acceptance of our practices around privacy and personal\
  information. If you have any questions about how we handle user data and personal information, feel free to contact us.",
  "This policy is effective as of 11 December 2019."
]
