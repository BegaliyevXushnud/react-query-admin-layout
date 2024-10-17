
// @component/Search.tsx
import { Input } from 'antd';
import { ChangeEvent } from 'react';

type SearchPropsType = {
  params: { search: string };
  setParams: (params: { search: string }) => void;
};

const Search = ({ params, setParams }: SearchPropsType) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setParams({ search: value });
  };

  return (
    <Input.Search
      placeholder="Search..."
      value={params.search}
      onChange={handleSearchChange}
      style={{ width: 200 }}
    />
  );
};

export default Search;
