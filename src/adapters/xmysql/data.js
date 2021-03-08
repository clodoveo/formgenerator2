//import React, { useFetch } from "../../hooks/useFetch";

// export async function useGetData(table) {
//   const { status, data } = await useFetch("http://localhost:3000/api/" + table);
//   return data;
//}

export async function getData(table) {
  const key = "data-of-" + table;
  const cache = sessionStorage.getItem(key);
  let json;
  if (!cache) {
    const res = await fetch("http://localhost:3000/api/" + table);
    json = await res.json();
    sessionStorage.setItem(key, JSON.stringify(json));
  } else {
    json = JSON.parse(cache);
  }
  //console.log(json);
  return json;
}
