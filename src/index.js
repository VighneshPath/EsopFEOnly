import './styles/main.scss';
import './css/index.css';
import { UpdateForm } from './scripts/order/UpdateForm';
import {GetFormData} from './scripts/order/GetFormData';
import { Order } from './scripts/order/Order';
import axios from 'axios';
import { CustomDocument } from './scripts/documents/CustomDocument';
import { ApiClient } from './scripts/api/ApiClient';
import { ValidateFormData } from './scripts/order/ValidateFormData';
import { OrderApi } from './scripts/order/OrderApi';


let customDocument = new CustomDocument(document);

customDocument.addEventListener("DOMContentLoaded", ()=>{
  let orderTypeElement = customDocument.getElementById("esop-order-type");
  orderTypeElement.addEventListener("change", ()=>{
    let formUpdate = new UpdateForm(document);
    formUpdate.updateEsopTypeDiv();
  });

  let formElement = customDocument.getElementById("esop-form");
  formElement.addEventListener("submit", (e)=>{
    e.preventDefault();

    const getFormData = new GetFormData(document);
    const apiClient = new ApiClient(axios);
    const orderApi = new OrderApi(apiClient);
    const formValidator = new ValidateFormData(document);
    formValidator.validateForm();
    const order = new Order(orderApi, document);

    order.placeOrder(getFormData.getData());

    return false;
  });
})