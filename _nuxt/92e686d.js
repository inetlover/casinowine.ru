(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{494:function(t,e,n){},495:function(t,e,n){"use strict";n(39),n(47);var r={name:"MicroMarkupArticle",props:{dateModified:{type:String},datePublished:{type:String},imageArticle:{type:String}}},c=n(24),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("meta",{attrs:{itemprop:"image",content:t.imageArticle}}),t._v(" "),e("meta",{attrs:{itemprop:"dateModified",content:t.dateModified}}),t._v(" "),e("meta",{attrs:{itemscope:"",itemprop:"mainEntityOfPage",itemid:"".concat(t.$config.SITE_URL,"/").concat(t.$route.name)}}),t._v(" "),e("meta",{attrs:{itemprop:"datePublished",content:t.datePublished}}),t._v(" "),e("div",{attrs:{itemprop:"author",itemscope:"",itemtype:"http://schema.org/Person"}},[e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}})]),t._v(" "),e("div",{attrs:{itemprop:"publisher",itemscope:"",itemtype:"https://schema.org/Organization"}},[e("div",{attrs:{itemprop:"logo",itemscope:"",itemtype:"https://schema.org/ImageObject"}},[e("img",{staticStyle:{display:"none"},attrs:{itemprop:"url",src:t.$config.LOGO_URL,alt:"Logo ".concat(t.$config.SITE_NAME_EN)}}),t._v(" "),e("meta",{attrs:{itemprop:"width",content:t.$config.LOGO_WIDTH}}),t._v(" "),e("meta",{attrs:{itemprop:"height",content:t.$config.LOGO_HEIGHT}}),t._v(" "),e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}})]),t._v(" "),e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}}),t._v(" "),e("meta",{attrs:{itemprop:"telephone",content:t.$config.TELEPHONE}}),t._v(" "),e("meta",{attrs:{itemprop:"address",content:t.$config.ADDRESS}}),t._v(" "),e("meta",{attrs:{itemprop:"url",content:t.$config.SITE_URL}})])])}),[],!1,null,null,null);e.a=component.exports},496:function(t,e,n){"use strict";n(494)},497:function(t,e,n){"use strict";n(25),n(40),n(279),n(47);var r={data:function(){return{showForm:!0,showSuccess:!1,name:"",submittedNames:[],record:{phone:"",color:""}}},computed:{nameState:function(){return this.record.phone?12===this.record.phone.length:null}},methods:{handleSubmit:function(){var t=this;this.submittedNames.push(this.name);var e="<b>Заявка на обратный звонок!</b>\n";e+="<b>Отправитель: Заказать подбор</b>\n",e+="<b>Телефон: </b> ".concat(this.record.phone),this.$axios.post("https://api.telegram.org/bot6222304775:AAEMMuyRo3wZQH5Z7RBii_FCm6YEBIPKpck/sendMessage",{chat_id:"-987790800",parse_mode:"html",text:e}).then((function(e){t.showSuccess=!0,t.showForm=!1,console.log("data ==>",e.data),console.log("status ==>",e.status),console.log("statusText ==>",e.statusText),console.log("headers ==>",e.headers),console.log("config ==>",e.config)}))}}},c=(n(496),n(24)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("b-form",{ref:"form",staticClass:"capture-form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("svg",{staticStyle:{visibility:"hidden",position:"absolute"},attrs:{width:"0",height:"0",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[e("defs",[e("filter",{attrs:{id:"goo"}},[e("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"10",result:"blur"}}),t._v(" "),e("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}}),t._v(" "),e("feComposite",{attrs:{in:"SourceGraphic",in2:"goo",operator:"atop"}})],1)])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.showForm?e("div",{staticClass:"show-form"},[e("b-form-group",{staticStyle:{width:"240px","margin-bottom":"30px"}},[e("p",{staticClass:"capture-form__title"},[t._v("Нужна помощь?")]),t._v(" "),e("p",{staticClass:"capture-form__description goo"},[t._v("\n          Подберем программу игры для вашего мероприятия\n        ")])]),t._v(" "),e("b-form-group",{attrs:{label:"Телефон"}},[e("vesp-input-text-mask",{attrs:{mask:"+7 (XXX) XXX-XX-XX","placeholder-char":"X",state:t.nameState,"format-value":function(t){return t.replaceAll(/[^\d+]/g,"")}},model:{value:t.record.phone,callback:function(e){t.$set(t.record,"phone",e)},expression:"record.phone"}})],1),t._v(" "),e("b-form-group",{staticClass:"capture-form__group-buttom"},[e("b-button",{staticClass:"signup",attrs:{disabled:!t.nameState,type:"submit"}},[e("span",{staticClass:"btn-title"},[t._v("Заказать подбор")])])],1),t._v(" "),e("b-form-group",{staticClass:"capture-form__group-privacy-policy"},[e("p",{staticClass:"capture-form__privacy-policy"},[t._v("\n          Нажимая на кнопку вы принимаете\n          "),e("b-link",{attrs:{href:"/agreement"}},[t._v("политику конфиденциальности")])],1)])],1):t._e()]),t._v(" "),e("transition",{attrs:{name:"bounce"}},[t.showSuccess?e("div",{staticClass:"show-success"},[e("p",{staticClass:"goo"},[t._v("\n        Спасибо!"),e("br"),t._v("\n        Ваше сообщение отправлено\n      ")])]):t._e()])],1)}),[],!1,null,null,null);e.a=component.exports},499:function(t,e,n){},501:function(t,e,n){"use strict";n(499)},502:function(t,e,n){"use strict";n(14),n(61);var r={name:"PageHeader",props:{title:{type:String},description:{type:String},imgbg:{type:String}}},c=(n(501),n(24)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"page-banner"},[e("div",{class:t.imgbg}),t._v(" "),e("div",{staticClass:"shape-1"}),t._v(" "),e("div",{staticClass:"shape-2"}),t._v(" "),e("div",{staticClass:"banner-inner"},[e("div",{staticClass:"auto-container"},[e("div",{staticClass:"inner-container"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("h2",[t._v(t._s(t.description))]),t._v(" "),e("nav",{staticClass:"breadcrumbs",attrs:{role:"navigation"}},[e("ol",{staticClass:"bread-crumb",attrs:{typeof:"BreadcrumbList",vocab:"https://schema.org/","aria-label":"breadcrumbs"}},[e("li",{attrs:{property:"itemListElement",typeof:"ListItem"}},[e("nuxt-link",{attrs:{to:"/",property:"item",typeof:"WebPage"}},[t._v("Главная")]),t._v(" "),e("meta",{attrs:{property:"position",content:"1"}})],1),t._v(" "),e("li",{staticClass:"active",attrs:{property:"itemListElement",typeof:"ListItem"}},[t._v("\n              "+t._s(t.title)+"\n              "),e("meta",{attrs:{property:"position",content:"2"}})])])])])])])])}),[],!1,null,"cc3a6bbe",null);e.a=component.exports},512:function(t,e,n){},537:function(t,e,n){"use strict";n(512)},576:function(t,e,n){"use strict";n.r(e);n(14),n(61),n(43);var r=n(495),c=n(502),o=n(497),l={components:{MicroMarkupArticle:r.a,PageHeader:c.a,CaptureForm:o.a},jumbotronData:{title:"Casino Wine",description:"Делимся радостью жизни через дегустацию вин, винные игры и общение",img:"/img/company.svg"},pageData:{title:"О компании | Casino Wine",description:"Casino Wine – event-агентство выездных дегустаций под ключ",h1:"",first_paragraph:"",canonical:"",publish_date:"2023-02-21T06:08:18+03:00",updated_date:"2023-02-21T06:08:18+03:00",type:"article",image_page:"/img/company.jpg"},layout:"page",computed:{pageData:function(){return this.$route.matched.map((function(t){return t.components.default.options.pageData}))[0]}}},m=(n(537),n(24)),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("PageHeader",{attrs:{title:"О нас",description:t.pageData.description,imgbg:"bg-company image-layer"}}),t._v(" "),e("div",{staticClass:"article-container article-min"},[e("aside",{staticClass:"article-sidebar-left"},[e("CaptureForm")],1),t._v(" "),e("main",{staticClass:"article-main",attrs:{id:"scrollspy-nested"}},[e("article",{attrs:{itemscope:"",itemprop:"mainEntity",itemtype:"http://schema.org/Article"}},[e("MicroMarkupArticle",{attrs:{"date-modified":t.pageData.updated_date,"date-published":t.pageData.publish_date,"image-article":t.pageData.image_page}}),t._v(" "),t._m(0)],1)])])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"article-body",attrs:{itemprop:"articleBody"}},[e("p",[e("em",[t._v("\n              Вино. Пиво. Виски. Текила. Коньяк… А может быть, что-то еще?\n            ")])]),t._v(" "),e("p",{staticClass:"title-h5 theme_color"},[e("i",[t._v("Не каждое событие остается в памяти надолго, наши вечеринки\n              запоминаются!")])]),t._v(" "),e("p",{staticClass:"title-h2",staticStyle:{padding:"30px 0 10px"}},[t._v("Кто мы?")]),t._v(" "),e("p",[t._v("\n            По мере приближения праздников, вам придется решать много\n            вопросов. Где отмечать? Чем угощать? Как развлечь и удивить? Вот\n            вам идея. Подумайте о том, чтобы привнести на свою вечеринку\n            знания о напитках мирового класса, пригласив сомелье. Традиционно\n            в ресторане или отеле сомелье (с франц., буквально означает винный\n            стюард) — это высококвалифицированный специалист по вину,\n            разбирающийся во всех его аспектах, включая сочетание с едой. Да,\n            это высокий уровень экспертизы, люксовое обслуживание и крутая\n            подача. Мы предлагаем вам этот уровень и ресторанное качество\n            почувствовать у себя дома, на своем празднике, на своем дне\n            рождении или торжестве.\n          ")]),t._v(" "),e("p",[t._v("\n            С учетом задач, которое преследует каждое мероприятие, мы\n            разработали несколько программ дегустаций – от традиционной до\n            слепой в формате «казино». Также для мужской и женской аудитории\n            мы предлагаем разные напитки – от классического десертного вина\n            (девушкам), до крафтового пива, виски, текилы и коньяка\n            (мужчинам). Мы работаем с разным количеством гостей – поскольку\n            каждая дегустация уникальна, то и подготовка к ней идет, учитывая\n            ваши пожелания: минимальное количество участников – 2 человека,\n            максимальное – 250. Возможна организация более крупных\n            мероприятий. Для очень большой вечеринки у нас есть внимательные\n            официанты и другой обслуживающий персонал.\n          ")]),t._v(" "),e("p",[e("b",[t._v("Доверьтесь нам и наслаждайтесь общением с гостями!")])]),t._v(" "),e("p",{staticClass:"title-h2",staticStyle:{padding:"30px 0 10px"}},[t._v("Наша команда")]),t._v(" "),e("p",[t._v("\n            Наш проект – это коллаборация разных специалистов, которые\n            сплотились в дружную команду и трудятся вместе с 2018 года.\n          ")]),t._v(" "),e("section",{staticClass:"specialist-card",staticStyle:{"margin-top":"20px"}},[e("div",{staticClass:"specialist-card__inner"},[e("div",{staticClass:"specialist-card__content"},[e("div",[e("figure",{attrs:{itemscope:"",itemtype:"http://schema.org/ImageObject",title:"Пупырка (эксперт по позитиву)"}},[e("figcaption",{staticClass:"title-h4"},[t._v("\n                      Пупырка, "),e("br"),t._v("эксперт по позитиву\n                    ")]),t._v(" "),e("picture",[e("img",{staticClass:"specialist-card-illustration",attrs:{alt:"Пупырка (эксперт по позитиву)",itemprop:"image",src:"/images/team/pupyrka.jpg"}})])])]),t._v(" "),e("div",{staticClass:"specialist-card__content-right"},[e("p",[t._v("Научись превращать проблемы в возможности ))")])])])])]),t._v(" "),e("section",{staticClass:"specialist-card"},[e("div",{staticClass:"specialist-card__inner"},[e("div",{staticClass:"specialist-card__content"},[e("div",[e("figure",{attrs:{itemscope:"",itemtype:"http://schema.org/ImageObject",title:"Роман, сомелье (винный эксперт с глубокими знаниями\n                    крепкого алкоголя))"}},[e("figcaption",{staticClass:"title-h4"},[t._v("\n                      Роман, сомелье (винный эксперт с глубоким знанием\n                      крепкого алкоголя)\n                    ")]),t._v(" "),e("picture",[e("img",{staticClass:"specialist-card-illustration",attrs:{alt:"Роман, сомелье (винный эксперт с глубокими знаниями\n                    крепкого алкоголя)",itemprop:"image",src:"/images/team/roman.jpg"}})])])]),t._v(" "),e("div",{staticClass:"specialist-card__content-right"},[e("p",[t._v("\n                    Превратит любой званый ужин, деловую встречу или\n                    дегустацию в незабываемый праздник! Благодаря энтузиазму в\n                    сочетании с почти десятилетним опытом работы в\n                    event-индустрии с удовольствием поможет вам во всех винных\n                    потребностях)\n                  ")])])])])]),t._v(" "),e("section",{staticClass:"specialist-card"},[e("div",{staticClass:"specialist-card__inner"},[e("div",{staticClass:"specialist-card__content"},[e("div",[e("figure",{attrs:{itemscope:"",itemtype:"http://schema.org/ImageObject",title:"Ирина (Ивент-менеджер)"}},[e("figcaption",{staticClass:"title-h4"},[t._v("\n                      Ирина, "),e("br"),t._v("ивент-менеджер\n                    ")]),t._v(" "),e("picture",[e("img",{staticClass:"specialist-card-illustration",attrs:{alt:"Ирина (Ивент-менеджер)",itemprop:"image",src:"/images/team/irina.jpg"}})])])]),t._v(" "),e("div",{staticClass:"specialist-card__content-right"},[e("p",[t._v("\n                    Незаменимый ивент-менеджер и куратор мероприятий. С\n                    удовольствием расскажет о секретах успеха вашей вечеринки,\n                    поделится свежими кейсами и даст дельные рекомендации по\n                    организации вашего события. Одним словом, все лайфхаки у\n                    вас будут!\n                  ")])])])])]),t._v(" "),e("section",{staticClass:"specialist-card"},[e("div",{staticClass:"specialist-card__inner"},[e("div",{staticClass:"specialist-card__content"},[e("div",[e("figure",{attrs:{itemscope:"",itemtype:"http://schema.org/ImageObject",title:"Александр (Разработчик)"}},[e("figcaption",{staticClass:"title-h4"},[t._v("\n                      Александр, "),e("br"),t._v("pазработчик\n                    ")]),t._v(" "),e("picture",[e("img",{staticClass:"specialist-card-illustration",attrs:{alt:"Александр (Разработчик)",itemprop:"image",src:"/images/team/alexander.jpg"}})])])]),t._v(" "),e("div",{staticClass:"specialist-card__content-right"},[e("p",[t._v("\n                    Да, у нас в штате есть собственный айтишник. Именно\n                    поэтому сайт всегда доступен, а информация оперативно\n                    обновляется)\n                  ")])])])])]),t._v(" "),e("p",{staticClass:"title-h2"},[t._v("Почему мы?")]),t._v(" "),e("p",[e("b",[t._v("Наша миссия проста:")]),t._v(" "),e("br"),t._v("у нас есть уникальная возможность\n            поделиться своими знаниями о вине и не только)) с помощью\n            интерактивных, познавательных игр и дегустаций.\n          ")]),t._v(" "),e("ol",[e("li",[t._v("\n              Мы с удовольствием работаем над каждым проектом, большим и не\n              очень, корпоративным, частным, деловым, загородным и\n              междугородным. Мы здесь, чтобы дарить вам приятные эмоции!\n            ")]),t._v(" "),e("li",[t._v("\n              Мы поможем реализовать все – от увлекательной дневной дегустации\n              вин с друзьями до делового ужина – в сочетании с вином, пивом,\n              крепкими спиртными напитками, сакэ или чем-то еще, что вы\n              захотите сочетать с вашим любимым блюдом!\n            ")]),t._v(" "),e("li",[t._v("\n              Персонализируем каждое мероприятие! Прислушиваемся к вашим\n              потребностям и желаниям, чтобы предложить что-то новое,\n              уникальное, специально для вас!\n            ")])]),t._v(" "),e("p",[e("b",[t._v("Важно:")]),t._v(" для наших винных игр не требуется глубоких знаний,\n            мы работает с неподготовленной аудиторией, с новичками, со всеми,\n            кому 18+\n          ")]),t._v(" "),e("p",[e("b",[t._v("Чем будем заниматься:")]),t._v(" будем много дегустировать, играть,\n            угадывать, беседовать, говорить о культуре пития, традициях\n            приготовления напитков, о тенденциях и моде. Что особенно в тренде\n            сегодня и сейчас. И как подобрать напитки для домашнего праздника\n            и романтической вечеринки для двоих. Обо всем простым и\n            удобоваримым языком!\n          ")]),t._v(" "),e("p",[e("b",[t._v("Для кого подходит наш формат:")]),t._v(" на вэлком, день рождения,\n            корпоратив, загородный тимбилдинг, для скучающих гостей на свадьбу\n            просто незаменим) и, конечно, на юбилей)\n          ")]),t._v(" "),e("p",[e("b",[t._v("18+")]),t._v(" Наши выездные интерактивы рекомендуются всем, кто любит\n            дегустировать крепкие напитки, обладает глубокой страстью к вину\n            во всех его разновидностях и проявлениях, считает себя знатоком\n            пива и гурманом или… фраза «Ну что, бахнем?» вам очень резонирует.\n            Для каждого у нас найдется что-нибудь эдакое!\n          ")]),t._v(" "),e("p",[e("b",[t._v("Помните!")]),t._v(" Что чрезмерное употребление спиртных напитков\n            вредит вашему здоровью! В дегустационный бокал наливается по 50 мл\n            напитка. Да, мы заботимся о Ваc!\n          ")])])}],!1,null,null,null);e.default=component.exports}}]);