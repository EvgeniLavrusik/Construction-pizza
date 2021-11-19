import {clickTarget,} from './utils/clickTarget.js';
import  {clickOrder} from './utils/clickOrder.js'
import {osnova,ing1,ing2,sauce,listOrderPizza,buttonToOrder,allLi} from './getDocumentNodes.js'
buttonToOrder.disabled = true;
sauce.addEventListener('click', clickTarget);
ing2.addEventListener('click',clickTarget);
ing1.addEventListener('click', clickTarget);
osnova.addEventListener('click',clickTarget);
listOrderPizza.addEventListener('click', clickOrder);
let dialog = document.querySelector('dialog');
document.querySelector('#to_order').addEventListener('click',function() {
  dialog.show();
});
document.querySelector('#close').addEventListener('click',function() {
  dialog.close();
});

