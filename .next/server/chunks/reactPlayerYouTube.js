exports.id=439,exports.ids=[439],exports.modules={9641:(e,t,a)=>{let l,s,r;var o=Object.create,i=Object.defineProperty,n=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,y=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t,a,l)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of p(t))u.call(e,s)||s===a||i(e,s,{get:()=>t[s],enumerable:!(l=n(t,s))||l.enumerable});return e},d=(e,t,a)=>(c(e,"symbol"!=typeof t?t+"":t,a),a),P={};((e,t)=>{for(var a in t)i(e,a,{get:t[a],enumerable:!0})})(P,{default:()=>k}),e.exports=h(i({},"__esModule",{value:!0}),P);var m=(r=null!=(l=a(7577))?o(y(l)):{},h(!s&&l&&l.__esModule?r:i(r,"default",{value:l,enumerable:!0}),l)),g=a(4708),b=a(4568);let f=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,w=/user\/([a-zA-Z0-9_-]+)\/?/,T=/youtube-nocookie\.com/;class k extends m.Component{constructor(){super(...arguments),d(this,"callPlayer",g.callPlayer),d(this,"parsePlaylist",e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(f.test(e)){let[,t]=e.match(f);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(w.test(e)){let[,t]=e.match(w);return{listType:"user_uploads",list:t}}return{}}),d(this,"onStateChange",e=>{let{data:t}=e,{onPlay:a,onPause:l,onBuffer:s,onBufferEnd:r,onEnded:o,onReady:i,loop:n,config:{playerVars:p,onUnstarted:y}}=this.props,{UNSTARTED:u,PLAYING:c,PAUSED:h,BUFFERING:d,ENDED:P,CUED:m}=window.YT.PlayerState;if(t===u&&y(),t===c&&(a(),r()),t===h&&l(),t===d&&s(),t===P){let e=!!this.callPlayer("getPlaylist");n&&!e&&(p.start?this.seekTo(p.start):this.play()),o()}t===m&&i()}),d(this,"mute",()=>{this.callPlayer("mute")}),d(this,"unmute",()=>{this.callPlayer("unMute")}),d(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||f.test(e)?null:e.match(b.MATCH_URL_YOUTUBE)[1]}load(e,t){let{playing:a,muted:l,playsinline:s,controls:r,loop:o,config:i,onError:n}=this.props,{playerVars:p,embedOptions:y}=i,u=this.getID(e);if(t){if(f.test(e)||w.test(e)||e instanceof Array){this.player.loadPlaylist(this.parsePlaylist(e));return}this.player.cueVideoById({videoId:u,startSeconds:(0,g.parseStartTime)(e)||p.start,endSeconds:(0,g.parseEndTime)(e)||p.end});return}(0,g.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",e=>e.loaded).then(t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:u,playerVars:{autoplay:a?1:0,mute:l?1:0,controls:r?1:0,start:(0,g.parseStartTime)(e),end:(0,g.parseEndTime)(e),origin:window.location.origin,playsinline:s?1:0,...this.parsePlaylist(e),...p},events:{onReady:()=>{o&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>n(e.data)},host:T.test(e)?"https://www.youtube-nocookie.com":void 0,...y}))},n),y.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){let{display:e}=this.props;return m.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},m.default.createElement("div",{ref:this.ref}))}}d(k,"displayName","YouTube"),d(k,"canPlay",b.canPlay.youtube)}};