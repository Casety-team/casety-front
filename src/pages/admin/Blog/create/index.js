import React from "react";

import Form from "./form/";
import Categorie from "./categorie/";

const CreateBlog = () => {
  return (
    <div class="text-gray-600 body-font">
      <div class="container flex s items-center">
        <div class="md:w-2/3 md:border-r md:border-b-0 mb-10 md:mb-0 border-b border-gray-200">
          <Form />
        </div>
        <div class="flex flex-col md:w-1/3 md:pl-12">
          <Categorie />
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
