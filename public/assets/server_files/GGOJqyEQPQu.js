if (self.CavalryLogger) { CavalryLogger.start_js(["ciO\/Z"]); }

__d('KeyboardShortcuts',['KeyEventController','Layer','ModalLayer'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k,l){'use strict';this.key=j;this.handler=k;this.filter=l;this.register();}h.prototype.register=function(){'use strict';this.token=c('KeyEventController').registerKey(this.key,this.handler,this.filter);};h.prototype.remove=function(){'use strict';this.token.remove();};var i={_tokens:[[]],register:function(j,k,l){l=l||{};var m=l.allowDefault?k:function(event,q){k.apply(this,arguments);event.prevent();},n=l.baseFilters||[c('KeyEventController').defaultFilter],o=function(event,q){for(var r=0,s=n.length;r<s;r++)if(!n[r](event,q))return false;return !l.filter||l.filter(event,q);},p=new h(j,m,o);if(!this._tokens.length)this._tokens.push([]);this._tokens[this._tokens.length-1].push(p);return p;},init:function(){c('Layer').subscribe('show',function(j,k){if(k.hasBehavior(c('ModalLayer')))this.pushLayer();}.bind(this));c('Layer').subscribe('hide',function(j,k){if(k.hasBehavior(c('ModalLayer')))this.popLayer();}.bind(this));},pushLayer:function(){var j=this._tokens[this._tokens.length-1];j&&j.forEach(function(k){k.remove();});this._tokens.push([]);},popLayer:function(){var j=this._tokens.length-1;if(j<0)return;var k=this._tokens[j];k.forEach(function(m){m.remove();});this._tokens.pop();var l=this._tokens[j-1];l&&l.forEach(function(m){m.register();});}};i.init();f.exports=i;},null);
__d('FeedBaseKeyboardController',['csx','AccessibilityLogger','Arbiter','AsyncDialog','AsyncRequest','Banzai','BanzaiODS','BanzaiNectar','CSS','DOM','DOMScroll','Event','Focus','KeyboardShortcuts','LikeConfirmer','NavigationMessage','Parent','ReactComposerEvents','ReactComposerIDGenerator','Run','Scroll','SubscriptionsHandler','UITinyViewportAction','Vector','ViewportBounds','emptyFunction','ge','getActiveElement','isAsyncScrollQuery','isElementNode','throttle'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=0;function j(){i=c('UITinyViewportAction').isTiny()?0:c('ViewportBounds').getTop();}function k(l){'use strict';this.root=l;this.init();}k.prototype.getStories=function(){'use strict';};k.prototype.getParentStory=function(l){'use strict';};k.prototype.isStory=function(l){'use strict';};k.prototype.isHoldoutStory=function(l){'use strict';};k.prototype.getHeadline=function(l){'use strict';};k.prototype.getPreviousStory=function(l){'use strict';};k.prototype.getNextStory=function(l){'use strict';};k.prototype.setSelected=function(l,m){'use strict';};k.prototype.clickLike=function(){'use strict';};k.prototype.clickComment=function(){'use strict';};k.prototype.clickShare=function(){'use strict';};k.prototype.clickSeeMore=function(){'use strict';};k.prototype.clickLeft=function(){'use strict';};k.prototype.clickRight=function(){'use strict';};k.prototype.openAttachment=function(){'use strict';};k.prototype.focusComposer=function(){'use strict';var l=c('ge')('pagelet_composer');if(!l)l=c('ge')('pagelet_group_composer');if(l){var m=c('DOM').scry(l,'textarea')[0];if(m){c('Focus').set(m);c('DOMScroll').scrollToTop(true);}else{var n=c('DOM').scry(l,"div._36bx")[0],o=n&&n.id;if(c('ReactComposerIDGenerator').isComposerID(o)){c('Arbiter').inform(c('ReactComposerEvents').ACTIVATE_ATTACHMENT+n.id);c('DOMScroll').scrollToTop(true);}}}};k.prototype.getScrollOffset=function(){'use strict';return 10+(this.scrollOffset||0);};k.prototype.getAnimationLength=function(l){'use strict';return Math.min(Math.abs(c('Vector').getElementPosition(l).y-c('ViewportBounds').getTop()-c('Scroll').getTop(document.body)),400);};k.prototype.findTop=function(){'use strict';var l=this.getStories();for(var m=0;m<l.length;m++)if(c('Vector').getElementPosition(l[m]).y>c('Vector').getScrollPosition().y)return l[m];};k.prototype.onLeave=function(){'use strict';this.subscriptions&&this.subscriptions.release();};k.prototype.getHelpDialogRequest=function(){'use strict';if(!this.dialogRequest){this.dialogRequest=new (c('AsyncRequest'))('/ajax/keyboard_shortcuts');this.dialogRequest.setReadOnly(true);}else if(this.dialogRequest.transport)return null;return this.dialogRequest;};k.prototype.init=function(){'use strict';c('Run').onLeave(this.onLeave.bind(this));this.subscriptions=new (c('SubscriptionsHandler'))();this.subscriptions.addSubscriptions(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,this.onLeave.bind(this)),c('KeyboardShortcuts').register('j',this.vert.bind(this,1)),c('KeyboardShortcuts').register('k',this.vert.bind(this,-1)),c('KeyboardShortcuts').register('l',function(){var l=this.getParentStory(c('getActiveElement')());c('LikeConfirmer').like(function(){this.setSelected(l,false);this.clickLike();}.bind(this),c('getActiveElement')());}.bind(this),{filter:this.hasActiveStory.bind(this)}),c('KeyboardShortcuts').register('c',this.clickComment.bind(this),{filter:this.hasActiveStory.bind(this)}),c('KeyboardShortcuts').register('o',this.openAttachment.bind(this),{filter:this.hasActiveStory.bind(this)}),c('KeyboardShortcuts').register('p',this.focusComposer.bind(this)),c('KeyboardShortcuts').register('s',this.clickShare.bind(this),{filter:this.hasActiveStory.bind(this)}),c('KeyboardShortcuts').register('SLASH',function(){var l=this.getHelpDialogRequest();if(l){l.setRelativeTo(c('getActiveElement')());c('AsyncDialog').send(l);}}.bind(this),{filter:function(event,l){return event.getModifiers().shift;}}),c('KeyboardShortcuts').register('RETURN',this.clickSeeMore.bind(this),{filter:this.hasExpandableStoryInFocus.bind(this)}),c('KeyboardShortcuts').register('LEFT',this.clickLeft.bind(this),{filter:this.hasActiveStory.bind(this)}),c('KeyboardShortcuts').register('RIGHT',this.clickRight.bind(this),{filter:this.hasActiveStory.bind(this)}),c('Event').listen(this.root,'focusin',function(event){var l=event.getTarget();if(!this.isStory(l)){var m=c('DOM').isNodeOfType(l,['object','embed','iframe']),n=this.getParentStory(l),o=this.selected;if(n&&!m&&o){this.setSelected(n,true);this.selected=n;}}}.bind(this)));};k.prototype.hasActiveStory=function(event,l){'use strict';var m=c('getActiveElement')();return !(m&&c('CSS').shown(m))||!!this.getParentStory(m);};k.prototype.hasExpandableStoryInFocus=function(event,l){'use strict';var m=c('getActiveElement')();return !!(m.getElementsByClassName('text_exposed_root').length&&!m.getElementsByClassName('text_exposed_root text_exposed').length);};k.prototype.clickElement=function(l){'use strict';if(!l)return;var m=void 0;for(var n=arguments.length,o=Array(n>1?n-1:0),p=1;p<n;p++)o[p-1]=arguments[p];for(var q=0,r=o.length;q<r;q++){m=c('DOM').scry(l,o[q])[0];if(m&&c('CSS').shown(m)){m.click();return;}}};k.prototype.click=function(){'use strict';for(var l=arguments.length,m=Array(l),n=0;n<l;n++)m[n]=arguments[n];this.clickElement.apply(this,[this.selected].concat(m));};k.prototype.$FeedBaseKeyboardController1=function(){'use strict';if(!this.$FeedBaseKeyboardController2){this.scrollOffset=0;var l=c('ge')('pagelet_feed_switcher_root');if(l)this.scrollOffset+=l.getBoundingClientRect().height;this.subscriptions.addSubscriptions(c('Event').listen(document,'scroll',function(){if(this.selected&&!this.scrolling)this.setSelected(null,false);}.bind(this)));this.$FeedBaseKeyboardController2=true;}};k.prototype.$FeedBaseKeyboardController3=function(){'use strict';if(!this.$FeedBaseKeyboardController4){j();this.subscriptions.addSubscriptions(c('Event').listen(window,'resize',c('throttle')(j)));this.$FeedBaseKeyboardController4=true;}};k.prototype.vert=function(l){'use strict';this.$FeedBaseKeyboardController1();var m,n;if(this.selected){if(c('Banzai').isEnabled('kbshortcuts_feed')){n=l>0?'kbshortcuts.scroll_down':'kbshortcuts.scroll_up';c('BanzaiODS').bumpEntityKey('kbshortcuts_feed',n);c('BanzaiNectar').log('feed_scroll',n,{});}c('AccessibilityLogger').logJKKey();if(this.selected.id=='pagelet_composer'){m=l>0?this.getStories()[0]:null;if(this.isHoldoutStory(m))m=this.getPreviousStory(m);}else if(l===0){m=this.selected;}else m=l>0?this.getNextStory(this.selected):this.getPreviousStory(this.selected)||c('ge')('pagelet_composer');if(!m){return;}else if(!c('isElementNode')(m)){c('CSS').removeClass(this.selected,'selectedStorySimple');this.selected=m;return this.vert(l);}}if(!m||c('Parent').byClass(m,'hidden_elem')||!c('DOM').contains(document,m)){m=this.findTop();if(m&&l<0)m=this.getPreviousStory(m);if(this.isHoldoutStory(m))m=this.getPreviousStory(m);}if(!m)return;this.anim&&this.anim.stop();var o=Date.now()-(this.lastScroll||0)>30,p=c('emptyFunction');if(l!==0)p=this.setFocused.bind(this,m);if(c('isAsyncScrollQuery')()){o=false;p();p=c('emptyFunction');}this.scrolling=true;this.scrollingTimer&&clearTimeout(this.scrollingTimer);this.$FeedBaseKeyboardController3();this.anim=c('DOMScroll').scrollTo(m,o?this.getAnimationLength(m):0,false,c('Vector').getViewportDimensions().y-i-this.getScrollOffset(),0,function(){this.scrollingTimer=setTimeout(function(){this.scrolling=false;}.bind(this),300);var q=c('Vector').getScrollPosition();p();if(q.distanceTo(c('Vector').getScrollPosition())!==0)c('DOMScroll').scrollTo(q,0);}.bind(this));this.setSelected(m,true);this.lastScroll=Date.now();};k.prototype.setTabindexOnStory=function(l,m){'use strict';if(this.isStory(l))l.tabIndex=m;};k.prototype.setFocused=function(l){'use strict';if(this.isStory(l))c('Focus').setWithoutOutline(l);};f.exports=k;},null);
__d("XFeedSeeFirstStoryController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/feed\/control\/see_first\/story\/",{});},null);
__d('SeeFirstStoryLogger',['AsyncRequest','XFeedSeeFirstStoryController'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(){var i=c('XFeedSeeFirstStoryController').getURIBuilder().getURI();new (c('AsyncRequest'))(i).send();};f.exports={log:h};},null);
__d('AsyncLayout',['AjaxPipeRequest','Arbiter','AsyncRequest','AsyncResponse','CSS','DOM','HTML','NavigationMessage','PageTransitionsRegistrar','URI','$','emptyFunction','ge','goURI','requireWeak'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h;c('requireWeak')('PageTransitions',function(j){h=j;});function i(j){'use strict';this.canvasID=j;if(c('ge')('rightCol'))this.auxiliaryID='rightCol';if(c('ge')('headerArea'))this.headerID='headerArea';if(c('ge')('toolbarContainer'))this.toolbarID='toolbarContainer';this.waitingForAux=false;c('PageTransitionsRegistrar').registerHandler(this.catchPageTransition.bind(this));this.subscription=c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,this.onNavigate.bind(this));c('Arbiter').inform('AsyncLayout/initialized',null,c('Arbiter').BEHAVIOR_STATE);}i.prototype.catchPageTransition=function(j){'use strict';this.subscription.unsubscribe();return false;};i.prototype.getCanvasID=function(j){'use strict';return j.sidecol?'contentCol':'contentArea';};i.prototype.onNavigate=function(j,k){'use strict';var l=k.useAjaxPipe;k=k.params;if(k.endpoint){if(this.request){this.request.setFinallyHandler(c('emptyFunction'));this.request.abort();}if(this.sideRequest)this.sideRequest.abort();if(l){this.request=new (c('AjaxPipeRequest'))().setURI(k.endpoint).setData(k).setCanvasId(this.getCanvasID(k)).setFinallyHandler(this.finallyHandler.bind(this)).setErrorHandler(this.errorHandler.bind(this)).setFirstResponseCallback(this.firstResponseCallback.bind(this)).send();}else{k.handled=true;this.waitingForAux=k.sidecol;var m=!!k.iframe,n=new (c('AsyncRequest'))().setOption('useIframeTransport',m).setURI(new (c('URI'))(k.endpoint)).setReadOnly(true).setMethod('GET').setData(k).setHandler(this.onResponse.bind(this)).setErrorHandler(this.errorHandler.bind(this)).setFinallyHandler(this.finallyHandler.bind(this));this.request=n;n.send();}}};i.prototype.onSideResponse=function(j){'use strict';var k=j.getPayload();if(k&&this.auxiliaryID)this.receivedAux(k);};i.prototype.receivedAux=function(j){'use strict';!this.waitingForAux;this.waitingForAux=false;c('DOM').setContent(c('$')(this.auxiliaryID),c('HTML')(j));};i.prototype.onResponse=function(j){'use strict';var k=j.getPayload();if(k.redirect){c('goURI')(k.redirect);}else{var l=k.html||k;c('DOM').setContent(c('$')(this.canvasID),c('HTML')(l));if(k.side_html&&this.auxiliaryID)this.receivedAux(k.side_html);if(this.headerID&&!k.keep_header){var m=c('$')(this.headerID);c('DOM').setContent(m,c('HTML')(k.header_html||''));c('CSS').conditionShow(m,k.header_html);}if(k.toolbar_html&&this.toolbarID)c('DOM').setContent(c('$')(this.toolbarID),c('HTML')(k.toolbar_html));if(k.js)new Function(k.js)();c('CSS').conditionClass('contentCol','hasRightCol',this.auxiliaryID&&!k.noRightSide);var n=c('ge')('rightCol');if(n&&k.noRightSide)c('DOM').empty(n);}var o=j.getRequest().getData();c('Arbiter').inform(c('NavigationMessage').NAVIGATION_COMPLETED,o.key);};i.prototype.errorHandler=function(j){'use strict';c('AsyncResponse').verboseErrorHandler(j);c('Arbiter').inform(c('NavigationMessage').NAVIGATION_FAILED);this.request=null;};i.prototype.firstResponseCallback=function(j){'use strict';window.scrollTo(0,0);c('Arbiter').inform(c('NavigationMessage').NAVIGATION_FIRST_RESPONSE);};i.prototype.finallyHandler=function(j){'use strict';this.request=null;if(h)h.transitionComplete(true);c('Arbiter').inform(c('NavigationMessage').NAVIGATION_COMPLETED);};f.exports=i;},null);
__d('AbstractDockingElement',['Arbiter','Event','Run','SubscriptionsHandler','onEnclosingPageletDestroy','queryThenMutateDOM','removeFromArray'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[],i=null;function j(){c('queryThenMutateDOM')(function(){return h.forEach(function(m){return m.queryDOM();});},function(){return h.forEach(function(m){return m.updateWithCache();});},'AbstractDockingElement');}function k(){if(!i){i=new (c('SubscriptionsHandler'))();i.addSubscriptions(c('Event').listen(window,'scroll',j),c('Event').listen(window,'resize',j),c('Run').onLeave(function(){while(h.length)l(h[0]);}));i=i;}return i;}function l(m){try{m.onPageletDestroyed&&c('Arbiter').unsubscribe(m.onPageletDestroyed);}catch(n){}finally{m.onPageletDestroyed=null;}if(!i||h.indexOf(m)===-1)return;c('removeFromArray')(h,m);if(h.length)return;i.release();i=null;m.onDestroy();}f.exports={register:function(m,n,o,p){var q=k(),r={onDestroy:p,onPageletDestroyed:q.addSubscriptions(c('onEnclosingPageletDestroy')(m,function(){l(r);})),queryDOM:n,updateWithCache:o};h.push(r);}};},null);
__d('DirectionalDockingElement',['AbstractDockingElement','ArbiterMixin','DOM','DOMDimensions','Scroll','Style','UITinyViewportAction','UserAgent','ViewportBounds','getElementPosition','mixin'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=true,k=false,l='unfixed',m='fixed_top',n='fixed_middle',o=c('UserAgent').isBrowser('Safari');h=babelHelpers.inherits(p,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function p(q){'use strict';i.constructor.call(this);c('AbstractDockingElement').register(q,this.$DirectionalDockingElement15.bind(this),this.$DirectionalDockingElement16.bind(this),this.$DirectionalDockingElement17.bind(this));this.$DirectionalDockingElement1=null;this.$DirectionalDockingElement12=q;this.$DirectionalDockingElement8=0;this.$DirectionalDockingElement11=null;this.$DirectionalDockingElement14=c('ViewportBounds').getTop();this.$DirectionalDockingElement7=m;c('Style').set(this.$DirectionalDockingElement12,'width',c('DOMDimensions').getElementDimensions(this.$DirectionalDockingElement12).width+'px');this.$DirectionalDockingElement9=c('DOM').create('div');c('Style').set(this.$DirectionalDockingElement9,'position','relative');c('DOM').replace(this.$DirectionalDockingElement12,this.$DirectionalDockingElement9);c('DOM').appendContent(this.$DirectionalDockingElement9,this.$DirectionalDockingElement12);this.update();}p.prototype.$DirectionalDockingElement17=function(){'use strict';if(this.$DirectionalDockingElement9&&this.$DirectionalDockingElement9.parentNode){c('DOM').replace(this.$DirectionalDockingElement9,this.$DirectionalDockingElement12);this.$DirectionalDockingElement9=null;}};p.prototype.$DirectionalDockingElement15=function(){'use strict';var q=-c('getElementPosition')(this.$DirectionalDockingElement9).y;if(q!==this.$DirectionalDockingElement13){this.$DirectionalDockingElement18=q>this.$DirectionalDockingElement13?k:j;this.$DirectionalDockingElement13=q;}this.$DirectionalDockingElement5=c('DOMDimensions').getElementDimensions(this.$DirectionalDockingElement12);this.$DirectionalDockingElement6=c('Scroll').getTop(document.body)+document.documentElement.clientHeight>document.documentElement.scrollHeight;if(o)this.$DirectionalDockingElement11=c('getElementPosition')(this.$DirectionalDockingElement9);};p.prototype.$DirectionalDockingElement19=function(q,r,s){'use strict';var t={};if(r!==this.$DirectionalDockingElement3){t.top=r+'px';this.$DirectionalDockingElement3=r;}if(q!==this.$DirectionalDockingElement2){t.position=q;this.$DirectionalDockingElement2=q;}if(o)if(s!==this.$DirectionalDockingElement1){t.left=typeof s==='number'?s+'px':'auto';this.$DirectionalDockingElement1=s;}c('Style').apply(this.$DirectionalDockingElement12,t);};p.prototype.$DirectionalDockingElement20=function(){'use strict';this.$DirectionalDockingElement7=m;this.$DirectionalDockingElement19('fixed',this.$DirectionalDockingElement14,this.$DirectionalDockingElement11?this.$DirectionalDockingElement11.x:null);};p.prototype.$DirectionalDockingElement21=function(){'use strict';this.$DirectionalDockingElement7=n;this.$DirectionalDockingElement19('fixed',this.$DirectionalDockingElement8,this.$DirectionalDockingElement11?this.$DirectionalDockingElement11.x:null);};p.prototype.$DirectionalDockingElement22=function(){'use strict';this.$DirectionalDockingElement7=l;this.$DirectionalDockingElement19('absolute',this.$DirectionalDockingElement4,null);};p.prototype.$DirectionalDockingElement16=function(){'use strict';var q=this.$DirectionalDockingElement5.height;if(q!==this.$DirectionalDockingElement10){c('Style').set(this.$DirectionalDockingElement9,'height',q+'px');this.$DirectionalDockingElement10=q;this.inform('changedheight');}if(this.$DirectionalDockingElement7===m){this.$DirectionalDockingElement4=this.$DirectionalDockingElement13+this.$DirectionalDockingElement14;}else if(this.$DirectionalDockingElement7===n)this.$DirectionalDockingElement4=this.$DirectionalDockingElement13+this.$DirectionalDockingElement8;if(this.$DirectionalDockingElement6)return;if(this.$DirectionalDockingElement13+this.$DirectionalDockingElement14<=0||c('UITinyViewportAction').isTiny()){this.$DirectionalDockingElement4=0;this.$DirectionalDockingElement22();return;}if(this.$DirectionalDockingElement18===k&&this.$DirectionalDockingElement13+this.$DirectionalDockingElement8>=this.$DirectionalDockingElement4){this.$DirectionalDockingElement21();}else if(this.$DirectionalDockingElement18===j&&this.$DirectionalDockingElement13+this.$DirectionalDockingElement14<=this.$DirectionalDockingElement4){this.$DirectionalDockingElement20();}else this.$DirectionalDockingElement22();};p.prototype.update=function(){'use strict';this.$DirectionalDockingElement15();this.$DirectionalDockingElement16();};p.prototype.setOffset=function(q){'use strict';this.$DirectionalDockingElement8=q;this.update();return this;};f.exports=p;},null);
__d('DockingElement',['AbstractDockingElement','ArbiterMixin','CSS','DOM','DOMDimensions','Style','UserAgent','UITinyViewportAction','getElementPosition','mixin'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('UserAgent').isBrowser('Safari');h=babelHelpers.inherits(k,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function k(l){'use strict';i.constructor.call(this);c('AbstractDockingElement').register(l,this.getRect.bind(this),this.updateWithCache.bind(this),this.$DockingElement12.bind(this));this.$DockingElement11=l;this.$DockingElement7=0;this.update();}k.prototype.$DockingElement12=function(){'use strict';if(this.$DockingElement8&&this.$DockingElement8.parentNode){c('DOM').remove(this.$DockingElement8);this.$DockingElement8=null;}};k.prototype.getRect=function(){'use strict';var l=this.$DockingElement6?this.getPlaceholder():this.$DockingElement11;this.$DockingElement10=c('getElementPosition')(l);this.$DockingElement4=c('DOMDimensions').getElementDimensions(l);};k.prototype.updateWithCache=function(){'use strict';var l=this.$DockingElement7,m=this.getPlaceholder();if(!c('UITinyViewportAction').isTiny()&&this.$DockingElement10.y<=l){if(!this.$DockingElement6&&this.$DockingElement11.parentNode){if(!this.$DockingElement5){c('DOM').insertAfter(this.$DockingElement11,m);this.$DockingElement5=true;}c('CSS').addClass(this.$DockingElement11,'fixed_elem');c('CSS').show(m);this.$DockingElement6=true;}var n;if(this.$DockingElement3!==l){n={};n.top=l+'px';this.$DockingElement3=l;}var o=this.$DockingElement4.width;if(o!==this.$DockingElement2){n=n||{};n.width=o+'px';this.$DockingElement2=o;}if(j){var p=this.$DockingElement10.x;if(p!==this.$DockingElement1){n=n||{};n.left=p+'px';this.$DockingElement1=p;}}n&&c('Style').apply(this.$DockingElement11,n);var q=this.$DockingElement4.height;if(q!==this.$DockingElement9){c('Style').set(m,'height',q+'px');this.$DockingElement9=q;this.inform('changedheight');}}else if(this.$DockingElement6){c('Style').apply(this.$DockingElement11,{left:'',top:'',width:''});c('CSS').removeClass(this.$DockingElement11,'fixed_elem');c('CSS').hide(m);this.$DockingElement6=false;this.$DockingElement1=null;this.$DockingElement2=null;this.$DockingElement3=null;}};k.prototype.update=function(){'use strict';this.getRect();this.updateWithCache();};k.prototype.getPlaceholder=function(){'use strict';if(!this.$DockingElement8)this.$DockingElement8=c('DOM').create('div');return this.$DockingElement8;};k.prototype.setOffset=function(l){'use strict';this.$DockingElement7=l;this.update();return this;};f.exports=k;},null);
__d('StickyRHC',['csx','$','Arbiter','DirectionalDockingElement','DockingElement','DOMDimensions','DOMQuery','Event','Run','SubscriptionsHandler','ViewportBounds','ge','getElementPosition','getViewportDimensions','removeFromArray','throttle'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=35,j=[],k;function l(p,q){if(!q||!q.dom_id){j.forEach(m);return;}var r=c('$')(q.dom_id);for(var s=0;s<j.length;s++)if(c('DOMQuery').contains(j[s].getRoot(),r)){m(j[s]);return;}}function m(p){var q=p.getRoot(),r=p.updateOffset.bind(p),s=c('DOMQuery').scry(q,'img.img');s.forEach(function(t){if(t.complete||t.getAttribute('height')||typeof t.naturalHeight!=='undefined'&&t.naturalHeight!==0)return;var u=function(){r();v.remove();w.remove();x.remove();},v=c('Event').listen(t,'load',u),w=c('Event').listen(t,'error',u),x=c('Event').listen(t,'abort',u);});r();}function n(){j.forEach(function(p){p.updateOffset();});}function o(p,q){'use strict';this.$StickyRHC1=p;this.$StickyRHC2=q?new (c('DirectionalDockingElement'))(p):new (c('DockingElement'))(p);this.$StickyRHC3=0;this.$StickyRHC2.subscribe('changedheight',this.updateOffset.bind(this));this.updateOffset();m(this);if(!j.length){k=new (c('SubscriptionsHandler'))();k.addSubscriptions(c('Arbiter').subscribe('header_loaded',n),c('Arbiter').subscribe('netego_loaded',l),c('Arbiter').subscribe('pagelet_trending_tags_and_topics_displayed',n),c('Arbiter').subscribe('browse_top_filters_full_width_displayed',n),c('Arbiter').subscribe('takeover_survey_closed',n),c('Event').listen(window,'resize',c('throttle')(n)));}c('Run').onLeave(function(){return this.destroy();}.bind(this));j.push(this);}o.getInstances=function(){'use strict';return j;};o.prototype.getRoot=function(){'use strict';return this.$StickyRHC1;};o.prototype.destroy=function(){'use strict';this.$StickyRHC2=null;c('removeFromArray')(j,this);if(!j.length){k.release();k=null;}};o.prototype.updateOffset=function(){'use strict';var p=o.getNewOffset(this.$StickyRHC1,this.$StickyRHC4,this.$StickyRHC3);this.$StickyRHC2.setOffset(p+this.$StickyRHC3);};o.getNewOffset=function(p,q,r){'use strict';var s=c('DOMQuery').scry(p,"._4-u2"),t=c('DOMQuery').scry(p,"._4-u3"),u=c('DOMQuery').scry(p,'.uiHeader'),v=c('DOMQuery').scry(p,'.ego_unit'),w=c('ge')('pagelet_feed_switcher'),x=0;if(w){var y=c('DOMQuery').scry(w,"._381j");if(y.length>0)x=y[0].offsetHeight;}var z=[].concat(s,t,u,v),aa=[];z.forEach(function(ka){aa.push(c('getElementPosition')(ka).y);});aa.sort(function(ka,la){return ka-la;});var ba=c('getElementPosition')(p).y,ca=c('DOMDimensions').getElementDimensions(p).height;ca+=r;var da=c('ViewportBounds').getTop(),ea=c('getViewportDimensions')().height-da;ea-=i;if(typeof q==='undefined'){var fa=c('ge')('pageFooter');q=fa?c('DOMDimensions').getElementDimensions(fa).height:0;}ea-=q;var ga=ea-ca;if(ca<ea){ga=da;}else for(var ha=0,ia=aa.length;ha<ia;ha++){var ja=aa[ha]-ba;if(ca-ja<ea){ga=da-ja;break;}}return ga+x;};o.prototype.setOffset=function(p){'use strict';this.$StickyRHC3=p;this.updateOffset();};o.prototype.getOffset=function(p){'use strict';return this.$StickyRHC3;};f.exports=o;},null);
__d('FbFeedKeyboardController',['csx','cx','CSS','DOM','DOMQuery','FbFeedHighlight','FeedBaseKeyboardController','Focus','JSXDOM','Parent','ge','getActiveElement','isElementNode'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();function l(o){if(o.previousElementSibling)return o.previousElementSibling;o=o.previousSibling;while(o&&!c('isElementNode')(o))o=o.previousSibling;return o||null;}function m(o){if(o.nextElementSibling)return o.nextElementSibling;o=o.nextSibling;while(o&&!c('isElementNode')(o))o=o.nextSibling;return o||null;}j=babelHelpers.inherits(n,c('FeedBaseKeyboardController'));k=j&&j.prototype;n.prototype.getStories=function(o){'use strict';return c('DOMQuery').scry(o||this.root,"._5jmm");};n.prototype.isHoldoutStory=function(o){'use strict';return !!o&&c('CSS').hasClass(o,'holdoutAdStory');};n.prototype.isRelevantStory=function(o){'use strict';return c('isElementNode')(o)&&!this.isHoldoutStory(o);};n.prototype.isStory=function(o){'use strict';return c('CSS').matchesSelector(o,"._5jmm");};n.prototype.clickLike=function(){'use strict';var o=this.$FbFeedKeyboardController1();this.clickElement(o,'.UFILikeLink');if(o!==this.selected)return null;var p=this.getParentStory(c('getActiveElement')());if(p){var q=c('DOMQuery').scry(p,'.UFILikeLink');for(var r=0;r<q.length;r++)if(!c('CSS').hasClass(q[r],'accessible_elem'))c('Focus').setWithoutOutline(q[r]);}};n.prototype.clickComment=function(){'use strict';this.clickElement(this.$FbFeedKeyboardController1(),'.comment_link');};n.prototype.clickShare=function(){'use strict';this.click('.share_action_link');};n.prototype.clickSeeMore=function(){'use strict';this.click('.see_more_link');};n.prototype.clickLeft=function(){'use strict';this.click("._1mri");};n.prototype.clickRight=function(){'use strict';this.click("._2fu-");};n.prototype.openAttachment=function(){'use strict';this.click("._5dec","a._52c6","._4-eo",'.uiVideoThumb');};n.prototype.getHeadline=function(o){'use strict';return c('DOMQuery').scry(o,"h5._5pbw")[0];};n.prototype.$FbFeedKeyboardController2=function(o){'use strict';var p=c('Parent').bySelector(o,"._5pcb"),q=c('ge')('pagelet_soft_permalink_posts');return !!(p||q&&c('DOM').contains(q,o));};n.prototype.getPreviousSibling=function(o){'use strict';var p=l(o);if(p&&this.getParentStory(p))return p;p=null;if(this.$FbFeedKeyboardController2(o)){var q=this.getStories(this.root),r=q.indexOf(o);while(r>-1){if(r===0){p=c('ge')('pagelet_composer');p=p&&c('Parent').bySelector(p,"._5jmm");}else if(r>0){p=q[r-1];if(p.offsetHeight>0)break;}r--;}}return p||this.selected;};n.prototype.getPreviousStory=function(o){'use strict';var p=this.getPreviousSibling(o);while(p&&!this.isStory(p))p=this.getPreviousSibling(p);return p;};n.prototype.getParentStory=function(o){'use strict';return c('Parent').bySelector(o,"._5jmm");};n.prototype.getNextSibling=function(o){'use strict';var p=m(o);if(p&&this.getParentStory(p))return p;p=null;if(this.$FbFeedKeyboardController2(o)){var q=this.getStories(this.root),r=q.indexOf(o);if(r>-1){p=q[++r];while(p&&p.offsetHeight===0)p=q[++r];}}else if(c('ge')('pagelet_composer',o))p=c('DOMQuery').scry(document,"div._5pcb ._5jmm")[0];return p||this.selected;};n.prototype.getNextStory=function(o){'use strict';var p=this.getNextSibling(o);while(p&&!this.isStory(p))p=this.getNextSibling(p);return p;};n.prototype.setSelected=function(o,p){'use strict';if(o){var q="_5qdu",r=c('DOMQuery').scry(o,"._5qdu");if(!r.length&&p)c('DOM').prependContent(o,c('JSXDOM').div({className:q}));}if(p){this.selected&&this.setTabindexOnStory(this.selected,'-1');this.selected&&c('CSS').removeClass(this.selected,"_5qdv");this.selected=o;o&&this.setTabindexOnStory(o,'0');o&&c('CSS').addClass(o,"_5qdv");c('FbFeedHighlight').highlightSingle(o);}};n.prototype.$FbFeedKeyboardController1=function(){'use strict';var o=c('DOM').scry(this.selected,"._1qch");if(o.length>0)return c('DOM').scry(this.selected,"._3el7")[0];return this.selected;};n.init=function(o){'use strict';new n(o);};function n(){'use strict';j.apply(this,arguments);}f.exports=n;},null);