"use client";

import { useState } from "react";
import FormProvinsi from "./FormProvinsi";
import FormKabupatenKota from "./FormKabupatenKota";
import FormKecamatan from "./FormKecamatan";

const FormTipeData = ({ listProvinsi, listKabupatenKota }) => {
  const [type, setType] = useState(null);

  const changeTypeHandler = (e) => {
    e.preventDefault();
    setType(e.target.value);
  };

  return (
    <>
      <div className="w-fit flex flex-col gap-y-1">
        <label htmlFor="type" className="">
          Jenis Daerah
        </label>
        <select
          name="type"
          id="type"
          defaultValue=""
          className="p-2 border border-gray-400 focus:border-sky-600 rounded focus:outline-0 focus:ring-0 hover:cursor-pointer"
          onChange={changeTypeHandler}
        >
          <option value="" disabled hidden>
            Pilih Jenis Daerah
          </option>
          <option value="provinsi">Provinsi</option>
          <option value="kabupaten_kota">Kabupaten / Kota</option>
          <option value="kecamatan">Kecamatan</option>
        </select>
      </div>

      {type === "provinsi" && <FormProvinsi />}
      {type === "kabupaten_kota" && (
        <FormKabupatenKota listProvinsi={listProvinsi} />
      )}
      {type === "kecamatan" && (
        <FormKecamatan listKabupatenKota={listKabupatenKota} />
      )}
    </>
  );
};

export default FormTipeData;
