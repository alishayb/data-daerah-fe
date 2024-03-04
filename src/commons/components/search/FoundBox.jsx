"use client";

import { getDataByType } from "@/commons/services/search";

const FoundBox = ({ searchResult, selectData }) => {
  const clickHandler = async (e, tipe, data) => {
    e.preventDefault();

    const newData = await getDataByType(tipe, data.id)
    selectData(newData);
  };

  return (
    <div className="max-h-[25vh] overflow-y-scroll px-4 py-2 bg-slate-800 text-white rounded divide-y divide-gray-600">
      <div className="py-3">
        <p>
          Menampilkan hasil untuk:{" "}
          <span className="font-bold">{searchResult.searchQuery}</span>
        </p>
      </div>

      <div>
        <div className="py-3 space-y-1">
          <p className="text-gray-400">Provinsi</p>
          <div className="hover:cursor-pointer">
            {searchResult.data.provinsi.map((prov) => (
              <p
                key={prov.id}
                className="w-full pl-6 py-2 hover:bg-gray-900 hover:text-sky-500"
                onClick={(e) => clickHandler(e, "provinsi", prov)}
              >
                {prov.nama}
              </p>
            ))}
          </div>
        </div>

        <div className="py-3 space-y-1">
          <p className="text-gray-400">Kabupaten/Kota</p>
          <div className="hover:cursor-pointer">
            {searchResult.data.kabupaten_kota.map((kabkota) => (
              <p
                key={kabkota.id}
                className="w-full pl-6 py-2 hover:bg-gray-900 hover:text-sky-500"
                onClick={(e) => clickHandler(e, "kabupaten_kota", kabkota)}
              >
                {kabkota.nama}
              </p>
            ))}
          </div>
        </div>

        <div className="py-3 space-y-1">
          <p className="text-gray-400">Kecamatan</p>
          <div className="hover:cursor-pointer">
            {searchResult.data.kecamatan.map((kec) => (
              <p
                key={kec.id}
                className="w-full pl-6 py-2 hover:bg-gray-900 hover:text-sky-500"
                onClick={(e) => clickHandler(e, "kecamatan", kec)}
              >
                {kec.nama}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundBox;
