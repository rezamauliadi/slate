//= require ../lib/_jquery

(function() {
  "use strict";

  window.buildDestinationBankDataTable = buildDestinationBankDataTable;

  let dataItems = [];

  function buildDestinationBankDataTable() {
    const dataDiv = $("#destination-bank-data");
    dataItems = $(dataDiv)
      .data("destination-bank")
      .map(item => [...item, item[0] + " " + item[1]]);

    bindBankSearch();
    buildBankContent(dataItems);
  }

  function buildBankContent(data) {
    const list = [];
    data.forEach(item => {
      list.push(`
        <tr>
          <td>${item[0]}</td>
          <td>${item[1]}</td>
        </tr>
      `);
    });
    const tableContent = list.join("");
    $("#destination-bank-searchable-table__body").empty();
    $("#destination-bank-searchable-table__body").append(tableContent);
  }

  function bindBankSearch() {
    $("#destination-bank-search-input").on("keyup", function(e) {
      searchBank(e);
    });
  }

  function searchBank(event) {
    const searchInput = event.target.value.trim();
    if (searchInput !== "") {
      const searchQuery = searchInput.toLowerCase();
      const filteredData = dataItems.filter(item => {
        const itemContent = item[2].toLowerCase();
        return itemContent.includes(searchQuery);
      });
      buildBankContent(filteredData);
    } else {
      buildBankContent(dataItems);
    }
  }
})();
