var QuestionNumber = React.createClass({
    render: function(){
        return (
            <span className="pull-right">{this.props.currentQuestionNumber}/{this.props.totalQuestions}</span>
        );
    }
});

module.exports = QuestionNumber;