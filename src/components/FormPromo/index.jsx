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
    <div className="flex w-full gap-16 bg-primary px-24 py-20 font-baijamjuree">
      <div className="w-2/3  text-end text-5xl font-light text-white">
        Dapatkan <span className="font-bold">PROMO</span>, brosur, dan info
        menarik lainnya dengan mengisi form berikut
      </div>
      <div className="w-1/3">
        <form onSubmit={handleSubmit}>
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
