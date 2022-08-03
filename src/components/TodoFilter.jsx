import MySelect from "./UI/select/MySelect";
import Input from '@mui/material/Input';
import {FormControl, InputLabel} from "@mui/material";

const TodoFilter = ({filter, setFilter}) => {
  return (
      <div className="search">
        <FormControl variant="standard">
          <InputLabel id="search-label">Search...</InputLabel>
          <Input
              label="Search..."
              value={filter.query}
              onChange={(e) => setFilter({...filter, query: e.target.value})}
          />
        </FormControl>
        <MySelect
            value={filter.sort}
            onChange={(selectedSort) =>
                setFilter({...filter, sort: selectedSort})
            }
            defaultValue="Filter by"
            options={[
              {value: "title", name: "By title"},
              {value: "body", name: "By description"},
            ]}
      />
    </div>
  );
};
export default TodoFilter;
