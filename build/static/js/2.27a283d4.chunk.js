(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{32:function(e,t,n){"use strict";n.r(t);var c={fetchApiMovies:function(e){return fetch("".concat("https://api.themoviedb.org/3/trending/all/day","?api_key=").concat("6afe4b8475996e1addf24229c39e89a6","&language=ru&page=").concat(e)).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0422\u0430\u043a\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0435 \u0456\u0441\u043d\u0443\u0454"))}))},fetchApiSearch:function(e,t){return fetch("".concat("https://api.themoviedb.org/3","/search/movie?api_key=").concat("6afe4b8475996e1addf24229c39e89a6","&query=").concat(t,"&language=ru&page=").concat(e,"&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0422\u0430\u043a\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0435 \u0456\u0441\u043d\u0443\u0454"))}))},fetchApiOneMovie:function(e){return fetch("".concat("https://api.themoviedb.org/3/movie/").concat(e,"?api_key=").concat("6afe4b8475996e1addf24229c39e89a6","&language=ru")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0422\u0430\u043a\u043e\u0433\u043e \u0444\u0456\u043b\u044c\u043c\u0430 \u043d\u0435 \u0456\u0441\u043d\u0443\u0454"))}))},fetchApiReviews:function(e){return fetch("".concat("https://api.themoviedb.org/3/movie/").concat(e,"/reviews?api_key=").concat("6afe4b8475996e1addf24229c39e89a6")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0422\u0430\u043a\u043e\u0457 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438 \u0437 \u043a\u0430\u0441\u0442\u0430\u043c\u0438 \u043d\u0435 \u0456\u0441\u043d\u0443\u0454"))}))},fetchApiCasts:function(e){return fetch("".concat("https://api.themoviedb.org/3/movie/").concat(e,"/credits?api_key=").concat("6afe4b8475996e1addf24229c39e89a6","&language=ru&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0422\u0430\u043a\u043e\u0457 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438 \u0437 \u043a\u0430\u0441\u0442\u0430\u043c\u0438 \u043d\u0435 \u0456\u0441\u043d\u0443\u0454"))}))}};t.default=c}}]);
//# sourceMappingURL=2.27a283d4.chunk.js.map