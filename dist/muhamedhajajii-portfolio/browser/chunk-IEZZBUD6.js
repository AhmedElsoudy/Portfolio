import{d as j}from"./chunk-NKVNYTXT.js";import{h as f,i as C,k as E}from"./chunk-UQFK362I.js";import{$a as _,Fa as h,Ka as p,L as w,La as c,Ma as y,Oa as I,Qa as D,Ra as B,Sa as M,T as g,Ta as A,U as T,Ua as L,Wa as d,_ as P,_a as N,bb as F,ga as a,ka as x,ra as v,sa as b,va as O}from"./chunk-UDRG4E5P.js";function S(){return S=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s[e]=t[e])}return s},S.apply(this,arguments)}var Q={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(s){},onComplete:function(s){},preStringTyped:function(s,i){},onStringTyped:function(s,i){},onLastStringBackspaced:function(s){},onTypingPaused:function(s,i){},onTypingResumed:function(s,i){},onReset:function(s){},onStop:function(s,i){},onStart:function(s,i){},onDestroy:function(s){}},W=new(function(){function s(){}var i=s.prototype;return i.load=function(t,e,n){if(t.el=typeof n=="string"?document.querySelector(n):n,t.options=S({},Q,e),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(m){return m.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(t.stringsElement.children),r=o.length;if(r)for(var u=0;u<r;u+=1)t.strings.push(o[u].innerHTML.trim())}for(var l in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[l]=l;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},i.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},i.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(n)}},i.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(n)}},s}()),R=new(function(){function s(){}var i=s.prototype;return i.typeHtmlChars=function(t,e,n){if(n.contentType!=="html")return e;var o=t.substring(e).charAt(0);if(o==="<"||o==="&"){var r;for(r=o==="<"?">":";";t.substring(e+1).charAt(0)!==r&&!(1+ ++e>t.length););e++}return e},i.backSpaceHtmlChars=function(t,e,n){if(n.contentType!=="html")return e;var o=t.substring(e).charAt(0);if(o===">"||o===";"){var r;for(r=o===">"?"<":"&";t.substring(e-1).charAt(0)!==r&&!(--e<0););e--}return e},s}()),q=function(){function s(t,e){W.load(this,e,t),this.begin()}var i=s.prototype;return i.toggle=function(){this.pause.status?this.start():this.stop()},i.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},i.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},i.destroy=function(){this.reset(!1),this.options.onDestroy(this)},i.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},i.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},i.typewrite=function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),r=1;this.pause.status!==!0?this.timeout=setTimeout(function(){e=R.typeHtmlChars(t,e,n);var u=0,l=t.substring(e);if(l.charAt(0)==="^"&&/^\^\d+/.test(l)){var m=1;m+=(l=/\d+/.exec(l)[0]).length,u=parseInt(l),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+m),n.toggleBlinking(!0)}if(l.charAt(0)==="`"){for(;t.substring(e+r).charAt(0)!=="`"&&(r++,!(e+r>t.length)););var k=t.substring(0,e),J=t.substring(k.length+1,e+r),G=t.substring(e+r+1);t=k+J+G,r--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,r),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},u)},o):this.setPauseStatus(t,e,!0)},i.keepTyping=function(t,e,n){e===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var o=t.substring(0,e+=n);this.replaceText(o),this.typewrite(t,e)},i.doneTyping=function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){n.backspace(t,e)},this.backDelay))},i.backspace=function(t,e){var n=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=R.backSpaceHtmlChars(t,e,n);var r=t.substring(0,e);if(n.replaceText(r),n.smartBackspace){var u=n.strings[n.arrayPos+1];n.stopNum=u&&r===u.substring(0,e)?e:0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))},o)}else this.setPauseStatus(t,e,!1)},i.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},i.setPauseStatus=function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e},i.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},i.humanizer=function(t){return Math.round(Math.random()*t/2)+t},i.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},i.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},i.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},i.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&t.el.value.length!==0||t.start()}))},i.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},s}();var K=["typedElement"],U=["*"],H=(()=>{class s{constructor(t,e){this.platformId=t,this.renderer=e,this.strings=[],this.typeSpeed=100,this.backSpeed=100,this.backDelay=500,this.fadeOutDelay=500,this.loop=!0,this.onBeginEvent=new a,this.onCompleteEvent=new a,this.preStringTypedEvent=new a,this.onStringTypedEvent=new a,this.onLastStringBackspacedEvent=new a,this.onTypingPausedEvent=new a,this.onTypingResumedEvent=new a,this.onResetEvent=new a,this.onStopEvent=new a,this.onStartEvent=new a,this.onDestroyEvent=new a}get options(){let t=o=>r=>o.emit(r),e=o=>(r,u)=>o.emit({arrayPos:r,self:u}),n={strings:this.strings,stringsElement:this.stringsElement,typeSpeed:this.typeSpeed,startDelay:this.startDelay,backSpeed:this.backSpeed,smartBackspace:this.smartBackspace,shuffle:this.shuffle,backDelay:this.backDelay,fadeOut:this.fadeOut,fadeOutClass:this.fadeOutClass,fadeOutDelay:this.fadeOutDelay,loop:this.loop,loopCount:this.loopCount,showCursor:this.showCursor,cursorChar:this.cursorChar,autoInsertCss:this.autoInsertCss,attr:this.attr,bindInputFocusEvents:this.bindInputFocusEvents,contentType:this.contentType,onBegin:t(this.onBeginEvent),onComplete:t(this.onCompleteEvent),preStringTyped:e(this.preStringTypedEvent),onStringTyped:e(this.onStringTypedEvent),onLastStringBackspaced:t(this.onLastStringBackspacedEvent),onTypingPaused:e(this.onTypingPausedEvent),onTypingResumed:e(this.onTypingResumedEvent),onReset:t(this.onResetEvent),onStop:e(this.onStopEvent),onStart:e(this.onStartEvent),onDestroy:t(this.onDestroyEvent)};return Object.keys(n).forEach(o=>{n[o]===void 0&&delete n[o]}),n}ngAfterViewInit(){this.initialize()}ngOnChanges(t){this.typedInstance&&(this.typedInstance.destroy(),this.initialize())}initialize(){E(this.platformId)&&this.typedElement&&(this.typedInstance=new q(this.typedElement.nativeElement,this.options),this.updateCursorColor())}start(){this.typedInstance.start()}stop(){this.typedInstance.stop()}reset(){this.typedInstance.reset()}toggle(){this.typedInstance.toggle()}destroy(){this.typedInstance.destroy()}updateCursorColor(){if(this.cursorColor){let e=this.typedElement.nativeElement.parentNode?.querySelector(".typed-cursor");e&&this.renderer.setStyle(e,"color",this.cursorColor)}}ngOnDestroy(){E(this.platformId)&&this.destroy()}static{this.\u0275fac=function(e){return new(e||s)(b(x),b(O))}}static{this.\u0275cmp=g({type:s,selectors:[["ngx-typed2"]],viewQuery:function(e,n){if(e&1&&M(K,7),e&2){let o;A(o=L())&&(n.typedElement=o.first)}},inputs:{strings:"strings",stringsElement:"stringsElement",typeSpeed:"typeSpeed",startDelay:"startDelay",backSpeed:"backSpeed",smartBackspace:"smartBackspace",shuffle:"shuffle",backDelay:"backDelay",fadeOut:"fadeOut",fadeOutClass:"fadeOutClass",fadeOutDelay:"fadeOutDelay",loop:"loop",loopCount:"loopCount",showCursor:"showCursor",cursorChar:"cursorChar",autoInsertCss:"autoInsertCss",attr:"attr",bindInputFocusEvents:"bindInputFocusEvents",contentType:"contentType",cursorColor:"cursorColor",ngClass:"ngClass"},outputs:{onBeginEvent:"onBeginEvent",onCompleteEvent:"onCompleteEvent",preStringTypedEvent:"preStringTypedEvent",onStringTypedEvent:"onStringTypedEvent",onLastStringBackspacedEvent:"onLastStringBackspacedEvent",onTypingPausedEvent:"onTypingPausedEvent",onTypingResumedEvent:"onTypingResumedEvent",onResetEvent:"onResetEvent",onStopEvent:"onStopEvent",onStartEvent:"onStartEvent",onDestroyEvent:"onDestroyEvent"},features:[P],ngContentSelectors:U,decls:3,vars:1,consts:[["typedElement",""],[1,"typing",3,"ngClass"]],template:function(e,n){e&1&&(D(),p(0,"div",1,0),B(2),c()),e&2&&h("ngClass",n.ngClass)},dependencies:[f],styles:[".typing[_ngcontent-%COMP%]{display:inline}"]})}}return s})(),z=(()=>{class s{static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275mod=T({type:s})}static{this.\u0275inj=w({imports:[C]})}}return s})();var X=()=>["$ I'm Ahmed Gomaa Full Stack Developer (Angular, Google App Script, ASP.NET Core) , Let's Know more ....."],Z=(s,i)=>({openPortBtnDisplay:s,"d-none":i}),ht=(()=>{class s{constructor(){this.isTypeingCompleted=!1}onTypingCompletedAdd(){this.isTypeingCompleted=!0}static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275cmp=g({type:s,selectors:[["app-welcome-page"]],hostAttrs:["ngSkipHydration","true"],standalone:!0,features:[N],decls:29,vars:11,consts:[[1,"main-font","text-center","py-1","py-md-5"],[1,"container"],[1,"row"],[1,"col-md-12"],[1,"text-editor-wrap"],[1,"title-bar"],[1,"title"],[1,"terminal-height"],[1,"row","text-body"],[1,"col-12","col-md-4","d-none","d-md-block"],[1,"text-center"],["src","./assets/4275.jpg","alt","Ahmed Gomaa image",1,"w-100","rounded-2"],[1,"col-12","col-md-8","d-flex"],[1,"display-6"],["cursorChar","|",1,"text-white",3,"onCompleteEvent","strings","typeSpeed","loop","showCursor","startDelay","fadeOut","autoInsertCss"],[1,"typed-cursor"],[1,"d-flex","openPortBtn","justify-content-center","align-items-end",3,"ngClass"],["width","100","src","./assets/hand-drawn-arrow-1.png","alt","hand-drawn-arrow image"],["routerLink","home",1,"btn","fs-1","main-font"],[1,"ps-2","fa-solid","fa-ghost"],["routerLink","home",1,"btn","fs-5","position-absolute","bottom-0","end-0","m-2","d-flex","justify-content-center","align-items-center"],[1,"ms-2","fa-solid","fa-circle-right","fa-bounce"]],template:function(e,n){e&1&&(p(0,"section")(1,"h2",0),d(2,"Hello !"),c(),p(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"div",5)(8,"span",6),d(9,"Ahmed Gomaa.js \u2014 bash \u2014 80x"),p(10,"span",7),d(11,"10"),c()()(),p(12,"div",8)(13,"div",9)(14,"div",10),y(15,"img",11),c()(),p(16,"div",12)(17,"p",13)(18,"ngx-typed2",14),I("onCompleteEvent",function(){return n.onTypingCompletedAdd()}),c()(),p(19,"span",15),d(20,"|"),c()()()(),p(21,"div",16),y(22,"img",17),p(23,"button",18),d(24," Click Here "),y(25,"i",19),c()()()()(),p(26,"button",20),d(27," Skip Intro "),y(28,"i",21),c()()),e&2&&(v(18),h("strings",_(7,X))("typeSpeed",50)("loop",!1)("showCursor",!1)("startDelay",1500)("autoInsertCss",!0),v(3),h("ngClass",F(8,Z,n.isTypeingCompleted,!n.isTypeingCompleted)))},dependencies:[z,H,C,f,j],styles:["h2[_ngcontent-%COMP%]{opacity:0;font-size:70px;animation:_ngcontent-%COMP%_welcomeAnimate 1s forwards}@keyframes _ngcontent-%COMP%_welcomeAnimate{0%{opacity:0}to{opacity:1}}.text-editor-wrap[_ngcontent-%COMP%]{display:block;opacity:0;margin:auto;max-width:800px;border-radius:10px;clear:both;overflow:hidden;transform:translateY(20px);animation:_ngcontent-%COMP%_displayTerminal 1s 1s forwards}.title-bar[_ngcontent-%COMP%]{padding:5px 0;font-family:Lucida Grande,sans-serif;font-size:.75em;text-align:center;text-shadow:rgba(255,255,255,.8) 0px 1px 0px;background-color:#f8f8f8;background-image:-webkit-linear-gradient(top,#e8e8e8,#bcbbbc);background-image:-moz-linear-gradient(top,#e8e8e8,#bcbbbc);background-image:linear-gradient(top,#e8e8e8,#bcbbbc);box-shadow:inset #ffffffb3 0 1px 1px;border-bottom:#6a6a6a 1px solid}.text-body[_ngcontent-%COMP%]{min-height:250px;background-color:#000000d9;padding:20px 10px;color:#f0f0f0;text-shadow:#000 0px 1px 0px;font-family:Consolas,Courier New,Courier;font-size:1.3em;line-height:1.4em;font-weight:500;text-align:left;overflow:hidden}@keyframes _ngcontent-%COMP%_displayTerminal{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.openPortBtn[_ngcontent-%COMP%]{opacity:0}.openPortBtnDisplay[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_openPortBtn .5s forwards}@keyframes _ngcontent-%COMP%_openPortBtn{0%{opacity:0}to{opacity:1}}"]})}}return s})();export{ht as a};
