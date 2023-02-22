//= require ./lib/_energize
//= require ./app/_bank-search
//= require ./app/_copy
//= require ./app/_toc
//= require ./app/_lang

function adjustLanguageSelectorWidth() {
  const elem = $(".dark-box > .lang-selector");
  elem.width(elem.parent().width());
}

$(function () {
  loadToc($("#toc"), ".toc-link", ".toc-list-h2, .toc-list-h3", 10);

  prependLangSelector(
    $("body").data("languages"),
    $("body").data("language-names")
  );
  bindClickLanguageTabs();
  setupLanguages($("body").data("languages"));

  $(".content").imagesLoaded(function () {
    window.recacheHeights();
    window.refreshToc();
  });

  $(window).resize(function () {
    adjustLanguageSelectorWidth();
  });
  adjustLanguageSelectorWidth();

  buildDataTable();
});

window.onpopstate = function () {
  activateLanguage(getLanguageFromQueryString());
};
