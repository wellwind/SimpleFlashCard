var CurrentQuestionNumber = require("./CurrentQuestionNumber");
var FlashCardMainContainer = require("./FlashCardMainContainer");
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
                        <FlashCardMainContainer />
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = FlashCard;