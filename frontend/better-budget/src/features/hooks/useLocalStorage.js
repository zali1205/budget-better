import { useEffect, useState } from "react";

function getStorageValue(key, defaultValue) {
  const savedValue = localStorage.getItem(key);
  const parsedSavedValue = JSON.parse(savedValue);
  return parsedSavedValue || defaultValue;
}

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
