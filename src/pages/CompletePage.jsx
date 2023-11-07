import { useParams } from "react-router-dom";
import CompleteTemplate from "../components/templates/CompleteTemplate";
import mbtis from "../data/mbtis.json"

const CompletePage = () => {
    const { mbti } = useParams();
    
    return (
        <>
            <CompleteTemplate mbti={mbti} mbtis={mbtis}/>
        </>
    )
}

export default CompletePage;