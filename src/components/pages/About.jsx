import "../../style.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

export default function About() {
    const achievements = [
        {
            title: "Projects",
            value: 300,
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png"
        },
        {
            title: "Suppliers",
            value: 406,
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png"
        },
        {
            title: "Happy Clients",
            value: 981,
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png"
        },
        {
            title: "Awards",
            value: 265,
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png"
        }
    ];

    const testimonials = [
        {
            image: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png",
            text: 'Great work, highly satisfied!',
            name: 'John Doe',
            role: 'CEO, Company X'
        },
        {
            image: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png",
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolorem dolores eos est facilis hic, illum iusto libero officiis omnis provident sequi, similique sit vero voluptas. Culpa modi odio voluptatum',
            name: 'Jane Smith',
            role: 'Manager, Firm Y'
        },
    ];

    return (
        <div className="about">
            <div className="aboutHeader">
                <p className="sectionLabel">About Us</p>
            </div>
            <div className="aboutIntroSection">
                <div className="aboutImage">
                    <img
                        src="https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png"
                        alt="About us"
                    />
                </div>
                <div className="aboutText">
                    <h2>Մեր մասին</h2>
                    <p>
                        AG Solar-ը արևային էներգիայի ոլորտում առաջատար ընկերություն է, որն առաջարկում է բարձր
                        արդյունավետությամբ և հուսալիությամբ արևային լուծումներ։ Մեր համակարգերը նախագծվում են՝
                        նվազեցնելու էլեկտրաէներգիայի ծախսը և շրջակա միջավայրի վրա թողած բացասական ազդեցությունը՝
                        միաժամանակ ապահովելով երկարաժամկետ ու կայուն արդյունք։
                        Մեր թիմը բաղկացած է ոլորտում բազմամյա փորձ ունեցող մասնագետներից, ովքեր միավորել են իրենց ուժերն
                        ու փորձը՝ առաջարկելու հուսալի և որակյալ ծառայություներ։
                        AG Solar-ն օգտագործում է միայն միջազգային ճանաչում ունեցող ապրանքանիշերի բարձրակարգ
                        սարքավորումներ․
                        - Օգտագործում ենք LONGi բրենդի պրեմիում դասի երկկողմանի արևային վահանակներ, որոնք համարվում են
                        ոլորտի ամենավստահելի և արդյունավետ լուծումներից մեկը՝ շնորհիվ իրենց ամրության,
                        արտադրողականության և ժամանակի դիմացկունության։
                        - Կիրառում ենք հոսանքի բարձրորակ փոխակերպիչներ՝ նախատեսված կայուն, անվտանգ և արդյունավետ
                        աշխատանքի համար՝ հարմարեցված Ձեր տարածքի տեխնիկական պայմաններին։

                        Երկկողմանի տեխնոլոգիայի շնորհիվ մեր վահանակները հավաքում են էներգիա, ինչպես ուղիղ արևի
                        ճառագայթներից, այնպես էլ տարածքից անդրադարձած լույսից՝ ապահովելով առավելագույն
                        արտադրողականություն։

                        Մեր ծառայությունները ներառում են անհատական մոտեցում, նախագծում, ճշգրիտ հաշվարկներ և որակյալ
                        տեղադրում։ Յուրաքանչյուր կայան մշակվում է՝ հիմնվելով տարածքի առանձնահատկությունների և Ձեր
                        սպառման կարիքների վրա։

                        Մեր նպատակն է՝ արևային էներգիան դարձնել հասանելի և գործնական ընտրություն յուրաքանչյուր ընտանիքի
                        և բիզնեսի համար։
                        Մեր առաքելությունն է՝ նպաստել ավելի կանաչ, մաքուր և անկախ էներգետիկ ապագայի ստեղծմանը։
                    </p>
                </div>
            </div>

            <div className="achievementsSection">
                <div className="sectionTitle">
                    <p>Our Achievements</p>
                </div>
                <div className="achievementsContainer desktop">
                    {achievements.map((item, index) => (
                        <div className="achievementCard" key={index}>
                            <img src={item.img} alt={item.title}/>
                            <h3>{item.value}</h3>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className="achievementsContainer mobile">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{clickable: true}}
                        loop={true}
                    >
                        {achievements.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="achievementCard">
                                    <img src={item.img} alt={item.title}/>
                                    <h3>{item.value}</h3>
                                    <p>{item.title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="testimonialSection">
                <div className="aboutSectionTitle">
                    <p>Client Feedback</p>
                    <h3>What Client Says</h3>
                </div>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{clickable: true}}
                    loop={true}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonialCard">
                                <img src={testimonial.image} alt={testimonial.name}/>
                                <div className="testimonialContent">
                                    <p>{testimonial.text}</p>
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}