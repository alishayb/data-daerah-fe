"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { createProvinsi, updateProvinsi } from "@/commons/services/provinsi";
import changeFormState from "@/commons/utils/form";
import Button from "@/commons/components/button/Button";

const PROVINSI_DEFAULT_VALUE = {
  nama: "",
};

const FormProvinsi = ({ initValue = null, idData = "", isUpdate = false }) => {
  const [data, setData] = useState(initValue ?? PROVINSI_DEFAULT_VALUE);
  const router = useRouter();

  const changeHandler = (e) => {
    const newValue = changeFormState(e, data);
    setData(newValue);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isUpdate) {
      const res = await updateProvinsi(idData, data);
      if (res.id) {
        router.push("/");
      }
    } else {
      const res = await createProvinsi(data);
      if (res.id) {
        router.push("/");
      }
    }
  };

  return (
    <form className="md:max-w-[30%] space-y-6" onSubmit={submitHandler}>
      <div className="flex flex-col gap-y-2">
        <label htmlFor="type">Nama</label>
        <input
          className="p-2 border border-gray-400 focus:border-sky-600 rounded focus:outline-0 focus:ring-0"
          name="nama"
          type="text"
          defaultValue={data.nama}
          required
          onChange={changeHandler}
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FormProvinsi;
