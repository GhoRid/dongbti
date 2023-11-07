import "../../styles/Loader.css";

const Loader = () => {
    return (
        <div className="w-full h-[800px] bg-red-100">
            <div>
                <img src="/images/signalLogo.png" alt="" />
            </div>
            <div className="text-center mt-[50%]">
                <span className="text-xl font-[Pretendard]">당신의 동아리를 찾는 중입니다...</span>
            </div>
            <div className="sampleContainer">
                <div className="loader">
                    <span className="dot dot_1"></span>
                    <span className="dot dot_2"></span>
                    <span className="dot dot_3"></span>
                    <span className="dot dot_4"></span>
                </div>
            </div>
        </div>
    );
}

export default Loader;