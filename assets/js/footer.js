function getYear(num) {
  var year = new Date().getFullYear();
  var date = new Date();
  date.setDate(date.getDate() - num);
  return year;
}

function replaceTextInClass(className, text) {
  var elms = document.querySelectorAll("." + className),
      i;
  for (i = 0; i < elms.length; ++i) {
    elms[i].textContent = text;
  }
}

replaceTextInClass("year", getYear(0));
