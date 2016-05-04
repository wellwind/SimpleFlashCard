var _ = require("../../../scripts/underscore-min");

var Score = React.createClass({
    render: function(){
        var questionResult = _.reduce(this.props.questions, function(result, question){
            if(question.correct !== null){
                ++result.totalQuestions;
                result.correct += question.correct === true ? 1 : 0
            }
            return result;
        },{
            totalQuestions: 0,
            correct: 0
        });
        var score = parseInt((questionResult.correct / questionResult.totalQuestions) * 10000) / 100;
        
        return (
            <div className={ "text-center " + (questionResult.totalQuestions === this.props.questions.length ? "show" : "hide") }>
                <h3 className="text-success">Correct Answers: {questionResult.correct} / {questionResult.totalQuestions}</h3>
                <h4>Your Score: <span className={score >= 60 ? "text-success" : "text-danger" }><u>{score}</u></span></h4>
            </div>
        );
    }
});

module.exports = Score;