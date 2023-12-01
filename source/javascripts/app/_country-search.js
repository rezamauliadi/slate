//= require ../lib/_jquery

(function() {
  "use strict";

  window.buildDestinationCountryDataTable = buildDestinationCountryDataTable;

  let dataItems = [];

  function buildDestinationCountryDataTable() {
    const dataDiv = $("#destination-country-data");
    dataItems = $(dataDiv)
      .data("destination-country")
      .map(item => [...item, item[0] + " " + item[1]]);

    bindCountrySearch();
    buildCountryContent(dataItems);
  }

  function buildCountryContent(data) {
    const list = [];
    data.forEach((item, idx) => {
      list.push(`
        <tr>
          <td>${idx + 1}</td>
          <td>${item[0]}</td>
          <td>${item[1]}</td>
          <td>${item[2]}</td>
        </tr>
      `);
    });
    const tableContent = list.join("");
    $("#destination-country-searchable-table__body").empty();
    $("#destination-country-searchable-table__body").append(tableContent);
  }

  function bindCountrySearch() {
    $("#destination-country-search-input").on("keyup", function(e) {
      searchCountry(e);
    });
  }

  function searchCountry(event) {
    const searchInput = event.target.value.trim();
    if (searchInput !== "") {
      const searchQuery = searchInput.toLowerCase();
      const filteredData = dataItems.filter(item => {
        const itemContent = item[3].toLowerCase();
        return itemContent.includes(searchQuery);
      });
      buildCountryContent(filteredData);
    } else {
      buildCountryContent(dataItems);
    }
  }
})();
