(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[12],{61:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return o}));var n=c(2),i=c(9),s=c(1),j=c(10),r=c(0),b=Object(r.lazy)((function(){return c.e(2).then(c.bind(null,32))})),a=Object(r.lazy)((function(){return c.e(7).then(c.bind(null,55))})),l=Object(r.lazy)((function(){return c.e(9).then(c.bind(null,56))})),h=Object(r.lazy)((function(){return Promise.all([c.e(0),c.e(1)]).then(c.bind(null,34))}));function o(){var e=Object(s.f)().moviesId,t=Object(r.useState)(null),c=Object(i.a)(t,2),o=c[0],u=c[1],O=Object(r.useState)(null),d=Object(i.a)(O,2),v=(d[0],d[1]),x=Object(r.useState)(!1),f=Object(i.a)(x,2),m=f[0],p=f[1];Object(r.useEffect)((function(){p(!0),b.fetchApiOneMovie(e).then(u).catch((function(e){return v(e)})).finally((function(){return p(!1)}))}),[e]);var g;return Object(n.jsxs)("div",{children:[m&&Object(n.jsx)(h,{}),Object(n.jsx)("img",{src:o&&"https://image.tmdb.org/t/p/w200".concat(o.poster_path),alt:""}),Object(n.jsx)("h1",{children:o&&o.title}),Object(n.jsxs)("p",{children:["\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u043e\u0446\u0435\u043d\u043a\u0430: ",o&&(g=o.vote_average,Math.round(100*g/10)),"%"]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(n.jsx)("p",{children:o&&o.overview})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"\u0416\u0430\u043d\u0440"}),Object(n.jsx)("ul",{children:o&&o.genres.map((function(e){var t=e.id,c=e.name;return Object(n.jsxs)("li",{children:[c," "]},t)}))})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("hr",{}),Object(n.jsx)(j.b,{to:"/movies/".concat(e,"/cast"),children:"\u0410\u043a\u0442\u0435\u0440\u044b"})," ",Object(n.jsx)("br",{}),Object(n.jsx)(j.b,{to:"/movies/".concat(e,"/reviews"),children:"\u041e\u0431\u0437\u043e\u0440\u044b (Eng)"}),Object(n.jsx)("hr",{}),Object(n.jsx)(s.a,{path:"/movies/:moviesId/cast",children:o&&Object(n.jsx)(a,{casts:o})}),Object(n.jsx)(s.a,{path:"/movies/:moviesId/reviews",children:Object(n.jsx)(l,{})})]})]})}}}]);
//# sourceMappingURL=12.03b4de11.chunk.js.map