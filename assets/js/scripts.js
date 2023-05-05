function goToChat() {
  window.location.href = './chatView.html'
}
function goHome() {
  window.location.href = '/index.html'
}
function changeCard() {
  let element = document.getElementById('bold__text');
  let actualConversation = document.getElementById('gojo-conversation')
  element.style.fontWeight = '400';
  element.style.fontStyle = 'normal';
  element.style.opacity = 1;
  actualConversation.classList.add('actual__conversation__selected')
}