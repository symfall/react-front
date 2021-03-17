import React, {useEffect, useState} from 'react'

export default function SignUp () {

    const [login, setLogin] = useState('')
    const [loginError, setLoginError] = useState('login is empty!')
    const [loginDirty, setLoginDirty] = useState(false)

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('email is empty!')
    const [emailDirty, setEmailDirty] = useState(false)

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('password is empty!')
    const [passwordDirty, setPasswordDirty] = useState(false)

    const [repeatPassword, setRepeatPassword] = useState('')
    const [repeatPasswordError, setRepeatPasswordError] = useState('repeat password is empty!')
    const [repeatPasswordDirty, setRepeatPasswordDirty] = useState(false)

    const [formValid, setformValid] = useState(false)

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'signUpLogin':
                setLoginDirty(true)
                break
            case 'signUpEmail':
                setEmailDirty(true)
                break
            case 'signUpPassword':
                setPasswordDirty(true)
                break
            case 'signUpRepeatPassword':
                setRepeatPasswordDirty(true)
                break
            default:
                break
        }
    }

    useEffect(() => {
        if (loginError || emailError || passwordError || repeatPasswordError) {
            setformValid(false)
        } else {
            setformValid(true)
        }
    }, [loginError, emailError, passwordError, repeatPasswordError])

    const loginChange = (e) => {
        setLogin(e.target.value)
        const loginRegEx = /^[a-zA-Z0-9\-]+$/;
        if(!loginRegEx.test(String(e.target.value).toLocaleLowerCase())) {
            setLoginError('login is incorrect (use small or big letter and number)!')
            if(!e.target.value) {
                setLoginError('login is empty!')
            } 
        } else {
            setLoginError('')
        }
    }

    const errorStyle = {
        backgroundColor: '#ccc',
    }

    const clearForm = () => {
        setLogin('')
        setEmail('')
        setPassword('')
        setRepeatPassword('')
        setLoginError(' ')
        setEmailError(' ')
        setPasswordError(' ')
        setRepeatPasswordError(' ')
        setformValid(false)
    }

    const emailChange = (e) => {
        setEmail(e.target.value)
        const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(!emailRegEx.test(String(e.target.value).toLocaleLowerCase())) {
            setEmailError('email is incorrect!')
            if(!e.target.value) {
                setEmailError('email is empty!')
            }
        } else {
            setEmailError('')
        }
    }

    const passwordChange = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 8) {
            setPasswordError('password is so short (minimum 8 symbol)!')
            if(!e.target.value) {
                setPasswordError('password is empty!')
            } 
        } else {
            setPasswordError('')
        }
    }

    const repeatPasswordChange = (e) => {
        setRepeatPassword(e.target.value)
        if(e.target.value != password) {
            setRepeatPasswordError('password mismatch')
            if(!e.target.value) {
                setRepeatPasswordError('password empty!')
            } 
        } else {
            setRepeatPasswordError('')
        }
    }

    return (
        <form action="#" className='signUpForm'>
            <div className='formHeader'> 
                <h3>Sign Up</h3>
            </div>
            <div>
                <input 
                    className='formInput'
                    value={login}
                    onChange={loginChange}
                    onBlur={blurHandler}
                    name='signUpLogin'
                    type="text"
                    placeholder='login' />
                {(loginDirty && loginError) && <p>{loginError}</p>}
            </div>
            <div>
                <input 
                     className='formInput'
                     value={email}
                     onChange={emailChange}
                     onBlur={blurHandler}
                     name='signUpEmail'
                     type="text"
                     placeholder='email' />
                {(emailDirty && emailError) && <p>{emailError}</p>}
            </div>
            <div>
                <input 
                    className='formInput'
                    value={password} 
                    onChange={passwordChange}
                    onBlur={blurHandler}
                    name='signUpPassword' 
                    type="password" 
                    placeholder='password' />
                {(passwordError && passwordDirty) && <p>{passwordError}</p>}
            </div>
            <div>
                <input 
                    className='formInput'
                     value={repeatPassword}
                     onChange={repeatPasswordChange}
                     onBlur={blurHandler}
                     name='signUpRepeatPassword' 
                     type="password" 
                     placeholder='repeat passwort'/>
                {(repeatPasswordError && repeatPasswordDirty) && <p>{repeatPasswordError}</p>}
            </div>
            <div className='blockBtn'>
            {(!formValid) && <input className='formBtn' style={errorStyle} type="submit" disabled={!formValid} />}
            {(formValid) && <input className='formBtn' type="submit" disabled={!formValid} />}
            <input className='formBtn' type="reset" onClick={clearForm}/>
            </div>
        </form>
    )
}
