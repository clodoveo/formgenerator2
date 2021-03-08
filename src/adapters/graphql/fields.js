import { gql } from "@apollo/client";
import { getClient } from "./client";

export async function getFields(table) {
  if (table === "") {
    const tables = sessionStorage.getItem("describe-of-tables");
    console.log(tables);
    table = JSON.parse(tables)[5];
  }
  const key = "field-of-" + table;
  const cache = sessionStorage.getItem(key);
  let fields;
  if (!cache) {
    const client = await getClient();
    const result = await client.query({
      query: gql`
        query {
          table(name: "${table}") {
            fields {
              name
            }
          }
        }
      `
    });
    console.log(result);
    fields = result.data.table.fields.map((f) => f.name);

    sessionStorage.setItem(key, JSON.stringify(fields));
  } else {
    fields = JSON.parse(cache);
  }
  return fields;
}
