import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './Contact.css'
const Contact = () => {
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
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact