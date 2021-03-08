import { gql } from "@apollo/client";
import { getClient } from "./client";

export async function getTables() {
  const key = "describe-of-tables";
  const cache = sessionStorage.getItem(key);
  let tables;
  if (!cache) {
    const client = await getClient();

    const result = await client.query({
      query: gql`
        query {
          tables
        }
      `
    });

    tables = result.data.tables.map((t) => t);
    sessionStorage.setItem(key, JSON.stringify(tables));
  } else {
    tables = JSON.parse(cache);
  }

  return tables;
}
