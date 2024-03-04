"use client";

import DataBox from "@/commons/components/data/DataBox";
import SearchBox from "@/commons/components/search/SearchBox";
import { useState } from "react";

const SearchSection = () => {
  const [selectedData, setSelectedData] = useState(null);

  const selectData = (data) => {
    setSelectedData(data);
  };

  return (
    <section className="w-full md:max-w-[75%] lg:max-w-[60%] space-y-8">
      <SearchBox selectData={selectData} />
      {selectedData && <DataBox data={selectedData} selectData={selectData} />}
    </section>
  );
};

export default SearchSection;
