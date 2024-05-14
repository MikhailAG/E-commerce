import {Products} from "./Products.jsx";

export const Home = () => {
    return (
        <div className="hero">
            <div className="card text-bg-dark border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="background"
                height="500" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title text-black display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text text-black lead fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}
