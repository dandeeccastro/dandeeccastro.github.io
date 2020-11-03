import React, { useState, componentDidMount } from 'react'
import styles from './Art.module.css'

class DoomFire extends React.Component {

	constructor(props) {
		super(props);
		this.state = {firePixels: this.createFireDataStructure()}
		console.log(this.props, this.state.firePixels)
	}
	fireColorsPalette = ['#070707','#1f0707','#2f0f07','#470f07','#571707','#671f07','#771f07','#8f2707','#9f2f07','#af3f07','#bf4707','#c74707','#df4f07','#df5707','#df5707','#d75f07','#d75f07','#d7670f','#cf6f0f','#cf770f','#cf7f0f','#cf8717','#c78717','#c78f17','#c7971f','#bf9f1f','#bf9f1f','#bfa727','#bfa727','#bfaf2f','#b7af2f','#b7b72f','#b7b737','#cfcf6f','#dfdf9f','#efefc7','#ffffff']

	createFireDataStructure() {
		let firePixelsArray = [];
		for (let column = 0; column < this.props.height; column++ ) {
			let firePixelsRow = [];
			for (let row = 0; row < this.props.width; row++ ) {
				if (column == this.props.height - 1){
					firePixelsRow[row] = 36;
				} else {
					firePixelsRow[row] = 0;
				}
			}
			firePixelsArray[column] = firePixelsRow
		}
		for (let i = 0; i < this.props.width * this.props.height; i++) {
			console.log(firePixelsArray[i])
		}
		return firePixelsArray;
	}

	calculateFirePropagation () {
		let resultingFire = this.state.firePixels
		for (let i = 0; i < this.props.height; i++) {
			for (let j = 0; j < this.props.width; j++) {
				let decay = Math.floor( Math.random() * 5 );
				let j_decay = (j + decay) % this.props.width
				let i_decay = i + Math.floor(decay / this.props.height)
				if (i + 1 < this.props.height) {
					resultingFire[i_decay][j_decay] = Math.max(resultingFire[i + 1][j] - decay, 0)
				}
			}
		}
		this.setState({firePixels: resultingFire})
	}

	componentDidMount() {
		setInterval(() => {this.calculateFirePropagation()},50)
	}

	render() {
		return (
			<div id="fireCanvas">
				<table style={{
					borderCollapse: 'collapse', 
					border: '1px solid #000'
				}} cellSpacing='0' cellPadding='0'>

				{this.state.firePixels.map((row) => 
					(<tr> {row.map((column) => 
						(<td style={{
							width:'10px',
							height:'10px',
							textAlign:'center',
							verticalAlign:'center',
							backgroundColor:this.fireColorsPalette[column]
						}}></td>)
					)} </tr>)
				)}	
				</table>
			</div>	
		);
	}
}

function MandelBrot (props) {
	return (
		<div><p>Poop</p></div>
	)
}

function Conway (props) {
	return (
		<div>
			<p>Stinky</p>
		</div>
	);
}

export default () => {
	return(
		<div>
			<DoomFire width={100} height={50}/>
		</div>
	);
}
