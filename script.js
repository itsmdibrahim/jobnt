//<![CDATA[
//--------------------------------------------------------
// Mixed Scripts for theme customization 
//--------------------------------------------------------
function omGS() {
var lazyloadads=false;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&false===lazyloadads||0!=document.body.scrollTop&&false===lazyloadads)&&(!function( ){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle .js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyloadads=true)},true); $(document).ready(function(){$('#jBcP1254').click(function() {var _jB1254 = $('<input>').val(window.location.href).appendTo('body').select()[0];_jB1254.setSelectionRange(0, 99999), document.execCommand('copy'), $(_jB1254).remove(), alert('Post Link Copied to clipboard');});$("#company-logo .link-list a").each(function(){$('<img loading="lazy" class="comPnaiusLogo">').attr({src:$(this).attr("href"),alt:$(this).text(),title:$(this).text(),width:"100px",height:"auto"}).appendTo("#comPanies")}),$(".mySompanySecTitle").text($("#company-logo .widget-title .title").text()),$(document).ready(function(){tns({container:".comPanies",items:1,gutter:0,slideBy:1,lazyload:!0,mouseDrag:!0,swipeAngle:!1,speed:400,controlsPosition:"bottom",navPosition:"bottom",autoplay:!0,autoplayButtonOutput:!1,responsive:{0:{items:2},768:{items:2},950:{items:3},1050:{items:5}}})})});$(document).ready(function() {var Xoslink = $('.xos').data('link');$('.xos').hide(); $('.job-post-page-apply-btn-a').attr('href', Xoslink);function updateCompanyAndDeadline() {return new Promise(function(resolve) {$('.post-body b:contains("company/")').each((function(){const t=$(this).text().split("/")[1]?.trim();t&&($(".job-post-page-header .meta-company, .jobpost-company").text(t).parent().addClass("show"),$(this).hide())})),$('.post-body b:contains("deadline/")').each((function(){const t=$(this).text().split("/")[1]?.trim();t&&($(".jbsTs_deadline").text(t).parent().addClass("show"),$(this).hide())})),$('.post-body b:contains("location/")').each((function(){const t=$(this).text().split("location/")[1]?.trim();t&&($(".jobpost-location").text(t).parent().addClass("show"),$(this).hide())})),$('.post-body b:contains("salary/")').each((function(){const t=$(this).text().split("salary/")[1]?.trim();t&&($(".jobpost-salary").text(t).parent().addClass("show"),$(this).hide())})),$('.post-body b:contains("experience/")').each((function(){const t=$(this).text().split("/")[1]?.trim();t&&($(".jobpost-experience").text(t).parent().addClass("show"),$(this).hide())})),$('.post-body b:contains("jobtype/")').each((function(){const t=$(this).text().split("/")[1]?.trim();t&&($(".jobpost-jobtype").text(t).parent().addClass("show"),$(this).hide())})),$('.post-body b:contains("duration/")').each((function(){const t=$(this).text().split("/")[1]?.trim();t&&($(".jobpost-duration").text(t).parent().addClass("show"),$(this).hide())})); resolve(); });}updateCompanyAndDeadline().then(function(){function hideIfEmpty(className){$(className).each(function(){var jobposT_content=$(this).find('.jobpost-company, .jobpost-salary, .jobpost-location, .jobpost-duration, .jobpost-experience, .jobpost-jobtype, .jobpost-deadline').text();if(!jobposT_content.trim()){$(this).hide()}})}['.jobpost-company-bxs', '.jobpost-salary-bxs', '.jobpost-location-bxs', '.jobpost-experience-bxs', '.jobpost-duration-bxs', '.jobpost-deadline-bxs', '.jobpost-jobtype-bxs'].forEach(selector => hideIfEmpty(selector));});$('.post-body').each(function() {$(this).find('img:first').remove();$(this).find('img').show();});});$(document).ready(function(){var s=new Date;$(".jbsTs_item-somoy").html();var i=new Date($(".jbsTs_deadline").html());i.getTime()<s.getTime()?$(".jbsTs_status").html('<span class="jbsTs_Expired mi-ripple mi-ripple-dark">Expired</span>'):i.getTime()-s.getTime()<=1728e5?$(".jbsTs_status").html('<span class="jbsTs_Epiring mi-ripple mi-ripple-dark">Expiring Soon</span>'):$(".jbsTs_status").html('<span class="jbsTs_Active mi-ripple mi-ripple-dark">Active</span>')});
//--------------------------------------------------------
// Jquery Time Ago Plugin 
//--------------------------------------------------------
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&"object"==typeof module.exports?t(require("jquery")):t(jQuery)}(function(h){h.timeago=function(t){return t instanceof Date?r(t):r("string"==typeof t?h.timeago.parse(t):"number"==typeof t?new Date(t):h.timeago.datetime(t))};var i=h.timeago;h.extend(h.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(n){if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var r=this.settings.strings,t=r.prefixAgo,e=r.suffixAgo;if(this.settings.allowFuture&&n<0&&(t=r.prefixFromNow,e=r.suffixFromNow),!this.settings.allowPast&&0<=n)return this.settings.strings.inPast;var i=Math.abs(n)/1e3,a=i/60,o=a/60,s=o/24,u=s/365;function m(t,e){var i=h.isFunction(t)?t(e,n):t,a=r.numbers&&r.numbers[e]||e;return i.replace(/%d/i,a)}var l=i<45&&m(r.seconds,Math.round(i))||i<90&&m(r.minute,1)||a<45&&m(r.minutes,Math.round(a))||a<90&&m(r.hour,1)||o<24&&m(r.hours,Math.round(o))||o<42&&m(r.day,1)||s<30&&m(r.days,Math.round(s))||s<45&&m(r.month,1)||s<365&&m(r.months,Math.round(s/30))||u<1.5&&m(r.year,1)||m(r.years,Math.round(u)),d=r.wordSeparator||"";return void 0===r.wordSeparator&&(d=" "),h.trim([t,l,e].join(d))},parse:function(t){var e=h.trim(t);return e=(e=(e=(e=(e=e.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")).replace(/([\+\-]\d\d)$/," $100"),new Date(e)},datetime:function(t){var e=i.isTime(t)?h(t).attr("datetime"):h(t).attr("title");return i.parse(e)},isTime:function(t){return"time"===h(t).get(0).tagName.toLowerCase()}});var a={init:function(){a.dispose.call(this);var t=h.proxy(n,this);t();var e=i.settings;0<e.refreshMillis&&(this._timeagoInterval=setInterval(t,e.refreshMillis))},update:function(t){var e=t instanceof Date?t:i.parse(t);h(this).data("timeago",{datetime:e}),i.settings.localeTitle&&h(this).attr("title",e.toLocaleString()),n.apply(this)},updateFromDOM:function(){h(this).data("timeago",{datetime:i.parse(i.isTime(this)?h(this).attr("datetime"):h(this).attr("title"))}),n.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};function n(){var t=i.settings;if(t.autoDispose&&!h.contains(document.documentElement,this))return h(this).timeago("dispose"),this;var e=function(t){if(!(t=h(t)).data("timeago")){t.data("timeago",{datetime:i.datetime(t)});var e=h.trim(t.text());i.settings.localeTitle?t.attr("title",t.data("timeago").datetime.toLocaleString()):!(0<e.length)||i.isTime(t)&&t.attr("title")||t.attr("title",e)}return t.data("timeago")}(this);return isNaN(e.datetime)||(0===t.cutoff||Math.abs(o(e.datetime))<t.cutoff?h(this).text(r(e.datetime)):0<h(this).attr("title").length&&h(this).text(h(this).attr("title"))),this}function r(t){return i.inWords(o(t))}function o(t){return(new Date).getTime()-t.getTime()}h.fn.timeago=function(t,e){var i=t?a[t]:a.init;if(!i)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){i.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")});

//--------------------------------------------------------
// A Premium and Custom Jquery Ripple Effect by Md. Ibahim 
//--------------------------------------------------------
function findFurthestPoint(t,e,n,i,o,h){const p=[Math.hypot(t-n,i-h),Math.hypot(t-(n+e),i-h),Math.hypot(t-n,i-(h+o)),Math.hypot(t-(n+e),i-(h+o))];return Math.max(...p)}$(document).ready((function(){$(document).on("pointerdown",".mi-ripple",(function(t){let e=this.getBoundingClientRect(),n=findFurthestPoint(t.clientX,this.offsetWidth,e.left,t.clientY,this.offsetHeight,e.top),i=document.createElement("span");i.classList.add("ripple"),i.style.left=t.clientX-e.left-n+"px",i.style.top=t.clientY-e.top-n+"px",i.style.width=i.style.height=2*n+"px",$(this).append(i)})),$(document).on("pointerup mouseleave dragleave touchmove touchend touchcancel",".mi-ripple",(function(){let t=$(this).find(".ripple");0!==t.length&&(t.css("opacity","0"),setTimeout((()=>{t.remove()}),300))}))}));

//--------------------------------------------------------
// Responsive Navigation Menu 
//--------------------------------------------------------
!function(a){a.fn.resnav=function(){return this.each(function(){var $t=a(this),b=$t.find('.LinkList ul > li').children('a'),c=b.length;for(var i=0;i<c;i++){var d=b.eq(i),h=d.text();if(h.charAt(0)!=='_'){var e=b.eq(i+1),j=e.text();if(j.charAt(0)==='_'){var m=d.parent();m.append('<ul class="sub-menu m-sub" role="menubar"/>');}}if(h.charAt(0)==='_'){d.text(h.replace('_',''));d.parent().appendTo(m.children('.sub-menu'));}}for(var i=0;i<c;i++){var f=b.eq(i),k=f.text();if(k.charAt(0)!=='_'){var g=b.eq(i+1),l=g.text();if(l.charAt(0)==='_'){var n=f.parent();n.append('<ul class="sub-menu2 m-sub" role="menubar"/>');}}if(k.charAt(0)==='_'){f.text(k.replace('_',''));f.parent().appendTo(n.children('.sub-menu2'));}}$t.find('.LinkList ul li ul').parent('li').addClass('has-sub');});}}(jQuery);

//--------------------------------------------------------
// Lazypics system for content
//--------------------------------------------------------
!function(n){n.fn.lazypics=function(){return this.each(function(){var o,t=n(this),a=n(window),e=t.attr("data-lazy-src"),h="w"+Math.round(t.width()+t.width()/10)+"-h"+Math.round(t.height()+t.height()/10)+"-p-k-no-nu";noThumbnail="undefined"!=typeof noThumbnail?noThumbnail:"//4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png",e.match("resources.blogblog.com")&&(e=noThumbnail),o=e.match("/s72-c")?e.replace("/s72-c","/"+h):e.match("/w72-h")?e.replace("/w72-h72-p-k-no-nu","/"+h):e.match("=w72-h")?e.replace("=w72-h72-p-k-no-nu","="+h):e,t.is(":hidden")||a.on("load resize scroll",function n(){if(a.scrollTop()+a.height()>=t.offset().top){a.off("load resize scroll",n);var e=new Image;e.onload=function(){t.attr("style","background-image:url("+this.src+")").addClass("lazypicked")},e.src=o}}).trigger("scroll")})}}(jQuery);

//--------------------------------------------------------
// Javascript Native Cookie 
// https://github.com/js-cookie/js-cookie 
//--------------------------------------------------------
!function(e){var n;if("function"==typeof define&&define.amd)define(["jquery"],e);else if("object"==typeof exports){try{n=require("jquery")}catch(e){}module.exports=e(n)}else{var o=window.Cookies,r=window.Cookies=e(window.jQuery);r.noConflict=function(){return window.Cookies=o,r}}}(function(e){var n=/\+/g;function o(e){return u.raw?e:encodeURIComponent(e)}function r(e){return o(u.json?JSON.stringify(e):String(e))}function t(e,o){var r=u.raw?e:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),u.json?JSON.parse(e):e}catch(e){}}(e);return c(o)?o(r):r}function i(){for(var e,n,o=0,r={};o<arguments.length;o++)for(e in n=arguments[o])r[e]=n[e];return r}function c(e){return"[object Function]"===Object.prototype.toString.call(e)}var u=function(e,n,f){if(arguments.length>1&&!c(n)){if("number"==typeof(f=i(u.defaults,f)).expires){var s=f.expires,a=f.expires=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*s)}return document.cookie=[o(e),"=",r(n),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var d,p=e?void 0:{},l=document.cookie?document.cookie.split("; "):[],m=0,v=l.length;m<v;m++){var g=l[m].split("="),w=(d=g.shift(),u.raw?d:decodeURIComponent(d)),j=g.join("=");if(e===w){p=t(j,n);break}e||void 0===(j=t(j))||(p[w]=j)}return p};return u.get=u.set=u,u.defaults={},u.remove=function(e,n){return u(e,"",i(n,{expires:-1})),!u(e)},e&&(e.cookie=u,e.removeCookie=u.remove),u});

//--------------------------------------------------------
// Theme Main Scripts
//--------------------------------------------------------
const tsCode=(e,t,a)=>{const parts=e.split("$");for(const part of parts){const[key,value]=part.split("=").map(item=>item.trim());if(key===t){const match=value.match(/[^{\}]+(?=})/g);return match?match[0].trim():null}}return!1};
const msgError = () => '<span class="error-msg"><b>Opps:</b>&nbsp;Something went wrong</span>';
const beforeLoader = () => '<div class="loader">Loading...</div>';
const getFeedUrl = (e, t, a, s) => a === "recent" ? `/feeds/posts/default?alt=json&max-results=${t}` : (e === "comments" ? `/feeds/comments/default?alt=json&max-results=${t}` : `/feeds/posts/default/-/${a}?alt=json&max-results=${t}`);
const getPostLink = (e, t) => e[t].link.find(link => link.rel === 'alternate').href;
const getPostTitle = (e, t, a) => e[t].title.$t || bringit.noTitle;
const getPostTag = (e, t, a) => e[t].category ? `<span class="item-ctg">${e[t].category[0].term}</span>` : "";
const getPostTagThree = (e, t, a) => e[t].category ? `${e[t].category[0].term}` : "";
const getPostTagTwo = (e, t, a) => {const category = e[t].category;return category ? `<span class="item-ctg">${category.length > 1 ? category[1].term : category[0].term}</span>` : "";};
const getPostAuthor = (e, t, a, s) => bringit.postAuthor ? `<span class="author-name">${e[t].author[0].name.$t}</span>` : "";
function getPostDate(e, t, a, s, r, i) {monthNames = "undefined" != typeof monthNames ? monthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], dateFormat = "undefined" != typeof dateFormat ? dateFormat : "{m} {d}, {y}";var o = e[t].published.$t,n = o.substring(0, 4),l = o.substring(5, 7),c = o.substring(8, 10),d = dateFormat.replace("{m}", monthNames[parseInt(l, 10) - 1]).replace("{d}", c).replace("{y}", n);return i = bringit.postAuthor && "" != bringit.postDateLabel ? '<span class="sp">' + bringit.postDateLabel + "</span>" : "", [1 == bringit.postDate ? '<span class="item-somoy mi">' + i + '<time class="published" datetime="' + o + '">' + d + "</time></span>" : "", 1 == bringit.postDate ? '<span class="item-somoy mi"><time class="published" datetime="' + o + '">' + d + "</time></span>" : ""]}
function getPostMeta(e, t, a, s, r) {return [1 == bringit.postAuthor || 1 == bringit.postDate ? '<div class="item-details">' + e + t[0] + "</div>" : "", 1 == bringit.postDate ? '<div class="item-details">' + t[1] + "</div>" : ""]}
function getFirstImage(e, t) {var a = $("<div>").html(e).find("img:first").attr("src"),s = a.lastIndexOf("/") || 0,r = a.lastIndexOf("/", s - 1) || 0,i = a.substring(0, r),o = a.substring(r, s),n = a.substring(s);return (o.match(/\/s[0-9]+/g) || o.match(/\/w[0-9]+/g) || "/d" == o) && (o = "/w72-h72-p-k-no-nu"), i + o + n}
const getPostImage=(data,index)=>{const content=data[index].content.$t,thumbnailUrl=data[index].media$thumbnail?data[index].media$thumbnail.url:"https://resources.blogblog.com/img/blank.gif";return content.includes(content.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))>-1?content.includes("<img")>-1?content.indexOf(content.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))<content.indexOf("<img")?thumbnailUrl.replace("img.youtube.com","i.ytimg.com").replace("/default.","/maxresdefault."):getFirstImage(content):thumbnailUrl.replace("img.youtube.com","i.ytimg.com").replace("/default.","/maxresdefault."):content.includes("<img")>-1?getFirstImage(content):"https://resources.blogblog.com/img/blank.gif"};
const getPostImageType = (url) => url.match("i.ytimg.com") ? "is-video" : "is-image";
const getPostSummary = (data, index, maxLength) => {const content = data[index].content.$t;return content ? '<span class="item-snippets excerpt">' + $("<div>").html(content).text().trim().substr(0, maxLength) + "…</span>" : "";};
const getPostId = (data, index) => {const postIdPattern = /post-(\d+)/;const match = data[index].id.$t.match(postIdPattern);return match ? match[1] : null;};
const getPostInfo = (data, index, keyword) => {const postContent = $("<div>").html(data[index].content.$t);const element = postContent.find(`b:contains("${keyword}/")`).text().split(`${keyword}/`)[1]?.trim();return element && element.length > 0 ? element : "";};
const getPostLocation = (data, index) => getPostInfo(data, index, "location");
const getPostDuration = (data, index) => getPostInfo(data, index, "duration");
const getPostSalary = (data, index) => getPostInfo(data, index, "salary");
const getPostDeadline = (data, index) => getPostInfo(data, index, "deadline");
const getPostCompany = (data, index) => getPostInfo(data, index, "company");
const getPostExperience = (data, index) => getPostInfo(data, index, "experience");

