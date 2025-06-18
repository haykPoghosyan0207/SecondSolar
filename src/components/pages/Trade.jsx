import "../../style.css";

export default function Trade() {
    const supplierData = {
        title: "We Are The Best Supplier In The World",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png", // Օրինակային նկար
    };

    const upcomingEvents = [
        {
            title: "Solar Wind",
            date: "6 Feb, 2025",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon1.svg",
        },
        {
            title: "Farming Solar",
            date: "6 Feb, 2025",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon2.svg",
        },
        {
            title: "Domestic Solar",
            date: "6 Feb, 2025",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon3.svg",
        },
        {
            title: "PV Solar Panel",
            date: "6 Feb, 2025",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon6.svg",
        },
    ];

    return (
        <div className="tradeShowSection">
            <div className="aboutHeader">
                <p className="sectionLabel">Trade</p>

            </div>
            <div className="supplierSection">
                <div className="supplierImage">
                    <img src={supplierData.img} alt={supplierData.title} />
                </div>
                <div className="supplierContent">
                    <h2>{supplierData.title}</h2>
                    <p>{supplierData.description}</p>
                    <button>Get Started</button>
                </div>
            </div>
            <div className="upcomingSection">
                <div className="sectionTitle">
                    <p>Upcoming Events</p>
                    <h3>Upcoming Trade Show</h3>
                </div>
                <div className="eventCardContainer">
                    {upcomingEvents.map((event, index) => (
                        <div className="eventCard" key={index}>
                            <img src={event.img} alt={event.title} />
                            <h4>{event.title}</h4>
                            <span className="date">{event.date}</span>
                            <p>{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}