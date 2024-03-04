import { getDataByType } from "@/commons/services/search";
import LinkButton, { RedLinkButton } from "../link/LinkButton";
import ListChildData from "./ListChildData";

const DataBox = ({ data, selectData }) => {
  const clickHandler = async (e, tipe, data) => {
    e.preventDefault()
    
    let newData = {};
    switch (tipe) {
      case "provinsi":
        newData = await getDataByType(tipe, data.id_prov);
        break;

      case "kabupaten_kota":
        newData = await getDataByType(tipe, data.id_kab);
        break;

      default:
        break;
    }

    selectData(newData);
  };

  return (
    <div className="w-full p-4 md:p-8 border rounded space-y-8">
      <h2 className="text-center font-bold text-xl">{data.nama}</h2>
      <div className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2">
        <p className="font-bold">Tipe</p>
        <p>{data.tipeData}</p>

        {data.tipeParent ? (
          <>
            <p className="font-bold">{data.tipeParent}</p>
            <p
              className="text-sky-600 space-y-1 hover:cursor-pointer hover:underline"
              onClick={(e) => clickHandler(e, data.tipeParent, data)}
            >
              {data.nama_parent}
            </p>
          </>
        ) : (
          <></>
        )}

        <p className="font-bold">Nama</p>
        <p>{data.nama}</p>

        <p className="font-bold">Luas Area</p>
        <p>
          {data.luas_area} km
          <sup>2</sup>
        </p>
      </div>

      {data.tipeData !== "kecamatan" ? <ListChildData data={data} selectData={selectData} /> : <></>}
      <div className="flex flex-row items-center justify-between">
        <LinkButton href={`/edit/${data.tipeData}/${data.id}`}>Edit</LinkButton>
        <RedLinkButton href={`/delete/${data.tipeData}/${data.id}`}>Hapus</RedLinkButton>
      </div>
    </div>
  );
};

export default DataBox;
