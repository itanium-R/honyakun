function doGet() {
    return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('翻やくん')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

//LanguageApi cf:https://www.tuyano.com/index3?id=834001
function translate(text,from,to){
  return LanguageApp.translate(text,from,to);
}
function translateW(text,from,to){
  var translated   = LanguageApp.translate(text,from,to);
  var retranslated = LanguageApp.translate(translated,to,from);
  return [translated,retranslated];
}
//Utilities.sleep(1000);