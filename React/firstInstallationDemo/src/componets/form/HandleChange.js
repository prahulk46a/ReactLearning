export const HandleChange = (e, field, setFormData) => {
  const { value } = e.target;
  setFormData((prevData) => ({ ...prevData, [field]: value }));
};
