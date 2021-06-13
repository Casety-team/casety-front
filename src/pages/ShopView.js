import "./styletest.css"

import luggage from "../assets/pictures/luggage.png"
import bikes from "../assets/pictures/bikes.png"

const ShopViews = () => {
    return (
       <> 
         <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 bg-light">
            <div className=" mx-auto my-5">
                <h1 className="display-4 fw-normal text-center">Consignes à bagages dans Paris</h1>
                <div class="col-lg-8 container">
                    <p className="lead mt-5 fw-normal">
                        Imaginez être dans le centre de Paris sans avoir à transporter vos bagages, paquets ou effet personnels 
                        Pour que votre séjour dans paris soit le plus agréable possible, CASETY offre une solution moderne et sécurisée 
                        pour l’entreposage de vos effets personnels.
                    </p>
                    <p className="lead mt-2 fw-normal">
                        Sous vidéosurveillance 24h sur 24, les espaces CASETY se trouvent en centre-ville et à proximité des gares et 
                        permettent d'accéder facilement aux principaux aéroports (gare RER, Roissy Bus, métro...).
                    </p>
                    <p className="lead mt-2 fw-normal">
                        Les espace CASETY sont sous vidéosurveillance et reliés à un centre de veille et de contrôle.
                    </p>          
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <a  class="btn btn-primary btn-lg px-4 me-md-2" href="/login">Louer un casier</a>
                    </div>
                </div>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"/>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"/>
        </div>
            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Casier de bagages</h2>
                    </div>
                    <div className="box-shadow mx-auto" style={{width: "80%", height: "300px", borderRadius: "21px 21px 0 0"}}>
                        <img style={{width: "auto", height: "300px", borderRadius: "21px 21px 0 0"}} src={luggage} alt="luggage"/>
                    </div>
                </div>
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Casier de vélo</h2>
                    </div>
                    <div className="box-shadow mx-auto">
                    <img style={{width: "auto",height: "300px", borderRadius: "21px 21px 0 0"}} src={bikes} alt="bikes"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopViews