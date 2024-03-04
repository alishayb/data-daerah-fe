import SearchSection from "@/commons/sections/search/SearchSection";

export default function Home() {
  return (
    <main className="w-full py-16 px-8 flex flex-col gap-y-8 items-center">
      <div className="space-y-2 text-center">
        <h1 className="text-slate-900 font-bold text-2xl">
          Data Daerah
        </h1>
        <p>Cari data provinsi, kabupaten atau kota, dan kecamatan.</p>
      </div>

      <SearchSection />
    </main>
  );
}
