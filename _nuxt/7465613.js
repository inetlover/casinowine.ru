(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{494:function(t,e,r){},495:function(t,e,r){"use strict";r(39),r(47);var o={name:"MicroMarkupArticle",props:{dateModified:{type:String},datePublished:{type:String},imageArticle:{type:String}}},n=r(24),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("meta",{attrs:{itemprop:"image",content:t.imageArticle}}),t._v(" "),e("meta",{attrs:{itemprop:"dateModified",content:t.dateModified}}),t._v(" "),e("meta",{attrs:{itemscope:"",itemprop:"mainEntityOfPage",itemid:"".concat(t.$config.SITE_URL,"/").concat(t.$route.name)}}),t._v(" "),e("meta",{attrs:{itemprop:"datePublished",content:t.datePublished}}),t._v(" "),e("div",{attrs:{itemprop:"author",itemscope:"",itemtype:"http://schema.org/Person"}},[e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}})]),t._v(" "),e("div",{attrs:{itemprop:"publisher",itemscope:"",itemtype:"https://schema.org/Organization"}},[e("div",{attrs:{itemprop:"logo",itemscope:"",itemtype:"https://schema.org/ImageObject"}},[e("img",{staticStyle:{display:"none"},attrs:{itemprop:"url",src:t.$config.LOGO_URL,alt:"Logo ".concat(t.$config.SITE_NAME_EN)}}),t._v(" "),e("meta",{attrs:{itemprop:"width",content:t.$config.LOGO_WIDTH}}),t._v(" "),e("meta",{attrs:{itemprop:"height",content:t.$config.LOGO_HEIGHT}}),t._v(" "),e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}})]),t._v(" "),e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}}),t._v(" "),e("meta",{attrs:{itemprop:"telephone",content:t.$config.TELEPHONE}}),t._v(" "),e("meta",{attrs:{itemprop:"address",content:t.$config.ADDRESS}}),t._v(" "),e("meta",{attrs:{itemprop:"url",content:t.$config.SITE_URL}})])])}),[],!1,null,null,null);e.a=component.exports},496:function(t,e,r){"use strict";r(494)},497:function(t,e,r){"use strict";r(25),r(40),r(279),r(47);var o={data:function(){return{showForm:!0,showSuccess:!1,name:"",submittedNames:[],record:{phone:"",color:""}}},computed:{nameState:function(){return this.record.phone?12===this.record.phone.length:null}},methods:{handleSubmit:function(){var t=this;this.submittedNames.push(this.name);var e="<b>Заявка на обратный звонок!</b>\n";e+="<b>Отправитель: Заказать подбор</b>\n",e+="<b>Телефон: </b> ".concat(this.record.phone),this.$axios.post("https://api.telegram.org/bot6222304775:AAEMMuyRo3wZQH5Z7RBii_FCm6YEBIPKpck/sendMessage",{chat_id:"-987790800",parse_mode:"html",text:e}).then((function(e){t.showSuccess=!0,t.showForm=!1,console.log("data ==>",e.data),console.log("status ==>",e.status),console.log("statusText ==>",e.statusText),console.log("headers ==>",e.headers),console.log("config ==>",e.config)}))}}},n=(r(496),r(24)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("b-form",{ref:"form",staticClass:"capture-form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("svg",{staticStyle:{visibility:"hidden",position:"absolute"},attrs:{width:"0",height:"0",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[e("defs",[e("filter",{attrs:{id:"goo"}},[e("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"10",result:"blur"}}),t._v(" "),e("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}}),t._v(" "),e("feComposite",{attrs:{in:"SourceGraphic",in2:"goo",operator:"atop"}})],1)])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.showForm?e("div",{staticClass:"show-form"},[e("b-form-group",{staticStyle:{width:"240px","margin-bottom":"30px"}},[e("p",{staticClass:"capture-form__title"},[t._v("Нужна помощь?")]),t._v(" "),e("p",{staticClass:"capture-form__description goo"},[t._v("\n          Подберем программу игры для вашего мероприятия\n        ")])]),t._v(" "),e("b-form-group",{attrs:{label:"Телефон"}},[e("vesp-input-text-mask",{attrs:{mask:"+7 (XXX) XXX-XX-XX","placeholder-char":"X",state:t.nameState,"format-value":function(t){return t.replaceAll(/[^\d+]/g,"")}},model:{value:t.record.phone,callback:function(e){t.$set(t.record,"phone",e)},expression:"record.phone"}})],1),t._v(" "),e("b-form-group",{staticClass:"capture-form__group-buttom"},[e("b-button",{staticClass:"signup",attrs:{disabled:!t.nameState,type:"submit"}},[e("span",{staticClass:"btn-title"},[t._v("Заказать подбор")])])],1),t._v(" "),e("b-form-group",{staticClass:"capture-form__group-privacy-policy"},[e("p",{staticClass:"capture-form__privacy-policy"},[t._v("\n          Нажимая на кнопку вы принимаете\n          "),e("b-link",{attrs:{href:"/agreement"}},[t._v("политику конфиденциальности")])],1)])],1):t._e()]),t._v(" "),e("transition",{attrs:{name:"bounce"}},[t.showSuccess?e("div",{staticClass:"show-success"},[e("p",{staticClass:"goo"},[t._v("\n        Спасибо!"),e("br"),t._v("\n        Ваше сообщение отправлено\n      ")])]):t._e()])],1)}),[],!1,null,null,null);e.a=component.exports},499:function(t,e,r){},501:function(t,e,r){"use strict";r(499)},502:function(t,e,r){"use strict";r(14),r(61);var o={name:"PageHeader",props:{title:{type:String},description:{type:String},imgbg:{type:String}}},n=(r(501),r(24)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"page-banner"},[e("div",{class:t.imgbg}),t._v(" "),e("div",{staticClass:"shape-1"}),t._v(" "),e("div",{staticClass:"shape-2"}),t._v(" "),e("div",{staticClass:"banner-inner"},[e("div",{staticClass:"auto-container"},[e("div",{staticClass:"inner-container"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("h2",[t._v(t._s(t.description))]),t._v(" "),e("nav",{staticClass:"breadcrumbs",attrs:{role:"navigation"}},[e("ol",{staticClass:"bread-crumb",attrs:{typeof:"BreadcrumbList",vocab:"https://schema.org/","aria-label":"breadcrumbs"}},[e("li",{attrs:{property:"itemListElement",typeof:"ListItem"}},[e("nuxt-link",{attrs:{to:"/",property:"item",typeof:"WebPage"}},[t._v("Главная")]),t._v(" "),e("meta",{attrs:{property:"position",content:"1"}})],1),t._v(" "),e("li",{staticClass:"active",attrs:{property:"itemListElement",typeof:"ListItem"}},[t._v("\n              "+t._s(t.title)+"\n              "),e("meta",{attrs:{property:"position",content:"2"}})])])])])])])])}),[],!1,null,"cc3a6bbe",null);e.a=component.exports},514:function(t,e,r){},539:function(t,e,r){"use strict";r(514)},578:function(t,e,r){"use strict";r.r(e);r(14),r(61),r(43);var o=r(495),n=r(502),c=r(497),l={components:{MicroMarkupArticle:o.a,PageHeader:n.a,CaptureForm:c.a},jumbotronData:{title:"Доставка игры винное казино",description:"Доставим игру винное казино за 1,5 часа до вашего праздника. Наша быстрая и надежная служба доставки гарантирует, что ваша игра начнется точно в запланированное время.",img:"/img/delivery.svg"},pageData:{title:"Доставка игры винное казино | Пунктуальность и надежность в обслуживании",description:"Доставим игру винное казино за 1,5 часа до вашего праздника. Наша быстрая и надежная служба доставки гарантирует, что ваша игра начнется точно в запланированное время.",h1:"",first_paragraph:"",canonical:"",publish_date:"2023-02-21T06:08:18+03:00",updated_date:"2023-02-21T06:08:18+03:00",type:"article",image_page:"/img/delivery.jpg"},layout:"page",computed:{pageData:function(){return this.$route.matched.map((function(t){return t.components.default.options.pageData}))[0]}}},m=(r(539),r(24)),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("PageHeader",{attrs:{title:"Доставка",description:t.pageData.description,imgbg:"bg-delivery image-layer"}}),t._v(" "),e("div",{staticClass:"article-container article-min"},[e("aside",{staticClass:"article-sidebar-left"},[e("CaptureForm")],1),t._v(" "),e("main",{staticClass:"article-main",attrs:{id:"scrollspy-nested"}},[e("article",{attrs:{itemscope:"",itemprop:"mainEntity",itemtype:"http://schema.org/Article"}},[e("MicroMarkupArticle",{attrs:{"date-modified":t.pageData.updated_date,"date-published":t.pageData.publish_date,"image-article":t.pageData.image_page}}),t._v(" "),t._m(0)],1)])])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"article-body",attrs:{itemprop:"articleBody"}},[e("p",[t._v("\n            Мы понимаем, что ваше время ценно, поэтому заранее согласовываем с\n            вами время доставки.\n          ")]),t._v(" "),e("p",[t._v("\n            Напоминаем, что все игровое оборудование разборное и на монтаж нам\n            понадобится 1,5 часа. Поэтому если ваше мероприятие начнется,\n            допустим, в 16:00, на монтаж мы подъедем с 14:00 до 14:30. Эти\n            моменты вам важно учесть при аренде помещения, чтобы у вас был\n            технический час, а у нас — доступ на площадку. Также обязательно\n            просим вас предоставить телефон контактного лица, чтобы на месте\n            нас встретили и показали, куда заносить оборудование и где нужно\n            производить его монтаж.\n          ")]),t._v(" "),e("p",[t._v("\n            Доставка по Санкт-Петербургу (в пределах КАД) входит в стоимость\n            выбранного вами пакета услуг.\n          ")])])}],!1,null,null,null);e.default=component.exports}}]);