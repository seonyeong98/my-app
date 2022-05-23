import React, {Component}from 'react';
import axios from "axios";
import { render } from '@testing-library/react';

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      userPw: null,
      name: null,
      birth: null,
      gender: null,
      email: null,
      pnu: null
    }
  }

  validation() {
    const {userId} = this.state;
    alert(userId);
    axios.get(`/api/userid-exist?userId=${userId}`);
    //if(vlaue)

    const {email} = this.state;
    alert(email);
    axios.get(`/api/mail-exist?email=${email}`)
    if(true) {
      alert("이미 사용중인 메일 입니다.")
    }
  }

  createUser = () => {
    //this.validation();
    const param = {
      userId: this.state.userId,
      userPw: this.state.userPw,
      name: this.state.name,
      birth: this.state.birth,
      gender: this.state.gender,
      email: this.state.email,
      pnu: this.state.pnu
  }
  console.log(param)
    axios.post("/api/join", param)
    .then(res => {
        console.log(res.data)
    }).error(err => {
      console.log(err)
    })
  }

  handleInput = (e) => {
    //const id = e.target.id;
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
        [name]: value
    });
  }


 

  render() {
    return (
      <>
          <h1>회원가입</h1>
          <form>
            아이디<br/>
            <input type="text" id="userid" name='userId' value={this.state.userId} onChange={this.handleInput} /><br/>
            비밀번호<br/>
            <input type="password"  id="password" name='userPw' value={this.state.userPw} onChange={this.handleInput}/><br/>
            이름<br/>
            <input type="text" id="name" name='name' value={this.state.name} onChange={this.handleInput}/><br/>
            생년월일<br/>
            <input type="text"  id="birth" name='birth' value={this.state.birth} onChange={this.handleInput}/><br/>
            성별<br/>
            <select name="gender" value={this.state.gender} onChange={this.handleInput}>
            <option value="">선택</option>
            <option value="female">여성</option>
            <option value="male">남성</option>
            </select>
            <br/>
            본인 확인 이메일<br/>
            <input type="text"  id="email" name='email' value={this.state.email} onChange={this.handleInput}/><br/>
            전화번호<br/>
            <input type="text"  id="pnu" name='pnu' value={this.state.pnu} onChange={this.handleInput}/><br/>
            <input type="button" value="회원가입" onClick={this.createUser}/>
            </form>
            </>
      );

  }
}

export default Join;
