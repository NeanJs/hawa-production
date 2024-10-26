import { useEffect, useState } from "react";

export const Filter = ({ data, setFilteredData }) => {
  const [activeTab, setActive] = useState(0);
  const [filters, setFilters] = useState([]);

  const handleFilter = (tabItem, id) => {
    if (tabItem === "All") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((value) => value.type === tabItem);
      setFilteredData(filtered);
    }
    setActive(id);
  };

  useEffect(() => {
    const types = data ? [...new Set(data.map((item) => item.type))] : [];
    setFilters(["All", ...types]); // Include "All" as the first filter option
  }, [data]);

  return (
    <div className="filter my-2">
      <div className="filter-head text-white text-lg font-bold">
        Filter Works by Category
      </div>

      <div className="filter-tabs flex gap-2 flex-wrap">
        {filters.map((tab, id) => (
          <span
            onClick={() => handleFilter(tab, id)}
            className={`${
              id === activeTab ? "text-white" : "text-gray-600"
            } text-xl px-4 py-2 cursor-pointer hover:text-white duration-300 ease-linear`}
            key={id}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
};
