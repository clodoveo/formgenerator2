export async function getFields(table) {
  const key = "field-of-" + table;
  const cache = sessionStorage.getItem(key);
  let fields;
  if (!cache) {
    const res = await fetch("http://localhost:3000/api/" + table + "/describe");
    const json = await res.json();
    fields = json.map((j) => j.Field);
    sessionStorage.setItem(key, JSON.stringify(fields));
  } else {
    fields = JSON.parse(cache);
  }
  return fields;
}
