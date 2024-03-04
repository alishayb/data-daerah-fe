"use client";

import { useRouter } from "next/navigation";

import { deleteKecamatan } from "@/commons/services/kecamatan";
import { deleteProvinsi } from "@/commons/services/provinsi";

import { RedButton } from "@/commons/components/button/Button";
import Link from "next/link";
import { deleteKabupatenKota } from "@/commons/services/kabupaten-kota";

const DeleteSection = ({ data, tipe }) => {
  const router = useRouter();
  const deleteHandler = async (e) => {
    e.preventDefault();
    switch (tipe) {
      case "provinsi":
        await deleteProvinsi(data.id);
        break;

      case "kabupaten_kota":
        await deleteKabupatenKota(data.id);
        break;

      case "kecamatan":
        await deleteKecamatan(data.id);
        break;

      default:
        break;
    }

    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <RedButton onClick={deleteHandler}>Hapus</RedButton>
      <Link href="/" className="hover:underline">
        Kembali
      </Link>
    </div>
  );
};

export default DeleteSection;