function getAjax(e, t, a, s) {
	switch (t) {
		case "job1":
		case "job2":
		case "blog":
		case "related":
			0 == s && (s = "geterror404");
			var r = getFeedUrl(t, a, s);
			$.ajax({
				url: r,
				type: "GET",
				dataType: "json",
				cache: !0,
				beforeSend: function(a) {
					switch (t) {
						case "job1":
						case "job2":
						case "blog":
						case "related":
							e.html(beforeLoader()).parent().addClass("type-" + t);
							break;
						case "colLeft":
						case "colRight":
							e.html(beforeLoader())
					}
				},
				success: function(a) {
					var r = "";
					switch (t) {
						case "job1":
							r = '<div class="pesso" style="max-width: 1150px!important; margin: 0px auto!important;"><div class="job1Block" style=" margin: 20px auto 100px!important; display: grid; gap: 0.5rem; grid-template-columns: repeat(auto-fit, minmax(322px, 1fr));">';
							break;
                        case "job2":
                            r = `<div class="misile"><ul class="control" id="job2-custom-control">
                                    <li class="prev">
                                        &#8249;
                                    </li>
                                    <li class="next">
                                        &#8250;
                                    </li>
                                </ul>
                                <div class="job2-slider ${t}-items">`;
                            break;
                        case "blog":
                            r = `<ul class="wwcontrol" id="wwcustom-control"><li class="wwprev">
                                        &#8249;
                                    </li>
                                    <li class="wwnext">
                                        &#8250;
                                    </li>
                                </ul><div class="blog-slider main-page-blog-posts-block ${t}-items">`;
                            break;
						case "related":
							r = '<div class="related-posts">'
					}
					var i = a.feed.entry;
					if (null != i)
						for (var o = 0, n = i; o < n.length; o++) {
							var l=n.length,c=getPostLink(n,o),d=getPostTitle(n,o),m=getPostTag(n,o),x=getPostTagThree(n,o),h=getPostAuthor(n,o),f=getPostDate(n,o,m),u=getPostImage(n,o),p=getPostImageType(u,o),g=getPostMeta(h,f),idS=getPostId(n,o),lcT=getPostLocation(n,o),duR=getPostDuration(n,o),slR=getPostSalary(n,o),cmP=getPostCompany(n,o),ddL=getPostDeadline(n,o),exP=getPostExperience(n,o),gFw=d.charAt(0),opoppopo=g[1];TimeAgo_date=new Date($(opoppopo).find("time.published").attr("datetime"));timeago=$.timeago(TimeAgo_date);let jbsTs_currentDate=new Date(),jbsTs_entryTime=new Date($(opoppopo).find("time.published").attr("datetime")),jbsTs_deadline=new Date(ddL);var opsae;jbsTs_deadline.getTime()<jbsTs_currentDate.getTime()?opsae='<span class="inline-block text-xs px-2 leading-tight py-0.5 bg-red-50 rounded-md text-red-600">Expired</span>':(jbsTs_deadline.getTime()-jbsTs_currentDate.getTime())<=2*24*60*60*1e3?opsae='<span class="inline-block text-xs px-2 leading-tight py-0.5 bg-yellow-50 rounded-md text-yellow-800">Expiring Soon</span>':opsae='<span class="inline-block text-xs px-2 leading-tight py-0.5 bg-green-50 rounded-md text-green-700">Active</span>';
								y = "";
							switch (t) {
                  case "job1":
            y += '<div class="job1 p-5 bg-white border rounded-md m-2 ' + t + '-item item-' + o + '"><div class="flex items-end"><div class="w-14 h-14 lg:w-12 lg:h-12 bg-center bg-no-repeat bg-cover rounded-md custom-lazy-image" data-lazy-src="' + u + '"></div><div class="mx-2"><a title="' + d + '" href="' + c + '" alt="' + d + '" class="text-xl text-gray-700 font-medium mb-1 leading-tight block">' + d + '</a><span class="inline-block text-xs px-3 leading-tight py-0.5 bg-blue-100 rounded-md text-blue-800"> '+ duR +' </span><span class="inline-block ml-1"> '+ opsae +' </span></div></div><div class="block mt-3"><div class="block job1cmP mt-3 mb-1 text-gray-600"><i class="fa-regular fa-briefcase mr-1"></i>'+ cmP +' <i class="fa-regular fa-location-dot ml-2 mr-1"></i>'+ lcT +' </div><div class="flex justify-between items-center text-gray-500"><p class="block my-2 font-semibold leading-tight"> '+ slR +' </p><span class="text-xs"><i class="fa-regular fa-clock mr-1"></i> '+ timeago +' </span></div></div></div>';
                   break;
                  case "blog":
            y += '<div class="main-page-blog-posts p-0 item-' + o + '""><div class="p-0 mx-2" style="border: 1px solid #eff1f5; border-radius: 6px;"><a class="cursor-pointer" title="' + d + '" href="' + c + '" alt="' + d + '"><div class="image-zoom2 rounded-t-md"><div class="my-rounded-zoom w-full h-48 rounded-t-md bg-cover bg-no-repeat bg-center custom-lazy-image" data-lazy-src="' + u + '"></div></div></a><div class="pt-1 px-3 pb-3"><span class="text-sm text-gray-700 block mt-1 inline-block"> '+ g[1] +' </span> • <span class="text-sm text-green-800 inline-block font-semibold mt-1"> '+ m  +' </span><a class="leading-tight text-xl cursor-pointer font-semibold my-2 text-black block" title="' + d + '" href="' + c + '" alt="' + d + '">' + d + '</a><p class="text-black leading-tight my-2">' + getPostSummary(n, o, 70) + '</p></div></div></div>';
                   break;
                  case "job2":
            y += '<div class="p-4 ' + t + '-item item-' + o + '"><div class="slider-job-card jobnt-job-post-body p-4 border bg-center bg-cover bg-no-repeat rounded-2xl bg-white"  data-id="'+ idS +'"><div class="flex items-center justify-between mb-3"><span class="flex items-center "><span class="block w-14 h-14 bg-center bg-no-repeat bg-cover rounded-2xl custom-lazy-image jobnt-pst-featured-img lazypicked" data-lazy-src="' + u + '"></span><span class="ml-2"><p class="block text-gray-900 font-semibold text-base leading-tight">'+ cmP +'</p><p class="block text-sm text-gray-500">'+ timeago +'</p></span></span><span class="ml-3"><button class="py-1 px-2 border border-gray-400 text-gray-400 rounded-xl pSils jobSav likeit"><i class="fa-regular fa-heart"></i></button></span></div><a class="block text-xl font-semibold text-gray-900 jobnt-post-header" title="' + d + '" href="' + c + '" data-href="' + c + '" data-libil="'+ x  +'">' + d + '</a><p class="block text-sm mt-2 mb-4 text-gray-500">' + getPostSummary(n, o, 120) + '</p><span class="py-1 px-4 rounded-full mr-1 my-1 inline-block border text-gray-500 text-sm cursor-pointer">'+ duR +'</span><span class="py-1 px-4 rounded-full mr-1 my-1 inline-block border text-gray-500 text-sm cursor-pointer">'+ m  +'</span>  <span class="py-1 px-4 rounded-full mr-1 my-1 inline-block border text-gray-500 text-sm cursor-pointer">'+ exP +'</span><div class="flex items-center justify-between mt-4 mb-3"><p class="block text-lg font-semibold text-gray-700">'+ slR +'</p><a class="py-2 px-5 rounded-full mr-1 inline-block font-semibold bg-blue-50 text-blue-600 hover:bg-blue-700 hover:text-white text-sm cursor-pointer transition duration-300" title="' + d + '" href="' + c + '">Apply</a></div></div></div>';
            break;
								case "related":
									y += '<div class="related-item item-' + o + '"><a title="' + d + '" class="item-image-wrap ' + p + '" href="' + c + '"><span class="item-thumb" data-lazy-src="' + u + '"></span></a><div class="item-header"><h2 class="item-title"><a href="' + c + '" title="' + d + '">' + d + "</a></h2>" + timeago + "</div></div>"
							}
							r += y
						} else switch (t) {
							case "msimple":
								r = '<div class="ul mega-items no-items">' + msgError() + "</div>";
								break;
							default:
								r = msgError()
						}
					switch (t) {
						case "msimple":
							r += "</div>", e.append(r).addClass("msimple"), e.find("a:first").attr("href", function(e, t) {
								switch (s) {
									case "recent":
										t = t.replace(t, "/search");
										break;
									default:
										t = t.replace(t, "/search/label/" + s)
								}
								return t
							});
							break;
case"blog":r+="</div>",e.html(r);var slider=tns({container:".blog-slider",items:1,gutter:20,lazyload:!0,slideBy:1,mouseDrag:!0,swipeAngle:!1,speed:400,controlsPosition:"bottom",navPosition:"bottom",autoplay:!0,autoplayButtonOutput:!1,controlsContainer:"#wwcustom-control",responsive:{0:{items:1},768:{items:2},950:{items:3},1050:{items:3}}});break;
case"job2":r+="</div>",e.html(r);var slider=tns({container:".job2-slider",items:1,gutter:20,slideBy:1,lazyload:!0,mouseDrag:!0,swipeAngle:!1,speed:400,controlsPosition:"bottom",navPosition:"bottom",autoplay:!0,autoplayButtonOutput:!1,controlsContainer:"#job2-custom-control",responsive:{0:{items:1},768:{items:1},950:{items:2},1050:{items:3}}});break;
						default:
							r += "</div>", e.html(r)
					}
					e.find("span.item-thumb, .custom-lazy-image").lazypics()
				},
				error: function() {
					switch (t) {
						case "msimple":
							e.append('<div class="ul mega-items no-items">' + msgError() + "</div>");
							break;
						default:
							e.html(msgError())
					}
				}
			})
	}
}

