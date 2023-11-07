import QuestionFrame from "../organisms/QuestionFrame";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../atoms/Loader";


const QuestionTemplate = ({question}) => {

    const [ que, setQue ] = useState(question.question1);
    const navigate = useNavigate();

    // 로더 표시를 위한 설정
    const [loading, setLoading] = useState(false);


    const selectQuestion = ( id, mbtiListRef ) => {
        if ( id === 12 ) {
            //마지막 질문일 시, 최종 계산을 하고 검사 완료 페이지로 이동
            const mbtiList = mbtiListRef.current;
            
            let mbti = '';
            
            if (mbtiList.filter(item => item === 'E').length > 3 - (mbtiList.filter(item => item === 'E').length)) {
                mbti = mbti + "E";
            } else {
                mbti = mbti + "I";
            }
            if (mbtiList.filter(item => item === 'S').length > 3 - (mbtiList.filter(item => item === 'S').length)) {
                mbti = mbti + "S";
            } else {
                mbti = mbti + "N";
            }
            if (mbtiList.filter(item => item === 'T').length > 3 - (mbtiList.filter(item => item === 'T').length)) {
                mbti = mbti + "T";
            } else {
                mbti = mbti + "F";
            }
            if (mbtiList.filter(item => item === 'P').length > 3 - (mbtiList.filter(item => item === 'P').length)) {
                mbti = mbti + "P";
            } else {
                mbti = mbti + "J";
            }
            setLoading(true);

            setTimeout(() => {
                navigate(`/complete/${mbti}`);
            }, 5000);
        }else {
            //마지막 질문이 아니면 다음 질문을 가져옴
            const num = id + 1;
            const qNumber = "question" + num;
            setQue(question[qNumber]);
        }
    }

    return(
        <>
        {loading ? (
            <Loader />
        ):
        (
            <QuestionFrame question={que} selectQuestion={selectQuestion} />
        )
        }
        </>
    );
}

export default QuestionTemplate;
