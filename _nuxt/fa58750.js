(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{498:function(e,l,n){"use strict";var t={props:{title:{type:String}}},m=n(24),component=Object(m.a)(t,(function(){var e=this,l=e._self._c;return l("nav",{staticClass:"breadcrumbs",attrs:{role:"navigation"}},[l("ol",{staticClass:"bread-crumb",attrs:{typeof:"BreadcrumbList",vocab:"https://schema.org/","aria-label":"breadcrumbs"}},[l("li",{attrs:{property:"itemListElement",typeof:"ListItem"}},[l("nuxt-link",{attrs:{to:"/",property:"item",typeof:"WebPage"}},[e._v("Главная")]),e._v(" "),l("meta",{attrs:{property:"position",content:"1"}})],1),e._v(" "),l("li",{staticClass:"active",attrs:{property:"itemListElement",typeof:"ListItem"}},[e._v("\n      "+e._s(e.title)+"\n      "),l("meta",{attrs:{property:"position",content:"2"}})])])])}),[],!1,null,null,null);l.a=component.exports},519:function(e,l,n){},548:function(e,l,n){"use strict";n(519)},569:function(e,l,n){"use strict";n.r(l);n(186),n(39);var t={components:{Breadcrumbs:n(498).a},props:{galeryNavOne:{type:Array,required:!0},galeryNavTwo:{type:Array,required:!0},galeryContent:{type:Array,required:!0}},data:function(){return{grid:null,active:"isotope",filterStr:"*",sorterStr:"original-order"}},mounted:function(){var e=this;this.$nextTick((function(){var l=n(541);e.grid=new l(".grid",{itemSelector:".gallery-item",layoutMode:"fitRows",getSortData:{name:".name",symbol:".symbol",number:".number parseInt",category:"[data-category]"},fitRows:{columnWidth:200,rowHeight:350}})})),this.$glightbox({selector:".lightbox-image",touchNavigation:!0,loop:!0,autoplayVideos:!0})},methods:{onFilter:function(e){this.filterStr=e,this.grid.arrange({filter:e})},onSorter:function(e){this.sorterStr=e,this.grid.arrange({sortBy:e})}}},m=(n(548),n(24)),r={components:{Gallery:Object(m.a)(t,(function(){var e=this,l=e._self._c;return l("div",[l("section",{directives:[{name:"show",rawName:"v-show",value:"isotope"===e.active,expression:"active === 'isotope'"}],staticStyle:{"margin-top":"120px"}},[l("Breadcrumbs",{attrs:{title:"Галерея КАЗИНО ВИН"}}),e._v(" "),l("div",{staticClass:"filter-nav"},[l("nav",[e._l(e.galeryNavOne,(function(n){return l("b-button",{key:n.id,attrs:{upload:e.filterStr===n.link},on:{click:function(l){return e.onFilter(n.link)}}},[e._v("\n          "+e._s(n.title)+"\n        ")])})),e._v(" "),e._l(e.galeryNavTwo,(function(n){return l("b-button",{key:n.id,attrs:{upload:e.filterStr===n.link},on:{click:function(l){return e.onFilter(n.link)}}},[e._v("\n          "+e._s(n.title)+"\n        ")])}))],2)]),e._v(" "),l("br"),e._v(" "),l("div",{staticClass:"w-full"},[l("div",{staticClass:"grid"},e._l(e.galeryContent,(function(n){return l("div",{key:n.id,class:"gallery-item ".concat(n.filte2," ").concat(n.filte1)},[l("div",{staticClass:"inner-box"},[l("div",{staticClass:"image",attrs:{itemscope:"",itemtype:"http://schema.org/ImageObject"}},[l("img",{attrs:{src:n.imgThumb,alt:n.title}}),e._v(" "),l("meta",{attrs:{itemprop:"image",content:n.img}}),l("meta",{attrs:{itemprop:"caption",content:n.title}})]),e._v(" "),l("b-link",{staticClass:"lightbox-image overlay-box",attrs:{href:n.img,"data-fancybox":"gallery"}}),e._v(" "),l("div",{staticClass:"cap-box"},[l("div",{staticClass:"cap-inner"},[l("div",{staticClass:"cat"},[l("span",[e._v(e._s(n.category))])]),e._v(" "),l("div",{staticClass:"title"},[e._v("\n                  "+e._s(n.title)+"\n                ")])])])],1)])})),0)])],1)])}),[],!1,null,null,null).exports},pageData:{title:"Галерея КАЗИНО ВИН, Фото с проведенных мероприятий",description:"Смотрите все фотографии с проведенных мероприятий",h1:"",first_paragraph:"",canonical:"",publish_date:"2023-02-21T06:08:18.000000Z",updated_date:"2023-02-21T06:08:18.000000Z",type:"article",image_page:"/img/portfolio.jpg"},layout:"base",data:function(){return{galeryNavOne:[{title:"Все",link:"*"},{title:"Винное казино",link:".wine-casino"},{title:"Пивное казино",link:".beer-casino"}],galeryNavTwo:[{title:"Игровое поле",link:".playing-field"},{title:"Вино для игры",link:".wine-for-the-game"},{title:"Во время игры",link:".during-the-game"},{title:"Сомелье",link:".sommelier"},{title:"Дегустация",link:".tasting"},{title:"Победитель",link:".winner"}],galeryContent:[{filte1:"playing-field",filte2:"during-the-game",imgThumb:"/images/gallery/beer-casino/thumbnails/1.jpg",img:"/images/gallery/beer-casino/1.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"playing-field",filte2:"during-the-game",imgThumb:"/images/gallery/beer-casino/thumbnails/2.jpg",img:"/images/gallery/beer-casino/2.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"sommelier",filte2:"",imgThumb:"/images/gallery/beer-casino/thumbnails/3.jpg",img:"/images/gallery/beer-casino/3.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"playing-field",filte2:"",imgThumb:"/images/gallery/beer-casino/thumbnails/4.jpg",img:"/images/gallery/beer-casino/4.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"sommelier",filte2:"wine-for-the-game",imgThumb:"/images/gallery/beer-casino/thumbnails/5.jpg",img:"/images/gallery/beer-casino/5.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"playing-field",filte2:"",imgThumb:"/images/gallery/beer-casino/thumbnails/6.jpg",img:"/images/gallery/beer-casino/6.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"during-the-game",filte2:"",imgThumb:"/images/gallery/beer-casino/thumbnails/7.jpg",img:"/images/gallery/beer-casino/7.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"sommelier",filte2:"during-the-game",imgThumb:"/images/gallery/beer-casino/thumbnails/8.jpg",img:"/images/gallery/beer-casino/8.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"beer-casino",filte2:"during-the-game",imgThumb:"/images/gallery/beer-casino/thumbnails/9.jpg",img:"/images/gallery/beer-casino/9.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"beer-casino",filte2:"during-the-game",imgThumb:"/images/gallery/beer-casino/thumbnails/10.jpg",img:"/images/gallery/beer-casino/10.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"beer-casino",filte2:"during-the-game",imgThumb:"/images/gallery/beer-casino/thumbnails/11.jpg",img:"/images/gallery/beer-casino/11.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"beer-casino",filte2:"during-the-game",imgThumb:"/images/gallery/beer-casino/thumbnails/12.jpg",img:"/images/gallery/beer-casino/12.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"beer-casino",filte2:"during-the-game",imgThumb:"/images/gallery/beer-casino/thumbnails/13.jpg",img:"/images/gallery/beer-casino/13.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"",filte2:"during-the-game",imgThumb:"/images/gallery/beer-casino/thumbnails/14.jpg",img:"/images/gallery/beer-casino/14.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"tasting",filte2:"during-the-game",imgThumb:"/images/gallery/beer-casino/thumbnails/15.jpg",img:"/images/gallery/beer-casino/15.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"beer-casino",filte2:"during-the-game",imgThumb:"/images/gallery/beer-casino/thumbnails/16.jpg",img:"/images/gallery/beer-casino/16.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"tasting",filte2:"beer-casino",imgThumb:"/images/gallery/beer-casino/thumbnails/17.jpg",img:"/images/gallery/beer-casino/17.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"beer-casino",filte2:"playing-field",imgThumb:"/images/gallery/beer-casino/thumbnails/18.jpg",img:"/images/gallery/beer-casino/18.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"beer-casino",filte2:"during-the-game",imgThumb:"/images/gallery/beer-casino/thumbnails/19.jpg",img:"/images/gallery/beer-casino/19.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"beer-casino",filte2:"sommelier",imgThumb:"/images/gallery/beer-casino/thumbnails/20.jpg",img:"/images/gallery/beer-casino/20.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"beer-casino",filte2:"during-the-game",imgThumb:"/images/gallery/beer-casino/thumbnails/21.jpg",img:"/images/gallery/beer-casino/21.jpg",category:"Пивное казино",title:"23 Февраля в офисе компании",link:"/company"},{filte1:"wine-casino",filte2:"playing-field",imgThumb:"/images/gallery/casinowine/thumbnails/1.jpg",img:"/images/gallery/casinowine/1.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, офис",link:"/company"},{filte1:"wine-casino",filte2:"playing-field",imgThumb:"/images/gallery/casinowine/thumbnails/2.jpg",img:"/images/gallery/casinowine/2.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, офис",link:"/company"},{filte1:"wine-casino",filte2:"playing-field",imgThumb:"/images/gallery/casinowine/thumbnails/3.jpg",img:"/images/gallery/casinowine/3.jpg",category:"Винное казино",title:"Новогодний корпоратив",link:"/company"},{filte1:"",filte2:"playing-field",imgThumb:"/images/gallery/casinowine/thumbnails/4.jpg",img:"/images/gallery/casinowine/4.jpg",category:"Винное казино",title:"Новогодний корпоратив",link:"/company"},{filte1:"wine-casino",filte2:"playing-field",imgThumb:"/images/gallery/casinowine/thumbnails/5.jpg",img:"/images/gallery/casinowine/5.jpg",category:"Винное казино",title:"Новогодний корпоратив",link:"/company"},{filte1:"wine-for-the-game",filte2:"playing-field",imgThumb:"/images/gallery/casinowine/thumbnails/6.jpg",img:"/images/gallery/casinowine/6.jpg",category:"Винное казино",title:"Новогодний корпоратив",link:"/company"},{filte1:"playing-field",filte2:"",imgThumb:"/images/gallery/wine-casino/thumbnails/1.jpg",img:"/images/gallery/wine-casino/1.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino/thumbnails/2.jpg",img:"/images/gallery/wine-casino/2.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino/thumbnails/3.jpg",img:"/images/gallery/wine-casino/3.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino/thumbnails/4.jpg",img:"/images/gallery/wine-casino/4.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino/thumbnails/5.jpg",img:"/images/gallery/wine-casino/5.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino/thumbnails/6.jpg",img:"/images/gallery/wine-casino/6.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"tasting",imgThumb:"/images/gallery/wine-casino/thumbnails/7.jpg",img:"/images/gallery/wine-casino/7.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino/thumbnails/8.jpg",img:"/images/gallery/wine-casino/8.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"tasting",imgThumb:"/images/gallery/wine-casino/thumbnails/9.jpg",img:"/images/gallery/wine-casino/9.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"sommelier",filte2:"",imgThumb:"/images/gallery/wine-casino/thumbnails/10.jpg",img:"/images/gallery/wine-casino/10.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"sommelier",filte2:"",imgThumb:"/images/gallery/wine-casino/thumbnails/11.jpg",img:"/images/gallery/wine-casino/11.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"winner",filte2:"",imgThumb:"/images/gallery/wine-casino/thumbnails/12.jpg",img:"/images/gallery/wine-casino/12.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino/thumbnails/13.jpg",img:"/images/gallery/wine-casino/13.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"sommelier",imgThumb:"/images/gallery/wine-casino/thumbnails/14.jpg",img:"/images/gallery/wine-casino/14.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"sommelier",imgThumb:"/images/gallery/wine-casino/thumbnails/15.jpg",img:"/images/gallery/wine-casino/15.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"tasting",imgThumb:"/images/gallery/wine-casino/thumbnails/16.jpg",img:"/images/gallery/wine-casino/16.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"sommelier",imgThumb:"/images/gallery/wine-casino/thumbnails/17.jpg",img:"/images/gallery/wine-casino/17.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"sommelier",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino/thumbnails/18.jpg",img:"/images/gallery/wine-casino/18.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"playing-field",imgThumb:"/images/gallery/wine-casino/thumbnails/19.jpg",img:"/images/gallery/wine-casino/19.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"winner",imgThumb:"/images/gallery/wine-casino/thumbnails/20.jpg",img:"/images/gallery/wine-casino/20.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"sommelier",filte2:"wine-casino",imgThumb:"/images/gallery/wine-casino/thumbnails/21.jpg",img:"/images/gallery/wine-casino/21.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"wine-casino",filte2:"winner",imgThumb:"/images/gallery/wine-casino/thumbnails/22.jpg",img:"/images/gallery/wine-casino/22.jpg",category:"Винное казино",title:"Корпоратив в ресторане «Панорамика»",link:"/company"},{filte1:"playing-field",filte2:"",imgThumb:"/images/gallery/wine-casino-2/thumbnails/1.jpg",img:"/images/gallery/wine-casino-2/1.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino-2/thumbnails/2.jpg",img:"/images/gallery/wine-casino-2/2.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino-2/thumbnails/3.jpg",img:"/images/gallery/wine-casino-2/3.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"playing-field",imgThumb:"/images/gallery/wine-casino-2/thumbnails/4.jpg",img:"/images/gallery/wine-casino-2/4.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"playing-field",imgThumb:"/images/gallery/wine-casino-2/thumbnails/5.jpg",img:"/images/gallery/wine-casino-2/5.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino-2/thumbnails/6.jpg",img:"/images/gallery/wine-casino-2/6.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino-2/thumbnails/7.jpg",img:"/images/gallery/wine-casino-2/7.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino-2/thumbnails/8.jpg",img:"/images/gallery/wine-casino-2/8.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino-2/thumbnails/9.jpg",img:"/images/gallery/wine-casino-2/9.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino-2/thumbnails/10.jpg",img:"/images/gallery/wine-casino-2/10.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"tasting",imgThumb:"/images/gallery/wine-casino-2/thumbnails/11.jpg",img:"/images/gallery/wine-casino-2/11.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"tasting",imgThumb:"/images/gallery/wine-casino-2/thumbnails/12.jpg",img:"/images/gallery/wine-casino-2/12.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino-2/thumbnails/13.jpg",img:"/images/gallery/wine-casino-2/13.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino-2/thumbnails/14.jpg",img:"/images/gallery/wine-casino-2/14.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino-2/thumbnails/15.jpg",img:"/images/gallery/wine-casino-2/15.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino-2/thumbnails/16.jpg",img:"/images/gallery/wine-casino-2/16.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino-2/thumbnails/17.jpg",img:"/images/gallery/wine-casino-2/17.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"playing-field",imgThumb:"/images/gallery/wine-casino-2/thumbnails/18.jpg",img:"/images/gallery/wine-casino-2/18.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"playing-field",imgThumb:"/images/gallery/wine-casino-2/thumbnails/19.jpg",img:"/images/gallery/wine-casino-2/19.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"playing-field",imgThumb:"/images/gallery/wine-casino-2/thumbnails/20.jpg",img:"/images/gallery/wine-casino-2/20.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"playing-field",imgThumb:"/images/gallery/wine-casino-2/thumbnails/21.jpg",img:"/images/gallery/wine-casino-2/21.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"},{filte1:"wine-casino",filte2:"during-the-game",imgThumb:"/images/gallery/wine-casino-2/thumbnails/22.jpg",img:"/images/gallery/wine-casino-2/22.jpg",category:"Винное казино",title:"Корпоратив, 8 Марта, фрегат «Благодать»",link:"/company"}]}}},o=Object(m.a)(r,(function(){var e=this,l=e._self._c;return l("div",[l("gallery",{attrs:{"galery-nav-one":e.galeryNavOne,"galery-nav-two":e.galeryNavTwo,"galery-content":e.galeryContent}})],1)}),[],!1,null,null,null);l.default=o.exports}}]);