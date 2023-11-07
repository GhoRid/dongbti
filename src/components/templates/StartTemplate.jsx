import { useNavigate } from "react-router-dom";
import "../../styles/StartTemplate.css";

const StartTemplate = () => {
    const navigate = useNavigate();

    // style={{ backgroundImage: 'linear-gradient(to bottom, #fffaef 65%, rgb(254,226,226) 35%)' }}
    return(
        <div className="h-full w-full bg-cover text-center mx-auto">
            
            <div className="pt-[5%] z-1"><img src="/images/yeonFullLogo.png" alt="연 로고" className="block mx-auto"/></div>
            <div className="pt-[20%]"><img src="/images/dongbti_logo.png" alt="동BTI 로고" className="block mx-auto"/></div>
            <div className="pt-[20%]">
                <span className="font-bold font-[Pretendard]">나에게 어울리는 동아리는 어디일까?</span>
            </div>
            <div>
                <span className="text-sm font-[Pretendard]">동아리 유형 검사 동BTI 완료하고 스탬프 받자!</span>
            </div>
            <div className="mt-[8%]"><img src="/images/cats.png" alt="고양이 캐릭터" className="block mx-auto"/></div>

            {/* question 페이지로 이동 */}
            <div className="pt-[10%] relative pb-[150px]">
            <button onClick={() => navigate("/question")}
                    className="py-2 w-11/12 bg-white mx-auto flex justify-center"
                >
                    <span className="block text-center text-2xl font-black text-[#be3556] leading-10">검사시작</span>
                    <img src="/images/startPointer.png" alt="" />
                </button>
            </div>

        </div>
    );
};

export default StartTemplate;