var CurrentQuestionNumber = React.createClass({
    render: function(){
        return (
            <span className="pull-right">1/10</span>
        );
    }
})
var FlashCard = React.createClass({
    getInitialState: function(){
        return {
            questions:{}
        };
    },
    render :function(){
        return (
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <span>Flassh Cards</span>
                            <CurrentQuestionNumber />
                        </h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="fc-english">Flash Card</div>
                            </div>
                            <div classMame="col-xs-12">
                                <div className="fc-chinese fc-blur">單字卡</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <FlashCard />,
    document.getElementById("FlashCardApp")
);
