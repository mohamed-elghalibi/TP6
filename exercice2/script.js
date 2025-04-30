function todo(){
    let list=document.createElement('li');
    let buttoncom=document.createElement('button');
    let buttonsup=document.createElement('button');
    let text=document.getElementById('text').value;
    let p=document.createElement('p');
    p.textContent=text;
    buttoncom.textContent="✔";
    buttonsup.textContent="❌";
    list.className="style";
    buttoncom.onclick= function(){
      p.className="completed";
    };
    buttonsup.onclick= function(){
      list.remove();
    };
    
    list.appendChild(p);
    list.appendChild(buttoncom);
    list.appendChild(buttonsup);
    document.getElementById('list').appendChild(list);
  }