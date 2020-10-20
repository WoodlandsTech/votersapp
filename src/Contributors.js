import React from 'react';

class Popup extends React.Component {

	constructor(props) {
		super(props);
		this.state = { showPopup: false };
	}

	togglePopup() {
		this.setState({
			showPopup: !this.state.showPopup
		});
	}

	render() {
		const outter_style = {
			position: "fixed",
			width: "20%",
			height: "20%",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			margin: "auto",
			backgroundColor: "gray",

		};
		const inner_style = {
			position: "absolute",
			left: "25%",
			right: "25%",
			top: "25%",
			bottom: "25%",
			margin: "auto",
			borderRadius: "20px",
			background: "white",
		};

		return (
			<div className='popup' style={outter_style} >
				<div className='popup_inner' style={inner_style}>
					<h1>{this.props.text}</h1>
					<button onClick={this.props.closePopup}>close me</button>
				</div>
			</div>
		);
	}
}



export default Popup;