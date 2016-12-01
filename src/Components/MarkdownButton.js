'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MarkdownButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkdownButton = exports.MarkdownButton = function (_Component) {
	_inherits(MarkdownButton, _Component);

	function MarkdownButton(props, context) {
		_classCallCheck(this, MarkdownButton);

		var _this = _possibleConstructorReturn(this, (MarkdownButton.__proto__ || Object.getPrototypeOf(MarkdownButton)).call(this, props, context));

		_this.state = {};
		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(MarkdownButton, [{
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'handleClick',
		value: function handleClick() {
			window.open('http://markdown.tw/', '_blank');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement("span", null, _react2.default.createElement("label", { className: "btn btn-default btn-circle btn-lg", onClick: this.handleClick, target: "_blank" }, _react2.default.createElement("i", { className: "glyphicon glyphicon-pencil" })));
		}
	}]);

	return MarkdownButton;
}(_react.Component);

MarkdownButton.defaultProps = {};
//# sourceMappingURL=MarkdownButton.js.map
