import{a as u,S as f,i}from"./assets/vendor-MgecxatS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="https://pixabay.com/api/",m="54209854-0adaa80dd2bf4b1ccab9da3dc";function h(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(p,{params:o}).then(e=>e.data)}const l=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(e=>`<li class="gallery_item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${e.likes}</p>
          <p><b>Views:</b> ${e.views}</p>
          <p><b>Comments:</b> ${e.comments}</p>
          <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function b(){l.innerHTML=""}function L(){d.classList.remove("hidden")}function w(){d.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){i.error({message:"Please enter a search term",position:"topRight"});return}b(),L(),h(o).then(e=>{if(e.hits.length===0){i.warning({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});return}g(e.hits)}).catch(e=>{i.error({message:"Something went wrong. Try again later.",position:"topRight"})}).finally(()=>{w(),c.reset()})});
//# sourceMappingURL=index.js.map
