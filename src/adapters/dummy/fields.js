export function getFields(table) {
  const json = {
    clienti: ["ID", "nome", "cognome", "indirizzo", "data_nascita"],
    fornitori: [
      "ID",
      "denominazione",
      "partita_iva",
      "indirizzo",
      "data_nascita"
    ],
    fatture: ["ID", "progressivo", "importo", "stato"]
  };

  return json[table];
}
