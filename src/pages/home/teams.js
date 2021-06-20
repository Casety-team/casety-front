import mathieu from "./pictures/users/mathieu.jpg";
import hamza from "./pictures/users/hamza.jpg";
import kelly from "./pictures/users/kelly.jpg";
import pierre from "./pictures/users/pierre.jpg";
import sarah from "./pictures/users/sarah.png";
import audrey from "./pictures/users/audrey.jpg";
import eleonor from "./pictures/users/eleonor.jpg";

const Teams = () => {
  return (
    <div className="text-gray-700 body-font border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            L'Équipe CASETY
          </h1>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={audrey}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Audrey</h2>
                <p className="text-gray-500">Web Marketing</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/84x84/edf2f7/a5afbd"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Nassim</h2>
                <p className="text-gray-500">Web Marketing</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={eleonor}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Eleonor
                </h2>
                <p className="text-gray-500">Web Marketing</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={sarah}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Sarah</h2>
                <p className="text-gray-500">Web Marketing</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={kelly}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Kelly</h2>
                <p className="text-gray-500">Web Designer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={pierre}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Pierre</h2>
                <p className="text-gray-500">Web Designer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={mathieu}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Mathieu DRAPALA
                </h2>
                <p className="text-gray-500">Développeur Web</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={hamza}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Hamza</h2>
                <p className="text-gray-500">Développeur Web</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
