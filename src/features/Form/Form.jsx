import { useState } from "react";

const Form = () => {
  let [formData, setFormData] = useState({
    name: "satish",
    email: "yettapusatishreddy@gmail.com",
    password: "S@tish200",
    captcha: "1234",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      captcha: "",
    });
  };
  return (
    <div className="bg-[#111827] w-screen h-screen flex items-center justify-center">
      <div className="h-[auto] w-[90%] p-[3%] bg-white rounded sm:w-[70%] md:w-[50%] lg:w-[25%]">
        <h1 className="text-2xl text-center text-black font-semibold">
          Login Form
        </h1>
        <form action="" className="flex items-center justify-center flex-col">
          <input
            type="text"
            placeholder="Enter your mail or user name"
            className="w-[100%] rounded p-[3%] m-[2%] border border-[#111827]-500"
            onChange={handleChange}
            name="User Name"
            value={formData.name}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-[100%] rounded p-[3%] m-[2%] border border-[#111827]-500"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
          <button
            className="p-[2.5%] px-[5%] bg-[#111827] text-white rounded m-[2%] "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
