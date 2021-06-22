import mobile from "../../assets/pictures/mobile.png";
import {
  DeviceMobileIcon,
  CheckIcon,
  LockClosedIcon,
  KeyIcon,
  MailOpenIcon,
} from "@heroicons/react/solid";

const Mobile = () => {
  return (
    <div className="text-gray-700 body-font border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src={mobile}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
              <DeviceMobileIcon
                className={"h-5 w-5 text-blue-500 group-hover:text-blue-400"}
                aria-hidden="true"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Simplicité
              </h2>
              <p className="leading-relaxed text-base">
                Louer le casier de votre choix en moins d'une minute grâce à
                l'application mobile Casety
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
              <CheckIcon
                className={"h-5 w-5 text-blue-500 group-hover:text-blue-400"}
                aria-hidden="true"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Efficacité
              </h2>
              <p className="leading-relaxed text-base">
                Réservez votre Casety en toute sécurisé, rapidement et proche de
                vous
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
              <LockClosedIcon
                className={"h-5 w-5 text-blue-500 group-hover:text-blue-400"}
                aria-hidden="true"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Sécurité
              </h2>
              <p className="leading-relaxed text-base">
                Grâce à la conception des casiers ainsi que son système de
                payement sécurisé, réservez votre Casety en toute sérénité
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
              <KeyIcon
                className={"h-5 w-5 text-blue-500 group-hover:text-blue-400"}
                aria-hidden="true"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Performance
              </h2>
              <p className="leading-relaxed text-base">
                Connectez-vous avec grâce à votre compte et consultez vos
                factures en moins d'une minute
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5">
              <MailOpenIcon
                className={"h-5 w-5 text-blue-500 group-hover:text-blue-400"}
                aria-hidden="true"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Proximité
              </h2>
              <p className="leading-relaxed text-base">
                Contactez facilement l'équipe Casety pour tous renseignements
                (mail-open)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
