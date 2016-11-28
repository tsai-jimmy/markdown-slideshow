import React,{ Component } from 'react';

export class LivePreview extends Component {
	constructor(props,context) {
		super(props,context);
		this.state = {
			html: ''
		};
		this.converter = new showdown.Converter(); 
	}

	componentWillUnmount() {
	}

	componentDidMount() {
	}

	componentDidUpdate(prevProps, prevState) {
		document.getElementById('LivePreview').innerHTML = this.state.html
	}

	componentWillReceiveProps(props) {
		//console.log(props.text);如果使用this.props.text，會取用到上一個componentlifecycle 
		//nextProps
		var html = this.converter.makeHtml(props.text);
		this.setState({
			html: html
		});
	}


	render() {
		return (
			<div id="LivePreview">
			</div>
		);
	}
}

LivePreview.defaultProps = {
	
}