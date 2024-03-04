"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { createKecamatan, updateKecamatan } from "@/commons/services/kecamatan";
import changeFormState from "@/commons/utils/form";
import Button from "@/commons/components/button/Button";

const KECAMATAN_DEFAULT_VALUE = {
  id_kab: "",
  nama: "",
  luas_area: 0,
};

const FormKecamatan = ({
  initValue = null,
  listKabupatenKota,
  idData = "",
  isUpdate = false,
}) => {
  const [data, setData] = useState(initValue ?? KECAMATAN_DEFAULT_VALUE);
  const router = useRouter();

  const changeHandler = (e) => {
    const newValue = changeFormState(e, data);
    setData(newValue);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (isUpdate) {
      const res = await updateKecamatan(idData, data);
      if (res.id) {
        router.push("/");
      }
    } else {
      const res = await createKecamatan(data);
      if (res.id) {
        router.push("/");
      }
    }
  };

  return (
    <form className="md:max-w-[30%] space-y-6" onSubmit={submitHandler}>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="type">Kabupaten / Kota</label>
        <select
          name="id_kab"
          defaultValue={data.id_kab}
          required
          className="p-2 border border-gray-400 focus:border-sky-600 rounded focus:outline-0 focus:ring-0"
          onChange={changeHandler}
        >
          <option value="" disabled hidden>
            Pilih Kabupaten / Kota
          </option>
          {listKabupatenKota.map((kab) => (
            <option key={kab.id} value={kab.id}>
              {kab.nama}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-y-2">
        <label htmlFor="type">Nama</label>
        <input
          className="p-2 border border-gray-400 focus:border-sky-600 rounded focus:outline-0 focus:ring-0"
          type="text"
          name="nama"
          defaultValue={data.nama}
          required
          onChange={changeHandler}
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <label htmlFor="type">
          Luas Area (km<sup>2</sup>)
        </label>
        <input
          className="p-2 border border-gray-400 focus:border-sky-600 rounded focus:outline-0 focus:ring-0"
          type="number"
          step=".0001"
          name="luas_area"
          defaultValue={data.luas_area}
          required
          onChange={changeHandler}
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FormKecamatan;
