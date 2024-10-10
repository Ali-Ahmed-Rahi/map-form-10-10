import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <section className="mt-5">
      <div className="max-w-screen-xl mx-auto flex-col md:flex-row lg:flex  pt-14">
        <div className="w-1/2 px-5 mb-10">
        <h2 className="text-2xl font-bold">Contact Us</h2>
          <div className=" mt-4">
            <p className="font-bold">Address:</p>
            <p><span className="font-semibold">Abd.......cdv</span> y/y</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>

          <div className="mt-5">
            <h2 className="font-bold">Phone</h2>
            <p className="font-semibold">01723456789</p>
            <p className="font-semibold">091072361624</p>
          </div>

          <div className="mt-5">
            <h2 className="font-bold">Email:</h2>
            <p className="font-semibold">hello@gmail.com</p>
          </div>

        </div>

        {/*  from part */}

        <div className="w-full lg:w-1/2 px-2 lg:px-10 rounded-lg  ">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-50  leading-tight "
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contactNumber"
              >
                Your Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
