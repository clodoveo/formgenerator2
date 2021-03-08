import { gql } from "@apollo/client";
import { getFields } from "./fields";
import { getClient } from "./client";

export async function getData(table) {
  if (table === "") {
    const tables = sessionStorage.getItem("describe-of-tables");
    console.log(tables);
    table = JSON.parse(tables)[5];
  }
  //console.log("table", table);
  const key = "data-of-" + table;
  const cache = sessionStorage.getItem(key);
  let json;

  const fieldlist = await getFields(table);
  const fieldlist_query = fieldlist.join("\n");

  if (!cache) {
    if (!cache) {
      const client = await getClient();
      const result = await client.query({
        query: gql`
          query {
            ${table}List {
              ${fieldlist_query}
            }
          }
        `
      });
      console.log(result);
      json = result.data[`${table}List`].map((f) => {
        return { ...f };
      });

      sessionStorage.setItem(key, JSON.stringify(json));
    }
  } else {
    json = JSON.parse(cache);
  }
  //console.log(json);
  return json;
}
