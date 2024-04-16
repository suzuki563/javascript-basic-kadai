const outputBtn =document.getElementById('btn');

const displayText =document.getElementById('text');

outputBtn.addEventListener('click',() => {
   setTimeout(() => {
      displayText.textContent = 'ボタンをクリックしました';
      console.log('テキストが更新されました');
  }, 2000);
});