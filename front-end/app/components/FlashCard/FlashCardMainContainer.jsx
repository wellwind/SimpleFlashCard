var FlashCardMainContainer = React.createClass({
    getInitialState: function(){
        return {
            blurAnswer: true
        }
    },
    toogleAnswerBlur: function(){
        this.setState({
            blurAnswer: !this.state.blurAnswer
        });
    },
    render: function(){
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="fc-english">Flash Card</div>
                </div>
                <div className="col-xs-12">
                    <div className={"fc-chinese " + (this.state.blurAnswer ? "fc-blur" : "") }>閃卡</div>
                </div>
                <div className="col-xs-12">
                    <div className="text-center fc-check-result">
                        <div className="text-success"><i className="fa fa-fw fa-check-circle"></i></div>
                        <div className="text-danger"><i className="fa fa-fw fa-times-circle"></i></div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <button className="btn btn-warning" onClick={this.toogleAnswerBlur}>
                        { this.state.blurAnswer ? "Show" : "Hide" }
                    </button>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="pull-right">
                        <button className="btn btn-success"><i className="fa fa-fw fa-check"></i>Correct</button>
                        <button className="btn btn-danger"><i className="fa fa-fw fa-times"></i>Wrong</button>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div className="text-center">
                        <button className="btn btn-default"><i className="fa fa-fw fa-arrow-left"></i>Prev</button>
                        <button className="btn btn-default">Next<i className="fa fa-fw fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = FlashCardMainContainer;