import{a}from"./index-BuzX_SXU.js";const s={getFlashSales:async(s={})=>(await a.get("/flash-sales",{params:s})).data,getEndDate:async()=>(await a.get("/flash-sales/end-date")).data};export{s as f};
