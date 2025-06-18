import "../style.css";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="header">
            <div className="headerMain">
                <div className="mailLeft">
                    <div className="hedaerTitle">
                        <h2>Որակյալ արևային էներգիա՝ հասանելի գներով</h2>
                    </div>
                    <p>
                        Անվճար խորհրդատվությունից միչև չափագրում, նախագծում և տեղադրում ՝ ամբողջական սպասարկում մեկ վայրում։
                    </p>
                    <button>Իմանալ ավելին</button>
                </div>
                <div className="mainRight">
                    <img
                        src="https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png"
                        alt="Solar Panel Banner"
                    />
                </div>
            </div>
        </header>
    );
}