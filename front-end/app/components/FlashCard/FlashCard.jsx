var QuestionNumber = require("./QuestionNumber");
var MainContainer = require("./MainContainer");
var Score = require("./Score");

var FlashCard = React.createClass({
    getInitialState: function(){
        return {
            questions:[
                {
                    question: "apple",
                    answer: "蘋果",
                    correct: null,
                    show: false
                },
                {
                    question: "banana",
                    answer: "香蕉",
                    correct: null,
                    show: false
                },
                {
                    question: "cat",
                    answer: "貓",
                    correct: null,
                    show: false
                }
            ],
            currentQuestionIndex: 0          
        };
    },
    toogleAnswerBlur: function(){
        var copyQuestoins = JSON.parse(JSON.stringify(this.state.questions));
        var currentQuestion = copyQuestoins[this.state.currentQuestionIndex];
        console.log(currentQuestion);
        currentQuestion.show = !currentQuestion.show;
        console.log(currentQuestion);
        this.setState({questions: copyQuestoins});
    },
    markAnswerCorrect: function(correct){
        var copyQuestoins = JSON.parse(JSON.stringify(this.state.questions));
        var currentQuestion = copyQuestoins[this.state.currentQuestionIndex];
        currentQuestion.correct = correct;
        this.setState({questions: copyQuestoins});
    },
    goPrevQuestion: function(){
        if(this.state.currentQuestionIndex > 0){
            this.setState({currentQuestionIndex: this.state.currentQuestionIndex - 1});
        }
    },
    goNextQuestion: function(){
        if(this.state.currentQuestionIndex < this.state.questions.length - 1){
            this.setState({currentQuestionIndex: this.state.currentQuestionIndex + 1});
        }
    },
    render :function(){
        return (
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <span>Flassh Cards</span>
                            <QuestionNumber currentQuestionNumber={this.state.currentQuestionIndex + 1} totalQuestions={this.state.questions.length} />
                        </h3>
                    </div>
                    <div className="panel-body">
                        <MainContainer 
                            currentQuestionIndex={this.state.currentQuestionIndex}
                            questions={this.state.questions}
                            isFirstQuestion={this.state.currentQuestionIndex == 0}
                            isLastQuestion={this.state.currentQuestionIndex >= this.state.questions.length - 1}
                            toogleAnswerBlur={this.toogleAnswerBlur}
                            markAnswerCorrect={this.markAnswerCorrect} 
                            goPrevQuestion={this.goPrevQuestion}
                            goNextQuestion={this.goNextQuestion} />
                        <Score questions={this.state.questions}/>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = FlashCard;