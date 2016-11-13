"use strict";

var SlideShowButton = React.createClass({ displayName: "SlideShowButton",
  handleClick: function handleClick(event) {
    event.preventDefault();

    // use Flux pattern to arrange this
    $(this.props.hideTarget).addClass('hide');

    var slideshow = remark.create();
  },
  render: function render() {
    return React.createElement("input", {
      type: "submit",
      onClick: this.handleClick,
      className: "btn btn-default",
      value: this.props.value });
  }
});

var MarkdownTextArea = React.createClass({ displayName: "MarkdownTextArea",
  componentDidMount: function componentDidMount() {},
  render: function render() {
    return React.createElement("textarea", {
      rows: this.props.rows,
      className: this.props.className,
      onChange: this.props.handleChange });
  }
});

var MarkdownLiveEditor = React.createClass({ displayName: "MarkdownLiveEditor",
  markdownGithubParser: function markdownGithubParser(data) {
    var self = this;
    $.ajax({
      method: 'POST',
      url: 'https://api.github.com/markdown/raw',
      dataType: "html",
      processData: false,
      data: data,
      contentType: "text/plain",
      success: function success(data) {
        self.setState({
          data: data
        });
      },
      error: function error(xhr, status, err) {
        self.setState({
          data: status
        });
      }
    });
  },
  markdownLocalParser: function markdownLocalParser(data) {
    var data = this.converter.makeHtml(data);
    this.setState({
      data: data
    });
  },
  parser: function parser(data) {
    if (typeof this.markdownParsers[this.props.markdownParser] === "function") {
      this.markdownParsers[this.props.markdownParser](data);
    }
  },
  componentDidMount: function componentDidMount() {
    this.converter = new showdown.Converter();

    this.markdownParsers = {
      local: this.markdownLocalParser,
      github: this.markdownGithubParser
    };
  },
  getInitialState: function getInitialState() {
    return {
      data: ''
    };
  },
  handleChange: function handleChange(event) {
    // Parse markdown
    this.parser(event.target.value);

    // use Flux pattern to arrange this
    $('#source').text(event.target.value);
  },
  render: function render() {
    // Live preview
    $(this.props.livePreviewTarget).html(this.state.data);

    return React.createElement(MarkdownTextArea, {
      handleChange: this.handleChange,
      rows: this.props.rows,
      livePreviewTarget: this.props.target,
      className: this.props.className,
      markdownParser: this.props.markdownParser });
  }
});

ReactDOM.render(React.createElement("div", { className: "container" }, React.createElement("div", { className: "row" }, React.createElement("div", { className: "col-md-6 col-xs-6 col-lg-6", id: "container" }, React.createElement(SlideShowButton, { hideTarget: "#editor", value: "Slide Now" }), React.createElement(MarkdownLiveEditor, { className: "form-control", rows: "25", livePreviewTarget: "#article", markdownParser: "local" })), React.createElement("div", { className: "col-md-6 col-xs-6 col-lg-6", id: "article" }))), document.getElementById('editor'));
//# sourceMappingURL=hello.js.map
