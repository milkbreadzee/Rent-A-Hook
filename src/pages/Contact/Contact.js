import React from 'react'
import { useNavigate } from 'react-router'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './Contact.css'
const Contact = () => {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/')
  }
  return (
    <div>
        <Header />
        <div className="subs">
            <div className="formborder">
            <h2>Get In Contact With Us!</h2>
            <h3>Fill out this feedback form</h3>
            <form className='feedbackform' action="">
                <input type="text" placeholder='name' />
                <input type="text" placeholder='email'/>
                <input type="text" placeholder='feedback' />
               
            </form>
            <button onClick={handleClick}>Submit</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact