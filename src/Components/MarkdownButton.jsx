import React,{ Component } from 'react';

export class MarkdownButton extends Component {
	constructor(props,context) {
		super(props,context);
		this.state = {
		};
		this.handleClick = this.handleClick.bind(this);
	}

	componentWillUnmount() {
	}

	componentDidMount() {
	}
	handleClick() {
		window.open('http://markdown.tw/','_blank')
	}

	render() {
		return (
			<span>
		        <label className="btn btn-default btn-circle btn-lg" onClick={this.handleClick} target="_blank">
		        	<i className="glyphicon glyphicon-pencil"></i>
		        </label>
	        </span>
		);
	}
}

MarkdownButton.defaultProps = {
	
}