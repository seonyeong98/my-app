import React, {Component} from 'react';
import { Link  } from 'react-router-dom';
import axios from 'axios'

class Hello extends Component {


    render() {
        return(
            <>
            <div>
                <h1>Hello + ${userId}</h1>
            </div>
            <input type="button" value ="로그아웃"/>
        
            </>
        )

    }
}

export default Hello;