import { getDataByType } from "@/commons/services/search";

const ListChildData = ({ data, selectData }) => {
  const clickHandler = async (e, tipe, area) => {
    e.preventDefault();

    let newData = {};
    switch (tipe) {
      case "kabupaten_kota":
        newData = await getDataByType(tipe, area.id);
        break;

      case "kecamatan":
        newData = await getDataByType(tipe, area.id);
        break;

      default:
        break;
    }

    selectData(newData);
  };

  let tipeSubArea = "";
  switch (data.tipeData) {
    case "provinsi":
      tipeSubArea = "Kabupaten / Kota";
      break;

    case "kabupaten_kota":
      tipeSubArea = "Kecamatan";
      break;

    default:
      break;
  }

  return (
    <div className="space-y-2 ">
      <p>
        {tipeSubArea} di {data.nama}
      </p>
      <div className="text-sky-600 space-y-1 hover:cursor-pointer">
        {data.list_subarea.map((area) => (
          <p
            className="group"
            key={area.id}
            onClick={(e) => clickHandler(e, data.tipeChild, area)}
          >
            ➔ <span className="group-hover:underline">{area.nama}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default ListChildData;
