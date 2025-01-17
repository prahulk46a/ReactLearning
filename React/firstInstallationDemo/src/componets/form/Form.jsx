import React, { useState } from "react";
import { HandleSubmit } from "./HandleSubmit";
import { HandleChange } from "./HandleChange";
import { HandleClick } from "./HandleClick";
import CheckBoxField from "./CheckBoxField";
import SelectField from "./SelectField";
import InputField from "./InputField";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    favoriteColor: "",
    termsAccepted: false,
  });

  return (
    <form
      className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg"
      onSubmit={(e) => HandleSubmit(e, formData)}
    >
      <InputField
        label="Name:"
        value={formData.name}
        onChange={(e) => HandleChange(e, "name", setFormData)}
      />
      <InputField
        label="Email:"
        value={formData.email}
        onChange={(e) => HandleChange(e, "email", setFormData)}
      />
      <SelectField
        label="Favorite Color"
        value={formData.favoriteColor}
        onChange={(e) => HandleChange(e, "favoriteColor", setFormData)}
      />
      <CheckBoxField
        label="Accept Terms"
        checked={formData.termsAccepted}
        onClick={() => HandleClick("termsAccepted", setFormData, formData)}
      />
      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
