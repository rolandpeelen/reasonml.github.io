webpackJsonp([2,4],{"./src/components/Features.js":function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("./node_modules/react/react.js"),m=o(u),d=n("./node_modules/gatsby-link/index.js"),p=o(d),f=n("./node_modules/react-helmet/lib/Helmet.js"),g=(o(f),n("./src/utils/typography.js")),b=function(e,t){return e.reduce(function(e,n,r){return 0===r?[n]:[].concat(l(e),[t(r),n])},[])},h=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){var e=this.props.features.map(function(e){var t=e.title,n=e.description,o=e.action,a=e.url;return r.createElement("div",{css:y.feature,key:a},r.createElement("h4",{css:y.title},t),r.createElement("div",{css:y.description},n),r.createElement(p.default,{css:y.button,to:a},o))});return r.createElement("div",{css:y.container},b(e,function(e){return r.createElement("div",{key:e,css:y.divider})}))}}]),t}(m.default.Component);t.default=h;var y={container:{flexDirection:"row","@media(max-width: 900px)":{flexDirection:"column"}},feature:{flex:1,alignItems:"center",padding:38},divider:{flexBasis:1,backgroundColor:"#cecece",margin:"30px 0","@media(max-width: 900px)":{margin:0}},button:{fontFamily:(0,g.headerFontFamily)(),border:"1px solid currentColor",backgroundColor:"transparent",borderRadius:10,padding:"5px 15px",textDecoration:"none",color:"currentColor",marginTop:"1em",fontSize:".9em"},title:{marginBottom:".5em"},description:{fontFamily:(0,g.headerFontFamily)(),fontSize:16,lineHeight:1.6,textAlign:"center",maxWidth:300}};e.exports=t.default}).call(t,n("./node_modules/glamor-react/lib/index.js"))},"./src/images/reason_300.png":function(e,t,n){e.exports=n.p+"static/reason_300.5d19cfa6.png"},"./src/pages/community/example-screenshots/hacker-news.png":function(e,t,n){e.exports=n.p+"static/hacker-news.df4de52a.png"},"./src/pages/community/example-screenshots/llama-snake.png":function(e,t,n){e.exports=n.p+"static/llama-snake.58b4c039.png"},"./src/pages/community/example-screenshots/mareo.png":function(e,t,n){e.exports=n.p+"static/mareo.926d7c31.png"},"./src/pages/community/example-screenshots/reason-maze.png":function(e,t,n){e.exports=n.p+"static/reason-maze.0fee349e.png"},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/chenglou/github/reasonml.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","add-module-exports","add-module-exports","transform-object-assign",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"babel-plugin-glamor"],"presets":["/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-env/lib/index.js","/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/community/examples.js':function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("./node_modules/react/react.js"),u=o(c),m=[{title:"Reason Maze",url:"https://github.com/jaredly/reason-maze",img:n("./src/pages/community/example-screenshots/reason-maze.png")},{title:"Mareo: Mario + Reason",url:"https://github.com/chenglou/Mareo",img:n("./src/pages/community/example-screenshots/mareo.png")},{title:"ReasonReact Hacker News",url:"https://github.com/jsdf/reason-react-hacker-news",img:n("./src/pages/community/example-screenshots/hacker-news.png")},{title:"Reason snake",url:"https://github.com/rdavison/llama-snake/tree/master/websnake",img:n("./src/pages/community/example-screenshots/llama-snake.png")}],d=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),l(t,[{key:"render",value:function(){return r.createElement("div",{css:p.container},m.map(function(e,t){var n=e.title,o=e.url,a=e.img;return r.createElement("a",{key:t,href:o,css:p.link},r.createElement("img",{src:a,css:p.img}),r.createElement("span",{css:p.title},n))}))}}]),t}(u.default.Component);t.default=d;var p={container:{display:"flex",flexDirection:"row",flexWrap:"wrap"},link:{display:"flex",alignItems:"center",margin:10,flexDirection:"column",textDecoration:"none",color:"currentColor",":hover":{textDecoration:"underline"}},img:{width:250,height:250,marginBottom:.5},title:{}};e.exports=t.default}).call(t,n("./node_modules/glamor-react/lib/index.js"))},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/chenglou/github/reasonml.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","add-module-exports","add-module-exports","transform-object-assign",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"babel-plugin-glamor"],"presets":["/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-env/lib/index.js","/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js':function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0;var l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n("./node_modules/react/react.js"),m=r(u),d=n("./node_modules/gatsby-link/index.js"),p=r(d),f=n("./node_modules/react-helmet/lib/Helmet.js"),g=r(f),b=n('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/chenglou/github/reasonml.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","add-module-exports","add-module-exports","transform-object-assign",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"babel-plugin-glamor"],"presets":["/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-env/lib/index.js","/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/community/examples.js'),h=r(b),y=n("./src/components/Header.js"),x=r(y),j=n("./src/components/Features.js"),w=r(j),v=n("./src/components/Section.js"),_=r(v),k=n("./src/utils/colors.js"),E=n("./src/images/reason_300.png"),O=r(E),S=n("./src/utils/typography.js"),C=[{title:"Types without hassle",description:"Powerful, safe type inference means you rarely have to annotate types, but everything gets checked for you.",action:"See how",url:"/guide/language/type/"},{title:"Online playground",description:"Play with Reason in-browser, take a look at the produced OCaml and JavaScript, and try out code samples.",action:"Try it now",url:"/try"},{title:"Easy JavaScript interop",description:"Use packages from NPM/Yarn with minimum hassle, or even drop in a snippet of raw JavaScript while you're learning!",action:"Learn more",url:"/guide/javascript/interop/"},{title:"Flexible & Fun",description:"Make websites, animations, games, servers, cli tools, and more! Take a look at these examples to get inspired.",action:"See examples",url:"/community/examples"}],P=function(t){function n(){return a(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return s(n,t),c(n,[{key:"render",value:function(){var t=this.props.data,n=t.javascript;t.examples;return e.createElement("div",{css:D.container},e.createElement(g.default,{title:"Reason"}),e.createElement(_.default,{backgroundColor:k.gray},e.createElement(x.default,null),e.createElement("div",{css:{alignItems:"center"}},e.createElement("img",{src:O.default,css:D.logo}),e.createElement("p",{css:D.description},"Reason lets you write simple, fast and quality type safe code while leveraging both the JavaScript & OCaml ecosystems."),e.createElement("div",{css:D.buttonGroup},e.createElement(p.default,{to:"/guide/javascript/quickstart",css:D.button},"Quick Start"),e.createElement(p.default,{to:"/guide/what-and-why",css:D.button},"Learn more"))),e.createElement("div",{css:D.features},e.createElement("div",{css:[D.content]},e.createElement("div",{css:D.featuresDivider}),e.createElement(w.default,{features:C})))),e.createElement(_.default,{css:[D.quickstarts,D.twoColumn]},e.createElement("div",{css:D.column},e.createElement("h3",{css:D.columnHeader},"JavaScript quickstart"),e.createElement("div",{dangerouslySetInnerHTML:{__html:n.childMarkdownRemark.html}})),e.createElement("div",{css:D.column},e.createElement("h3",{css:D.columnHeader},"Examples"),e.createElement(h.default,null))))}}]),n}(m.default.Component);t.default=P;var D=(t.pageQuery="** extracted graphql fragment **",{container:{},inner:{},header:{backgroundColor:k.gray,alignItems:"center"},twoColumn:{flexDirection:"row","@media(max-width: 800px)":{flexDirection:"column"}},column:{flexGrow:1,flexBasis:0,flexShrink:1,margin:"0 20px",minWidth:0,"@media(max-width: 800px)":{flexBasis:"auto"}},columnHeader:{alignSelf:"center"},description:{maxWidth:600,fontWeight:200,fontSize:"1.1em",lineHeight:"1.5em",textAlign:"center",textShadow:"1px 1px white",padding:"0.8em",marginBottom:0,fontFamily:(0,S.headerFontFamily)(),"@media(min-width: 800px)":{fontSize:"1.5em"}},content:{maxWidth:1270,alignSelf:"center"},button:(l={fontFamily:(0,S.headerFontFamily)(),textDecoration:"none",background:k.accent,border:"1px solid #aaa"},o(l,"border","none"),o(l,"color","white"),o(l,"padding","8px 34px"),o(l,"borderRadius",5),o(l,"margin",10),o(l,"textAlign","center"),l),buttonGroup:{flexDirection:"row",marginBottom:"1.5em","@media(max-width: 340px)":{flexDirection:"column",width:"80%"}},featuresDivider:{height:1,backgroundColor:"#cecece"},features:{backgroundColor:"#f6f4f4"},quickstarts:{backgroundColor:"white",padding:30},logo:{maxWidth:300,width:"80%"}})}).call(t,n("./node_modules/glamor-react/lib/index.js"))}});
//# sourceMappingURL=page-component---src-pages-index-js-41075afbf0b818f69164.js.map