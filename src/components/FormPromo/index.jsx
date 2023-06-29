import React from "react";
import { toast } from "react-toastify";
import { useCreateCustomerMutation } from "services/customer/post-customer";

const FormPromo = () => {
  const [value, setValue] = React.useState("");
  const { mutate: createCustomer } = useCreateCustomerMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createCustomer(value, {
      onSuccess: () => {
        toast.success("Data berhasil ditambahkan!");
      },
      onError: (err) => {
        toast.error("Data gagal ditambahkan!");
      },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <div className="bg-primary px-6 py-4 md:flex md:items-center md:gap-8 md:px-12 lg:gap-20 lg:px-16 lg:py-16">
      <div className="py-4 md:w-7/12 lg:w-2/3">
        <p className="font-baijamjuree text-lg font-light text-white md:text-end md:text-3xl lg:text-5xl">
          Dapatkan <span className="font-bold">PROMO</span>, brosur, dan info
          menarik lainnya dengan mengisi form berikut.
        </p>
      </div>
      <div className="py-4 md:w-5/12 lg:w-1/3">
        <form onSubmit={handleSubmit} className="font-bevietnampro">
          <div className="mb-4">
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              name="name"
              type="text"
              placeholder="Nama Lengkap"
              value={value.name || ""}
              onChange={handleChange}
            />
          </div>
          {/* <div className="mb-4">
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              name="email"
              type="email"
              placeholder="Alamat Email"
              value={value.email || ""}
              onChange={handleChange}
            />
          </div> */}
          <div className="mb-4">
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              name="phone"
              type="number"
              placeholder="Nomor WhatsApp"
              value={value.phone || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline hover:bg-accen w-full rounded bg-accent px-4 py-2 font-bold text-white focus:outline-none"
              type="submit"
            >
              Dapatkan Diskon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPromo;