function ajaxBlock(e,t,a,s,r,i,o){if(r.match("getcontent")){if("job1"==t||"job2"==t||"job3"==t||"government"==t||"blog"==t||"job2"==t||"video"==t)return 0!=s&&(i="recent"==s?"/search":"/search/label/"+s,o=""!=viewAllText.trim()?viewAllText:bringit.viewAll,e.parent().find(".widget-title").append('<a href="'+i+'" class="more-content mi-ripple mi-ripple-rise mi-ripple-light shadow-material">Explore<i class="fa-solid fa-arrow-right ml-1" style="transform: rotate(-45deg)"></i></a>')),getAjax(e,t,a,s);e.html(msgError())}}const ajaxRelated = (e, t, a, s) => getAjax(e, t, a, s);function beautiAvatar(e){$(e).attr("src",function(e,t){return(t=(t=t.replace("//resources.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35","//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s39/avatar.jpg")).replace("/s35","/s39")})} fixedMenu = "undefined" == typeof fixedMenu || fixedMenu, viewAllText = "undefined" != typeof viewAllText ? viewAllText : bringit.viewAll, $("#jobnt-pro-main-nav").resnav(),$("#jobnt-pro-main-nav .widget").addClass("show-menu"), $(".wid-hdr a.more-content").each(function() {"" != viewAllText.trim() && $(this).text(viewAllText)}), $("#jobnt-pro-main-before-ad .widget").each(function() {var e = $(this);e.length && e.appendTo($("#before-ad"))}), $("#jobnt-pro-main-after-ad .widget").each(function() {var e = $(this);e.length && e.appendTo($("#after-ad"))}), $("#jobnt-pro-main-sidebar-ad .widget").each(function() {var e = $(this);e.length && e.appendTo($("#sidebar-ad"))}), $("#jobnt-pro-main-bottom-ad .widget").each(function() {var e = $(this);e.length && e.appendTo($("#bottom-ad"))}),$(".entry-share-links .window-ify,.jobnt-pro-share-links .window-ify").on("click",function(){var e=$(this),t=e.data("url"),a=e.data("width"),s=e.data("height"),r=window.screen.width,i=window.screen.height,o=Math.round(r/2-a/2),n=Math.round(i/2-s/2);window.open(t,"_blank","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width="+a+",height="+s+",left="+o+",top="+n).focus()}),$(".content-section .HTML .widget-content").each(function(e,t,a){var s=$(this),r=$(window),i=s.data("shortcode");null!=i&&(mtc=i.toLowerCase(),e=tsCode(i,"results"),t=tsCode(i,"label"),"colLeft"!=(a=tsCode(i,"type"))&&"colRight"!=a||s.parent().addClass("column-style type-"+a),r.on("resize scroll",function i(){r.scrollTop()+r.height()>=s.offset().top&&(r.off("resize scroll",i),ajaxBlock(s,a,e,t,mtc))}).trigger("scroll"))}),$(".jobnt-pro-widget-ready .HTML .widget-content").each(function(e,t,a,s){var r=$(this),i=$(window),o=r.data("shortcode");null!=o&&(e=o.toLowerCase(),t=tsCode(o,"results"),a=tsCode(o,"label"),s=tsCode(o,"type"),i.on("resize scroll",function o(){i.scrollTop()+i.height()>=r.offset().top&&(i.off("resize scroll",o),ajaxWidget(r,s,t,a,e))}).trigger("scroll"))}),$("#jobnt-pro-related-posts .HTML").each(function(e,t){var a=$(this).data("shortcode");null!=a&&$("#related-wrap").each(function(s,r){var i=$(this),o=$(window),n=i.find(".jobnt-pro-related-content"),title="From the same label",results=3;s=0!=results?results:3,0!=title&&i.find(".related-title .title").text(title),r=i.find(".related-tag").data("label"),o.on("resize scroll",function e(){o.scrollTop()+o.height()>=n.offset().top&&(o.off("resize scroll",e),ajaxRelated(n,"related",s,r))}).trigger("scroll")})});$(function() {$(".item-image-wrap .item-thumb,.author-avatar-wrap .author-avatar,.custom-lazy-image").lazypics(),$("#jobnt-pro-mobile-menu").each(function(){var e=$(this),t=$("#jobnt-pro-main-nav-menu").clone();t.attr("id","main-mobile-nav"),t.find(".mega-items").remove(),t.find(".mega-menu > a").each(function(e,t){var a=$(this),s=a.data("shortcode");null!=s&&(t="recent"==(e=tsCode(s.trim(),"label"))?"/search":"/search/label/"+e,a.attr("href",t))}),t.appendTo(e),$(".mobile-menu-toggle,.hide-jobnt-pro-mobile-menu,.overlay").on("click",function(){$("body").toggleClass("nav-active")}),$(".jobnt-pro-mobile-menu .has-sub").append('<div class="submenu-toggle mi-ripple mi-ripple-dark"/>'),$(".jobnt-pro-mobile-menu .mega-menu").find(".submenu-toggle").remove(),$(".jobnt-pro-mobile-menu ul li .submenu-toggle").on("click",function(e){$(this).parent().hasClass("has-sub")&&(e.preventDefault(),$(this).parent().hasClass("show")?$(this).parent().removeClass("show").find("> .m-sub").slideToggle(170):$(this).parent().addClass("show").children(".m-sub").slideToggle(170))})}), $(".mm-footer .mm-social").each(function(){var e=$(this);$("#topbar-social ul.social").clone().appendTo(e)}),$(".mm-footer .mm-menu").each(function(){var e=$(this);$("#topbar-menu ul.link-list").clone().appendTo(e)}),$(".header-inner").each(function(){var e=$(this);if(1==fixedMenu&&e.length>0){var t=$(document).scrollTop(),a=e.offset().top,s=e.height(),r=a+s+s;$(window).scroll(function(){var s=$(document).scrollTop();s>r?e.addClass("is-fixed"):(s<a||s<=1)&&e.removeClass("is-fixed"),s>t?e.removeClass("show"):e.addClass("show"),t=s})}}),$("#jobnt-cookie-consent").each(function(){var e=$(this),t=e.find(".widget.Text").data("shortcode");null!=t&&(ok=tsCode(t,"ok"),days=tsCode(t,"days"),0!=ok&&e.find("#jobnt-cookie-consent-accept").text(ok),0!=days?days=Number(days):days=7),e.length>0&&("1"!==$.cookie("jobnt_pro_cookie_ify_consent")&&(e.css("display","block"),setTimeout(function(){e.addClass("is-visible")},4000)),$("#jobnt-cookie-consent-accept").off("click").on("click",function(t){t.preventDefault(),t.stopPropagation(),$.cookie("jobnt_pro_cookie_ify_consent","1",{expires:days,path:"/"}),e.removeClass("is-visible"),setTimeout(function(){e.css("display","none")},500)}),cookieChoices={})})});






(function() {
    var encryptedScript = document.getElementById('encrypted-script');
    var requiredURL = "jobnt-tenolent.blogspot.com";
    if (!encryptedScript || !encryptedScript.innerHTML.includes(requiredURL)) {
        window.location.href = "https://tenolent.com";
    }
})();




//--------------------------------------------------------
// Ajax Load more functionality with updated value 
//--------------------------------------------------------
function updateSalaryValues(e){$(e).each(function(){var t=$(this),a=t.data("id");$.ajax({url:"/feeds/posts/default/"+a+"?alt=json",type:"get",dataType:"jsonp",success:function(a){const n=(a,n,d)=>{const l=$("<div>").html(a.entry.content.$t).find(`b:contains("${n}/")`).text().split(`${n}/`)[1]?.trim();l&&l.length>0&&t.find(`.${d}`).text(l)};n(a,"location","meta-location"),n(a,"salary","meta-price"),n(a,"company","meta-company"),n(a,"duration","meta-duration")}})})}updateSalaryValues(".post-shop-info"),$("#jobnt-pro-load-more-link").on("click",function(e){var t=$(this).data("load");t&&$.ajax({url:t,success:function(e){var t=$(e).find(".blog-posts");t.find(".index-post").addClass("post-animated post-fadeInUp"),$(".blog-posts").append(t.html()),updateSalaryValues(".blog-posts .post-shop-info");var a=$(e).find("#jobnt-pro-load-more-link").data("load");a?$("#jobnt-pro-load-more-link").data("load",a).show():($("#jobnt-pro-load-more-link").hide(),$("#blog-pager .no-more").addClass("show"))},beforeSend:function(){$("#blog-pager .loading").show()},complete:function(){$("#blog-pager .loading").hide(),$("time.timeago").timeago(),$(".index-post .item-image-wrap .item-thumb, .custom-lazy-image").lazypics(),fixedSidebarIfy("#main-wrapper")}}),e.preventDefault()});

//--------------------------------------------------------
// Search Num, Filter Label etc. 
//--------------------------------------------------------
var clonedButton = $('.post-job-btnpo').clone(); $('.clone-container').append(clonedButton);var _eKreplaced,_eKlabel;function extractKeyword(e){var l=e.split("?q=")[1];return l&&-1!==l.indexOf("+label:")?l.split("+label:")[0]:l}function extractLabel(e){var l=e.split("?q=")[1];return l&&-1!==l.indexOf("+label:")?l.split("+label:")[1]:null}$(function(){var e=window.location.href;_eKreplaced=extractKeyword(e).replace(/%20/g," "),_eKlabel=extractLabel(e)}); $.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=1000",type:"GET",dataType:"jsonp",success:function(e){var t,o=e.feed.openSearch$totalResults.$t;$(".total-jobpost-num").text(o);var s=(t=_eKlabel?e.feed.entry.filter(e=>e.content.$t.toLowerCase().includes(_eKreplaced.toLowerCase())&&e.category.some(e=>e.term.toLowerCase()===_eKlabel.toLowerCase())):e.feed.entry.filter(e=>e.content.$t.toLowerCase().includes(_eKreplaced.toLowerCase()))).length;$(".tlE").text(s)}}); $(document).ready(function(){$("#fsq_searchForm").submit(function(e){e.preventDefault();var a=$("#fsq_labelSelect").val(),l=$("#fsq_searchInput").val(),r="";r="All"===a?"/search?q="+encodeURIComponent(l):"/search?q="+encodeURIComponent(l)+"+label:"+a,window.location.href=r})});

//--------------------------------------------------------
// Testimonial Section 
//--------------------------------------------------------
$(document).ready(function(){$('#jobnt-testimonials .widget.Image').each(function(){var t=$(this),i=t.find('.widget-title .title').html(),e=t.find('.custom-image img').attr('src'),n=t.find('.widget-content .image-caption.excerpt').html(),a=t.find('.custom-image a').attr('href'),d=$('<div>').addClass('p-4'),s=$('<div>').addClass('ttm-div maintesTimonial m-0 bg-white pt-6 pb-8 px-4 rounded-xl shadow-md').html('<div class="flex items-center mt-4"><div class="jobstock-reviews-figure p-1 mr-2 rounded-full mr-2"><div class="ttm-img w-16 h-16 bg-no-repeat bg-cover bg-center rounded-full custom-lazy-image" data-lazy-src="'+e+'"></div></div> <div class="ttm-info leading-tight"><p class="ttm-title text-black font-semibold text-base leading-tight">'+i+'</p><p class="ttm-caption leading-tight" style="color: #14855B; font-weight: 500; font-size: 14px;">'+a+'</p></div></div><div class="tt-data block mt-3 p-2"><p class="text-gray-500 text-base leading-tigh">'+n+'</p></div></div>');d.append(s);var o=$('#jobnt-testimonials');o.append(d),t.remove()})});$(document).ready(function(){tns({container:".ttm-slider",items:1,gutter:20,slideBy:1,lazyload: true,mouseDrag:!0,swipeAngle:!1,speed:400,controlsPosition:"bottom",navPosition:"bottom",mouseDrag:!0,autoplay:!0,autoplayButtonOutput:!1,controlsContainer:"#ttm-custom-control",responsive:{0:{items:1},768:{items:2},950:{items:3}}})});

//--------------------------------------------------------
// Bookmark Page Functionality
//--------------------------------------------------------
if (window['location']['href']['indexOf']('/p/bookmark.html') > -1) {$('.item-post .post-body')['html']('<div class="liked-items asd bmContainer mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"></div>');};
$(document).ready(function(){loadLikedItems();function loadLikedItems(){var likedItems=localStorage.getItem('likedItems');if(likedItems){likedItems=JSON.parse(likedItems);$('.liked-items').empty();for(var key in likedItems){var postTitle=likedItems[key].postTitle,postImage=likedItems[key].postImage,postHref=likedItems[key].postHref,postLibil=likedItems[key].postLibil,htmlString='<div class="liked-item flex rounded-xl p-3 bg-white border"><div class="bg-cover bg-no-repeat bg-center md:w-16 md:h-16 w-16 h-16 rounded-xl mr-2 custom-lazy-image" data-lazy-src="'+postImage+'"></div><div class="flex -tems-center justify-between w-full"><span class="block my-1"><span class="block text-sm mb-0 text-green-600">'+postLibil+'</span><a style="color:#333!important" href="'+postHref+'" alt="'+postTitle+'" title="'+postTitle+'" class="hover:underline text-base lg:text-lg font-semibold">'+postTitle+'</a></span><span class="mx-2 mt-2 cursor-pointer remove" data-id="'+key+'"><i class="fa-solid fa-xmark text-gray-700"></i></span></div></div>';$('.liked-items').append(htmlString),$('[data-id="'+key+'"] .likeit').addClass('likedit')}$('.like-count').text(Object.keys(likedItems).length)}}$(".custom-lazy-image").lazypics();$(document).on('click','.likeit',function(){var post=$(this).closest('.jobnt-job-post-body'),postId=post.attr('data-id'),postTitle=post.find('.jobnt-post-header').text(),postImage=post.find('.jobnt-pst-featured-img').data('lazy-src'),postHref=post.find('.jobnt-post-header').data('href'),postLibil=post.find('.jobnt-post-header').data('libil'),likedItems=localStorage.getItem('likedItems');likedItems=likedItems?JSON.parse(likedItems):{},$(this).toggleClass('likedit'),likedItems[postId]?delete likedItems[postId]:likedItems[postId]={postTitle:postTitle,postImage:postImage,postHref:postHref,postLibil:postLibil},localStorage.setItem('likedItems',JSON.stringify(likedItems)),$('.like-count').text(Object.keys(likedItems).length)}),$(document).on('click','.remove',function(){var postId=$(this).attr('data-id'),likedItems=JSON.parse(localStorage.getItem('likedItems'));delete likedItems[postId],localStorage.setItem('likedItems',JSON.stringify(likedItems)),$(this).closest('.liked-item').remove(),$('.like-count').text(Object.keys(likedItems).length),$('[data-id="'+postId+'"] .likeit').removeClass('likedit')})});

//--------------------------------------------------------
// FAB, Timeago and License Control
//--------------------------------------------------------
$(document).ready(function(){let s=$(".TBT_BTT_progress-wrap path"),e=s[0].getTotalLength();function t(){let t=$(window).scrollTop(),o=$(document).height()-$(window).height();s.css("strokeDashoffset",e-t*e/o)}s.css({transition:"none",WebkitTransition:"none",strokeDasharray:e+" "+e,strokeDashoffset:e}),s[0].getBoundingClientRect(),s.css({transition:"stroke-dashoffset 10ms linear",WebkitTransition:"stroke-dashoffset 10ms linear"}),t(),$(window).scroll(t),$(window).on("scroll",function(){$(this).scrollTop()>50?$(".TBT_BTT_progress-wrap").addClass("TBT_BTT_active-progress"):$(".TBT_BTT_progress-wrap").removeClass("TBT_BTT_active-progress")}),$(".TBT_BTT_progress-wrap").on("click",function(s){return s.preventDefault(),$("html, body").animate({scrollTop:0},550),!1})}); $(document).ready(function() {$("time.timeago").timeago();});$(function() {$('body').toggleClass('theme-activation-disabled', !($('#license-key-control .widget-content').text().includes('TBTMIUI921818913SL01') && $('#license-key-control .widget-title').text().includes('Tenolent key')));});
}

//]]>
