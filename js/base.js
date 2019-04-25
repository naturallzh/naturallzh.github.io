function openPage(url, tar) {
  // window.location.href = 'html/search_list.html';
  window.open(url, tar);
}

// 设置元素属性
function setStyle(name,indexArr,styleStr) {
  for (let i=0;i<indexArr.length;i++) {
    $(name)[indexArr[i]].style.cssText = styleStr;
  }
}