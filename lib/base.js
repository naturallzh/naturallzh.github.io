/*获取url参数*/
function getQueryString(name){
  const reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  const r = window.location.search.substr(1).match(reg);
  if (r!==null) return decodeURI(r[2]); return '';
}

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

function report() {
  console.log("CLICK");
}