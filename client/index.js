import React, { Component } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const Button = styled.div`
  position: absolute;
  width: 7vw;
  top: 10%;
  text-align: center;
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
`
const ButtonTwo = styled.div`
  position: absolute;
  width: 30%;
  top: 75%;
  left: 50%;
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
`
const ModalBox = styled.div`
  font-size: 40px;
  float: right;
  position: relative;
  background: lightgrey;
  background: radial-gradient(#0a2e38 0%, #000, 70%);
  background-size: 100%;
  text-align: center;
  width: calc(100vh / 3);
  height: calc(100vh / 3);
`

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.handleModalClick = this.handleModalClick.bind(this)
    this.handleRemoveClick = this.handleRemoveClick.bind(this)
  }

  handleModalClick() {}

  handleRemoveClick() {}

  render() {
    return <Button>'Click Button for Modal'</Button>
  }
}

render(<Modal />, document.querySelector('#container'))
