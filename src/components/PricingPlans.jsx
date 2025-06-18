export function PricingPlans() {
    const plans = [
        {
            title: "Basic",
            price: "$29",
            period: "month",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon1.svg",
            services: [
                "Free Service",
                "Open Circuit",
                "Power Watts-PMAX",
                "Output Tolerance-PMAX",
                "Maximum Power",
                "Voltage"
            ]
        },
        {
            title: "Standard",
            price: "$39",
            period: "month",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon2.svg",
            services: [
                "Free Service",
                "Open Circuit",
                "Power Watts-PMAX",
                "Output Tolerance-PMAX",
                "Maximum Power",
                "Voltage"
            ]
        },
        {
            title: "Professional",
            price: "$59",
            period: "month",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon3.svg",
            services: [
                "Free Service",
                "Open Circuit",
                "Power Watts-PMAX",
                "Output Tolerance-PMAX",
                "Maximum Power",
                "Voltage"
            ]
        },
        {
            title: "Advanced",
            price: "$79",
            period: "month",
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/svg/icon4.svg",
            services: [
                "Free Service",
                "Open Circuit",
                "Power Watts-PMAX",
                "Output Tolerance-PMAX",
                "Maximum Power",
                "Voltage"
            ]
        }
    ];

    return (
        <div className="pricingPlans">
            <div className="sectionTitle">
                <p>Pricing Plans</p>
                <h3>Reasonable Pricing Plans</h3>
            </div>
            <div className="planCardContainer">
                {plans.map((plan, index) => (
                    <div className="planCard" key={index}>
                        <h4>{plan.title}</h4>
                        <p className="price">{plan.price} <span>/{plan.period}</span></p>
                        <img src={plan.img} alt={plan.title} />
                        <ul>
                            {plan.services.map((service, idx) => (
                                <li key={idx}>
                                    <span className="checkIcon">✔</span> {service}
                                </li>
                            ))}
                        </ul>
                        <button>Select Plan</button>
                    </div>
                ))}
            </div>
        </div>
    );
}