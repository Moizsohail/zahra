(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{366:function(t,e,o){var content=o(371);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("98ad024c",content,!0,{sourceMap:!1})},367:function(t,e,o){"use strict";o.r(e);var n={},c=o(68),r=o(104),l=o.n(r),d=o(402),f=o(404),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-carousel",{attrs:{"hide-delimiter-background":"","show-arrows-on-hover":"",height:"400"}},this._l([0,1,2,4,5,6],(function(t,i){return e("v-carousel-item",{key:i,attrs:{src:"https://picsum.photos/1000/1200?random="+i}})})),1)}),[],!1,null,"2df11656",null);e.default=component.exports;l()(component,{VCarousel:d.a,VCarouselItem:f.a})},369:function(t,e,o){t.exports=o.p+"img/citations.c9c2944.jpg"},370:function(t,e,o){"use strict";o(366)},371:function(t,e,o){(e=o(10)(!1)).push([t.i,".profilepic[data-v-f9ed1010]{position:absolute;left:calc(50% - 50px);top:-50px}.profilepic img[data-v-f9ed1010]{width:100px;border-radius:50%}.contact-card[data-v-f9ed1010]{position:relative;box-shadow:0 4px 8px 0 rgba(0,0,0,.1);border-radius:5px;background:#f7f7f7;justify-content:center;display:flex;flex-direction:column}.contact-card img[data-v-f9ed1010]{margin:auto auto 30px}.contacts[data-v-f9ed1010]{font-size:20px;opacity:.7}.contacts>*[data-v-f9ed1010]{cursor:pointer;margin:0 12px 5px}.contact h4[data-v-f9ed1010]{text-align:center;font-weight:600;opacity:.7;font-size:20px}.contact .text[data-v-f9ed1010]{margin-top:50px;text-align:center;padding:10px}.text p[data-v-f9ed1010]{padding:5px;font-size:14px;opacity:.5}hr.dashed[data-v-f9ed1010]{border-top:.5px solid #bbb}",""]),t.exports=e},372:function(t,e,o){var content=o(377);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("9c0d2da0",content,!0,{sourceMap:!1})},373:function(t,e,o){"use strict";var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profilepic"},[e("img",{attrs:{src:o(369)}})])}],c=(o(370),o(68)),component=Object(c.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contact"},[o("div",{staticClass:"contact-card"},[t._m(0),t._v(" "),o("div",{staticClass:"text"},[o("h4",[t._v("Dr. Zahra Lakdawala")]),t._v(" "),o("p",[t._v("Instructor at Lums")]),t._v(" "),o("hr",{staticClass:"dashed"}),t._v(" "),o("div",{staticClass:"contacts"},[o("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}}),t._v(" "),o("font-awesome-icon",{attrs:{icon:["fab","github"]}}),t._v(" "),o("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)])])])}),n,!1,null,"f9ed1010",null);e.a=component.exports},374:function(t,e,o){"use strict";o.r(e);var n={props:{tiles:{required:!0,type:Object},project:{type:Boolean,default:!1}},computed:{link:function(){return function(link){return"/project/"+link}}}},c=(o(376),o(68)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tiles"},t._l(t.tiles,(function(e,n){return o("div",{key:e.title,staticClass:"tile",class:{even:n%2==0}},[o("div",{staticClass:"img"},[o("img",{attrs:{src:"https://picsum.photos/1000/1200?random="+(n+10)}})]),t._v(" "),o("div",{staticClass:"drop"}),t._v(" "),o("div",{staticClass:"content"},[o("h3",[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"text"},[t._v("\n        "+t._s(e.text)+"\n      ")]),t._v(" "),o("nuxt-link",{staticClass:"cta",attrs:{to:t.link(e.link)}},[t._v("More")])],1)])})),0)}),[],!1,null,"07c71ec2",null);e.default=component.exports},376:function(t,e,o){"use strict";o(372)},377:function(t,e,o){(e=o(10)(!1)).push([t.i,".img[data-v-07c71ec2]{overflow:hidden;width:100%;height:300px;filter:brightness(50%)}.tiles[data-v-07c71ec2]{display:grid;color:#fff;grid-template-columns:repeat(auto-fill,300px);width:100%}.drop[data-v-07c71ec2]{background:#1f82c0;width:100%;height:0}.tile:hover .drop[data-v-07c71ec2]{height:200px;position:absolute;transition:.3s ease-out;bottom:0}.text[data-v-07c71ec2]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;font-size:13px;margin-bottom:10px;-webkit-line-clamp:2;-webkit-box-orient:vertical;transition:.5s ease}.tile[data-v-07c71ec2]{background:#1f82c0;position:relative}.tile:hover .content[data-v-07c71ec2]{bottom:20px}.tile .content[data-v-07c71ec2]{padding:20px;position:absolute;bottom:0;top:unset;transition:.5s ease}.content h3[data-v-07c71ec2]{font-size:1.5rem;letter-spacing:.025em;transition:1s ease}.content p[data-v-07c71ec2]{font-size:.9rem}.even[data-v-07c71ec2]{background:#33b8ca}.tiles img[data-v-07c71ec2]{width:100%}.cta[data-v-07c71ec2]:hover{background:#fff;box-shadow:inset 0 0 0 2rem #fff;color:#1f82c0}.cta[data-v-07c71ec2]{font-size:.75em;line-height:1.5rem;letter-spacing:.075em;background:transparent;color:#1f82c0;display:inline-block;font-weight:400;min-width:6rem;text-align:center;padding:5px 10px;text-transform:uppercase;text-decoration:none;transition:box-shadow .4s,transform 1.5s,color .5s,background 1s;border:1px solid #fff;color:#fff}",""]),t.exports=e},401:function(t,e,o){"use strict";o.r(e);var n=o(367),c=o(374),r={components:{Contact:o(373).a,Carousel:n.default,Grid:c.default},computed:{fields:function(){return this.$store.state.data}}},l=o(68),d=o(104),f=o.n(d),v=o(396),m=o(403),h=o(397),x=o(362),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-container",[o("Carousel"),t._v(" "),o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"6"}},[o("div",{staticClass:"main-text"},[o("h3",{staticClass:"text-h4"},[t._v("Mathlab and Computing")]),t._v(" "),o("p",{staticClass:"text-p"},[t._v("\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo\n              incidunt dicta porro nostrum mollitia aut aliquid fugiat!\n              Dolorem natus, cum labore, iusto deserunt quod deleniti magni\n              animi quasi reiciendis error.\n            ")])]),t._v(" "),o("Grid",{attrs:{tiles:t.fields}})],1),t._v(" "),o("v-spacer"),t._v(" "),o("v-col",{attrs:{cols:"4"}},[o("Contact")],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{Carousel:o(367).default,Grid:o(374).default}),f()(component,{VCol:v.a,VContainer:m.a,VRow:h.a,VSpacer:x.a})}}]);