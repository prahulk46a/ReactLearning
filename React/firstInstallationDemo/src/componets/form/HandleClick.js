export const HandleClick = (field, setFormData, formData) => {
  setFormData((prevData) => ({ ...prevData, [field]: !formData[field] }));
};
