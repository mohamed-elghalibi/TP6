const div=document.getElementById('divv');
const paragraphe=document.getElementById('para');

paragraphe.textContent='Le texte a été modifié';
paragraphe.style.backgroundColor='lightblue';
paragraphe.style.textAlign='center';

div.addEventListener('click', function(){
  paragraphe.textContent='Un clic a été détecté';
});