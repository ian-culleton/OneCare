if (self.CavalryLogger) { CavalryLogger.start_js(["lFQ+u"]); }

__d('SearchFunnelTypeaheadLogger',['csx','Arbiter','Banzai','DOM','Event','PageEvents','PageTransitions','SubscriptionsHandler','URI'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='search_funnel',j='search_end_to_end',k={focus:'entrant',render:'results_displayed',keydown:'interaction',select:'search'},l,m={init:function(n,o){if(!n||!o)return;this._isColdStart=true;this._sampleRates=o;this._core=n.getCore();this._data=n.getData();this._view=n.getView();this._handler=new (c('SubscriptionsHandler'))();this.log=this.log.bind(this);this.onKeydown=this.onKeydown.bind(this);this.onSelect=this.onSelect.bind(this);this.onTypeaheadImpression=this.onTypeaheadImpression.bind(this);this._transitionInProgress=true;this.onTypeaheadImpression();},onTypeaheadImpression:function(n){this._initTime=this._getInitTime();this.e2eMarkers=[];if(this._transitionInProgress&&c('DOM').scry(document.body,"._4d3w").length===0)this.log('impression',{funnel_path:c('URI').getNextURI().getPath()});this.reset();this._handler.addSubscriptions(this._core.subscribeOnce('focus',this.log),this._view.subscribeOnce('render',this.log),this._view.subscribeOnce('select',this.onSelect));c('Event').listen(this._core.getElement(),'keydown',this.onKeydown);c('PageTransitions').registerHandler(function(){this._transitionInProgress=true;}.bind(this));c('PageTransitions').registerCompletionCallback(this.onTypeaheadImpression);},onKeydown:function(event){if(!this._sawKeydown){this._sawKeydown=true;this.log('keydown',event);}},onSelect:function(event,n){n.funnel_data={selected_position:n.selected.globalIndex,selected_type:n.selected.type};if(n.selected.isNullState){n.funnel_data.interaction_type='null_state';}else if(n.selected.isSingleState){n.funnel_data.interaction_type='single_state';}else n.funnel_data.interaction_type='typed';this._endToEndPath=c('URI').getMostRecentURI().path;l=null;c('Arbiter').subscribe('BigPipe/init',function(event,o){if(!o.arbiter)return;var p={arbiter:o.arbiter,event:c('PageEvents').AJAXPIPE_ONLOAD,markers:this.e2eMarkers,init_time:this._initTime,from_path:this._endToEndPath};setTimeout(function(){this.setupE2EPerfLogging(p);}.bind(this),0);}.bind(this));this.log(event,n);},reset:function(){this._handler.release();this._handler.engage();this._sawKeydown=false;this._transitionInProgress=false;},log:function(n,o){if(k[n])n=k[n];this.e2eMarkers.push({event:n,time:String(Date.now()-this._initTime)});if(!this._sampleRates[n])return;o=o||{};o.funnel_data=o.funnel_data||{};o.funnel_data.sample_rate=this._sampleRates[n];o.funnel_data.current_event_time=Date.now();if(this._prevTime&&this._prevEvt){o.funnel_data.previous_event_time=this._prevTime;o.funnel_data.previous_event=this._prevEvt;}this._prevTime=o.funnel_data.current_event_time;this._prevEvt=n;c('Banzai').post(i,{funnel_data:o.funnel_data,path:o.funnel_path||c('PageTransitions').getMostRecentURI().path,stage:n},c('Banzai').VITAL);},setupE2EPerfLogging:function(n){return n.arbiter.subscribeOnce(n.event,function(o){if(l)return;l=true;n.markers.push({event:'end',time:String(Date.now()-n.init_time)});c('Banzai').post(j,{from_path:this._endToEndPath,to_path:c('URI').getNextURI().path,markers:n.markers,cold_start:this._isColdStart},c('Banzai').VITAL);this._isColdStart=false;}.bind(this));},_getInitTime:function(){if(window.ExitTime)return window.ExitTime;var n=window.performance||window.msPerformance;if(!n||!n.timing)return;return n.timing.navigationStart;}};f.exports=m;},null);
__d("XBusinessAssocStorageAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/business\/async\/assoc\/",{});},null);