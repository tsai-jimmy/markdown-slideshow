var SlideShowButton = React.createClass({
  handleClick: function(event) {
    event.preventDefault();

    // use Flux pattern to arrange this
    $(this.props.hideTarget).addClass('hide');

    var slideshow = remark.create();
  },
  render: function() {
    return (
        <input 
        type="submit" 
        onClick={this.handleClick}
        className="btn btn-default"
        value={this.props.value} />
    )
  }
});

var MarkdownTextArea = React.createClass({
  componentDidMount: function() {
  },
  render: function() {
    return (
      <textarea 
      rows={this.props.rows}
      className={this.props.className}
      onChange={this.props.handleChange} />
    );
  }
});

var MarkdownLiveEditor = React.createClass({
  markdownGithubParser: function(data) {
    var self = this;
    $.ajax({
      method: 'POST',
      url: 'https://api.github.com/markdown/raw',
      dataType: "html",
      processData: false,
      data: data,
      contentType: "text/plain",
      success: function(data) {
        self.setState({
          data: data
        });
      },
      error: function(xhr, status, err) {
        self.setState({
          data: status
        });
      }
    });
  },
  markdownLocalParser: function(data) {
    var data = this.converter.makeHtml(data);
    this.setState({
      data: data
    });
  },
  parser: function(data) {
    if (typeof this.markdownParsers[this.props.markdownParser] === "function") {
      this.markdownParsers[this.props.markdownParser](data);
    }
  },
  componentDidMount: function() {
    this.converter = new showdown.Converter();

    this.markdownParsers = {
      local: this.markdownLocalParser,
      github: this.markdownGithubParser
    };
  },
  getInitialState: function() {
    return {
      data: ''
    };
  },
  handleChange: function(event) {
    // Parse markdown
    this.parser(event.target.value);

    // use Flux pattern to arrange this
    $('#source').text(event.target.value)
  },
  render: function() {
    // Live preview
    $(this.props.livePreviewTarget).html(this.state.data);

    return (
        <MarkdownTextArea 
        handleChange={this.handleChange} 
        rows={this.props.rows}
        livePreviewTarget={this.props.target} 
        className={this.props.className}
        markdownParser={this.props.markdownParser} />
    )
  }
});

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-xs-6 col-lg-6" id="container">
        <SlideShowButton hideTarget="#editor" value="Slide Now" />
        <MarkdownLiveEditor className="form-control" rows="25" livePreviewTarget="#article" markdownParser="local" />
      </div>
      <div className="col-md-6 col-xs-6 col-lg-6" id="article">
      </div>
    </div>
  </div>
  ,
  document.getElementById('editor'));