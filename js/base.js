function openPage(url, tar) {
  // window.location.href = 'html/search_list.html';
  window.open(url, tar);
}

//自动刷新页面
function autoReload(delay) {
  delay = delay?delay:1000;
  setInterval(()=>{window.location.reload()},delay);
}