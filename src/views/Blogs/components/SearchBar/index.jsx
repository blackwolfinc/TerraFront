import React from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import BlogsCategory from "data/blogs-category.json";
import DateRangePicker from "components/DateRangePicker";
import { useReducer } from "react";
import { useEffect } from "react";

const SearchBar = ({ onChange }) => {
  const [value, setValue] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      startDate: null,
      endDate: null,
      category: "",
      search: "",
    }
  );

  useEffect(() => {
    if (onChange) onChange(value);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleDateRangeChange = (start, end) => {
    setValue({
      startDate: start,
      endDate: end,
    });
  };

  return (
    <div className="w-full bg-primary p-4 lg:p-8">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-4 lg:flex-row lg:px-8">
        <div className="w-full rounded-lg bg-white px-4 py-2 font-baijamjuree lg:w-auto">
          <DateRangePicker onChange={handleDateRangeChange} />
        </div>
        <div className="relative w-full lg:w-auto">
          <select
            className="h-full w-full appearance-none rounded-lg px-4 py-2 font-baijamjuree focus:outline-none lg:w-60"
            onChange={(value) => {
              setValue({
                category: value.target.value,
              });
            }}
          >
            <option value={""}>Select Category</option>
            {BlogsCategory?.map((category, i) => {
              return (
                <option key={`${category.key}-${i}`} value={category.key}>
                  {category.value}
                </option>
              );
            })}
          </select>
          <div className="pointer-events-none absolute right-4 top-0 flex h-full items-center">
            <FaAngleDown />
          </div>
        </div>
        <div className="relative ml-auto flex w-full appearance-none items-center justify-between rounded-lg bg-white px-4 py-2 font-baijamjuree lg:w-60">
          <input
            type="text"
            className="w-full focus:outline-none"
            placeholder="Search"
            onBlur={(e) => {
              setValue({
                search: e.target.value,
              });
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setValue({
                  search: e.target.value,
                });
              }
            }}
          />
          <div className="flex h-full items-center opacity-20">
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
