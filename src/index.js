import './styles/main.scss';
import './css/index.css';
import { UpdateForm } from './scripts/order/updateForm';
import {GetFormData} from './scripts/order/getFormData';

document.addEventListener("DOMContentLoaded", ()=>{
  let orderTypeElement = document.getElementById("esop-order-type");
  orderTypeElement.addEventListener("change", ()=>{
    let formUpdate = new UpdateForm(document);
    formUpdate.updateEsopTypeDiv();
  });

  let formElement = document.getElementById("esop-form");
  formElement.addEventListener("submit", (e)=>{
    e.preventDefault();

    const getFormData = new GetFormData(document);

    getFormData.getData();

    return false;
  });
})