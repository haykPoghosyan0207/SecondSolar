import "../style.css";

export function ContainerFluid() {
    const items = [
        {
            title: "ՈՐԱԿ",
            description: "Պրեմիում դասի արևային կայաններ՝ բարձր արդյունավետությամբ և երկարատև օգտագործման համար։",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon1.svg"
        },
        {
            title: "ՓՈՐՁ",
            description:
                "Մենք ոլորտի փորձառու մասնագետներ ենք՝ տարիների փորձով և հարյուրավոր հաջողված նախագծերով։",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon2.svg"
        },
        {
            title: "ԱՐԴՅՈՒՆԱՎԵՏՈՒԹՅՈՒՆ",
            description:
                "Առաջարկում ենք 0% ապառիկ և ֆինանսավորման աջակցություն՝ ողջ Հայաստանի տարածքում։",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon3.svg"
        },
        {
            title: "ԽՆԱՅՈՂՈՒԹՅՈՒՆ",
            description: "Անվճար էլեկտրաէներգիա, մաքուր բնություն և էկո-խնայողություն",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon4.svg"
        }
    ];

    return (
        <div className="containerFluid">
            <div className="cardContainer">
                {items.map((item, index) => (
                    <div key={index} className="card">
                        <img src={item.img} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
