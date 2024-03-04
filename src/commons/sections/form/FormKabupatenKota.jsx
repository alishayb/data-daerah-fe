"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { createKabupatenKota, updateKabupatenKota } from "@/commons/services/kabupaten-kota";
import changeFormState from "@/commons/utils/form";
import Button from "@/commons/components/button/Button";

const KABUPATEN_KOTA_DEFAULT_VALUE = {
  id_prov: "",
  nama: "",
  tipe: "",
};

const FormKabupatenKota = ({
  initValue = null,
  listProvinsi,
  idData = "",
  isUpdate = false,
}) => {
  const [data, setData] = useState(initValue ?? KABUPATEN_KOTA_DEFAULT_VALUE);
  const router = useRouter();

  const changeHandler = (e) => {
    const newValue = changeFormState(e, data);
    setData(newValue);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (isUpdate) {
      const res = await updateKabupatenKota(idData, data);
      if (res.id) {
        router.push("/");
      }
    } else {
      const res = await createKabupatenKota(data);
      if (res.id) {
        router.push("/");
      }
    }
  };

  return (
    <form className="md:max-w-[30%] space-y-6" onSubmit={submitHandler}>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="type">Provinsi</label>
        <select
          name="id_prov"
          defaultValue={data.id_prov}
          required
          className="p-2 border border-gray-400 focus:border-sky-600 rounded focus:outline-0 focus:ring-0"
          onChange={changeHandler}
        >
          <option value="" disabled hidden>
            Pilih Provinsi
          </option>
          {listProvinsi.map((provinsi) => (
            <option key={provinsi.id} value={provinsi.id}>
              {provinsi.nama}
            </option>
          ))}
        </select>
      </div>

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

      <div className="flex flex-col gap-y-1">
        <label htmlFor="type">Tipe</label>
        <select
          name="tipe"
          defaultValue={data.tipe}
          required
          className="p-2 border border-gray-400 focus:border-sky-600 rounded focus:outline-0 focus:ring-0"
          onChange={changeHandler}
        >
          <option value="" disabled hidden>
            Pilih Tipe
          </option>
          <option value="kabupaten">Kabupaten</option>
          <option value="kota">Kota</option>
        </select>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FormKabupatenKota;
