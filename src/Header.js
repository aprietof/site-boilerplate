import React, { Component } from 'react';
import ColorBlocks from './ColorBlocks';
import logo from '../assets/images/futurismLogo.svg';
import styled from 'styled-components';

const HomeLogo = styled.img`
	height: 45px;
`

const HomeHeader = styled.div`
	background: #000;
  padding: 0 0 30px 35px;
  color: white;
`

export default class Header extends Component {
	render() {
		return (
			<div>
				<HomeHeader>
					<HomeLogo src={logo} alt="logo"/>
				</HomeHeader>
	      <ColorBlocks/>
			</div>
		);
	}
}


