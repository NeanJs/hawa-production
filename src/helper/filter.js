import { useState } from "react";

export const Filter = ({ data, filterdData, setFilteredData }) => {
  const filters = [
    { tabItem: "All", tabID: "all" },
    { tabItem: "Images", tabID: "img" },
    { tabItem: "Videos", tabID: "video" },
  ];
  const [activeTab, setActive] = useState(0);
  const handleFilter = (tabItem, id) => {
    let filtered = [];
    console.log(tabItem);
    if (tabItem == "all") {
      setFilteredData(data);
    } else {
      data.map((value) => {
        tabItem != "all" && value.type == tabItem && filtered.push(value);
      });
      setFilteredData(filtered);
    }
    setActive(id);
    console.log(filterdData);
  };
  return (
    <div className="filter my-2">
      <div className="filter-head text-white text-lg font-bold">
        Filter Works by Category
      </div>
      <div className="filter-tabs flex gap-2">
        {filters.map((tab, id) => (
          <span
            onClick={() => {
              handleFilter(tab.tabID, id);
            }}
            className={` ${
              id == activeTab && " text-white"
            }  text-xl  px-4 py-2 text-gray-600 cursor-pointer hover:text-white duration-300 ease-linear`}
            key={id}
          >
            {tab.tabItem}
          </span>
        ))}
      </div>
    </div>
  );
};
