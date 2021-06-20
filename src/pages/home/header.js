import logo from "../../assets/pictures/dark_logo.png";

const Header = () => {
  return (
    <div className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
          <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
            CASETY
          </h2>
          <h1 className="title-font  sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            La sécurité, ça ne se braque pas
          </h1>
          <p className="mb-8 leading-relaxed">
            Imaginez être dans le centre de Paris sans avoir à transporter vos
            bagages, paquets ou effet personnels  pour que votre séjour dans
            paris soit le plus agréable possible, CASETY offre une solution
            moderne et sécurisée pour l’entreposage de vos effets personnels.
          </p>
          <p className="mb-8 leading-relaxed">
            Sous vidéosurveillance 24h sur 24, les espaces CASETY se trouvent en
            centre-ville et à proximité des gares et permettent d'accéder
            facilement aux principaux aéroports (gare RER, Roissy Bus,
            métro...).
          </p>
          <p className="mb-8 leading-relaxed">
            Les espace CASETY sont sous vidéosurveillance et reliés à un centre
            de veille et de contrôle.
          </p>
          <div className="flex justify-center">
            <a
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
              href="/register"
            >
              S'inscrire
            </a>
            <a
              className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
              href="/login"
            >
              Se connecter
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={logo}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
