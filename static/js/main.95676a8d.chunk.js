(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(n,t,e){},13:function(n,t,e){"use strict";e.r(t);var a=e(0),o=e.n(a),r=e(2),c=e.n(r),i=(e(12),e(3)),s=e(4),l=e(6),u=e(5),h=function(n){Object(l.a)(e,n);var t=Object(u.a)(e);function e(){var n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))).state={data:[]},n}return Object(s.a)(e,[{key:"componentDidMount",value:function(){var n=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*").then((function(n){return n.json()})).then((function(t){n.setState({data:t})}))}},{key:"render",value:function(){var n=this.state.data.map((function(n,t){return o.a.createElement("li",{key:t},n)}));return o.a.createElement("ul",null,n)}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},7:function(n,t,e){n.exports=e(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.95676a8d.chunk.js.map