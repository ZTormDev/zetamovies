(this.webpackJsonpcode=this.webpackJsonpcode||[]).push([[0],{39:function(e,s,t){},40:function(e,s,t){},41:function(e,s,t){},51:function(e,s,t){},52:function(e,s,t){},53:function(e,s,t){},76:function(e,s,t){},77:function(e,s,t){},78:function(e,s,t){},79:function(e,s,t){},80:function(e,s,t){},81:function(e,s,t){},82:function(e,s,t){},83:function(e,s,t){},84:function(e,s,t){},85:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t.n(c),i=t(29),n=t.n(i),r=(t(38),t(39),t(40),t(6)),o=t(4),l=(t(41),t.p+"static/media/tmovie.d90e12e7.png"),d=t(0);const j=[{display:"Inicio",path:"/"},{display:"Peliculas",path:"/movie"},{display:"Series",path:"/tv"}];var m=()=>{const{pathname:e}=Object(o.g)(),s=Object(c.useRef)(null),t=j.findIndex((s=>s.path===e));return Object(c.useEffect)((()=>{const e=()=>{document.body.scrollTop>100||document.documentElement.scrollTop>100?s.current.classList.add("shrink"):s.current.classList.remove("shrink")};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),Object(d.jsx)("div",{ref:s,className:"header",children:Object(d.jsxs)("div",{className:"header__wrap container",children:[Object(d.jsxs)("div",{className:"logo",children:[Object(d.jsx)("img",{src:l,alt:""}),Object(d.jsx)(r.b,{to:"/",children:"ZETA STREAMING"})]}),Object(d.jsx)("ul",{className:"header__nav",children:j.map(((e,s)=>Object(d.jsx)("li",{className:"".concat(s===t?"active":""),children:Object(d.jsx)(r.b,{to:e.path,children:e.display})},s)))})]})})},b=(t(51),t.p+"static/media/footer-bg.67e95f05.jpg");const h=()=>{window.open("https://twitter.com/itsztorm","_blank")},O=()=>{window.open("https://github.com/ZTormDev","_blank")};var p=()=>Object(d.jsx)("div",{className:"footer",style:{backgroundImage:"url(".concat(b,")")},children:Object(d.jsxs)("div",{className:"footer__content container",children:[Object(d.jsx)("div",{className:"footer__content__logo",children:Object(d.jsxs)("div",{className:"logo",children:[Object(d.jsx)("img",{src:l,alt:""}),Object(d.jsx)(r.b,{to:"/",children:"ZETA STREAMING"})]})}),Object(d.jsxs)("div",{className:"footer__content__menus",children:[Object(d.jsxs)("div",{className:"footer__content__menu",children:[Object(d.jsx)(r.b,{to:"/",children:"Inicio"}),Object(d.jsx)(r.b,{to:"/peliculas",children:"Peliculas"}),Object(d.jsx)(r.b,{to:"/series",children:"Series"})]}),Object(d.jsxs)("div",{className:"footer__content__menu",children:[Object(d.jsx)(r.b,{onClick:h,children:"Sigueme en Twitter"}),Object(d.jsx)(r.b,{onClick:O,children:"Sigueme en GitHub"})]}),Object(d.jsxs)("div",{className:"footer__content__menu",children:[Object(d.jsx)(r.b,{to:"/",children:"Tienes que ver"}),Object(d.jsx)(r.b,{to:"/",children:"Lanzamientos Recientes"})]})]})]})});t(52);const u=e=>Object(d.jsx)("button",{className:"btn ".concat(e.className),onClick:e.onClick?()=>e.onClick():null,children:e.children}),x=e=>Object(d.jsx)(u,{className:"btn-outline ".concat(e.className),onClick:e.onClick?()=>e.onClick():null,children:e.children});var v=u,g=t(88),_=t(86),N=t(89),f=t(87);t(53);const y=e=>{const s=Object(c.useRef)(null);return Object(d.jsxs)("div",{ref:s,className:"modal__content",children:[e.children,Object(d.jsx)("div",{className:"modal__content__close",onClick:()=>{s.current.parentNode.classList.remove("active"),e.onClose&&e.onClose()},children:Object(d.jsx)("i",{className:"bx bx-x"})})]})};var w=e=>{const[s,t]=Object(c.useState)(!1);return Object(c.useEffect)((()=>{t(e.active)}),[e.active]),Object(d.jsx)("div",{id:e.id,className:"modal ".concat(s?"active":""),children:e.children})},k=t(31),S=t.n(k),E=t(32),C=t.n(E);var L={baseUrl:"https://api.themoviedb.org/3/",apiKey:"a6960f7d344cbd7240a620d7c9a590c1",originalImage:e=>"https://image.tmdb.org/t/p/original/".concat(e),w500Image:e=>"https://image.tmdb.org/t/p/w500/".concat(e)};const I=S.a.create({baseURL:L.baseUrl,headers:{"Content-Type":"application/json"},paramsSerializer:e=>C.a.stringify({...e,api_key:L.apiKey})});I.interceptors.request.use((async e=>e)),I.interceptors.response.use((e=>e&&e.data?e.data:e),(e=>{throw e}));var T=I;const F={movie:"movie",tv:"tv"},M={upcoming:"upcoming",popular:"popular",top_rated:"top_rated"},V={popular:"popular",top_rated:"top_rated",on_the_air:"on_the_air"};var A={getMoviesList:(e,s)=>{const t="movie/"+M[e]+"?language=es-ES";return T.get(t,s)},getTvList:(e,s)=>{const t="tv/"+V[e]+"?language=es-ES";return T.get(t,s)},getVideos:(e,s)=>{const t=F[e]+"/"+s+"/videos";return T.get(t,{params:{}})},search:(e,s)=>{const t="search/"+F[e];return T.get(t,s)},detail:(e,s,t)=>{const c=F[e]+"/"+s+"?language=es-ES";return T.get(c,t)},getEpisodeDetails:(e,s,t,c,a)=>{const i=F[e]+"/"+s+"/season/"+t+"/episode/"+c+"?language=es-ES";return T.get(i,a)},getSeasonDetails:(e,s,t,c)=>{const a=F[e]+"/"+s+"/season/"+t+"?language=es-ES";return T.get(a,c)},credits:(e,s)=>{const t=F[e]+"/"+s+"/credits";return T.get(t,{params:{}})},similar:(e,s)=>{const t=F[e]+"/"+s+"/similar";return T.get(t,{params:{}})}};t(76);const P=e=>{let s=Object(o.f)();const t=e.item,c=L.originalImage(t.backdrop_path?t.backdrop_path:t.poster_path),a="".concat(t.title).replace(/ /g,"-");return Object(d.jsx)("div",{className:"hero-slide__item ".concat(e.className),style:{backgroundImage:"url(".concat(c,")")},children:Object(d.jsxs)("div",{className:"hero-slide__item__content container",children:[Object(d.jsxs)("div",{className:"hero-slide__item__content__info",children:[Object(d.jsx)("h2",{className:"title",children:t.title}),Object(d.jsx)("div",{className:"overview",children:t.overview}),Object(d.jsxs)("div",{className:"btns",children:[Object(d.jsx)(v,{onClick:()=>s.push("/movie/".concat(t.id,"/").concat(a.toLowerCase())),children:"Ver Ahora"}),Object(d.jsx)(x,{onClick:async()=>{const e=document.querySelector("#modal_".concat(t.id)),s=await A.getVideos(F.movie,t.id);if(s.results.length>0){const t="https://www.youtube.com/embed/"+s.results[0].key;e.querySelector(".modal__content > iframe").setAttribute("src",t)}else e.querySelector(".modal__content").innerHTML="No trailer";e.classList.toggle("active")},children:"Ver Trailer"})]})]}),Object(d.jsx)("div",{className:"hero-slide__item__content__poster",children:Object(d.jsx)("img",{src:L.w500Image(t.poster_path),alt:""})})]})})},q=e=>{const s=e.item,t=Object(c.useRef)(null);return Object(d.jsx)(w,{active:!1,id:"modal_".concat(s.id),children:Object(d.jsx)(y,{onClose:()=>t.current.setAttribute("src",""),children:Object(d.jsx)("iframe",{ref:t,width:"100%",height:"500px",title:"trailer"})})})};var B=()=>{g.a.use([_.a]);const[e,s]=Object(c.useState)([]);return Object(c.useEffect)((()=>{(async()=>{const e={page:1};try{const t=await A.getMoviesList(M.popular,{params:e});s(t.results.slice(1,4)),console.log(t)}catch{console.log("error")}})()}),[]),Object(d.jsxs)("div",{className:"hero-slide",children:[Object(d.jsx)(N.a,{modules:[_.a],grabCursor:!0,spaceBetween:0,slidesPerView:1,children:e.map(((e,s)=>Object(d.jsx)(f.a,{children:s=>{let{isActive:t}=s;return Object(d.jsx)(P,{item:e,className:"".concat(t?"active":"")})}},s)))}),e.map(((e,s)=>Object(d.jsx)(q,{item:e},s)))]})};t(77),t(78);var D=e=>{const s=e.item,t="".concat(s.title||s.name).replace(/ /g,"-"),c="/".concat(F[e.category],"/").concat(s.id,"/").concat(t.toLocaleLowerCase()),a=L.w500Image(s.poster_path||s.backdrop_path);return Object(d.jsxs)(r.b,{to:c,children:[Object(d.jsx)("div",{className:"movie-card",style:{backgroundImage:"url(".concat(a,")")},children:Object(d.jsx)(v,{children:Object(d.jsx)("i",{className:"bx bx-play"})})}),Object(d.jsx)("h3",{children:s.title||s.name})]})};var R=e=>{const[s,t]=Object(c.useState)([]);return Object(c.useEffect)((()=>{(async()=>{let s=null;const c={};if("similar"!==e.type)if(e.category===F.movie)s=await A.getMoviesList(e.type,{params:c});else s=await A.getTvList(e.type,{params:c});else s=await A.similar(e.category,e.id);t(s.results)})()}),[]),Object(d.jsx)("div",{className:"movie-list",children:Object(d.jsx)(N.a,{grabCursor:!0,spaceBetween:10,slidesPerView:"auto",children:s.map(((s,t)=>Object(d.jsx)(f.a,{children:Object(d.jsx)(D,{item:s,category:e.category})},t)))})})};var z=()=>Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(B,{}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"section mb-3",children:[Object(d.jsxs)("div",{className:"section__header mb-2",children:[Object(d.jsx)("h2",{children:"Peliculas en Tendencia"}),Object(d.jsx)(r.b,{to:"/movie",children:Object(d.jsx)(x,{className:"small",children:"Ver mas"})})]}),Object(d.jsx)(R,{category:F.movie,type:M.popular})]}),Object(d.jsxs)("div",{className:"section mb-3",children:[Object(d.jsxs)("div",{className:"section__header mb-2",children:[Object(d.jsx)("h2",{children:"Peliculas Mejores Valoradas"}),Object(d.jsx)(r.b,{to:"/movie",children:Object(d.jsx)(x,{className:"small",children:"Ver mas"})})]}),Object(d.jsx)(R,{category:F.movie,type:M.top_rated})]}),Object(d.jsxs)("div",{className:"section mb-3",children:[Object(d.jsxs)("div",{className:"section__header mb-2",children:[Object(d.jsx)("h2",{children:"Series en Tendencia"}),Object(d.jsx)(r.b,{to:"/tv",children:Object(d.jsx)(x,{className:"small",children:"Ver mas"})})]}),Object(d.jsx)(R,{category:F.tv,type:V.popular})]}),Object(d.jsxs)("div",{className:"section mb-3",children:[Object(d.jsxs)("div",{className:"section__header mb-2",children:[Object(d.jsx)("h2",{children:"Series Mejores Valoradas"}),Object(d.jsx)(r.b,{to:"/tv",children:Object(d.jsx)(x,{className:"small",children:"Ver mas"})})]}),Object(d.jsx)(R,{category:F.tv,type:V.top_rated})]})]})]});t(79);var G=e=>Object(d.jsx)("div",{className:"page-header",style:{backgroundImage:"url(".concat(b,")")},children:Object(d.jsx)("h2",{children:e.children})});t(80),t(81);var Z=e=>Object(d.jsx)("input",{type:e.type,placeholder:"Escribe aqui para Buscar...",value:e.value,onChange:e.onChange?s=>e.onChange(s):null});const U=e=>{const s=Object(o.f)(),[t,a]=Object(c.useState)(e.keyword?e.keyword:""),i=Object(c.useCallback)((()=>{if(t.trim().length>0){const c="".concat(t).replace(/ /g,"-");s.push("/".concat(F[e.category],"/search/").concat(c))}}),[t,e.category,s]);return Object(c.useEffect)((()=>{const e=e=>{e.preventDefault(),13===e.keyCode&&i()};return document.addEventListener("keyup",e),()=>{document.removeEventListener("keyup",e)}}),[t,i]),Object(d.jsxs)("div",{className:"movie-search",children:[Object(d.jsx)(Z,{type:"text",placeholder:"Enter keyword",value:t,onChange:e=>a(e.target.value)}),Object(d.jsx)(v,{className:"small",onClick:i,children:"Buscar"})]})};var H=e=>{const[s,t]=Object(c.useState)([]),[a,i]=Object(c.useState)(1),[n,r]=Object(c.useState)(0),{keyword:l}=Object(o.h)();Object(c.useEffect)((()=>{(async()=>{let s=null;if(void 0===l){const t={};if(e.category===F.movie)s=await A.getMoviesList(M.upcoming,{params:t});else s=await A.getTvList(V.popular,{params:t})}else{const t={query:l};s=await A.search(e.category,{params:t})}t(s.results),r(s.total_pages)})()}),[e.category,l]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section mb-3",children:Object(d.jsx)(U,{category:e.category,keyword:l})}),Object(d.jsx)("div",{className:"movie-grid",children:s.map(((s,t)=>Object(d.jsx)(D,{category:e.category,item:s},t)))}),a<n?Object(d.jsx)("div",{className:"movie-grid__loadmore",children:Object(d.jsx)(x,{className:"small",onClick:async()=>{let c=null;if(void 0===l){const s={page:a+1};if(e.category===F.movie)c=await A.getMoviesList(M.upcoming,{params:s});else c=await A.getTvList(V.popular,{params:s})}else{const s={page:a+1,query:l};c=await A.search(e.category,{params:s})}t([...s,...c.results]),i(a+1)},children:"Cargar Mas"})}):null]})};var J=()=>{const{category:e}=Object(o.h)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(G,{children:e===F.movie?"Peliculas":"Series"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"section mb-3",children:Object(d.jsx)(H,{category:e})})})]})};t(82);var K=e=>{const{category:s}=Object(o.h)(),[t,a]=Object(c.useState)([]);return Object(c.useEffect)((()=>{(async()=>{const t=await A.credits(s,e.id);a(t.cast.slice(0,5))})()}),[s,e.id]),Object(d.jsx)("div",{className:"casts",children:t.map(((e,s)=>Object(d.jsxs)("div",{className:"casts__item",children:[Object(d.jsx)("div",{className:"casts__item__img",style:{backgroundImage:"url(".concat(L.w500Image(e.profile_path),")")}}),Object(d.jsx)("p",{className:"casts__item__name",children:e.name})]},s)))})},Q=(t(83),t.p+"static/media/play-circle-svgrepo-com (1).36044cf6.svg");var W=e=>{let{showSeasonsFunction:s,seasonNumberFunction:t}=e;const{category:a,id:i}=Object(o.h)(),[n,r]=Object(c.useState)(null);Object(c.useEffect)((()=>{(async()=>{try{const e=await A.detail(a,i,{params:{}});r(e)}catch(e){console.error("Error fetching data:",e)}})()}),[a,i]);let l=null;return n&&n.seasons&&(l=n.seasons.map((e=>Object(d.jsx)("div",{onClick:()=>{s(),t(e.season_number)},className:"season-card",style:{backgroundImage:"url(".concat(L.originalImage(e.poster_path),")")},children:Object(d.jsxs)("div",{className:"details-container",children:[Object(d.jsxs)("div",{className:"text-container",children:[0===e.season_number?Object(d.jsx)("h2",{className:"season-name",children:e.name}):0!==e.season_number?Object(d.jsxs)("h2",{className:"season-name",children:["Temporada ",e.season_number]}):"",Object(d.jsxs)("p",{children:["Episodios: ",e.episode_count]})]}),Object(d.jsx)("img",{className:"play-icon",src:Q,alt:""})]})},e.id)))),Object(d.jsx)(d.Fragment,{children:l})},X=t.p+"static/media/navigation-last-last-page-lastpage-right-next-icon-svgrepo-com.47e82fcb.svg",Y=t.p+"static/media/navigation-before-first-page-firstpage-left-previous-icon-svgrepo-com.ab7e0350.svg",$=t.p+"static/media/list-ul-alt-svgrepo-com (1).2460ca28.svg",ee=t.p+"static/media/back-svgrepo-com.1ff8aa9c.svg";var se=()=>{const{category:e,id:s}=Object(o.h)(),[t,a]=Object(c.useState)(null),[i,n]=Object(c.useState)(null),[r,l]=Object(c.useState)(null),[j,m]=Object(c.useState)(""),[b,h]=Object(c.useState)(""),[O,p]=Object(c.useState)("");Object(c.useEffect)((()=>{(async()=>{const t=await A.detail(e,s,{params:{}});a(t),window.scrollTo(0,0);const c="movie"===e?"https://es.oceanplay.me/embeds/".concat(s):"",i="movie"===e?"Ver Pelicula Online":"tv"===e?"Ver Serie Online":"",n="movie"===e?"Pelicula":"tv"===e?"Serie":"";m(c),h(i),p(n)})()}),[e,s]);const[u,x]=Object(c.useState)(!0),[v,g]=Object(c.useState)(!1),_=()=>{!0===u?(x(!1),g(!0),window.scrollTo(0,800)):(x(!0),g(!1),w(1),window.scrollTo(0,800))},[N,f]=Object(c.useState)(1),[y,w]=Object(c.useState)(1);let k="https://es.oceanplay.me/embeds/".concat(s,"/").concat(N,"/").concat(y);let S=!1;const E=document.getElementById("lista-episodios");Object(c.useEffect)((()=>{(async()=>{const t=await A.getEpisodeDetails(e,s,N,y,{params:{}});n(t)})()}),[e,s,N,y]);Object(c.useEffect)((()=>{(async()=>{const t=await A.getSeasonDetails(e,s,N,{params:{}});l(t)})()}),[e,s,N]);return Object(d.jsx)(d.Fragment,{children:t&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(L.originalImage(t.backdrop_path||t.poster_path),")")}}),Object(d.jsxs)("div",{className:"mb-3 movie-content container",children:[Object(d.jsx)("div",{className:"movie-content__poster",children:Object(d.jsx)("div",{className:"movie-content__poster__img",style:{backgroundImage:"url(".concat(L.originalImage(t.poster_path||t.backdrop_path),")")}})}),Object(d.jsxs)("div",{className:"movie-content__info",children:[Object(d.jsx)("h1",{className:"title",children:t.title||t.name}),Object(d.jsx)("div",{className:"genres",children:t.genres&&t.genres.slice(0,5).map(((e,s)=>Object(d.jsx)("span",{className:"genres__item",children:e.name},s)))}),Object(d.jsxs)("div",{className:"type-content",children:[Object(d.jsx)("h2",{children:O}),"movie"===e?Object(d.jsxs)("div",{className:"movie-details",children:[Object(d.jsx)("p",{children:Object(d.jsxs)("strong",{children:["Duracion: ",t.runtime," min"]})})," ",Object(d.jsxs)("h3",{children:["Fecha de estreno: ",t.release_date]})]}):"tv"===e?Object(d.jsxs)("div",{className:"tv-seasons-episodes",children:[Object(d.jsx)("p",{children:Object(d.jsxs)("strong",{children:["Temporadas: ",t.number_of_seasons]})}),Object(d.jsx)("p",{children:Object(d.jsxs)("strong",{children:["Episodios: ",t.number_of_episodes]})}),Object(d.jsxs)("h3",{children:["Fecha de estreno: ",t.first_air_date]})]}):""]}),Object(d.jsx)("p",{className:"overview",children:t.overview}),Object(d.jsxs)("div",{className:"cast",children:[Object(d.jsx)("div",{className:"section__header",children:Object(d.jsx)("h2",{children:"Actores"})}),Object(d.jsx)(K,{id:t.id})]})]})]}),Object(d.jsxs)("div",{className:"container",children:["movie"===e?Object(d.jsxs)("div",{className:"movie-serie-player",children:[Object(d.jsx)("h2",{className:"titleCategory",children:b}),Object(d.jsx)("div",{className:"section mb-3 pelicula",children:Object(d.jsx)("iframe",{className:"movie-iframe",src:j,title:e,frameborder:"0",allowfullscreen:"",webkitallowfullscreen:"",mozallowfullscreen:"",sandbox:"allow-forms allow-same-origin allow-scripts allow-top-navigation"})})]}):"tv"===e?Object(d.jsxs)("div",{children:[u&&Object(d.jsxs)("div",{className:"episodes-container",children:[Object(d.jsx)("h2",{className:"episodes-title",children:"Temporadas"}),Object(d.jsx)("div",{className:"season-list",children:Object(d.jsx)(W,{seasonNumberFunction:e=>{f(e)},showSeasonsFunction:_})})]}),v&&Object(d.jsxs)("div",{className:"player-episode-container",children:[Object(d.jsxs)("div",{className:"episode-info",children:[Object(d.jsxs)("p",{children:["Episodio ",i.episode_number,': "',i.name,'"']}),0===r.season_number?Object(d.jsx)("p",{className:"temporada",children:r.name}):0!==r.season_number?Object(d.jsxs)("p",{className:"temporada",children:["Temporada ",r.season_number]}):""]}),Object(d.jsx)("div",{className:"pelicula",children:Object(d.jsx)("iframe",{className:"movie-iframe",src:k,title:e,frameborder:"0",allowfullscreen:"",webkitallowfullscreen:"",mozallowfullscreen:"",sandbox:"allow-forms allow-same-origin allow-scripts allow-top-navigation"})}),Object(d.jsxs)("div",{className:"series-control-container",children:[Object(d.jsxs)("div",{className:"control-up",children:[Object(d.jsxs)("button",{onClick:()=>{w(y-1)},children:[Object(d.jsx)("img",{src:Y,alt:""}),Object(d.jsx)("p",{className:"previus-button",children:"Episodio Anterior"})]}),Object(d.jsx)("div",{className:"control-episode-list",children:Object(d.jsxs)("div",{className:"episode-button",children:[Object(d.jsxs)("button",{onClick:()=>{S?(S=!1,E.classList.add("hidden")):(S=!0,E.classList.remove("hidden"))},children:[Object(d.jsx)("p",{className:"episode-list-button",children:"Lista de Episodios"}),Object(d.jsx)("img",{src:$,alt:""})]}),Object(d.jsx)("div",{id:"lista-episodios",className:"episodes-list hidden scroll",children:r.episodes.map((e=>Object(d.jsxs)("div",{onClick:()=>(e=>{w(e),console.log(e,"se seteo el episodio"),S=!0,E.classList.add("hidden")})(e.episode_number),className:"episode-card",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(L.originalImage(e.still_path),")")},children:[Object(d.jsxs)("div",{className:"episode-details",children:[Object(d.jsxs)("h2",{className:"season-name",children:["Episodio ",e.episode_number,":"]}),Object(d.jsx)("h2",{className:"season-name",children:e.name})]}),Object(d.jsx)("img",{className:"play-icon",src:Q,alt:""})]},e.id)))})]})}),Object(d.jsxs)("button",{onClick:_,className:"volver-button",children:[Object(d.jsx)("img",{src:ee,alt:""})," Elejir otra temporada"]}),Object(d.jsxs)("button",{onClick:()=>{w(y+1)},children:[Object(d.jsx)("p",{className:"next-button",children:"Proximo Episodio "}),Object(d.jsx)("img",{src:X,alt:""})]})]}),Object(d.jsx)("div",{className:"control-bottom"})]})]})]}):"",Object(d.jsxs)("div",{className:"section mb-3",children:[Object(d.jsx)("div",{className:"section__header mb-2",children:Object(d.jsx)("h2",{children:"Similar"})}),Object(d.jsx)(R,{category:e,type:"similar",id:t.id})]})]})]})})};var te=()=>Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/:category/search/:keyword",component:J}),Object(d.jsx)(o.a,{path:"/:category/:id",component:se}),Object(d.jsx)(o.a,{path:"/:category",component:J}),Object(d.jsx)(o.a,{path:"/",exact:!0,component:z})]});t(84);var ce=()=>Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"introLoaderBackground",children:Object(d.jsxs)("div",{className:"introLoader",children:[Object(d.jsx)("div",{className:"blackBG"}),Object(d.jsx)("div",{className:"backgroundImg",children:Object(d.jsx)("img",{src:l,alt:""})}),Object(d.jsx)("h2",{children:"ZETA STREAMING"})]})})});var ae=function(){const[e,s]=Object(c.useState)(!0);return Object(c.useEffect)((()=>{setTimeout((()=>{s(!1)}),8500)}),[]),document.addEventListener("DOMContentLoaded",(()=>{document.addEventListener("load",(e=>{"iframe"===e.target.tagName.toLowerCase()&&(()=>{const e=document.querySelector("body > iframe");e&&e.parentNode.removeChild(e)})()}),!0)})),Object(d.jsx)(r.a,{children:Object(d.jsx)(o.a,{render:s=>Object(d.jsxs)(d.Fragment,{children:[e&&Object(d.jsx)(ce,{}),Object(d.jsx)(m,{...s}),Object(d.jsx)(te,{}),Object(d.jsx)(p,{})]})})})};n.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(ae,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.6b2dafb6.chunk.js.map