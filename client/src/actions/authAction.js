import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
}

export function login(userData) {
    return dispatch => {
        return axios.post('/api/users/signin', userData).then(res => {
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthToken(jwtDecode(token));
            dispatch(setCurrentUser(jwtDecode(token)));
        });
    }
}