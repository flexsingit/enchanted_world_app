try{var dv_win = window._dv_win || window.parent._dv_win; dv_win['dvCallback_1521486415752125']($dv,window,'6ad545bc4f094c60ab9691d286ca4db9','tps10262.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=window.location.protocol+'//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}var newAvoValues = {cto: 5000};if ($dv.tags[$uid].AVO == undefined) $dv.tags[$uid].AVO = {};for (var id in newAvoValues){if (newAvoValues[id] != undefined){$dv.tags[$uid].AVO[id]= newAvoValues[id];}};$dv.tags[$uid].AVO.rpv = 1;$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_LatencyTemp', function () {try {var beforeVisitCall = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if (dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}var latency = 0;if (beforeVisitCall != '' && templateStartTime != '') {latency = templateStartTime - beforeVisitCall;}if(latency > 1000 && latency < 90000) {$dv.registerEventCall($uid, { dvp_ltncy: latency });}} catch (e) {};});$dv.ViewabilityScriptVersion = 697;$dv.tags[$uid].set({"cvmSettings":{"adArea":"100","duration":"5000","measureType":"Consecutive","focus":"1"}});$dv.tags[$uid].dc = $dv.tags[$uid].dc || [];$dv.tags[$uid].dc.push({"rq":{"av":100,"ic":1,"fc":1,"adc":5000},"rp":{"pt":"iscvmvms","pr":"CustomViewabilityViewable","eid":6}});$dv.pubSub.subscribe('CustomViewabilityViewable', '6ad545bc4f094c60ab9691d286ca4db9', 'RTN_CustomViewabilityViewable', function(){ var tagServiceUrl = decodeURIComponent('[PROTOCOL]//bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&ActivityID=696622&x_DVPlacementID=[PLC]&x_DVSiteID=[SID]&x_DVCampaignID=[CMP]&X_DVUserID=[DVP_USR_ID]&ns=1'); tagServiceUrl = $dv.resolveMacros(tagServiceUrl, $dv.tags['6ad545bc4f094c60ab9691d286ca4db9']);  $dv.domUtilities.addImage(tagServiceUrl, $dv.tags['6ad545bc4f094c60ab9691d286ca4db9'].tagElement.parentElement,1);});$dv.pubSub.subscribe('IABMeasuredImpression', '6ad545bc4f094c60ab9691d286ca4db9', 'RTN_IABMeasuredImpression', function(){ var tagServiceUrl = decodeURIComponent('[PROTOCOL]//bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&ActivityID=726651&x_DVPlacementID=[PLC]&x_DVSiteID=[SID]&x_DVCampaignID=[CMP]&X_DVUserID=[DVP_USR_ID]&ns=1'); tagServiceUrl = $dv.resolveMacros(tagServiceUrl, $dv.tags['6ad545bc4f094c60ab9691d286ca4db9']);  $dv.domUtilities.addImage(tagServiceUrl, $dv.tags['6ad545bc4f094c60ab9691d286ca4db9'].tagElement.parentElement,1);});$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForMA', function() {var tag = $dv.tags[$uid];var targetWin = tag.t2tIframeWindow;if(!targetWin){var t2tIframeId = tag.t2tIframeId;if(t2tIframeId){var iFrame = window.parent.getElementById(t2tIframeId);if(iFrame){targetWin = iFrame.contentWindow;}}}if(targetWin){var dateNow = 0;if(Date.now){dateNow = Date.now();} else {dateNow = +new Date();}var message = {action : 'notifyMultipleAdsAdEntityInformationReady',adEntityInformation : {comparisonItems : [{name : 'cmp', value : 12102076, bitFlag : 1, maxTimeMS : 5000, eventToFire : 'CampaignMultipleAd'},{name : 'clcd', value : 589953, bitFlag : 2, maxTimeMS : 5000},{name : 'plmt', value : 12126367, bitFlag : 4, maxTimeMS : 5000},{name : 'mp', value : 7047, bitFlag : 8, maxTimeMS : 5000},{name : 'adv', value : 592075, bitFlag : 16, maxTimeMS : 5000, eventToFire : 'LobMultipleAd'},{name : 'cmpMP', value : 3630622849329, bitFlag : 32, maxTimeMS : 5000}],dvTagCreatedTS : tag.t2tIframeCreationTime,visitJSPostMessageTS : dateNow}};var stringifyFunc = null;if(window.JSON){stringifyFunc = window.JSON.stringify;} else {if(window.parent && window.parent.JSON){stringifyFunc = window.parent.JSON.stringify;}}if(!stringifyFunc){return;}var msgString = stringifyFunc(message);targetWin.postMessage(msgString, '*');setTimeout(function(){targetWin.postMessage(msgString, '*');}, 100);setTimeout(function(){targetWin.postMessage(msgString, '*');}, 500);}});    	$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForBSBAConsolidation', function() {
            'use strict';
            var stringifyFunc = null;
			if(window.JSON){
				stringifyFunc = window.JSON.stringify;
			} else {
				if(window.parent && window.parent.JSON){
					stringifyFunc = window.parent.JSON.stringify;
				}
			}
			if(!stringifyFunc){
				return;
			}
            var targetWin;
            var tag = $dv.tags[$uid];
            var bsmsg = {
                action : 'notifyBrandShieldAdEntityInformation',
                bsAdEntityInformation : {
                    comparisonItems : [{name : 'cmp', value : 12102076},{name : 'plmt', value : 12126367}], verboseReporting : false  }
            };
            var bsstring = stringifyFunc(bsmsg);

            var findAndSend = function(){
                if(!targetWin) {
                    if (tag) {
                        targetWin = tag.t2tIframeWindow;
                        if (!targetWin) {
                            var t2tIframeId = tag.t2tIframeId;
                            //get t2t window and post the AdEntities to it.
                            if (t2tIframeId) {
                                var iFrame = window.parent.getElementById(t2tIframeId);
                                if (iFrame) {
                                    targetWin = iFrame.contentWindow;
                                }
                            }
                        }
                    }
                }

                if(targetWin){
                    targetWin.postMessage(bsstring, '*');
                }
            };

            findAndSend();
            setTimeout(findAndSend, 100);
            setTimeout(findAndSend, 500);
        });$dv.tags[$uid].set({"billable":{adArea: 100, duration: 100}});$dv.tags[$uid].dc = $dv.tags[$uid].dc || [];$dv.tags[$uid].dc.push({"rq":{"av":98,"ic":true,"fc":true,"adc":100,"mla":true,"ldav":0},"rp":{"mt":"isgmmims","pt":"isgmpims","mr":"GroupMMeasuredImpression","pr":"GroupMPassedImpression","eid":17,"bl":true}});$dv.tags[$uid].dc.push({"rq":{"av":98,"ic":true,"fc":true,"adc":1000,"mla":false,"ldav":50},"rp":{"mt":"isgmv4mims","pt":"isgmv4dpims","eid":17,"bl":true}});
