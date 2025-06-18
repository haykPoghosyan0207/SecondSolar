import "../../style.css";

export default function Services() {
    const data = [
        {
            title: "Solar Panel",
            description: "High-efficiency solar panels for sustainable energy.",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon1.svg",
            price: "$499",
        },
        {
            title: "Battery Storage",
            description: "Long-lasting battery for storing solar energy.",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon2.svg",
            price: "$799",
        },
        {
            title: "Inverter System",
            description: "Advanced inverter for optimal energy conversion.",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon3.svg",
            price: "$299",
        },
        {
            title: "Monitoring Device",
            description: "Real-time tracking of your solar system performance.",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon6.svg",
            price: "$199",
        },
    ];

    const whyChooseUs = {
        title: "Անվճար խորհրդատվություն",
        description: [
            "Պատրաստվու՞մ եք անցնել արևային էներգիայի, բայց ունեք հարցեր։ AG Solar-ի փորձառու մասնագետները տրամադրում են անվճար խորհրդատվություն՝ օգնելով ընտրել ճիշտ հզորությամբ համակարգ, գնահատել գին–որակ հարաբերակցությունը, հստակեցնել ծախսերի խնայման չափերը և ուսումնասիրել ֆինանսավորման հնարավորությունները։",
            "Խորհրդատվության ընթացքում դուք կստանաք՝",
            "- Անհատական մոտեցում՝ հաշվի առնելով ձեր տարածքը, էներգասպառումը և նպատակները",
            "- Հստակ հաշվարկներ՝ ձեր տան կամ բիզնեսի համար՝ ընտրելու ամենաարդյունավետ հզորությամբ համակարգը",
            "- Գին–որակ հարաբերակցության մանրամասն բացատրություն",
            "- Տեղեկատվություն ֆինանսավորման տարբերակների, ապառիկ պայմանների և ընթացակարգերի մասին",
            "Մենք առաջարկում ենք հստակ և շահավետ առաջարկներ՝ ներկայացնելով արևային համակարգերի բոլոր առավելությունները՝ երկարաժամկետ խնայողություններից մինչև հուսալիությունն ու ինքնավարությունը։",
        ],
        img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png",
    };

    const whyChooseUsSecond = {
        title: "Արևային կայանների նախագծում և տեղադրում",
        description: [
            "AG Solar–ի մասնագիտական թիմը իրականացնում է արևային էներգիայի համակարգերի նախագծում և տեղադրում՝ հիմնված բարձր որակի ստանդարտների, ինժեներական ճշգրտության և անհատական մոտեցման վրա։",
            "Մենք ապահովում ենք՝",
            "- Տարածքի նախնական ուսումնասիրություն և վերլուծություն։ Մեր թիմը այցելում է Ձեր տարածք՝ ուսումնասիրելու տեղանքի կառուցվածքը, արևային ճառագայթների հասանելիությունն ու տեղադրման հնարավորությունները։",
            "- Համակարգի տեխնիկական նախագծում։ Հաշվի առնելով Ձեր էներգասպառումը, տարածքի առանձնահատկությունները և բյուջեն՝ մենք կազմում ենք հարմարեցված տեխնիկական նախագիծ՝ պարունակող լավագույն տեխնոլոգիական լուծումները։",
            "- Տեղադրման աշխատանքների իրականացում։ Մասնագետները կատարում են ամբողջական տեղադրում՝ խստորեն պահպանելով անվտանգության բոլոր նորմերը և միջազգային տեխնիկական ստանդարտները։ Աշխատանքները վերահսկվում են յուրաքանչյուր փուլում՝ ապահովելու համար բարձր որակ և արդյունավետություն։",
            "- Փորձարկում և համակարգի ակտիվացում։ Տեղադրումից հետո իրականացվում են մանրակրկիտ փորձարկումներ՝ համոզվելու, որ համակարգը գործում է հարթ և առավելագույն արդյունավետությամբ։",
            "- Ձեզ հասանելի մշտական տեխնիկական աջակցություն։ Տեղադրումից հետո էլ մենք Ձեզ հետ ենք՝ ապահովելու համակարգի երկարաժամկետ և անխափան գործարկում։",
            "Մենք առաջարկում ենք հստակ և շահավետ առաջարկներ։ AG Solar-ն այստեղ է՝ օգնելու Ձեզ կայացնել տեղեկացված և վստահ որոշում։",
        ],
        img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png",
    };

    const whoWeAre = {
        title: "Տեխնիկական սպասարկում",
        description: [
            "AG Solar-ի տեխնիկական սպասարկման ծառայությունը ապահովում է Ձեր արևային համակարգի հուսալի, անխափան և արդյունավետ աշխատանքը երկար տարիներ։ Մենք ոչ միայն տեղադրում ենք կայանները, այլև մշտապես հետևում դրանց անխափան գործունեությանը՝ կանխելով հնարավոր խափանումներն ու կորուստները։ Մեր տեխնիկական թիմը կատարում է պարբերական ստուգումներ և անհրաժեշտ վերանայումներ՝ ըստ միջազգային չափանիշների։",
            "Ինչ է ներառում տեխնիկական սպասարկման ծառայությունը՝",
            "- Տեխնիկական վիճակի պարբերական ստուգումներ",
            "- Մոնիտորինգ և անսարքությունների վաղ բացահայտում",
            "- Էներգաարդյունավետության մշտական վերահսկում",
            "- Կանխարգելիչ վերանայումներ և անհրաժեշտ վերանորոգումներ",
            "- Անվտանգության ստուգումներ՝ ըստ միջազգային նորմերի",
            "Մենք առաջարկում ենք հստակ և շահավետ առաջարկներ՝ ներկայացնելով արևային համակարգերի բոլոր առավելությունները՝ երկարաժամկետ խնայողություններից մինչև հուսալիություն։ AG Solar-ն այստեղ է՝ օգնելու Ձեզ կայացնել տեղեկացված և վստահ որոշում։",
        ],
        img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png",
    };

    const whoWeAreSecond = {
        title: "0% ապառիկ և ֆինանսավորման աջակցություն",
        description: [
            "AG Solar-ը ձեր կողքին է ոչ միայն արևային կայանը տեղադրելու, այլև այն հնարավորինս մատչելի դարձնելու ճանապարհին։ Մենք առաջարկում ենք 0% ապառիկ և աջակցություն վարկավորման ամբողջ գործընթացում՝ ազատելով Ձեզ ավելորդ բարդություններից։",
            "Մենք ապահովում ենք՝",
            "- 0% տոկոսադրույքով ապառիկ՝ առանց թաքնված վճարների կամ հավելյալ տոկոսների։",
            "- Ֆինանսավորման ամբողջական կազմակերպում՝ առանց Ձեր միջամտության։",
            "- Մենք աշխատում ենք վարկավորման կազմակերպությունների հետ՝ ձեր փոխարեն վարելով բոլոր բանակցությունները և ձևակերպումները։ Դուք չեք անհանգստանում փաստաթղթերի, դիմումների կամ թղթաբանության համար — ամեն ինչ կանենք մենք։",
            "- Արագ և հուսալի գործընթաց։",
            "- Ֆինանսավորման հաստատման գործընթացը կարող է տևել ընդամենը մի քանի օր՝ ապահովելով սահուն անցում դեպի արևային էներգիա։",
            "AG Solar-ն այստեղ է՝ օգնելու Ձեզ կայացնել տեղեկացված և վստահ որոշում։",
        ],
        img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png",
    };

    return (
        <div className="services">
            <div className="aboutHeader">
                <p className="sectionLabel">Services</p>
            </div>
            <div className="sectionTitle">
                <p>New Products</p>
                <h3>Top Rated Products</h3>
            </div>
            <div className="productCardContainer">
                {data.map((item, index) => (
                    <div className="productCard" key={index}>
                        <img src={item.img} alt={item.title} />
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <p className="price">{item.price}</p>
                    </div>
                ))}
            </div>
            <div className="infoSection">
                <div className="servicesSec">
                    <div className="serviceSecImg">
                        <img src={whyChooseUs.img} alt={whyChooseUs.title} />
                    </div>
                    <div className="servicesSecInfo">
                        <h4>{whyChooseUs.title}</h4>
                        <div>
                            {whyChooseUs.description.map((text, index) => (
                                text.startsWith("-") ? (
                                    <ul key={index} style={{ listStyleType: "disc", paddingLeft: "20px", margin: "0.5rem 0" }}>
                                        <li>{text.replace("-", "").trim()}</li>
                                    </ul>
                                ) : (
                                    <p key={index} style={{ margin: "0.5rem 0" }}>{text}</p>
                                )
                            ))}
                        </div>
                    </div>
                </div>
                <div className="servicesSec">
                    <div className="servicesSecInfo">
                        <h4>{whoWeAre.title}</h4>
                        <div>
                            {whoWeAre.description.map((text, index) => (
                                text.startsWith("-") ? (
                                    <ul key={index} style={{ listStyleType: "disc", paddingLeft: "20px", margin: "0.5rem 0" }}>
                                        <li>{text.replace("-", "").trim()}</li>
                                    </ul>
                                ) : (
                                    <p key={index} style={{ margin: "0.5rem 0" }}>{text}</p>
                                )
                            ))}
                        </div>
                    </div>
                    <div className="serviceSecImg">
                        <img src={whoWeAre.img} alt={whoWeAre.title} />
                    </div>
                </div>
                <div className="servicesSec">
                    <div className="serviceSecImg">
                        <img src={whyChooseUsSecond.img} alt={whyChooseUsSecond.title} />
                    </div>
                    <div className="servicesSecInfo">
                        <h4>{whyChooseUsSecond.title}</h4>
                        <div>
                            {whyChooseUsSecond.description.map((text, index) => (
                                text.startsWith("-") ? (
                                    <ul key={index} style={{ listStyleType: "disc", paddingLeft: "20px", margin: "0.5rem 0" }}>
                                        <li>{text.replace("-", "").trim()}</li>
                                    </ul>
                                ) : (
                                    <p key={index} style={{ margin: "0.5rem 0" }}>{text}</p>
                                )
                            ))}
                        </div>
                    </div>
                </div>
                <div className="servicesSec">
                    <div className="servicesSecInfo">
                        <h4>{whoWeAreSecond.title}</h4>
                        <div>
                            {whoWeAreSecond.description.map((text, index) => (
                                text.startsWith("-") ? (
                                    <ul key={index} style={{ listStyleType: "disc", paddingLeft: "20px", margin: "0.5rem 0" }}>
                                        <li>{text.replace("-", "").trim()}</li>
                                    </ul>
                                ) : (
                                    <p key={index} style={{ margin: "0.5rem 0" }}>{text}</p>
                                )
                            ))}
                        </div>
                    </div>
                    <div className="serviceSecImg">
                        <img src={whoWeAreSecond.img} alt={whoWeAreSecond.title} />
                    </div>
                </div>
            </div>
        </div>
    );
}