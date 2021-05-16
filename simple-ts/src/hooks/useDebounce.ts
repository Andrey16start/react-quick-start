import { useState, useEffect } from 'react';


export default (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
/*
  Usage Example:

  const [searchText, setSearchText] = useState('');
  const debouncedSearchText = useDebounce(searchText, 500);

  useEffect(() => {
    ***working with debouncedSearchText instead searchText***
  }, [debouncedSearchText]);

  <input onChange={e => setSearchText(e.target.value)} />
*/