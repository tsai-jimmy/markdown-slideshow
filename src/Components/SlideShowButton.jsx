import React,{ Component } from 'react';

export class SlideShowButton extends Component {
	constructor(props,context) {
		super(props,context);
		this.state = {
		};
		this._handleClick = this._handleClick.bind(this);
	}

	componentWillUnmount() {
	}

	componentDidMount() {
		$(this.refs.playback).addClass('disabled');
	}
	componentDidUpdate(prevProps, prevState) {
		if(this.props.canPlay === true) {
			$(this.refs.playback).removeClass('disabled');
		}
		else{
			$(this.refs.playback).addClass('disabled');
		}
	}
	_handleClick(e) {
		//catch 文字輸入區域的內容放到自己component的狀態
		this.setState({text: this.props.text});
		//根據github wiki，將markdown的本文放到ID為source的區塊
		document.getElementById('source').innerHTML = this.props.text;
		//remark function
		remark.create();
	}

	render() {
		return (
		        <label
		        	ref="playback"
		        	className={this.props.className}
		        	onClick={this._handleClick}
		        >
		        	<input 
		        		type="radio"
		        	/>
		        	<i className="glyphicon glyphicon-facetime-video"></i>
		        </label>
		);
	}
}

SlideShowButton.defaultProps = {
	canPlay: true,
	text: ''	
}
SlideShowButton.propTypes = {
	canplay: React.PropTypes.bool,
	text: React.PropTypes.string
}