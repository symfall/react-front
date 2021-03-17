import React, {useState, useEffect} from 'react'

export default function SignIn () {

    const [login, setLogin] = useState('')
    const [loginError, setLoginError] = useState('login is empty!')
    const [loginDirty, setLoginDirty] = useState(false)

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('password is empty!')
    const [passwordDirty, setPasswordDirty] = useState(false)

    const [repeatPassword, setRepeatPassword] = useState('')
    const [repeatPasswordError, setRepeatPasswordError] = useState('repeat password is empty!')
    const [repeatPasswordDirty, setRepeatPasswordDirty] = useState(false)

    const [formValid, setformValid] = useState(false)

    const clearForm = () => {
        setLogin('')
        setPassword('')
        setRepeatPassword('')
        setLoginError(' ')
        setPasswordError(' ')
        setRepeatPasswordError(' ')
        setformValid(false)
    }

    const errorStyle = {
        backgroundColor: '#ccc',
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'signInLogin':
                setLoginDirty(true)
                break
            case 'signInPassword':
                setPasswordDirty(true)
                break
            case 'signInRepeatPassword':
                setRepeatPasswordDirty(true)
                break
            default:
                break
        }
    }

    useEffect(() => {
        if (loginError || passwordError || repeatPasswordError) {
            setformValid(false)
        } else {
            setformValid(true)
        }
    }, [loginError, passwordError, repeatPasswordError])

    const loginChange = (e) => {
        setLogin(e.target.value)
        if(!e.target.value) {
            setLoginError('login is empty!')
        } else {
            setLoginError('')
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
        <form action="#" className='signInForm'>
            <div className='formHeader'>
                <h3>Sign In</h3>
            </div>
            <div>
                <input className='formInput'
                    value={login}
                    onChange={loginChange}
                    onBlur={blurHandler}
                    name='signInLogin'
                    type="text"
                    placeholder='login'/>
                {(loginDirty && loginError) && <p>{loginError}</p>}
            </div>
            <div>
                <input 
                    className='formInput'
                    value={password} 
                    onChange={passwordChange}
                    onBlur={blurHandler}
                    name='signInPassword' 
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
                    name='signInRepeatPassword' 
                    type="password" 
                    placeholder='repeat passwort' />
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
