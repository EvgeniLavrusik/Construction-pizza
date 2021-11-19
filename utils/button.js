import { buttonToOrder } from '../getDocumentNodes.js';
import {arrClassNameListOrder} from './changeImg.js';
export function changeButton() {  
    arrClassNameListOrder.filter((item,index) =>arrClassNameListOrder.indexOf(item) === index).length === 4 ? buttonToOrder.disabled = false: buttonToOrder.disabled = true;
}
