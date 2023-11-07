import { useState } from "react";

const CompleteTemplate = ({ mbti, mbtis }) => {

    const [imageHeight, setImageHeight] = useState();

    //마지막 동아리 출력일 때에는 쉼표 없이 출력하기
    const ClubList = () => {
        const lastClub = mbtis[mbti].clubs[mbtis[mbti].clubs.length - 1];
        return mbtis[mbti].clubs.map((club) => {
            if (club === lastClub) {
                return club; 
            
            }else{
                return club + ", "
            }
        })
    
    }

    //이미지 크기 조절 | 작은 이미지가 크게 나올 때 크기를 줄여주기
    const SetImgSize = () => {
        const img = new Image();
        img.src = "/images/attendingClubs/" + mbti + ".png";
    
        img.onload = () => {
            const width = img?.height; 
            setImageHeight(width);
        }

        if (imageHeight < 350) {
            return (
                    <img src={"/images/attendingClubs/" + mbti + ".png" } alt="" className="mx-auto max-h-[150px] max-w-[380px] mt-2"/>
            );
        } else {
            return (
                    <img src={"/images/attendingClubs/" + mbti + ".png" } alt="" className="mx-auto max-w-[380px] mt-2"/>   
            );
        }
    };   


    return (
        <>
            <div className="bg-[#fffaef]">
                <div className="text-center pt-12">
                    {/* 타입 */}
                    <span className="text-3xl font-[Pretendard]">#{mbtis[mbti].type}</span>
                </div>
                <div className="mt-10 h-[150px]">
                    {/* 엠비티아이 이미지 */}
                    <img src={"/images/mbtiLogo/" + mbti + ".png"} alt="MBTILogo" className="w-[75%]  mx-auto"/>
                </div>
                <div className="font-[Pretendard] w-[85%] mx-auto"> 
                    <span className="">{mbtis[mbti].explanation1} <br/><br/> </span>
                    <span>{mbtis[mbti].explanation2} <br/><br/> </span>
                    <span className="">이런 {mbti}에게 추천하는 동아리는 <span className="font-bold"><ClubList /></span>입니다.</span>
                </div>
                <div className="text-center mt-10">
                    <span className="font-bold font-[Pretendard]">알림아리 참여 여부</span>
                    <SetImgSize />
                </div>
                <div className="py-6 mt-8">
                    <img src="/images/yeonFullLogo.png" alt="연 로고" className="mx-auto"/>
                </div>

            </div>
                
                
        </>
    )
}

export default CompleteTemplate;