(function() {var dvObj = $dv;var impId = '6ad545bc4f094c60ab9691d286ca4db9';var dvParams = {'useDvp': 'false','logRate': '100'};dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",impId,"BHL", function() {function f(){var c="true"===dvParams.useDvp?"dvp_":"",d="";this.exec=function(){var a={},b;a:{try{b=history.length;break a}catch(e){d+="|"+e.message}b=void 0}b&&(a[c+"brh"]=b);c&&d&&(a.dvp_brherr=d);try{a&&dvObj.registerEventCall(impId,a)}catch(e){}}}try{(new f).exec()}catch(c){};});})();(function() {var dvObj = $dv;var impId = '6ad545bc4f094c60ab9691d286ca4db9';dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",impId,"CTITS",function(){var a=-1;try{top.frames&&(a=top.frames.length),dvObj.registerEventCall(impId,{fcifrms:a})}catch(b){}});})();var dvObj = $dv;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("6ad545bc4f094c60ab9691d286ca4db9",false);$dv.pubSub.subscribe('ImpressionServed', '6ad545bc4f094c60ab9691d286ca4db9', 'wpdc', function() {try { var result = 0; var cur = window; var tryNum = 0; try {    while (!result && tryNum < 10) {        if (cur.maple != undefined) {            result = 1;            break;        }        if (cur == cur.parent)            break;        tryNum++;        cur = cur.parent;    } } catch (er) {}	if (result) {		$dv.registerEventCall('6ad545bc4f094c60ab9691d286ca4db9', { dvp_maple: result});	}} catch (e) {}});$dv.tags[$uid].dc = $dv.tags[$uid].dc || [];$dv.tags[$uid].dc.push({"rq":{"av":98,"ic":true,"fc":true,"adc":1000,"mla":false,"ldav":30},"rp":{"mt":"ismms","pt":"ispmxpms"}});$dv.pubSub.subscribe('ImpressionServed', $uid, 'OperaVendorChecker', function(){var eventData = {};var mraidObject = $dv.getMraid();var execMrSaf = function(func) {		var rv;		try {			if (typeof func === 'function') {rv = func.call(mraidObject)}		}catch (e) {			eventData = {'dvp_operr': 1}						}		return rv;};try{	if(mraidObject)	{		var vendor = execMrSaf(mraidObject.getVendor);		var vendor_version = execMrSaf(mraidObject.getVendorVersion);		if(vendor != null && vendor_version != null)		{			eventData = {				dvp_sspv: vendor,				dvp_sspvv: vendor_version			};		}	}}catch (e){	eventData = {		dvp_operr: 2	};}$dv.registerEventCall($uid, eventData);});var dvObj=$dv;var impId='6ad545bc4f094c60ab9691d286ca4db9';var htmlRate=20;var runTag=-1;var lab=0;var sources=33554432;var adid='2745819506393591915';var urlTypeId=1033;var ddt=1;var date='20180319';dvObj.pubSub.subscribe('ImpressionServed',impId,'AttributeCollection',function(){
try{try{(function(){var e=window;var t=0;try{while(e.parent&&e!=e.parent&&e.parent.document){e=e.parent;if(t++>10)break}}catch(r){}var n=0;function o(e,t){if(t)n=(n|1<<e)>>>0}var i=e.document;o(0,e==window.top);o(1,e.playerInstance&&i.querySelector('script[src*="ads-player.com"]'));o(2,e.xy_checksum&&e.place_player&&e.jwplayer);o(3,i.title=="");o(4,e.xy_checksum&&e.place_player);o(5,e.xy_checksum&&e.place_player&&e.logjwonready&&e.logContentPauseRequested);o(6,i.querySelector('script[src*="/coinhive"]')||e.Miner||e.CoinHive||function(){try{return e.localStorage.getItem("coinhive")}catch(t){return false}}());o(7,e.vdApp&&e.vdApp.createPlayer);o(8,i.querySelector("body>div[id=px1]")&&i.querySelector("body>div[id=px4]")&&i.querySelector("body>span[id=px2]")&&i.querySelector(i,"body>span[id=px3]"));o(9,function(){return i.title==""?(a=i.getElementById("player"),a&&a.data&&a.data.indexOf("jwplayer")>-1&&a.getAttribute("style")=="visibility: visible;"):false}());o(10,i.documentElement.hasAttribute("webdriver")||(null!=e.domAutomation||(null!=e.domAutomationController||null!=e._WEBDRIVER_ELEM_CACHE)));o(11,null!=e._phantom||null!=e.callPhantom);o(12,i.querySelector('script[src*="sitewebvideo.com"]'));o(13,e.CustomWLAdServer&&e.CustomWLAdServer.passbackCallbacks);o(14,function(){return i.title==""?(a=i.querySelector("head>meta"),b=i.styleSheets,a&&a.outerHTML=='<meta http-equiv="refresh" content="45" ;="">'&&b&&b.length&&b[0].rules.length==7&&b[0].rules[6].selectorText=="div.cc"):false}());o(15,e.InitPage&&e.cef&&e.InitAd);o(16,i.querySelector('body>div[class="z-z-z"]'));o(17,e.clickplayer!=null&&e.checkRdy2!=null);o(18,function(){return e==e.top&&i.title==""?(a=i.querySelector("body>#player"),a!=null&&(a.querySelector('div[id*="opti-ad"]')!=null||a.querySelector('iframe[src="about:blank"]'))!=null):false}());o(19,function(){return e==e.top&&i.title==""&&e.InitAdPlayer?(a=i.querySelector('body>div[id="kt_player"]'),a!=null&&a.querySelector('div[class="flash-blocker"]')!=null):false}());o(20,i.querySelector('script[src*="videoadtest.com"]'));o(21,e.navigator&&e.navigator.geolocation&&e.navigator.geolocation.getCurrentPosition_&&e.navigator.geolocation.watchPosition_&&e.navigator.geolocation.clearWatch_);o(22,e.instance&&e.inject&&i.querySelector('path[id="cp-search-0"]'));o(23,function(){return a=i.querySelector('p[class="footerCopyright"]'),a&&a.textContent.match(/ MangaLife 2016/)}());o(24,e.DbcbdConfig);o(25,e.innerWidth>e.screen.width);var c={dvp_acv:n,dvp_acifd:t};var l=new Date;if(e==window.top){c.dvp_accl=function(){try{return i.cookie.length}catch(e){return null}}();c.dvp_acso=(e.FB?1:0)+(e.twttr?2:0)+(e.outbrain?4:0)+(e._taboola?8:0);c.dvp_mref=function(){return refm=i.referrer.match(/https?:\/\/(www\.)?([^\/]*)/),refm!=null&&refm.length==3?refm[2]:""}();c.dvp_dnsl=e.performance&&e.performance.timing&&e.performance.timing.domainLookupEnd>0?e.performance.timing.domainLookupEnd-e.performance.timing.domainLookupStart:-1;var d=i.head;if(d){if(d.children)c.dvp_acc=d.children.length;if(d.outerHTML)c.dvp_acl=d.outerHTML.length}if(i.querySelectorAll){c.dvp_acd=i.querySelectorAll("*").length}if(e.external){c.dvp_acwe=Object.keys(e.external).length}var s=e.innerWidth>e.innerHeight;var u=e.screen[s?"height":"width"];if(i.body.offsetWidth>u){c.dvp_vpos=i.body.offsetWidth+"-"+u+"-"+(s?1:0)}if((navigator.maxTouchPoints||0)==0&&"ontouchstart"in window==false){if(i.visibilityState=="prerender"){c.dvp_acmns=2}else if(e.outerWidth*e.outerHeight<25e3){c.dvp_acmns=3}else{var p=adid%100<10;var v;var m={};var f=[];var h=24;var y=0;var g=0;var w=0;var _=[];var S={width:e.outerWidth,height:e.outerHeight,maxX:0,maxY:0,overflow:0};var x=false;var q=i.hasFocus?typeof i.hasFocus.prototype=="object":false;e.addEventListener&&e.addEventListener("mousemove",function(t){y++;if(!q&&i.hasFocus()==false&&i.hidden)g++;var r=t.screenX-e.screenX;var a=t.screenY-e.screenY;if(x==false){if(S.width!=e.outerWidth||S.height!=e.outerHeight){x=true;k()}else if(f.length<50){S.maxX=r>S.maxX?r:S.maxX;S.maxY=a>S.maxY?a:S.maxY;if(r<0||r>e.outerWidth||a<0||a>e.outerHeight){S.overflow=1}else{var n=Math.floor(r/(S.width/h));var o=Math.floor(a/(S.height/h));var c=o*h+n+1;if(p){if(!m[c]){m[c]=true;f.push(c)}}else{if(c!=v){f.push(c);v=c}}}}}});e.addEventListener&&e.addEventListener("click",function(t){w++;var r=t.screenX-e.screenX;var a=t.screenY-e.screenY;var n=Math.floor(r/(S.width/h));var o=Math.floor(a/(S.height/h));var i=o*h+n+1;_.push(i)});e.addEventListener&&e.addEventListener("beforeunload",k);var E=e.setTimeout(k,5e4);function k(){dvObj.registerEventCall(impId,{dvp_mslots:f.join(","),dvp_acmmt:new Date-l,dvp_acmec:y,dvp_mvpw:S.width,dvp_mvph:S.height,dvp_mmx:S.maxX,dvp_mmy:S.maxY,dvp_movr:S.overflow,dvp_mecnf:g,dvp_uslot:p,dvp_mclk:w,dvp_mclkl:_.join(","),dvp_mfoco:q?1:0,dvp_mvpsc:x?1:0});e.removeEventListener&&e.removeEventListener("beforeunload",k);e.clearTimeout(E)}}}else{c.dvp_acmns=1}}var L=Object.prototype.toString;var C=Function.prototype.toString;var j=/^\[object .+?Constructor\]$/;var H=RegExp("^"+String(L).replace(/[.*+?^${}()|[\]\/\\]/g,"\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function T(e){var t=typeof e;return t=="function"?H.test(C.call(e)):e&&t=="object"&&j.test(L.call(e))||false}var A=window;var I=0;var M=false;var W=false;try{while(A.parent&&A!=A.parent&&A.parent.document){W|=!T(e.document.hasFocus);A=A.parent;M|=T(window.document.hasFocus)!=T(A.document.hasFocus);if(I++>10)break}}catch(r){}var F=e==window.top?!T(A.document.hasFocus):false;var X=0;function P(e,t){if(t)X=(X|1<<e)>>>0}o(26,M);P(0,F);P(1,W);P(2,M);c.dvp_inv=X;dvObj.registerEventCall(impId,c);if((new Date).getTime()%100<htmlRate&&(lab==1||runTag==1&&(urlTypeId&2)==0&&(sources==0||(sources&n)>0))){function R(t,r){var a=new XMLHttpRequest;a.open("PUT","https://d23xwq4myz19mk.cloudfront.net/htmldata/20180315/"+n+"/"+date+"/"+e.location.hostname+"/"+adid+"_"+impId+"_"+r+".html",true);a.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");a.setRequestHeader("x-amz-acl","public-read");a.send(t.document.documentElement.outerHTML)}R(e,"top");if(e!=window){R(window,"iframe_tag")}if(e!=window.parent){R(window.parent,"iframe_tag_parent")}if(e!=window.parent.parent){R(window.parent.parent,"iframe_tag_parent_parent")}}})()}catch(e){dvObj.registerEventCall(impId,{dvp_ace:String(e).substring(0,150)})}}catch(e){}
});$dv.CommonData.deviceType = 1;$dv.CommonData.detectedDeliveryType = 1;$dv.tags[$uid].deviceType = 1;$dv.tags[$uid].detectedDeliveryType = 1;try{$dv.pubSub.publish('ImpressionServed', $uid);$dv.pubSub.publish('ImpressionServed', $frmId);}catch(e){}