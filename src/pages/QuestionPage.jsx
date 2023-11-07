import QuestionTemplate from "../components/templates/QuestionTemplate";
import question from "../data/question.json";

const QuestionPage = () => {
    
    return (
        <>
            <QuestionTemplate question={question}/>
        </>
    )
};

export default QuestionPage;