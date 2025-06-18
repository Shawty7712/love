// script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('Love Pawsona page loaded');

  const btn = document.createElement('button');
  btn.textContent = 'กดดูเซอร์ไพรส์!';
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    alert('สุขสันต์ครบรอบ 1 เดือนนะจ๊ะ 🎉💕');
  });
});
