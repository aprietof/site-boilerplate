import React, { Component } from 'react';
import styled from 'styled-components';

const ColorBlocksWrapper = styled.div`
	display: flex;
	height: 5px;
`
const ColorBlock = styled.div`
	flex: 1;
	background-color: ${props => props.backgroundColor};
`
const backgroundColors = [
	'#0b24fb',
	'#fc3768',
	'#9bcdfd',
	'#fecd46',
	'#2bfecd',
	'#fd21ca',
	'#fd9a9b',
	'#2cfffd',
	'#43fd9c',
	'#555',
]

const blocks = backgroundColors.map( (backgroundColor, key) => 
	<ColorBlock key={key} backgroundColor={backgroundColor}/>
)

export default class ColorBlocks extends Component {
	render() {
		return (
			<ColorBlocksWrapper>{blocks}</ColorBlocksWrapper>
		);
	}
}