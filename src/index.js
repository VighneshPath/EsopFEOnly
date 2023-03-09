import './styles/main.scss';
import './css/index.css';
import { UpdateForm } from './scripts/order/updateForm';


document.addEventListener("DOMContentLoaded", ()=>{
  let orderTypeElement = document.getElementById("esop-order-type");
  orderTypeElement.addEventListener("change", ()=>{
    let formUpdate = new UpdateForm(document);
    formUpdate.updateEsopTypeDiv();
  });
})