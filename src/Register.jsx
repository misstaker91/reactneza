import {useState, useEffect} from "react";
import {Component} from '../src/components/component'
import Wrapper from "./assets/wrappers/RegisterPage";
import FormRow from "./components/FormRow";
import Alert from "./components/Alert";
import {useAppContext} from "./context/appContext";

const initialState =
    {
        name: '',
        email: '',
        password: '',
        isMember: true,


    }

function Register() {


    const [values, setValues] = useState(initialState)

    const {isLoading, showAlert, displayAlert} = useAppContext()

    function toggleMember() {
        setValues(prevState => {
            return {
                ...prevState, isMember: !values.isMember
            }
        })
    }

    function handleChange(e) {
        setValues({...values, [e.target.name]:e.target.value})

    }

    function onSubmit(e) {
        e.preventDefault()
        const {name, email, password, isMember} = values
        if(!email || !password || (!isMember && !name)) {
            displayAlert()
            return
        }
        console.log(values)

    }

    return (
        <Wrapper className='full-pag e'>
            <form className='form' onSubmit={onSubmit}>
                <Component/>
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {showAlert && <Alert/>}
                {!values.isMember &&
                    <FormRow type={'text'} name={'name'} value={values.name} handleChange={handleChange}/>
                }
                <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange}/>
                <FormRow type={'password'} name={'password'} value={values.password} handleChange={handleChange}/>
                <button type="submit" className='btb btn-block'>Submit</button>
                <p>
                    {values.isMember? 'Not a member yet? ' : 'Already a member?'}
                    <button type='button' onClick={toggleMember} className='member-btn'>{values.isMember ? 'Register': 'Login'}</button>
                </p>

            </form>
        </Wrapper>
    )
}

export default Register