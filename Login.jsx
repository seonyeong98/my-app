import React, {Component} from 'react';
import { Link  } from 'react-router-dom';
import axios from 'axios'

class Login extends Component {


    render() {
        return(
            <>
            <form>
                <input type="text" placeholder="아이디"/>
                <input type="password" placeholder="비밀번호"/>
            </form>
            <br/>
            <input type="button" value="로그인"/>
            </>
        )

    }
}

export default Login;