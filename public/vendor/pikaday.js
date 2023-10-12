!function(e,t){"use strict";var n;if("object"==typeof exports){try{n=require("moment")}catch(e){}module.exports=t(n)}else"function"==typeof define&&define.amd?define(function(e){try{n=e("moment")}catch(e){}return t(n)}):e.Pikaday=t(e.moment)}(this,function(n){"use strict";var o="function"==typeof n,s=!!window.addEventListener,d=window.document,h=window.setTimeout,r=function(e,t,n,i){s?e.addEventListener(t,n,!!i):e.attachEvent("on"+t,n)},i=function(e,t,n,i){s?e.removeEventListener(t,n,!!i):e.detachEvent("on"+t,n)},a=function(e,t,n){var i;d.createEvent?((i=d.createEvent("HTMLEvents")).initEvent(t,!0,!1),i=u(i,n),e.dispatchEvent(i)):d.createEventObject&&(i=d.createEventObject(),i=u(i,n),e.fireEvent("on"+t,i))},l=function(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")},p=function(e){return/Array/.test(Object.prototype.toString.call(e))},N=function(e){return/Date/.test(Object.prototype.toString.call(e))&&!isNaN(e.getTime())},C=function(e){N(e)&&e.setHours(0,0,0,0)},T=function(e,t){return e.getTime()===t.getTime()},u=function(e,t,n){var i,a;for(i in t)(a=void 0!==e[i])&&"object"==typeof t[i]&&null!==t[i]&&void 0===t[i].nodeName?N(t[i])?n&&(e[i]=new Date(t[i].getTime())):p(t[i])?n&&(e[i]=t[i].slice(0)):e[i]=u({},t[i],n):!n&&a||(e[i]=t[i]);return e},t=function(e){return e.month<0&&(e.year-=Math.ceil(Math.abs(e.month)/12),e.month+=12),11<e.month&&(e.year+=Math.floor(Math.abs(e.month)/12),e.month-=12),e},c={field:null,bound:void 0,position:"bottom left",reposition:!0,format:"YYYY-MM-DD",defaultDate:null,setDefaultDate:!1,firstDay:0,minDate:null,maxDate:null,yearRange:10,showWeekNumber:!1,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,numberOfMonths:1,mainCalendar:"left",container:void 0,i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},theme:null,onSelect:null,onOpen:null,onClose:null,onDraw:null},f=function(e,t,n){for(t+=e.firstDay;7<=t;)t-=7;return n?e.i18n.weekdaysShort[t]:e.i18n.weekdays[t]},E=function(e){if(e.isEmpty)return'<td class="is-empty"></td>';var t=[];return e.isDisabled&&t.push("is-disabled"),e.isToday&&t.push("is-today"),e.isSelected&&t.push("is-selected"),e.isInRange&&t.push("is-inrange"),e.isStartRange&&t.push("is-startrange"),e.isEndRange&&t.push("is-endrange"),'<td data-day="'+e.day+'" class="'+t.join(" ")+'"><button class="pika-button pika-day" type="button" data-pika-year="'+e.year+'" data-pika-month="'+e.month+'" data-pika-day="'+e.day+'">'+e.day+"</button></td>"},g=function(e,t,n,i,a){var o,s,r,l,h,d=e._o,u=n===d.minYear,c=n===d.maxYear,f='<div class="pika-title">',g=!0,m=!0;for(r=[],o=0;o<12;o++)r.push('<option value="'+(n===a?o-t:12+o-t)+'"'+(o===i?" selected":"")+(u&&o<d.minMonth||c&&o>d.maxMonth?"disabled":"")+">"+d.i18n.months[o]+"</option>");for(l='<div class="pika-label">'+d.i18n.months[i]+'<select class="pika-select pika-select-month" tabindex="-1">'+r.join("")+"</select></div>",s=p(d.yearRange)?(o=d.yearRange[0],d.yearRange[1]+1):(o=n-d.yearRange,1+n+d.yearRange),r=[];o<s&&o<=d.maxYear;o++)o>=d.minYear&&r.push('<option value="'+o+'"'+(o===n?" selected":"")+">"+o+"</option>");return h='<div class="pika-label">'+n+d.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+r.join("")+"</select></div>",d.showMonthAfterYear?f+=h+l:f+=l+h,u&&(0===i||d.minMonth>=i)&&(g=!1),c&&(11===i||d.maxMonth<=i)&&(m=!1),0===t&&(f+='<button class="pika-prev'+(g?"":" is-disabled")+'" type="button">'+d.i18n.previousMonth+"</button>"),t===e._o.numberOfMonths-1&&(f+='<button class="pika-next'+(m?"":" is-disabled")+'" type="button">'+d.i18n.nextMonth+"</button>"),f+"</div>"},Y=function(e,t){return'<table cellpadding="0" cellspacing="0" class="pika-table">'+function(e){var t,n=[];for(e.showWeekNumber&&n.push("<th></th>"),t=0;t<7;t++)n.push('<th scope="col"><abbr title="'+f(e,t)+'">'+f(e,t,!0)+"</abbr></th>");return"<thead>"+(e.isRTL?n.reverse():n).join("")+"</thead>"}(e)+("<tbody>"+t.join("")+"</tbody>")+"</table>"},e=function(e){var i=this,a=i.config(e);i._onMouseDown=function(e){if(i._v){var t=(e=e||window.event).target||e.srcElement;if(t){if(!l(t.parentNode,"is-disabled")){if(l(t,"pika-button")&&!l(t,"is-empty"))return i.setDate(new Date(t.getAttribute("data-pika-year"),t.getAttribute("data-pika-month"),t.getAttribute("data-pika-day"))),void(a.bound&&h(function(){i.hide(),a.field&&a.field.blur()},100));l(t,"pika-prev")?i.prevMonth():l(t,"pika-next")&&i.nextMonth()}if(l(t,"pika-select"))i._c=!0;else{if(!e.preventDefault)return e.returnValue=!1;e.preventDefault()}}}},i._onChange=function(e){var t=(e=e||window.event).target||e.srcElement;t&&(l(t,"pika-select-month")?i.gotoMonth(t.value):l(t,"pika-select-year")&&i.gotoYear(t.value))},i._onInputChange=function(e){var t;e.firedBy!==i&&(t=o?(t=n(a.field.value,a.format))&&t.isValid()?t.toDate():null:new Date(Date.parse(a.field.value)),N(t)&&i.setDate(t),i._v||i.show())},i._onInputFocus=function(){i.show()},i._onInputClick=function(){i.show()},i._onInputBlur=function(){var e=d.activeElement;do{if(l(e,"pika-single"))return}while(e=e.parentNode);i._c||(i._b=h(function(){i.hide()},50)),i._c=!1},i._onClick=function(e){var t=(e=e||window.event).target||e.srcElement,n=t;if(t){!s&&l(t,"pika-select")&&(t.onchange||(t.setAttribute("onchange","return;"),r(t,"change",i._onChange)));do{if(l(n,"pika-single")||n===a.trigger)return}while(n=n.parentNode);i._v&&t!==a.trigger&&n!==a.trigger&&i.hide()}},i.el=d.createElement("div"),i.el.className="pika-single"+(a.isRTL?" is-rtl":"")+(a.theme?" "+a.theme:""),r(i.el,"ontouchend"in d?"touchend":"mousedown",i._onMouseDown,!0),r(i.el,"change",i._onChange),a.field&&(a.container?a.container.appendChild(i.el):a.bound?d.body.appendChild(i.el):a.field.parentNode.insertBefore(i.el,a.field.nextSibling),r(a.field,"change",i._onInputChange),a.defaultDate||(o&&a.field.value?a.defaultDate=n(a.field.value,a.format).toDate():a.defaultDate=new Date(Date.parse(a.field.value)),a.setDefaultDate=!0));var t=a.defaultDate;N(t)?a.setDefaultDate?i.setDate(t,!0):i.gotoDate(t):i.gotoDate(new Date),a.bound?(this.hide(),i.el.className+=" is-bound",r(a.trigger,"click",i._onInputClick),r(a.trigger,"focus",i._onInputFocus),r(a.trigger,"blur",i._onInputBlur)):this.show()};return e.prototype={config:function(e){this._o||(this._o=u({},c,!0));var t=u(this._o,e,!0);t.isRTL=!!t.isRTL,t.field=t.field&&t.field.nodeName?t.field:null,t.theme="string"==typeof t.theme&&t.theme?t.theme:null,t.bound=!!(void 0!==t.bound?t.field&&t.bound:t.field),t.trigger=t.trigger&&t.trigger.nodeName?t.trigger:t.field,t.disableWeekends=!!t.disableWeekends,t.disableDayFn="function"==typeof t.disableDayFn?t.disableDayFn:null;var n=parseInt(t.numberOfMonths,10)||1;if(t.numberOfMonths=4<n?4:n,N(t.minDate)||(t.minDate=!1),N(t.maxDate)||(t.maxDate=!1),t.minDate&&t.maxDate&&t.maxDate<t.minDate&&(t.maxDate=t.minDate=!1),t.minDate&&this.setMinDate(t.minDate),t.maxDate&&(C(t.maxDate),t.maxYear=t.maxDate.getFullYear(),t.maxMonth=t.maxDate.getMonth()),p(t.yearRange)){var i=(new Date).getFullYear()-10;t.yearRange[0]=parseInt(t.yearRange[0],10)||i,t.yearRange[1]=parseInt(t.yearRange[1],10)||i}else t.yearRange=Math.abs(parseInt(t.yearRange,10))||c.yearRange,100<t.yearRange&&(t.yearRange=100);return t},toString:function(e){return N(this._d)?o?n(this._d).format(e||this._o.format):this._d.toDateString():""},getMoment:function(){return o?n(this._d):null},setMoment:function(e,t){o&&n.isMoment(e)&&this.setDate(e.toDate(),t)},getDate:function(){return N(this._d)?new Date(this._d.getTime()):null},setDate:function(e,t){if(!e)return this._d=null,this._o.field&&(this._o.field.value="",a(this._o.field,"change",{firedBy:this})),this.draw();if("string"==typeof e&&(e=new Date(Date.parse(e))),N(e)){var n=this._o.minDate,i=this._o.maxDate;N(n)&&e<n?e=n:N(i)&&i<e&&(e=i),this._d=new Date(e.getTime()),C(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),a(this._o.field,"change",{firedBy:this})),t||"function"!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate())}},gotoDate:function(e){var t=!0;if(N(e)){if(this.calendars){var n=new Date(this.calendars[0].year,this.calendars[0].month,1),i=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),a=e.getTime();i.setMonth(i.getMonth()+1),i.setDate(i.getDate()-1),t=a<n.getTime()||i.getTime()<a}t&&(this.calendars=[{month:e.getMonth(),year:e.getFullYear()}],"right"===this._o.mainCalendar&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustCalendars:function(){this.calendars[0]=t(this.calendars[0]);for(var e=1;e<this._o.numberOfMonths;e++)this.calendars[e]=t({month:this.calendars[0].month+e,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(e){isNaN(e)||(this.calendars[0].month=parseInt(e,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(e){isNaN(e)||(this.calendars[0].year=parseInt(e,10),this.adjustCalendars())},setMinDate:function(e){C(e),this._o.minDate=e,this._o.minYear=e.getFullYear(),this._o.minMonth=e.getMonth()},setMaxDate:function(e){this._o.maxDate=e},setStartRange:function(e){this._o.startRange=e},setEndRange:function(e){this._o.endRange=e},draw:function(e){if(this._v||e){var t=this._o,n=t.minYear,i=t.maxYear,a=t.minMonth,o=t.maxMonth,s="";this._y<=n&&(this._y=n,!isNaN(a)&&this._m<a&&(this._m=a)),this._y>=i&&(this._y=i,!isNaN(o)&&this._m>o&&(this._m=o));for(var r=0;r<t.numberOfMonths;r++)s+='<div class="pika-lendar">'+g(this,r,this.calendars[r].year,this.calendars[r].month,this.calendars[0].year)+this.render(this.calendars[r].year,this.calendars[r].month)+"</div>";if(this.el.innerHTML=s,t.bound&&"hidden"!==t.field.type&&h(function(){t.trigger.focus()},1),"function"==typeof this._o.onDraw){var l=this;h(function(){l._o.onDraw.call(l)},0)}}},adjustPosition:function(){var e,t,n,i,a,o,s,r,l,h;if(!this._o.container){if(this.el.style.position="absolute",t=e=this._o.trigger,n=this.el.offsetWidth,i=this.el.offsetHeight,a=window.innerWidth||d.documentElement.clientWidth,o=window.innerHeight||d.documentElement.clientHeight,s=window.pageYOffset||d.body.scrollTop||d.documentElement.scrollTop,"function"==typeof e.getBoundingClientRect)r=(h=e.getBoundingClientRect()).left+window.pageXOffset,l=h.bottom+window.pageYOffset;else for(r=t.offsetLeft,l=t.offsetTop+t.offsetHeight;t=t.offsetParent;)r+=t.offsetLeft,l+=t.offsetTop;(this._o.reposition&&a<r+n||-1<this._o.position.indexOf("right")&&0<r-n+e.offsetWidth)&&(r=r-n+e.offsetWidth),(this._o.reposition&&o+s<l+i||-1<this._o.position.indexOf("top")&&0<l-i-e.offsetHeight)&&(l=l-i-e.offsetHeight),this.el.style.left=r+"px",this.el.style.top=l+"px"}},render:function(e,t){var n,i=this._o,a=new Date,o=[31,(n=e,n%4==0&&n%100!=0||n%400==0?29:28),31,30,31,30,31,31,30,31,30,31][t],s=new Date(e,t,1).getDay(),r=[],l=[];C(a),0<i.firstDay&&(s-=i.firstDay)<0&&(s+=7);for(var h,d,u,c,f,g,m=o+s,p=m;7<p;)p-=7;m+=7-p;for(var y=0,D=0;y<m;y++){var v=new Date(e,t,y-s+1),_=!!N(this._d)&&T(v,this._d),b=T(v,a),w=y<s||o+s<=y,M=i.startRange&&T(i.startRange,v),k=i.endRange&&T(i.endRange,v),x=i.startRange&&i.endRange&&i.startRange<v&&v<i.endRange,R={day:y-s+1,month:t,year:e,isSelected:_,isToday:b,isDisabled:i.minDate&&v<i.minDate||i.maxDate&&v>i.maxDate||i.disableWeekends&&(void 0,0===(g=v.getDay())||6===g)||i.disableDayFn&&i.disableDayFn(v),isEmpty:w,isStartRange:M,isEndRange:k,isInRange:x};l.push(E(R)),7==++D&&(i.showWeekNumber&&l.unshift((d=y-s,u=t,c=e,f=void 0,f=new Date(c,0,1),'<td class="pika-week">'+Math.ceil(((new Date(c,u,d)-f)/864e5+f.getDay()+1)/7)+"</td>")),r.push((h=l,"<tr>"+(i.isRTL?h.reverse():h).join("")+"</tr>")),l=[],D=0)}return Y(i,r)},isVisible:function(){return this._v},show:function(){var e,t,n;this._v||(e=this.el,t="is-hidden",e.className=(n=(" "+e.className+" ").replace(" "+t+" "," ")).trim?n.trim():n.replace(/^\s+|\s+$/g,""),this._v=!0,this.draw(),this._o.bound&&(r(d,"click",this._onClick),this.adjustPosition()),"function"==typeof this._o.onOpen&&this._o.onOpen.call(this))},hide:function(){var e,t,n=this._v;!1!==n&&(this._o.bound&&i(d,"click",this._onClick),this.el.style.position="static",this.el.style.left="auto",this.el.style.top="auto",e=this.el,l(e,t="is-hidden")||(e.className=""===e.className?t:e.className+" "+t),this._v=!1,void 0!==n&&"function"==typeof this._o.onClose&&this._o.onClose.call(this))},destroy:function(){this.hide(),i(this.el,"mousedown",this._onMouseDown,!0),i(this.el,"change",this._onChange),this._o.field&&(i(this._o.field,"change",this._onInputChange),this._o.bound&&(i(this._o.trigger,"click",this._onInputClick),i(this._o.trigger,"focus",this._onInputFocus),i(this._o.trigger,"blur",this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},e}); }, 100);
                    }
                    return;
                }
                else if (hasClass(target, 'pika-prev')) {
                    self.prevMonth();
                }
                else if (hasClass(target, 'pika-next')) {
                    self.nextMonth();
                }
            }
            if (!hasClass(target, 'pika-select')) {
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                    return false;
                }
            } else {
                self._c = true;
            }
        };

        self._onChange = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }
            if (hasClass(target, 'pika-select-month')) {
                self.gotoMonth(target.value);
            }
            else if (hasClass(target, 'pika-select-year')) {
                self.gotoYear(target.value);
            }
        };

        self._onInputChange = function(e)
        {
            var date;

            if (e.firedBy === self) {
                return;
            }
            if (hasMoment) {
                date = moment(opts.field.value, opts.format);
                date = (date && date.isValid()) ? date.toDate() : null;
            }
            else {
                date = new Date(Date.parse(opts.field.value));
            }
            if (isDate(date)) {
              self.setDate(date);
            }
            if (!self._v) {
                self.show();
            }
        };

        self._onInputFocus = function()
        {
            self.show();
        };

        self._onInputClick = function()
        {
            self.show();
        };

        self._onInputBlur = function()
        {
            // IE allows pika div to gain focus; catch blur the input field
            var pEl = document.activeElement;
            do {
                if (hasClass(pEl, 'pika-single')) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));

            if (!self._c) {
                self._b = sto(function() {
                    self.hide();
                }, 50);
            }
            self._c = false;
        };

        self._onClick = function(e)
        {
            e = e || window.event;
            var target = e.target || e.srcElement,
                pEl = target;
            if (!target) {
                return;
            }
            if (!hasEventListeners && hasClass(target, 'pika-select')) {
                if (!target.onchange) {
                    target.setAttribute('onchange', 'return;');
                    addEvent(target, 'change', self._onChange);
                }
            }
            do {
                if (hasClass(pEl, 'pika-single') || pEl === opts.trigger) {
                    return;
                }
            }
            while ((pEl = pEl.parentNode));
            if (self._v && target !== opts.trigger && pEl !== opts.trigger) {
                self.hide();
            }
        };

        self.el = document.createElement('div');
        self.el.className = 'pika-single' + (opts.isRTL ? ' is-rtl' : '') + (opts.theme ? ' ' + opts.theme : '');

        addEvent(self.el, 'ontouchend' in document ? 'touchend' : 'mousedown', self._onMouseDown, true);
        addEvent(self.el, 'change', self._onChange);

        if (opts.field) {
            if (opts.container) {
                opts.container.appendChild(self.el);
            } else if (opts.bound) {
                document.body.appendChild(self.el);
            } else {
                opts.field.parentNode.insertBefore(self.el, opts.field.nextSibling);
            }
            addEvent(opts.field, 'change', self._onInputChange);

            if (!opts.defaultDate) {
                if (hasMoment && opts.field.value) {
                    opts.defaultDate = moment(opts.field.value, opts.format).toDate();
                } else {
                    opts.defaultDate = new Date(Date.parse(opts.field.value));
                }
                opts.setDefaultDate = true;
            }
        }

        var defDate = opts.defaultDate;

        if (isDate(defDate)) {
            if (opts.setDefaultDate) {
                self.setDate(defDate, true);
            } else {
                self.gotoDate(defDate);
            }
        } else {
            self.gotoDate(new Date());
        }

        if (opts.bound) {
            this.hide();
            self.el.className += ' is-bound';
            addEvent(opts.trigger, 'click', self._onInputClick);
            addEvent(opts.trigger, 'focus', self._onInputFocus);
            addEvent(opts.trigger, 'blur', self._onInputBlur);
        } else {
            this.show();
        }
    };


    /**
     * public Pikaday API
     */
    Pikaday.prototype = {


        /**
         * configure functionality
         */
        config: function(options)
        {
            if (!this._o) {
                this._o = extend({}, defaults, true);
            }

            var opts = extend(this._o, options, true);

            opts.isRTL = !!opts.isRTL;

            opts.field = (opts.field && opts.field.nodeName) ? opts.field : null;

            opts.theme = (typeof opts.theme) === 'string' && opts.theme ? opts.theme : null;

            opts.bound = !!(opts.bound !== undefined ? opts.field && opts.bound : opts.field);

            opts.trigger = (opts.trigger && opts.trigger.nodeName) ? opts.trigger : opts.field;

            opts.disableWeekends = !!opts.disableWeekends;

            opts.disableDayFn = (typeof opts.disableDayFn) === 'function' ? opts.disableDayFn : null;

            var nom = parseInt(opts.numberOfMonths, 10) || 1;
            opts.numberOfMonths = nom > 4 ? 4 : nom;

            if (!isDate(opts.minDate)) {
                opts.minDate = false;
            }
            if (!isDate(opts.maxDate)) {
                opts.maxDate = false;
            }
            if ((opts.minDate && opts.maxDate) && opts.maxDate < opts.minDate) {
                opts.maxDate = opts.minDate = false;
            }
            if (opts.minDate) {
                this.setMinDate(opts.minDate);
            }
            if (opts.maxDate) {
                setToStartOfDay(opts.maxDate);
                opts.maxYear  = opts.maxDate.getFullYear();
                opts.maxMonth = opts.maxDate.getMonth();
            }

            if (isArray(opts.yearRange)) {
                var fallback = new Date().getFullYear() - 10;
                opts.yearRange[0] = parseInt(opts.yearRange[0], 10) || fallback;
                opts.yearRange[1] = parseInt(opts.yearRange[1], 10) || fallback;
            } else {
                opts.yearRange = Math.abs(parseInt(opts.yearRange, 10)) || defaults.yearRange;
                if (opts.yearRange > 100) {
                    opts.yearRange = 100;
                }
            }

            return opts;
        },

        /**
         * return a formatted string of the current selection (using Moment.js if available)
         */
        toString: function(format)
        {
            return !isDate(this._d) ? '' : hasMoment ? moment(this._d).format(format || this._o.format) : this._d.toDateString();
        },

        /**
         * return a Moment.js object of the current selection (if available)
         */
        getMoment: function()
        {
            return hasMoment ? moment(this._d) : null;
        },

        /**
         * set the current selection from a Moment.js object (if available)
         */
        setMoment: function(date, preventOnSelect)
        {
            if (hasMoment && moment.isMoment(date)) {
                this.setDate(date.toDate(), preventOnSelect);
            }
        },

        /**
         * return a Date object of the current selection
         */
        getDate: function()
        {
            return isDate(this._d) ? new Date(this._d.getTime()) : null;
        },

        /**
         * set the current selection
         */
        setDate: function(date, preventOnSelect)
        {
            if (!date) {
                this._d = null;

                if (this._o.field) {
                    this._o.field.value = '';
                    fireEvent(this._o.field, 'change', { firedBy: this });
                }

                return this.draw();
            }
            if (typeof date === 'string') {
                date = new Date(Date.parse(date));
            }
            if (!isDate(date)) {
                return;
            }

            var min = this._o.minDate,
                max = this._o.maxDate;

            if (isDate(min) && date < min) {
                date = min;
            } else if (isDate(max) && date > max) {
                date = max;
            }

            this._d = new Date(date.getTime());
            setToStartOfDay(this._d);
            this.gotoDate(this._d);

            if (this._o.field) {
                this._o.field.value = this.toString();
                fireEvent(this._o.field, 'change', { firedBy: this });
            }
            if (!preventOnSelect && typeof this._o.onSelect === 'function') {
                this._o.onSelect.call(this, this.getDate());
            }
        },

        /**
         * change view to a specific date
         */
        gotoDate: function(date)
        {
            var newCalendar = true;

            if (!isDate(date)) {
                return;
            }

            if (this.calendars) {
                var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                    lastVisibleDate = new Date(this.calendars[this.calendars.length-1].year, this.calendars[this.calendars.length-1].month, 1),
                    visibleDate = date.getTime();
                // get the end of the month
                lastVisibleDate.setMonth(lastVisibleDate.getMonth()+1);
                lastVisibleDate.setDate(lastVisibleDate.getDate()-1);
                newCalendar = (visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate);
            }

            if (newCalendar) {
                this.calendars = [{
                    month: date.getMonth(),
                    year: date.getFullYear()
                }];
                if (this._o.mainCalendar === 'right') {
                    this.calendars[0].month += 1 - this._o.numberOfMonths;
                }
            }

            this.adjustCalendars();
        },

        adjustCalendars: function() {
            this.calendars[0] = adjustCalendar(this.calendars[0]);
            for (var c = 1; c < this._o.numberOfMonths; c++) {
                this.calendars[c] = adjustCalendar({
                    month: this.calendars[0].month + c,
                    year: this.calendars[0].year
                });
            }
            this.draw();
        },

        gotoToday: function()
        {
            this.gotoDate(new Date());
        },

        /**
         * change view to a specific month (zero-index, e.g. 0: January)
         */
        gotoMonth: function(month)
        {
            if (!isNaN(month)) {
                this.calendars[0].month = parseInt(month, 10);
                this.adjustCalendars();
            }
        },

        nextMonth: function()
        {
            this.calendars[0].month++;
            this.adjustCalendars();
        },

        prevMonth: function()
        {
            this.calendars[0].month--;
            this.adjustCalendars();
        },

        /**
         * change view to a specific full year (e.g. "2012")
         */
        gotoYear: function(year)
        {
            if (!isNaN(year)) {
                this.calendars[0].year = parseInt(year, 10);
                this.adjustCalendars();
            }
        },

        /**
         * change the minDate
         */
        setMinDate: function(value)
        {
            setToStartOfDay(value);
            this._o.minDate = value;
            this._o.minYear  = value.getFullYear();
            this._o.minMonth = value.getMonth();
        },

        /**
         * change the maxDate
         */
        setMaxDate: function(value)
        {
            this._o.maxDate = value;
        },

        setStartRange: function(value)
        {
            this._o.startRange = value;
        },

        setEndRange: function(value)
        {
            this._o.endRange = value;
        },

        /**
         * refresh the HTML
         */
        draw: function(force)
        {
            if (!this._v && !force) {
                return;
            }
            var opts = this._o,
                minYear = opts.minYear,
                maxYear = opts.maxYear,
                minMonth = opts.minMonth,
                maxMonth = opts.maxMonth,
                html = '';

            if (this._y <= minYear) {
                this._y = minYear;
                if (!isNaN(minMonth) && this._m < minMonth) {
                    this._m = minMonth;
                }
            }
            if (this._y >= maxYear) {
                this._y = maxYear;
                if (!isNaN(maxMonth) && this._m > maxMonth) {
                    this._m = maxMonth;
                }
            }

            for (var c = 0; c < opts.numberOfMonths; c++) {
                html += '<div class="pika-lendar">' + renderTitle(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year) + this.render(this.calendars[c].year, this.calendars[c].month) + '</div>';
            }

            this.el.innerHTML = html;

            if (opts.bound) {
                if(opts.field.type !== 'hidden') {
                    sto(function() {
                        opts.trigger.focus();
                    }, 1);
                }
            }

            if (typeof this._o.onDraw === 'function') {
                var self = this;
                sto(function() {
                    self._o.onDraw.call(self);
                }, 0);
            }
        },

        adjustPosition: function()
        {
            var field, pEl, width, height, viewportWidth, viewportHeight, scrollTop, left, top, clientRect;

            if (this._o.container) return;

            this.el.style.position = 'absolute';

            field = this._o.trigger;
            pEl = field;
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
            viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

            if (typeof field.getBoundingClientRect === 'function') {
                clientRect = field.getBoundingClientRect();
                left = clientRect.left + window.pageXOffset;
                top = clientRect.bottom + window.pageYOffset;
            } else {
                left = pEl.offsetLeft;
                top  = pEl.offsetTop + pEl.offsetHeight;
                while((pEl = pEl.offsetParent)) {
                    left += pEl.offsetLeft;
                    top  += pEl.offsetTop;
                }
            }

            // default position is bottom & left
            if ((this._o.reposition && left + width > viewportWidth) ||
                (
                    this._o.position.indexOf('right') > -1 &&
                    left - width + field.offsetWidth > 0
                )
            ) {
                left = left - width + field.offsetWidth;
            }
            if ((this._o.reposition && top + height > viewportHeight + scrollTop) ||
                (
                    this._o.position.indexOf('top') > -1 &&
                    top - height - field.offsetHeight > 0
                )
            ) {
                top = top - height - field.offsetHeight;
            }

            this.el.style.left = left + 'px';
            this.el.style.top = top + 'px';
        },

        /**
         * render HTML for a particular month
         */
        render: function(year, month)
        {
            var opts   = this._o,
                now    = new Date(),
                days   = getDaysInMonth(year, month),
                before = new Date(year, month, 1).getDay(),
                data   = [],
                row    = [];
            setToStartOfDay(now);
            if (opts.firstDay > 0) {
                before -= opts.firstDay;
                if (before < 0) {
                    before += 7;
                }
            }
            var cells = days + before,
                after = cells;
            while(after > 7) {
                after -= 7;
            }
            cells += 7 - after;
            for (var i = 0, r = 0; i < cells; i++)
            {
                var day = new Date(year, month, 1 + (i - before)),
                    isSelected = isDate(this._d) ? compareDates(day, this._d) : false,
                    isToday = compareDates(day, now),
                    isEmpty = i < before || i >= (days + before),
                    isStartRange = opts.startRange && compareDates(opts.startRange, day),
                    isEndRange = opts.endRange && compareDates(opts.endRange, day),
                    isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
                    isDisabled = (opts.minDate && day < opts.minDate) ||
                                 (opts.maxDate && day > opts.maxDate) ||
                                 (opts.disableWeekends && isWeekend(day)) ||
                                 (opts.disableDayFn && opts.disableDayFn(day)),
                    dayConfig = {
                        day: 1 + (i - before),
                        month: month,
                        year: year,
                        isSelected: isSelected,
                        isToday: isToday,
                        isDisabled: isDisabled,
                        isEmpty: isEmpty,
                        isStartRange: isStartRange,
                        isEndRange: isEndRange,
                        isInRange: isInRange
                    };

                row.push(renderDay(dayConfig));

                if (++r === 7) {
                    if (opts.showWeekNumber) {
                        row.unshift(renderWeek(i - before, month, year));
                    }
                    data.push(renderRow(row, opts.isRTL));
                    row = [];
                    r = 0;
                }
            }
            return renderTable(opts, data);
        },

        isVisible: function()
        {
            return this._v;
        },

        show: function()
        {
            if (!this._v) {
                removeClass(this.el, 'is-hidden');
                this._v = true;
                this.draw();
                if (this._o.bound) {
                    addEvent(document, 'click', this._onClick);
                    this.adjustPosition();
                }
                if (typeof this._o.onOpen === 'function') {
                    this._o.onOpen.call(this);
                }
            }
        },

        hide: function()
        {
            var v = this._v;
            if (v !== false) {
                if (this._o.bound) {
                    removeEvent(document, 'click', this._onClick);
                }
                this.el.style.position = 'static'; // reset
                this.el.style.left = 'auto';
                this.el.style.top = 'auto';
                addClass(this.el, 'is-hidden');
                this._v = false;
                if (v !== undefined && typeof this._o.onClose === 'function') {
                    this._o.onClose.call(this);
                }
            }
        },

        /**
         * GAME OVER
         */
        destroy: function()
        {
            this.hide();
            removeEvent(this.el, 'mousedown', this._onMouseDown, true);
            removeEvent(this.el, 'change', this._onChange);
            if (this._o.field) {
                removeEvent(this._o.field, 'change', this._onInputChange);
                if (this._o.bound) {
                    removeEvent(this._o.trigger, 'click', this._onInputClick);
                    removeEvent(this._o.trigger, 'focus', this._onInputFocus);
                    removeEvent(this._o.trigger, 'blur', this._onInputBlur);
                }
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
        }

    };

    return Pikaday;

}));
