import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as r}from"./assets/vendor-A92OCY9B.js";const s=document.querySelector(".form");s.addEventListener("submit",e=>{e.preventDefault();const i=Number(s.elements.delay.value),o=s.elements.state.value;m(i,o).then(t=>{r.success({title:"✅ Success",message:`Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(t=>{r.error({title:"❌ Error",message:`Rejected promise in ${t}ms`,position:"topRight"})}),s.reset()});function m(e,i){return new Promise((o,t)=>{setTimeout(()=>{i==="fulfilled"?o(e):t(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map
