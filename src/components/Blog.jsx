export function Blog() {
    const blogs = [
        {
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png",
            title: "Solar Panels That Are Proper!",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
            period: "5 Feb, 2022"
        },
        {
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png",
            title: "Maximum Power Voltage",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
            period: "5 Feb, 2022"
        },
        {
            img: "https://kamleshyadav.com/html/solar-supplier/html/bootstrap-5/index1/assets/images/banner1_img.png",
            title: "Nemo Ipsum Voluptatem",
            description: "Nemo enim ipsam voluptatem quia voluptas sit .",
            period: "5 Feb, 2022"
        }
    ];

    return (
        <div className="blog">
            <div className="sectionTitle">
                <p>Blog Posts</p>
                <h3>Latest News</h3>
            </div>
            <div className="blogCardContainer">
                {blogs.map((blog, index) => (
                    <div className="blogCard" key={index}>
                        <div className="blogContent" style={{
                            backgroundImage: `url(${blog.img})`,
                        }}>
                            <div className="blogInfo">

                                <h4>{blog.title}</h4>
                                <p>{blog.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="stayConnected">
                <h3>Stay Connected With Us</h3>
                <input type="email" placeholder="Your email" />
                <button>Submit</button>
            </div>
        </div>
    );
}