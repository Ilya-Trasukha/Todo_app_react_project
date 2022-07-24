import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import Input from '@mui/material/Input';

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <br/>
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Filter by"
        options={[
          { value: "title", name: "By title" },
          { value: "body", name: "By description" }
        ]}
      />
    </div>
  );
};
export default PostFilter;
