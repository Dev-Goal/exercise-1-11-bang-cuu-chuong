let createTable;
createTable =
  "<table width = '100%' border = '1' cellspacing = '1' cellpadding = '3'>";
for (let i = 1; i < 10; i++) {
  createTable = createTable + "<tr>";
  for (let j = 1; j < 10; j++) {
    createTable = createTable + "<td>" + i + "*" + j + " = " + i * j + "</td>";
  }
  createTable = createTable + "</tr>";
}
createTable = createTable + "/table";
document.write(createTable);