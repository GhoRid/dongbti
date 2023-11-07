import Container from "../atoms/Container";
import { useRef } from "react";

const QuestionFrame = ({ question, selectQuestion }) => {

    //css를 변수로 할당하기 위한 코드
    const rate = question.rate;
    const widthRate = {
        "w-1/12": "w-1/12",
        "w-2/12": "w-2/12",
        "w-3/12": "w-3/12",
        "w-4/12": "w-4/12",
        "w-5/12": "w-5/12",
        "w-6/12": "w-6/12",
        "w-7/12": "w-7/12",
        "w-8/12": "w-8/12",
        "w-9/12": "w-9/12",
        "w-10/12": "w-10/12",
        "w-11/12": "w-11/12",
        "w-full": "w-full",
    };
    const progressRate = (rate) => {
        return `${widthRate[rate]}`
    };

    // 선택한 mbti를 저장하는 코드 | 다른 질문이 생길 때마다 리렌더링 되기 때문에 Hook에 저장해야함.
    const mbtiList = useRef([]);
    const saveMbti = (mbti) => {
        if (mbtiList.current === undefined || null) {
            mbtiList.current = [mbti];
            return ;
        }else {
            mbtiList.current = [...mbtiList.current, mbti];
            return ;
        }
    };

    return (
        <>
        <div className="h-[60px] w-full border-b border-gray-300 bg-white absoulte">
            <div className="flex place-content-between px-4 pt-[5px]">
                <img src="/images/yeonLogo.png" alt="연 로고" className="h-[50px] w-[50px]"/>
                <img src="/images/signalLogo.png" alt="동아리 시그널 로고" className="h-[50px] w-[130px]"/>
            </div>
        </div>
        <Container>
            <div className="pt-6 pb-10">
                <div className="flex justify-end px-8 pb-4">
                    <div><span>{`Q. ${question.id}/12`}</span></div>
                </div>
                <div className="h-2 w-11/12 bg-gray-200 mx-auto">
                    <div className={`h-2 bg-orange-400 transition-all ease-in-out duration-150 ` + progressRate(rate)}></div>
                </div>
            </div>
            <div className="pt-20 px-12 h-10">
                <span className="text-center text-lg">{question.question}</span>
            </div>
            <ul className="text-center max-w-[90%] mx-auto mt-36 pb-16">
                <li className="w-full rounded-md border-red-700 border my-4 p-3 bg-red-100">
                    <button 
                        className="bg-red-100 w-full rounded-md"
                        onClick={() => {
                            saveMbti(question.answers[0].type);
                            selectQuestion(question.id, mbtiList);
                        }}
                    >
                        <span className="block">{question.answers[0].answer}</span>
                    </button>
                </li>
                    
                <li className="w-full rounded-md border-red-700 border my-4 p-3 bg-red-100">
                    <button 
                        className="bg-red-100 w-full rounded-md"
                        onClick={() => {
                            saveMbti(question.answers[1].type);
                            selectQuestion(question.id, mbtiList);
                        }}          
                    >
                        <span className="block">{question.answers[1].answer}</span>
                    </button>
                </li>     
            </ul>
    </Container>
    </>
    )
}

export default QuestionFrame;