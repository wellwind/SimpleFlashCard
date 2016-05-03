/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var FlashCard = __webpack_require__(1);

	ReactDOM.render(React.createElement(FlashCard, null), document.getElementById("FlashCardApp"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var CurrentQuestionNumber = __webpack_require__(2);
	var FlashCardMainContainer = __webpack_require__(3);
	var FlashCard = React.createClass({
	    displayName: "FlashCard",

	    getInitialState: function getInitialState() {
	        return {
	            questions: {}
	        };
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "container" },
	            React.createElement(
	                "div",
	                { className: "panel panel-info" },
	                React.createElement(
	                    "div",
	                    { className: "panel-heading" },
	                    React.createElement(
	                        "h3",
	                        { className: "panel-title" },
	                        React.createElement(
	                            "span",
	                            null,
	                            "Flassh Cards"
	                        ),
	                        React.createElement(CurrentQuestionNumber, null)
	                    )
	                ),
	                React.createElement(
	                    "div",
	                    { className: "panel-body" },
	                    React.createElement(FlashCardMainContainer, null)
	                )
	            )
	        );
	    }
	});

	module.exports = FlashCard;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var CurrentQuestionNumber = React.createClass({
	    displayName: "CurrentQuestionNumber",

	    render: function render() {
	        return React.createElement(
	            "span",
	            { className: "pull-right" },
	            "2/10"
	        );
	    }
	});

	module.exports = CurrentQuestionNumber;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var FlashCardMainContainer = React.createClass({
	    displayName: "FlashCardMainContainer",

	    getInitialState: function getInitialState() {
	        return {
	            blurAnswer: true
	        };
	    },
	    toogleAnswerBlur: function toogleAnswerBlur() {
	        this.setState({
	            blurAnswer: !this.state.blurAnswer
	        });
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "row" },
	            React.createElement(
	                "div",
	                { className: "col-xs-12" },
	                React.createElement(
	                    "div",
	                    { className: "fc-english" },
	                    "Flash Card"
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "col-xs-12" },
	                React.createElement(
	                    "div",
	                    { className: "fc-chinese " + (this.state.blurAnswer ? "fc-blur" : "") },
	                    "閃卡"
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "col-xs-12" },
	                React.createElement(
	                    "div",
	                    { className: "text-center fc-check-result" },
	                    React.createElement(
	                        "div",
	                        { className: "text-success" },
	                        React.createElement("i", { className: "fa fa-fw fa-check-circle" })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "text-danger" },
	                        React.createElement("i", { className: "fa fa-fw fa-times-circle" })
	                    )
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "col-xs-12 col-md-6" },
	                React.createElement(
	                    "button",
	                    { className: "btn btn-warning", onClick: this.toogleAnswerBlur },
	                    this.state.blurAnswer ? "Show" : "Hide"
	                )
	            ),
	            React.createElement(
	                "div",
	                { className: "col-xs-12 col-md-6" },
	                React.createElement(
	                    "div",
	                    { className: "pull-right" },
	                    React.createElement(
	                        "button",
	                        { className: "btn btn-success" },
	                        React.createElement("i", { className: "fa fa-fw fa-check" }),
	                        "Correct"
	                    ),
	                    React.createElement(
	                        "button",
	                        { className: "btn btn-danger" },
	                        React.createElement("i", { className: "fa fa-fw fa-times" }),
	                        "Wrong"
	                    )
	                )
	            ),
	            React.createElement(
	                "div",
	                { "class": "col-xs-12" },
	                React.createElement(
	                    "div",
	                    { className: "text-center" },
	                    React.createElement(
	                        "button",
	                        { className: "btn btn-default" },
	                        React.createElement("i", { className: "fa fa-fw fa-arrow-left" }),
	                        "Prev"
	                    ),
	                    React.createElement(
	                        "button",
	                        { className: "btn btn-default" },
	                        "Next",
	                        React.createElement("i", { className: "fa fa-fw fa-arrow-right" })
	                    )
	                )
	            )
	        );
	    }
	});

	module.exports = FlashCardMainContainer;

/***/ }
/******/ ]);