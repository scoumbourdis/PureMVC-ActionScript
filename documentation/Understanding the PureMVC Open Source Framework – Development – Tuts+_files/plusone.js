var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var aa=encodeURIComponent,k=window,ba=Object,p=document,da=Array,ea=parseInt,q=String,fa=decodeURIComponent;function ga(a,b){return a.type=b}
var ha="appendChild",r="push",s="test",ia="shift",ja="exec",ka="width",u="replace",la="getElementById",ma="concat",na="charAt",oa="JSON",y="indexOf",pa="nodeName",qa="match",ra="readyState",z="createElement",A="setAttribute",sa="type",ta="bind",ua="getTime",va="getElementsByTagName",B="substr",C="toString",D="length",E="prototype",F="split",G="location",wa="hasOwnProperty",H="style",xa="removeChild",I="call",J="getAttribute",ya="protocol",K="charCodeAt",L="href",M="substring",za="documentMode",Aa=
"action",N="apply",Ba="attributes",O="parentNode",Ca="update",Da="height",P="join",Ea="toLowerCase",Fa=function(a,b,c){return a[I][N](a[ta],arguments)},Ga=function(a,b,c){if(!a)throw Error();if(2<arguments[D]){var d=da[E].slice[I](arguments,2);return function(){var c=da[E].slice[I](arguments);da[E].unshift[N](c,d);return a[N](b,c)}}return function(){return a[N](b,arguments)}},Ha=function(a,b,c){Ha=Function[E][ta]&&-1!=Function[E][ta][C]()[y]("native code")?Fa:Ga;return Ha[N](null,arguments)};
Function[E].bind=Function[E][ta]||function(a,b){if(1<arguments[D]){var c=da[E].slice[I](arguments,1);c.unshift(this,a);return Ha[N](null,c)}return Ha(this,a)};var Q=k,R=p,Ia=Q[G],Ja=function(){},Ka=/\[native code\]/,S=function(a,b,c){return a[b]=a[b]||c},La=function(a){for(var b=0;b<this[D];b++)if(this[b]===a)return b;return-1},Ma=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a[D];d++){var e=a[d];e!=c&&b[r](e);c=e}return b},Na=/&/g,Oa=/</g,Pa=/>/g,Qa=/"/g,Ra=/'/g,Sa=function(a){return q(a)[u](Na,"&amp;")[u](Oa,"&lt;")[u](Pa,"&gt;")[u](Qa,"&quot;")[u](Ra,"&#39;")},T=function(){var a;if((a=ba.create)&&Ka[s](a))a=a(null);else{a={};for(var b in a)a[b]=
void 0}return a},U=function(a,b){return ba[E][wa][I](a,b)},Ta=function(a){if(Ka[s](ba.keys))return ba.keys(a);var b=[],c;for(c in a)U(a,c)&&b[r](c);return b},V=function(a,b){a=a||{};for(var c in a)U(a,c)&&(b[c]=a[c])},Ua=function(a){return function(){Q.setTimeout(a,0)}},Va=function(a,b){if(!a)throw Error(b||"");},W=S(Q,"gapi",{});var X=function(a,b,c){var d=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(d[ja](a)||b[ja](a)))try{c=fa(a[2])}catch(e){}return c},Wa=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Xa=function(a){a=a[qa](Wa);var b=T();b.R=a[1];b.g=a[3]?[a[3]]:[];b.l=a[5]?[a[5]]:[];return b},Ya=function(a){return a.R+(0<a.g[D]?"?"+a.g[P]("&"):"")+(0<a.l[D]?"#"+a.l[P]("&"):"")},Za=function(a,b){var c=[];if(a)for(var d in a)if(U(a,d)&&null!=a[d]){var e=b?b(a[d]):a[d];c[r](aa(d)+"="+
aa(e))}return c},$a=function(a,b,c,d){a=Xa(a);a.g[r][N](a.g,Za(b,d));a.l[r][N](a.l,Za(c,d));return Ya(a)},ab=function(a,b){var c="";2E3<b[D]&&(c=b[M](2E3),b=b[M](0,2E3));var d=a[z]("div"),e=a[z]("a");e.href=b;d[ha](e);d.innerHTML=d.innerHTML;b=q(d.firstChild[L]);d[O]&&d[O][xa](d);return b+c},bb=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;var cb=function(a,b,c,d){if(Q[c+"EventListener"])Q[c+"EventListener"](a,b,!1);else if(Q[d+"tachEvent"])Q[d+"tachEvent"]("on"+a,b)},fb=function(a){var b=db;if("complete"!==R[ra])try{b()}catch(c){}eb(a)},eb=function(a){if("complete"===R[ra])a();else{var b=!1,c=function(){if(!b)return b=!0,a[N](this,arguments)};Q.addEventListener?(Q.addEventListener("load",c,!1),Q.addEventListener("DOMContentLoaded",c,!1)):Q.attachEvent&&(Q.attachEvent("onreadystatechange",function(){"complete"===R[ra]&&c[N](this,arguments)}),
Q.attachEvent("onload",c))}},gb=function(a){for(;a.firstChild;)a[xa](a.firstChild)},hb={button:!0,div:!0,span:!0};var Y;Y=S(Q,"___jsl",T());S(Y,"I",0);S(Y,"hel",10);var ib=function(a){return Y.dpo?Y.h:X(a,"jsh",Y.h)},jb=function(a){var b=S(Y,"sws",[]);b[r][N](b,a)},kb=function(a){var b=S(Y,"PQ",[]);Y.PQ=[];var c=b[D];if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},mb=function(a){return S(S(Y,"H",T()),a,T())};var nb=S(Y,"perf",T()),ob=S(nb,"g",T()),pb=S(nb,"i",T());S(nb,"r",[]);T();T();var qb=function(a,b,c){var d=nb.r;"function"===typeof d?d(a,b,c):d[r]([a,b,c])},rb=function(a,b,c){ob[a]=!b&&ob[a]||c||(new Date)[ua]();qb(a)},tb=function(a,b,c){b&&0<b[D]&&(b=sb(b),c&&0<c[D]&&(b+="___"+sb(c)),28<b[D]&&(b=b[B](0,28)+(b[D]-28)),c=b,b=S(pb,"_p",T()),S(b,c,T())[a]=(new Date)[ua](),qb(a,"_p",c))},sb=function(a){return a[P]("__")[u](/\./g,"_")[u](/\-/g,"_")[u](/\,/g,"_")};var ub=T(),vb=[],wb=function(a){throw Error("Bad hint"+(a?": "+a:""));};vb[r](["jsl",function(a){for(var b in a)if(U(a,b)){var c=a[b];"object"==typeof c?Y[b]=S(Y,b,[])[ma](c):S(Y,b,c)}if(b=a.u)a=S(Y,"us",[]),a[r](b),(b=/^https:(.*)$/[ja](b))&&a[r]("http:"+b[1])}]);var xb=/^(\/[a-zA-Z0-9_\-]+)+$/,yb=/^[a-zA-Z0-9\-_\.!]+$/,zb=/^gapi\.loaded_[0-9]+$/,Ab=/^[a-zA-Z0-9,._-]+$/,Eb=function(a,b,c,d){var e=a[F](";"),f=ub[e[ia]()],g=null;f&&(g=f(e,b,c,d));if(b=g)b=g,c=b[qa](Bb),d=b[qa](Cb),b=!!d&&1===d[D]&&Db[s](b)&&!!c&&1===c[D];b||wb(a);return g},Hb=function(a,b,c,d){a=Fb(a);zb[s](c)||wb("invalid_callback");b=Gb(b);d=d&&d[D]?Gb(d):null;var e=function(a){return aa(a)[u](/%2C/g,",")};return[aa(a.S)[u](/%2C/g,",")[u](/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+
e(d):"","/rt=j/sv=1/d=1/ed=1",a.G?"/am="+e(a.G):"",a.H?"/rs="+e(a.H):"","/cb=",e(c)][P]("")},Fb=function(a){"/"!==a[na](0)&&wb("relative path");for(var b=a[M](1)[F]("/"),c=[];b[D];){a=b[ia]();if(!a[D]||0==a[y]("."))wb("empty/relative directory");else if(0<a[y]("=")){b.unshift(a);break}c[r](a)}a={};for(var d=0,e=b[D];d<e;++d){var f=b[d][F]("="),g=fa(f[0]),h=fa(f[1]);2==f[D]&&g&&h&&(a[g]=a[g]||h)}b="/"+c[P]("/");xb[s](b)||wb("invalid_prefix");c=Ib(a,"k",!0);d=Ib(a,"am");a=Ib(a,"rs");return{S:b,version:c,
G:d,H:a}},Gb=function(a){for(var b=[],c=0,d=a[D];c<d;++c){var e=a[c][u](/\./g,"_")[u](/-/g,"_");Ab[s](e)&&b[r](e)}return b[P](",")},Ib=function(a,b,c){a=a[b];!a&&c&&wb("missing: "+b);if(a){if(yb[s](a))return a;wb("invalid: "+b)}return null},Db=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Cb=/\/cb=/g,Bb=/\/\//g,Jb=function(){var a=ib(Ia[L]);if(!a)throw Error("Bad hint");return a};
ub.m=function(a,b,c,d){(a=a[0])||wb("missing_hint");return"https://apis.google.com"+Hb(a,b,c,d)};var Kb=decodeURI("%73cript"),Lb=function(a,b){for(var c=[],d=0;d<a[D];++d){var e=a[d];e&&0>La[I](b,e)&&c[r](e)}return c},Nb=function(a){"loading"!=R[ra]?Mb(a):R.write("<"+Kb+' src="'+encodeURI(a)+'"></'+Kb+">")},Mb=function(a){var b=R[z](Kb);b[A]("src",a);b.async="true";(a=R[va](Kb)[0])?a[O].insertBefore(b,a):(R.head||R.body||R.documentElement)[ha](b)},Ob=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<vb[D];d++){var e=vb[d][0],f=vb[d][1];f&&U(c,e)&&f(c[e],a,b)}},Qb=function(a,b){Pb(function(){var c;
c=b===ib(Ia[L])?S(W,"_",T()):T();c=S(mb(b),"_",c);a(c)})},Sb=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ob(a,c);var d=a?a[F](":"):[],e=c.h||Jb(),f=S(Y,"ah",T());if(f["::"]&&d[D]){for(var g=[],h=null;h=d[ia]();){var m=h[F]("."),m=f[h]||f[m[1]&&"ns:"+m[0]||""]||e,v=g[D]&&g[g[D]-1]||null,l=v;v&&v.hint==m||(l={hint:m,K:[]},g[r](l));l.K[r](h)}var n=g[D];if(1<n){var w=c.callback;w&&(c.callback=function(){0==--n&&w()})}for(;d=g[ia]();)Rb(d.K,c,d.hint)}else Rb(d||[],c,e)},Rb=function(a,
b,c){a=Ma(a)||[];var d=b.callback,e=b.config,f=b.timeout,g=b.ontimeout,h=null,m=!1;if(f&&!g||!f&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var v=S(mb(c),"r",[]).sort(),l=S(mb(c),"L",[]).sort(),n=[][ma](v),w=function(a,b){if(m)return 0;Q.clearTimeout(h);l[r][N](l,t);var d=((W||{}).config||{})[Ca];d?d(e):e&&S(Y,"cu",[])[r](e);if(b){tb("me0",a,n);try{Qb(b,c)}finally{tb("me1",a,n)}}return 1};0<f&&(h=Q.setTimeout(function(){m=!0;g()},f));var t=Lb(a,l);if(t[D]){var t=
Lb(a,v),x=S(Y,"CP",[]),ca=x[D];x[ca]=function(a){if(!a)return 0;tb("ml1",t,n);var b=function(b){x[ca]=null;w(t,a)&&kb(function(){d&&d();b()})},c=function(){var a=x[ca+1];a&&a()};0<ca&&x[ca-1]?x[ca]=function(){b(c)}:b(c)};if(t[D]){var lb="loaded_"+Y.I++;W[lb]=function(a){x[ca](a);W[lb]=null};a=Eb(c,t,"gapi."+lb,v);v[r][N](v,t);tb("ml0",t,n);b.sync||Q.___gapisync?Nb(a):Mb(a)}else x[ca](Ja)}else w(t)&&d&&d()};var Pb=function(a){if(Y.hee&&0<Y.hel)try{return a()}catch(b){Y.hel--,Sb("debug_error",function(){try{k.___jsl.hefn(b)}catch(a){throw b;}})}else return a()};W.load=function(a,b){return Pb(function(){return Sb(a,b)})};var Tb=function(a){var b=k.___jsl=k.___jsl||{};b[a]=b[a]||[];return b[a]},Ub=function(a){var b=k.___jsl=k.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},Vb=function(a){return"object"===typeof a&&/\[native code\]/[s](a[r])},Wb=function(a,b){if(b)for(var c in b)b[wa](c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Vb(a[c])&&!Vb(b[c])?Wb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Vb(b[c])?[]:{},Wb(a[c],b[c])):a[c]=b[c])},Xb=function(a){if(a&&!/^\s+$/[s](a)){for(;0==a[K](a[D]-1);)a=
a[M](0,a[D]-1);var b;try{b=k[oa].parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(d){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(e){}return"object"===typeof b?b:{}}},Yb=function(a){Ub(!0);var b=k.___gcfg,c=Tb("cu");if(b&&b!==k.___gu){var d={};Wb(d,b);c[r](d);k.___gu=b}var b=Tb("cu"),e=p.scripts||p[va]("script")||[],d=[],f=[];f[r][N](f,Tb("us"));for(var g=0;g<e[D];++g)for(var h=e[g],m=0;m<f[D];++m)h.src&&0==
h.src[y](f[m])&&d[r](h);0==d[D]&&0<e[D]&&e[e[D]-1].src&&d[r](e[e[D]-1]);for(e=0;e<d[D];++e)d[e][J]("gapi_processed")||(d[e][A]("gapi_processed",!0),(f=d[e])?(g=f.nodeType,f=3==g||4==g?f.nodeValue:f.textContent||f.innerText||f.innerHTML||""):f=void 0,(f=Xb(f))&&b[r](f));a&&(d={},Wb(d,a),c[r](d));d=Tb("cd");a=0;for(b=d[D];a<b;++a)Wb(Ub(),d[a]);d=Tb("ci");a=0;for(b=d[D];a<b;++a)Wb(Ub(),d[a]);a=0;for(b=c[D];a<b;++a)Wb(Ub(),c[a])},Z=function(a){if(!a)return Ub();a=a[F]("/");for(var b=Ub(),c=0,d=a[D];b&&
"object"===typeof b&&c<d;++c)b=b[a[c]];return c===a[D]&&void 0!==b?b:void 0},Zb=function(a,b){var c=a;if("string"===typeof a){for(var d=c={},e=a[F]("/"),f=0,g=e[D];f<g-1;++f)var h={},d=d[e[f]]=h;d[e[f]]=b}Yb(c)};var $b=function(){var a=k.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),S(Y,"ci",[])[r](a),k.__GOOGLEAPIS=void 0)};var ac=k.console,bc=function(a){ac&&ac.log&&ac.log(a)};var cc=function(){return!!Y.oa},dc=function(){};var $=S(Y,"rw",T()),ec=function(a){for(var b in $)a($[b])},fc=function(a,b){var c=$[a];c&&c.state<b&&(c.state=b)};var gc;var hc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//,ic=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//,jc=function(a){var b=Z("googleapis.config/sessionIndex");null==b&&(b=k.__X_GOOG_AUTHUSER);if(null==b){var c=k.google;c&&(b=c.authuser)}null==b&&(a=a||k[G][L],b=X(a,"authuser")||null,null==b&&(b=(b=a[qa](hc))?b[1]:null));return null==b?null:q(b)},kc=function(a){var b=Z("googleapis.config/sessionDelegate");null==b&&(b=(a=(a||k[G][L])[qa](ic))?
a[1]:null);return null==b?null:q(b)};var lc=function(){};var mc=function(){this.b=[];this.n=[];this.N=[];this.k=[];this.k[0]=128;for(var a=1;64>a;++a)this.k[a]=0;this.reset()};(function(){function a(){}a.prototype=lc[E];mc.Z=lc[E];mc.prototype=new a})();mc[E].reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.o=this.i=0};
var nc=function(a,b,c){c||(c=0);var d=a.N;if("string"==typeof b)for(var e=0;16>e;e++)d[e]=b[K](c)<<24|b[K](c+1)<<16|b[K](c+2)<<8|b[K](c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];for(var g=a.b[2],h=a.b[3],m=a.b[4],v,e=0;80>e;e++)40>e?20>e?(f=h^c&(g^h),v=1518500249):(f=c^g^h,v=1859775393):60>e?(f=c&g|h&(c|g),v=2400959708):(f=c^g^h,v=3395469782),f=(b<<5|b>>>27)+f+
m+v+d[e]&4294967295,m=h,h=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+m&4294967295};mc[E].update=function(a,b){void 0===b&&(b=a[D]);for(var c=b-64,d=0,e=this.n,f=this.i;d<b;){if(0==f)for(;d<=c;)nc(this,a,d),d+=64;if("string"==typeof a)for(;d<b;){if(e[f]=a[K](d),++f,++d,64==f){nc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,64==f){nc(this,e);f=0;break}}this.i=f;this.o+=b};var oc=function(){this.p=new mc};oc[E].reset=function(){this.p.reset()};var vc=function(){var a;pc?(a=new Q.Uint32Array(1),qc.getRandomValues(a),a=Number("0."+a[0])):(a=rc,a+=ea(sc[B](0,20),16),sc=tc(sc),a/=uc+Math.pow(16,20));return a},qc=Q.crypto,pc=!1,wc=0,xc=0,rc=1,uc=0,sc="",yc=function(a){a=a||Q.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=(new Date)[ua]()%1E6*b;rc=rc*b%uc;0<wc&&++xc==wc&&cb("mousemove",yc,"remove","de")},tc=function(a){var b=new oc;a=unescape(aa(a));for(var c=[],d=0,e=a[D];d<e;++d)c[r](a[K](d));b.p[Ca](c);a=b.p;b=[];d=8*a.o;
56>a.i?a[Ca](a.k,56-a.i):a[Ca](a.k,64-(a.i-56));for(c=63;56<=c;c--)a.n[c]=d&255,d/=256;nc(a,a.n);for(c=d=0;5>c;c++)for(e=24;0<=e;e-=8)b[d]=a.b[c]>>e&255,++d;a="";for(c=0;c<b[D];c++)a+="0123456789ABCDEF"[na](Math.floor(b[c]/16))+"0123456789ABCDEF"[na](b[c]%16);return a},pc=!!qc&&"function"==typeof qc.getRandomValues;pc||(uc=1E6*(screen[ka]*screen[ka]+screen[Da]),sc=tc(R.cookie+"|"+R[G]+"|"+(new Date)[ua]()+"|"+Math.random()),wc=Z("random/maxObserveMousemove")||0,0!=wc&&cb("mousemove",yc,"add","at"));var zc=function(){var a=Y.onl;if(!a){a=T();Y.onl=a;var b=T();a.e=function(a){var d=b[a];d&&(delete b[a],d())};a.a=function(a,d){b[a]=d};a.r=function(a){delete b[a]}}return a},Ac=function(a,b){var c=b.onload;return"function"===typeof c?(zc().a(a,c),c):null},Bc=function(a){Va(/^\w+$/[s](a),"Unsupported id - "+a);zc();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},Cc=function(a){zc().r(a)};var Dc={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},Ec={allowtransparency:!0,onload:!0},Fc=0,Gc=function(a){Va(!a||bb[s](a),"Illegal url for new iframe - "+a)},Hc=function(a,b,c,d,e){Gc(c.src);var f,g=Ac(d,c),h=g?Bc(d):"";try{f=a[z]('<iframe frameborder="'+Sa(q(c.frameborder))+'" scrolling="'+Sa(q(c.scrolling))+'" '+h+' name="'+Sa(q(c.name))+'"/>')}catch(m){f=a[z]("iframe"),g&&(f.onload=function(){f.onload=
null;g[I](this)},Cc(d))}for(var v in c)a=c[v],"style"===v&&"object"===typeof a?V(a,f[H]):Ec[v]||f[A](v,q(a));(v=e&&e.beforeNode||null)||e&&e.dontclear||gb(b);b.insertBefore(f,v);f=v?v.previousSibling:b.lastChild;c.allowtransparency&&(f.allowTransparency=!0);return f};var Ic=/^:[\w]+$/,Jc=/:([a-zA-Z_]+):/g,Kc=function(a,b){if(!gc||Z("oauth-flow/authAware")){var c=jc()||"0",d=kc(),e;e=jc(void 0)||c;var f=kc(void 0),g="";e&&(g+="u/"+e+"/");f&&(g+="b/"+f+"/");e=g||null;f=Z("oauth-flow/authAware")?"isLoggedIn":"googleapis.config/signedIn";(g=(f=!1===Z(f))?"_/im/":"")&&(e="");var h=Z("iframes/:socialhost:"),m=Z("iframes/:im_socialhost:");gc={socialhost:h,ctx_socialhost:f?m:h,session_index:c,session_delegate:d,session_prefix:e,im_prefix:g}}return gc[b]||""};var Lc={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},Mc=function(a){var b,c,d;b=/[\"\\\x00-\x1f\x7f-\x9f]/g;if(void 0!==a){switch(typeof a){case "string":return b[s](a)?'"'+a[u](b,function(a){var b=Lc[a];if(b)return b;b=a[K]();return"\\u00"+Math.floor(b/16)[C](16)+(b%16)[C](16)})+'"':'"'+a+'"';case "number":return isFinite(a)?q(a):"null";case "boolean":case "null":return q(a);case "object":if(!a)return"null";b=[];if("number"===typeof a[D]&&!a.propertyIsEnumerable("length")){d=
a[D];for(c=0;c<d;c+=1)b[r](Mc(a[c])||"null");return"["+b[P](",")+"]"}for(c in a)!/___$/[s](c)&&a[wa](c)&&"string"===typeof c&&(d=Mc(a[c]))&&b[r](Mc(c)+":"+d);return"{"+b[P](",")+"}"}return""}},Nc=function(a){if(!a)return!1;if(/^[\],:{}\s]*$/[s](a[u](/\\["\\\/b-u]/g,"@")[u](/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]")[u](/(?:^|:|,)(?:\s*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}return!1},Oc=!!k[oa]&&!!k[oa].parse&&!!k[oa].stringify,Pc=function(a){try{return k[oa].parse(a)}catch(b){return!1}},
Qc=Oc?k[oa].stringify:Mc,Rc=Oc?Pc:Nc;var Sc=function(a){var b;a[qa](/^https?%3A/i)&&(b=fa(a));return ab(p,b?b:a)},Tc=function(a){a=a||"canonical";for(var b=p[va]("link"),c=0,d=b[D];c<d;c++){var e=b[c],f=e[J]("rel");if(f&&f[Ea]()==a&&(e=e[J]("href"))&&(e=Sc(e))&&null!=e[qa](/^https?:\/\/[\w\-\_\.]+/i))return e}return k[G][L]};var Uc={callback:-1,clientid:1,cookiepolicy:1,openidrealm:-1,requestvisibleactions:1,scope:1},Vc=!1,Wc=T();var Xc={post:!0},Yc={style:"position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"},Zc="onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),$c=S(Y,"WI",T()),ad=function(a,b,c){var d,e;d=e=a;"plus"==a&&b[Aa]&&(e=a+"_"+b[Aa],d=a+"/"+b[Aa]);(e=Z("iframes/"+e+"/url"))||(e=":socialhost:/:session_prefix:_/widget/render/"+d);d=ab(R,e[u](Jc,Kc));var f="iframes/"+a+"/params/";e={};V(b,e);var g=Z("lang")||Z("gwidget/lang");g&&(e.hl=g);Xc[a]||(e.origin=
k[G].origin||k[G][ya]+"//"+k[G].host);e.exp=Z(f+"exp");if(f=Z(f+"location"))for(g=0;g<f[D];g++){var h=f[g];e[h]=Q[G][h]}switch(a){case "plus":case "follow":f=e[L];g=b[Aa]?void 0:"publisher";f=(f="string"==typeof f?f:void 0)?Sc(f):Tc(g);e.url=f;delete e[L];break;case "plusone":e.url=b[L]?Sc(b[L]):Tc();f=b.db;g=Z();null==f&&g&&(f=g.db,null==f&&(f=g.gwidget&&g.gwidget.db));e.db=f||void 0;f=b.ecp;g=Z();null==f&&g&&(f=g.ecp,null==f&&(f=g.gwidget&&g.gwidget.ecp));e.ecp=f||void 0;delete e[L];break;case "signin":e.url=
Tc()}Y.ILI&&(e.iloader="1");delete e["data-onload"];delete e.rd;e.gsrc=Z("iframes/:source:");f=Z("inline/css");"undefined"!==typeof f&&0<c&&f>=c&&(e.ic="1");f=/^#|^fr-/;c={};for(var m in e)U(e,m)&&f[s](m)&&(c[m[u](f,"")]=e[m],delete e[m]);m="q"==Z("iframes/"+a+"/params/si")?e:c;if(!Vc){f=p[va]("meta");for(g=0;g<f[D];++g)if(h=f[g].name[Ea](),0==h.lastIndexOf("google-signin-",0)){var h=h[M](14),v=f[g].content;Uc[h]&&v&&(Wc[h]=v)}if(k.self!==k.top){var f=p[G][C](),l;for(l in Uc)0<Uc[l]&&(g=X(f,l,""))&&
(Wc[l]=g)}Vc=!0}l=T();V(Wc,l);for(var n in l)!U(l,n)||U(e,n)||U(c,n)||(m[n]=l[n]);n=[][ma](Zc);(l=Z("iframes/"+a+"/methods"))&&"object"===typeof l&&Ka[s](l[r])&&(n=n[ma](l));for(var w in b)U(b,w)&&/^on/[s](w)&&("plus"!=a||"onconnect"!=w)&&(n[r](w),delete e[w]);delete e.callback;c._methods=n[P](",");return $a(d,e,c)},bd=["style","data-gapiscan"],dd=function(a){for(var b=T(),c=0!=a[pa][Ea]()[y]("g:"),d=0,e=a[Ba][D];d<e;d++){var f=a[Ba][d],g=f.name,h=f.value;0<=La[I](bd,g)||c&&0!=g[y]("data-")||"null"===
h||"specified"in f&&!f.specified||(c&&(g=g[B](5)),b[g[Ea]()]=h)}a=a[H];(c=cd(a&&a[Da]))&&(b.height=q(c));(a=cd(a&&a[ka]))&&(b.width=q(a));return b},cd=function(a){var b=void 0;"number"===typeof a?b=a:"string"===typeof a&&(b=ea(a,10));return b},fd=function(){var a=Y.drw;ec(function(b){if(a!==b.id&&4!=b.state){var c=b.id,d=b[sa],e=b.url;b=b.userParams;var f=R[la](c);if(f){var g=ad(d,b,0);g?(f=f[O],e[u](/\#.*/,"")[u](/(\?|&)ic=1/,"")!==g[u](/\#.*/,"")[u](/(\?|&)ic=1/,"")&&(b.dontclear=!0,b.rd=!0,b.ri=
!0,ga(b,d),ed(f,b),(d=$[f.lastChild.id])&&(d.oid=c),fc(c,4))):delete $[c]}else delete $[c]}})},gd=function(){};var hd,id,jd,kd,ld,md=/(?:^|\s)g-((\S)*)(?:$|\s)/,nd={plusone:!0,autocomplete:!0,profile:!0};hd=S(Y,"SW",T());id=S(Y,"SA",T());jd=S(Y,"SM",T());kd=S(Y,"FW",[]);ld=null;
var pd=function(a,b){od(void 0,!1,a,b)},od=function(a,b,c,d){rb("ps0",!0);c=("string"===typeof c?p[la](c):c)||R;var e;e=R[za];if(c.querySelectorAll&&(!e||8<e)){e=d?[d]:Ta(hd)[ma](Ta(id))[ma](Ta(jd));for(var f=[],g=0;g<e[D];g++){var h=e[g];f[r](".g-"+h,"g\\:"+h)}e=c.querySelectorAll(f[P](","))}else e=c[va]("*");c=T();for(f=0;f<e[D];f++){g=e[f];var m=g,h=d,v=m[pa][Ea](),l=void 0;m[J]("data-gapiscan")?h=null:(0==v[y]("g:")?l=v[B](2):(m=(m=q(m.className||m[J]("class")))&&md[ja](m))&&(l=m[1]),h=!l||!(hd[l]||
id[l]||jd[l])||h&&l!==h?null:l);h&&(nd[h]||0==g[pa][Ea]()[y]("g:")||0!=Ta(dd(g))[D])&&(g[A]("data-gapiscan",!0),S(c,h,[])[r](g))}if(b)for(var n in c)for(b=c[n],d=0;d<b[D];d++)b[d][A]("data-onload",!0);for(var w in c)kd[r](w);rb("ps1",!0);if((n=kd[P](":"))||a)try{W.load(n,a)}catch(t){bc(t);return}if(qd(ld||{}))for(var x in c){a=c[x];w=0;for(b=a[D];w<b;w++)a[w].removeAttribute("data-gapiscan");rd(x)}else{d=[];for(x in c)for(a=c[x],w=0,b=a[D];w<b;w++)e=a[w],sd(x,e,dd(e),d,b);td(n,d)}},ud=function(a){var b=
S(W,a,{});b.go||(b.go=function(b){return pd(b,a)},b.render=function(b,d){var e=d||{};ga(e,a);return ed(b,e)})},vd=function(a){hd[a]=!0},wd=function(a){id[a]=!0},xd=function(a){jd[a]=!0};var rd=function(a,b){var c=S(Y,"watt",T())[a];b&&c?(c(b),(c=b.iframeNode)&&c[A]("data-gapiattached",!0)):W.load(a,function(){var c=S(Y,"watt",T())[a],e=b&&b.iframeNode;e&&c?(c(b),e[A]("data-gapiattached",!0)):(0,W[a].go)(e&&e[O])})},qd=function(){return!1},td=function(){},sd=function(a,b,c,d,e,f){switch(yd(b,a,f)){case 0:a=jd[a]?a+"_annotation":a;d={};d.iframeNode=b;d.userParams=c;rd(a,d);break;case 1:var g;if(b[O]){for(var h in c)if(U(c,h)&&c[h]&&"object"===typeof c[h]&&(!c[h][C]||c[h][C]===ba[E][C]||
c[h][C]===da[E][C]))try{var m=Qc(c[h]);600>m[D]?c[h]=m:delete c[h]}catch(v){delete c[h]}m=!0;c.dontclear&&(m=!1);delete c.dontclear;dc();h=ad(a,c,e);f={allowPost:1,attributes:Yc};f.dontclear=!m;e={};e.userParams=c;e.url=h;ga(e,a);var l;c.rd?l=b:(l=p[z]("div"),b[A]("data-gapistub",!0),l[H].cssText="position:absolute;width:450px;left:-10000px;",b[O].insertBefore(l,b));e.siteElement=l;l.id||(b=l,S($c,a,0),m="___"+a+"_"+$c[a]++,b.id=m);b=T();b[">type"]=a;V(c,b);m=h;c=l;h=f||{};b=h[Ba]||{};Va(!h.allowPost||
!b.onload,"onload is not supported by post iframe");f=b=m;Ic[s](b)&&(f=Z("iframes/"+f[M](1)+"/url"),Va(!!f,"Unknown iframe url config for - "+b));m=ab(R,f[u](Jc,Kc));b=c.ownerDocument||R;l=0;do f=h.id||["I",Fc++,"_",(new Date)[ua]()][P]("");while(b[la](f)&&5>++l);Va(5>l,"Error creating iframe id");l={};var n={};b[za]&&9>b[za]&&(l.hostiemode=b[za]);V(h.queryParams||{},l);V(h.fragmentParams||{},n);var w=h.pfname,t=T();t.id=f;t.parent=b[G][ya]+"//"+b[G].host;var x=X(b[G][L],"parent"),w=w||"";!w&&x&&
(x=X(b[G][L],"id",""),w=X(b[G][L],"pfname",""),w=x?w+"/"+x:"");t.pfname=w;V(t,n);(t=X(m,"rpctoken")||l.rpctoken||n.rpctoken)||(t=n.rpctoken=h.rpctoken||q(Math.round(1E8*vc())));h.rpctoken=t;x=b[G][L];t=T();(w=X(x,"_bsh",Y.bsh))&&(t._bsh=w);(x=ib(x))&&(t.jsh=x);h.hintInFragment?V(t,n):V(t,l);m=$a(m,l,n,h.paramsSerializer);n=T();V(Dc,n);V(h[Ba],n);n.name=n.id=f;n.src=m;h.eurl=m;if((h||{}).allowPost&&2E3<m[D]){l=Xa(m);n.src="";n["data-postorigin"]=m;m=Hc(b,c,n,f);-1!=navigator.userAgent[y]("WebKit")&&
(g=m.contentWindow.document,g.open(),n=g[z]("div"),t={},x=f+"_inner",t.name=x,t.src="",t.style="display:none",Hc(b,n,t,x,h));n=(h=l.g[0])?h[F]("&"):[];h=[];for(t=0;t<n[D];t++)x=n[t][F]("=",2),h[r]([fa(x[0]),fa(x[1])]);l.g=[];n=Ya(l);l=b[z]("form");l.action=n;l.method="POST";l.target=f;l[H].display="none";for(f=0;f<h[D];f++)n=b[z]("input"),ga(n,"hidden"),n.name=h[f][0],n.value=h[f][1],l[ha](n);c[ha](l);l.submit();l[O][xa](l);g&&g.close();g=m}else g=Hc(b,c,n,f,h);e.iframeNode=g;e.id=g[J]("id");g=e.id;
c=T();c.id=g;c.userParams=e.userParams;c.url=e.url;ga(c,e[sa]);c.state=1;$[g]=c;g=e}else g=null;g&&((e=g.id)&&d[r](e),rd(a,g))}},yd=function(a,b,c){if(a&&1===a.nodeType&&b){if(c)return 1;if(jd[b]){if(hb[a[pa][Ea]()])return(a=a.innerHTML)&&a[u](/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}else{if(id[b])return 0;if(hd[b])return 1}}return null},ed=function(a,b){var c=b[sa];delete b[sa];var d=("string"===typeof a?p[la](a):a)||void 0;if(d){var e={},f;for(f in b)U(b,f)&&(e[f[Ea]()]=b[f]);e.rd=1;(f=!!e.ri)&&delete e.ri;
var g=[];sd(c,d,e,g,0,f);td(c,g)}else bc("string"==="gapi."+c+".render: missing element "+typeof a?a:"")};S(W,"platform",{}).go=pd;var qd=function(a){for(var b=["_c","jsl","h"],c=0;c<b[D]&&a;c++)a=a[b[c]];b=ib(Ia[L]);return!a||0!=a[y]("n;")&&0!=b[y]("n;")&&a!==b},td=function(a,b){zd(a,b)},db=function(a){od(a,!0)},Ad=function(a,b){for(var c=b||[],d=0;d<c[D];++d)a(c[d]);for(d=0;d<c[D];d++)ud(c[d])};vb[r](["platform",function(a,b,c){ld=c;b&&kd[r](b);Ad(vd,a);Ad(wd,c._c.annotation);Ad(xd,c._c.bimodal);$b();Yb();if("explicit"!=Z("parsetags")){jb(a);var d;c&&(a=c.callback)&&(d=Ua(a),delete c.callback);fb(function(){db(d)})}}]);W._pl=!0;var Bd=function(a){a=(a=$[a])?a.oid:void 0;if(a){var b=R[la](a);b&&b[O][xa](b);delete $[a];Bd(a)}},gd=function(a,b,c){if(c[ka]&&c[Da]){n:{c=c||{};if(cc()){var d=b.id;if(d){var e;e=(e=$[d])?e.state:void 0;if(1===e||4===e)break n;Bd(d)}}(e=a.nextSibling)&&e[J]&&e[J]("data-gapistub")&&(a[O][xa](e),a[H].cssText="");e=c[ka];var f=c[Da],g=a[H];g.textIndent="0";g.margin="0";g.padding="0";g.background="transparent";g.borderStyle="none";g.cssFloat="none";g.styleFloat="none";g.lineHeight="normal";g.fontSize=
"1px";g.verticalAlign="baseline";a=a[H];a.display="inline-block";g=b[H];g.position="static";g.left=0;g.top=0;g.visibility="visible";e&&(a.width=g.width=e+"px");f&&(a.height=g.height=f+"px");c.verticalAlign&&(a.verticalAlign=c.verticalAlign);d&&fc(d,3)}b["data-csi-wdt"]=(new Date)[ua]()}};var Cd=/^\{h\:'/,Dd=/^!_/,Ed="",zd=function(a,b){function c(){cb("message",d,"remove","de")}function d(d){var g=d.data,h=d.origin;if(Fd(g,b)){var m=e;e=!1;m&&rb("rqe");Gd(a,function(){m&&rb("rqd");c();for(var a=S(Y,"RPMQ",[]),b=0;b<a[D];b++)a[b]({data:g,origin:h})})}}if(0!==b[D]){Ed=X(Ia[L],"pfname","");var e=!0;cb("message",d,"add","at");Sb(a,c)}},Fd=function(a,b){a=q(a);if(Cd[s](a))return!0;var c=!1;Dd[s](a)&&(c=!0,a=a[B](2));if(!/^\{/[s](a))return!1;var d=Rc(a);if(!d)return!1;var e=d.f;if(d.s&&
e&&-1!=La[I](b,e)){if("_renderstart"===d.s||d.s===Ed+"/"+e+"::_renderstart")c=d.a&&d.a[c?0:1],d=R[la](e),fc(e,2),c&&d&&gd(d[O],d,c);return!0}return!1},Gd=function(a,b){Sb(a,b)};var Hd=function(a,b){this.A=a;var c=b||{};this.P=c.V;this.w=c.domain;this.B=c.path;this.Q=c.W},Id=/^[-+/_=.:|%&a-zA-Z0-9@]*$/,Jd=/^[A-Z_][A-Z0-9_]{0,63}$/;Hd[E].write=function(a,b){if(!Jd[s](this.A))throw"Invalid cookie name";if(!Id[s](a))throw"Invalid cookie value";var c=this.A+"="+a;this.w&&(c+=";domain="+this.w);this.B&&(c+=";path="+this.B);var d="number"===typeof b?b:this.P;if(0<=d){var e=new Date;e.setSeconds(e.getSeconds()+d);c+=";expires="+e.toUTCString()}this.Q&&(c+=";secure");p.cookie=c};
Hd.iterate=function(a){for(var b=p.cookie[F](/;\s*/),c=0;c<b[D];++c){var d=b[c][F]("="),e=d[ia]();a(e,d[P]("="))}};var Kd=function(a){this.T=a},Ld={};Kd[E].write=function(a){Ld[this.T]=a};Kd.iterate=function(a){for(var b in Ld)Ld[wa](b)&&a(b,Ld[b])};var Md="https:"===k[G][ya],Nd=Md||"http:"===k[G][ya]?Hd:Kd,Od=function(a){var b=a[B](1),c="",d=k[G].hostname;if(""!==b){c=ea(b,10);if(isNaN(c))return null;b=d[F](".");if(b[D]<c-1)return null;b[D]==c-1&&(d="."+d)}else d="";return{c:"S"==a[na](0),domain:d,d:c}},Pd=function(a){if(0!==a[y]("GCSC"))return null;var b={v:!1};a=a[B](4);if(!a)return b;var c=a[na](0);a=a[B](1);var d=a.lastIndexOf("_");if(-1==d)return b;var e=Od(a[B](d+1));if(null==e)return b;a=a[M](0,d);if("_"!==a[na](0))return b;d="E"===c&&
e.c;return!d&&("U"!==c||e.c)||d&&!Md?b:{v:!0,c:d,U:a[B](1),domain:e.domain,d:e.d}},Qd=function(a){if(!a)return[];a=a[F]("=");return a[1]?a[1][F]("|"):[]},Rd=function(a){a=a[F](":");return{q:a[0][F]("=")[1],L:Qd(a[1]),Y:Qd(a[2]),X:Qd(a[3])}},Sd=function(){var a,b=null;Nd.iterate(function(c,d){if(0===c[y]("G_AUTHUSER_")){var e=Od(c[M](11));if(!a||e.c&&!a.c||e.c==a.c&&e.d>a.d)a=e,b=d}});if(null!==b){var c;Nd.iterate(function(b,d){var e=Pd(b);e&&e.v&&e.c==a.c&&e.d==a.d&&(c=d)});if(c){var d=Rd(c),e=d&&
d.L[Number(b)],d=d&&d.q;if(e)return{M:b,O:e,q:d}}}return null};var Td=function(a){this.F=a};Td[E].j=0;Td[E].D=2;Td[E].F=null;Td[E].t=!1;Td[E].J=function(){this.t||(this.j=0,this.t=!0,this.C())};Td[E].C=function(){this.t&&(this.F()?this.j=this.D:this.j=Math.min(2*(this.j||this.D),120),k.setTimeout(Ha(this.C,this),1E3*this.j))};for(var Ud=0;64>Ud;++Ud);var Vd=null,cc=function(){return Y.oa=!0},dc=function(){Y.oa=!0;var a=Sd();(a=a&&a.M)&&Zb("googleapis.config/sessionIndex",a);Vd||(Vd=S(Y,"ss",new Td(Wd)));a=Vd;a.J&&a.J()},Wd=function(){var a=Sd(),b=a&&a.O||null,c=a&&a.q;Sb("auth",{callback:function(){var a={client_id:c,session_state:b};Q.gapi.auth.checkSessionState(a,function(b){var c=a.session_state,g=Z("isLoggedIn");b=c&&b||!c&&!b;g!=b&&(Zb("isLoggedIn",b),dc(),fd())})}});return!0};rb("bs0",!0,k.gapi._bs);rb("bs1",!0);delete k.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"client":{"cors":false},"plus_layer":{"isEnabled":false},"enableMultilogin":false,"isLoggedIn":true,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?bsv\u003do"},"person":{"url":":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1\u0026bsv\u003do"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1\u0026bsv\u003do"},"signin":{"methods":["onauth"],"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?bsv\u003do"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1\u0026bsv\u003do"},"page":{"url":":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1\u0026bsv\u003do"},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget?bsv\u003do"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?usegapi\u003d1\u0026bsv\u003do"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card?bsv\u003do"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv\u003do"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/?bsv\u003do"},"follow":{"url":":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1\u0026bsv\u003do"},"shortlists":{"url":"?bsv\u003do"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?usegapi\u003d1\u0026bsv\u003do"},":socialhost:":"https://apis.google.com","post":{"params":{"url":""},"url":":socialhost:/:session_prefix::im_prefix:_/widget/render/post?bsv\u003do"},"community":{"url":":socialhost:/:session_prefix:_/widget/render/community?usegapi\u003d1\u0026bsv\u003do"},"rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobarsimplescroller?bsv\u003do"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv\u003do"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1\u0026bsv\u003do"},":source:":"3p","savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv\u003do"},"panoembed":{"url":"https://ssl.gstatic.com/pano/embed/?bsv\u003do"},"rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobarinvitation?bsv\u003do"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker?bsv\u003do"},":im_socialhost:":"https://plus.googleapis.com","savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1\u0026bsv\u003do"},":signuphost:":"https://plus.google.com","plusone":{"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?usegapi\u003d1\u0026bsv\u003do"},"comments":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1\u0026bsv\u003do"},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?usegapi\u003d1\u0026bsv\u003do"}},"isPlusUser":true,"debug":{"host":"https://apis.google.com","reportExceptionRate":0.05,"rethrowException":false},"deviceType":"desktop","inline":{"css":1},"lexps":[102,98,99,79,109,45,17,117,115,81,95,122,61,30],"oauth-flow":{"improveToastUi":false,"authAware":true,"usegapi":false,"disableOpt":true,"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","toastCfg":"1000:3000:1000"},"report":{"host":"https://apis.google.com","rate":0.001,"apis":["iframes\\..*","gadgets\\..*","gapi\\.appcirclepicker\\.*","gapi\\.client\\..*"]},"csi":{"rate":0.01},"googleapis.config":{}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en_GB.icSqXUPOBJQ.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/rs\u003dAItRSTMOMOhaCfmtXQp6i5tQkpZOpqAo2g","u":"https://apis.google.com/js/plusone.js","hee":true,"fp":"25fbc36cf1225b158a1369cc907ca03bc313d56b","dpo":false},"platform":["additnow","comments","commentcount","community","follow","page","panoembed","person","plus","plusone","post","savetodrive","shortlists","ytsubscribe","zoomableimage","savetowallet","hangout"],"fp":"25fbc36cf1225b158a1369cc907ca03bc313d56b","annotation":["interactivepost","recobar","autocomplete","profile"],"bimodal":["signin"]}});