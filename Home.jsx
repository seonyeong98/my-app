import React, {Component} from 'react';
import { Link  } from 'react-router-dom';
import axios from 'axios'

class Home extends Component {


    render() {
        return (
            <>
            메인페이지
            <Link to="/join">회원가입</Link>
            <Link to="/login">로그인</Link>
            </>
        );

    }
}

export default Home;