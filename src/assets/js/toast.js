var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl);
});
window.addEventListener('load', function () {
    toastList.map(toast => toast.show());
});