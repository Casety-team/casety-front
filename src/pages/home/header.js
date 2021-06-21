import logo from "../../assets/pictures/blue_logo.png";

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
            Voyagez à Paris en toute simplicité grâce à la nouvelle solution
            100% sécurisée : CASETY !
          </p>
          <p className="mb-8 leading-relaxed">
            Grâce à CASETY, voyagez librement et sans encombre ! Déposez vos
            effets personnels et bagages en toute sécurité grâce à une solution
            moderne créer pour l'entreposage de vos affaires. Valises, sacs, et
            vélos seront déposable dans nos différents casiers.
          </p>
          <p className="mb-8 leading-relaxed">
            Sous vidéo-surveillance 7/24 et reliés à un centre de veille et de
            controle les Casetys se trouvent à chaque coins de rue Parisiens, à
            proximité des gares ainsi que des grands lieux.
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
        <div className="mt-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            height="300"
            width="300"
            src={logo}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
