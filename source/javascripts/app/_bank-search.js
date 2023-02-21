//= require ../lib/_jquery

(function () {
  "use strict";

  window.buildDataTable = buildDataTable;

  let dataItems = [];

  function buildDataTable() {
    const dataDiv = $("#destination-bank-data");
    dataItems = $(dataDiv)
      .data("destination-bank")
      .map((item) => [...item, item[0] + " " + item[1]]);

    bindSearch();
    buildContent(dataItems);
  }

  function buildContent(data) {
    const list = [];
    data.forEach((item) => {
      list.push(`
        <tr>
          <td>${item[0]}</td>
          <td>${item[1]}</td>
        </tr>
      `);
    });
    const tableContent = list.join("");
    $("#searchable-table__body").empty();
    $("#searchable-table__body").append(tableContent);
  }

  function bindSearch() {
    $("#destination-bank-search-input").on("keyup", function (e) {
      search(e);
    });
  }

  function search(event) {
    const searchInput = event.target.value.trim();
    if (searchInput !== "") {
      const searchQuery = searchInput.toLowerCase();
      const filteredData = dataItems.filter((item) => {
        const itemContent = item[2];
        return itemContent.includes(searchQuery);
      });
      buildContent(filteredData);
    } else {
      buildContent(dataItems);
    }
  }
})();
