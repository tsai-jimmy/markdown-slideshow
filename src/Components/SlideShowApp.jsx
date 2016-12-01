import React,{ Component } from 'react';
import { LivePreview } from './LivePreview';
import { SlideShowButton } from './SlideShowButton';
import { MarkdownButton } from './MarkdownButton';

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
		this.setState({
			text: e.target.value,
			canPlay: e.target.value !== ''
		});
	}
	//將markdown的文字訊息利用props傳給Slideshowbuttn-->
	render() {
		return (
			<div className="row">
				<div className="col-md-6">
					<h1 >You can write something at here</h1>
					<MarkdownButton />
					<textarea 
						className="form-control"
						onChange={this.handlechange}
						rows="30"
					/>
				</div>
				<div className="col-md-6">
					<h1>Here will show something you write</h1>
					<span data-toggle="buttons">
						<SlideShowButton 
							className="btn btn-default btn-circle btn-lg"
							canPlay={this.state.canPlay}
							text={this.state.text}
						 />
					</span>
					<LivePreview 
						text={this.state.text}
					/>
				</div>
			</div>
		);
	}
}

SlideShowApp.defaultProps = {
	
}