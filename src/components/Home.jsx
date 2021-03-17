import React from 'react'
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import '../assets/styles/Home.scss'

export default function Home () {
    return (
        <div className='homeComponent'>
            <div className='blockContainer'>
                <div className='blockWelcome'>
                    <h1>Welcome to Symfall</h1>
                </div>
                <div className='signForm'>
                    <SignIn />
                    <span className='orItem'>Or</span>
                    <SignUp />
                </div>
            </div>
        </div>
    )
}
