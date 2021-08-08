import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {signIn} from '../../redux/actions/loginActions';
import { saveUser } from '../../redux/actions/loginActions';

import Input from '../Input/Input'
import Button from '../Button/Button';
import {LoginFormStyled, FormTitleStyled} from './LoginForm.styles';

const LoginForm = ({history}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector(state => state.auth.error);
    const loading = useSelector(state => state.auth.loading);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            username,
            password
        }
            if(loading) {
                return (
                    <p>Loading...</p>
                )
            }
            dispatch(saveUser(user));
            dispatch(signIn(user, history));
        if(error) {
            history.push('/error');
        }
            
    }

    return (
        <LoginFormStyled onSubmit={handleSubmit}>
            <FormTitleStyled>Авторизация</FormTitleStyled>
            <Input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={username}
            setValue={setUsername}/>
            
            <Input 
            type='password' 
            name='password' 
            placeholder='Password' 
            value={password}
            setValue={setPassword}/>

            <Button type='submit' title='Отправить'/>
        </LoginFormStyled>
    )
}

export default LoginForm;
