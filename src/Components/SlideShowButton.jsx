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
			<button className={this.props.className} onClick={this._handleClick}>播放</button>
		);
	}
}

SlideShowButton.defaultProps = {
	
}