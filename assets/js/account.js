function getDate(num) {
  var year = new Date().getFullYear();
  var date = new Date();
  date.setDate(date.getDate() - num);
  return date.getMonth() + 1 + "/" + date.getDate() + "/" + year;
}

function replaceTextInClass(className, text) {
  var elms = document.querySelectorAll("." + className),
    i;
  for (i = 0; i < elms.length; ++i) {
    elms[i].textContent = text;
  }
}

replaceTextInClass("today", getDate(0));
replaceTextInClass("yesterday", getDate(1));
replaceTextInClass("twodays", getDate(2));
