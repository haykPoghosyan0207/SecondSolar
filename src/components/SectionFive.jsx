export function SectionFive() {
    const leftSectionMap = [
        {
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon1.svg",
            title: "Անվճար խորհրդատվություն",
            fullDescription: "Պատրաստվու՞մ եք անցնել արևային էներգիայի, բայց ունեք հարցեր։ AG Solar-ի փորձառու մասնագետները տրամադրում են անվճար խորհրդատվություն՝ օգնելով ընտրել ճիշտ հզորությամբ արևային համակարգ, գնահատել գին–որակ հարաբերակցությունը, հստակեցնել ծախսերի խնայման չափերը և ուսումնասիրել ֆինանսավորման հնարավորությունները։",
        },
        {
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon2.svg",
            title: "Արևային կայանների նախագծում և տեղադրում",
            fullDescription: "AG Solar-ի փորձառու մասնագետները իրականացնում են արևային էներգիայի համակարգերի ամբողջական նախագծում և տեղադրում՝ հաշվի առնելով Ձեր տարածքի յուրահատկությունները: Մեր մասնագետները կվերահսկեն ամբողջ ընթացքը՝ սկսած կայանների նախագծից մինչև դրանց ճշգրիտ տեղադրումն ու փորձարկումը՝ ապահովելով կատարյալ որակ և արդյունավետություն։",
        },
        {
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon3.svg",
            title: "Տեխնիկական սպասարկում",
            fullDescription: "Մենք տեղադրում ենք LONGi բրենդի 540-600 Վատտ հզորության պրեմիում դասի երկկողմանի արևային վահանակներ, որոնք համարվում են ոլորտի ամենավստահելի և արդյունավետ լուծումներից մեկը՝ շնորհիվ իրենց ամրության, արտադրողականության և ժամանակի դիմացկունության։ Այս LONGi վահանակները դիմացկուն են և պատրաստված են դիմանալու ինչպես ձյան հաստ շերտերին, այնպես էլ ուժգին քամիներին՝ երաշխավորելով կայուն աշխատանք ցանկացած եղանակային իրավիճակում։",
        },
    ];

    const rightSectionMap = [
        {
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon4.svg",
            title: "0% ապառիկ և ֆինանսավորման աջակցություն",
            fullDescription: "AG Solar-ի տեխնիկական սպասարկման ծառայությունը ապահովում է Ձեր արևային համակարգի հուսալի, անխափան և արդյունավետ աշխատանքը՝ երկար տարիներ։ Մենք ոչ միայն տեղադրում ենք կայանները, այլև մշտապես հետևում դրանց անխափան գործունեությանը՝ կանխելով հնարավոր խափանումներն ու կորուստները։ Մեր տեխնիկական թիմը կատարում է պարբերական ստուգումներ և անհրաժեշտ վերանայումներ՝ ըստ միջազգային չափանիշների։",
        },
        {
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon5.svg",
            title: "ՄԵՆՔ ՕԳՏԱԳՈՐԾՈՒՄ ԵՆՔ LONGI",
            fullDescription: "AG Solar-ը ձեր կողքին է ոչ միայն արևային կայանը տեղադրելու, այլև այն հնարավորինս մատչելի դարձնելու ճանապարհին։ Մենք առաջարկում ենք 0% ապառիկ և աջակցություն վարկավորման ամբողջ գործընթացում՝ ազատելով ձեզ ավելորդ բարդություններից։",
        },
        {
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon6.svg",
            title: "ԵՐԿԿՈՂՄԱՆԻ ԱՐԵՎԱՅԻՆ ՎԱՀԱՆԱԿՆԵՐ",
            fullDescription: "Մեր առաջարկած մարտկոցները նախատեսված են արևային էներգիան երկարաժամկետ պահպանելու համար՝ ապահովելով Ձեր էներգետիկ անկախությունը նույնիսկ գիշերային ժամերին կամ ամպամած օրերին: AG Solar-ը երաշխավորում է բարձրորակ և դիմացկուն լուծումներ, որոնք կօգնեն Ձեզ առավելագույնս օգտագործել արևային էներգիայի ներուժը:",
        },
    ];

    return (
        <div className="sectionFive">
            <div className="sectionTitle">
                <p>Easy To Use</p>
                <h3>Մեր Ծառայությունները</h3>
            </div>
            <div className="sectionMaintenance">
                <div className="leftSection">
                    {leftSectionMap.map((item, index) => (
                        <div className="infoCard" key={index}>
                            <div className="flipContainer">
                                <div className="flipCard">
                                    <div className="flipCardFront">
                                        <img src={item.img} alt={item.title} />
                                        <div className="textContainer">
                                            <h3>{item.title}</h3>
                                        </div>
                                    </div>
                                    <div className="flipCardBack">
                                        <p>{item.fullDescription}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="midSection">
                    <img
                        src="https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/assets/images/robote.png"
                        alt="Central Illustration"
                    />
                </div>

                <div className="rightSection">
                    {rightSectionMap.map((item, index) => (
                        <div className="infoCard" key={index}>
                            <div className="flipContainer">
                                <div className="flipCard">
                                    <div className="flipCardFront">
                                        <img src={item.img} alt={item.title} />
                                        <div className="textContainer">
                                            <h3>{item.title}</h3>
                                        </div>
                                    </div>
                                    <div className="flipCardBack">
                                        <p>{item.fullDescription}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}