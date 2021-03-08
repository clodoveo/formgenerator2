export async function getTables() {
  const key = "describe-of-tables";
  const cache = sessionStorage.getItem(key);
  let tables;
  if (!cache) {
    const res = await fetch("http://localhost:3000");
    const json = await res.json();
    tables = json.map((j) => j.resource);
    sessionStorage.setItem(key, JSON.stringify(tables));
  } else {
    tables = JSON.parse(cache);
  }

  return tables;
}
