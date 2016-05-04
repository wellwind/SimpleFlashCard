var MainContainer = React.createClass({
    toogleAnswerBlur: function(){
        this.props.toogleAnswerBlur();
    },
    markCorrect: function(){
        this.props.markAnswerCorrect(true);
    },
    markWrong: function(){
        this.props.markAnswerCorrect(false);
    },
    render: function(){
        var currentQuestion = this.props.questions[this.props.currentQuestionIndex];
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="fc-english">
                        {currentQuestion.question}
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className={"fc-chinese " + (currentQuestion.show ? "" : "fc-blur") }>
                        {currentQuestion.answer}
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="text-center fc-check-result">
                        <div className={"text-success " + (currentQuestion.correct === true ? "show" : "hide")}><i className="fa fa-fw fa-check-circle"></i></div>
                        <div className={"text-danger " + (currentQuestion.correct === false ? "show" : "hide")}><i className="fa fa-fw fa-times-circle"></i></div>
                        <div className={currentQuestion.correct === null ? "show" : "hide"}>&nbsp;</div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <button className="btn btn-warning" 
                        onClick={this.toogleAnswerBlur}>
                        { currentQuestion.show ? "Hide" : "Show" }
                    </button>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="pull-right">
                        <button className="btn btn-success"
                            onClick={this.markCorrect}>
                            <i className="fa fa-fw fa-check"></i>Correct
                        </button>
                        <button className="btn btn-danger"
                            onClick={this.markWrong}>
                            <i className="fa fa-fw fa-times"></i>Wrong
                        </button>
                    </div>
                </div>
                <div className="col-xs-12">
                    <div className="text-center">
                        <button className="btn btn-default"
                            disabled={this.props.isFirstQuestion}
                            onClick={this.props.goPrevQuestion}>
                            <i className="fa fa-fw fa-arrow-left"></i>Prev
                        </button>
                        <button className="btn btn-default"
                            disabled={this.props.isLastQuestion}
                            onClick={this.props.goNextQuestion}>
                            Next<i className="fa fa-fw fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = MainContainer;