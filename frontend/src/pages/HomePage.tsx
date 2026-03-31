import InputBox from "@/components/home/InputBox";
import "@/pages/HomePage.css";

function HomePage() {
    return (
        <div className="home-background">
            <div className="input-container">
                <div className="today-question">
                    오늘의 점심은 무엇인가요?
                </div>
                <InputBox placeholder="자유롭게 답변해보세요." size="large"/>
            </div>
        </div>
    )
}

export default HomePage;
