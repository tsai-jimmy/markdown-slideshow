import React,{ Component } from 'react';
import { LivePreview } from './LivePreview';
import { SlideShowButton } from './SlideShowButton';

export class SlideShowApp extends Component {
	constructor(props,context) {
		super(props,context);
		this.state = {
			text:''
		};
		this.handlechange = this.handlechange.bind(this);
	}

	componentWillUnmount() {
	}

	componentDidMount() {
	}

	handlechange(e) {
		this.setState({text:e.target.value});
	}
	//將markdown的文字訊息利用props傳給Slideshowbuttn-->
	render() {
		return (
			<div className="row">
				<div className="col-md-6">
					<SlideShowButton text={this.state.text} className="btn btn-primary" />
					<textarea className="form-control" rows="10" onChange={this.handlechange} />
				</div>
				<div className="col-md-6">
					<LivePreview text={this.state.text} />
				</div>
			</div>
		);
	}
}

SlideShowApp.defaultProps = {
	
}