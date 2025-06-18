export function TopProducts() {
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

    return (



        <div className="topProducts">

          
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
        </div>
    );
}