




export function getCloneLi(item) {
    const li = item.target.cloneNode();
    li.innerHTML = item.target.innerHTML;
    return li;
   }
   
