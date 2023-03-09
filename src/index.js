import './styles/main.scss';
import './css/index.css';
import { UpdateForm } from './scripts/order/UpdateForm';
import {GetFormData} from './scripts/order/GetFormData';
import { Order } from './scripts/order/Order';
import axios from 'axios';

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
    const order = new Order(axios, document);

    order.placeOrder(getFormData.getData());
      
    return false;
  });
})