/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vanilla-text-mask/dist/vanillaTextMask.js":
/*!****************************************************************!*\
  !*** ./node_modules/vanilla-text-mask/dist/vanillaTextMask.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r=e.inputElement,t=(0,u.default)(e),n=function(e){var r=e.target.value;return t.update(r)};return r.addEventListener("input",n),t.update(r.value),{textMaskInputElement:t,destroy:function(){r.removeEventListener("input",n)}}}Object.defineProperty(r,"__esModule",{value:!0}),r.conformToMask=void 0,r.maskInput=o;var i=t(2);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(i).default}});var a=t(5),u=n(a);r.default=o},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_",r.strFunction="function"},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,i.isArray)(r)){if(("undefined"==typeof r?"undefined":o(r))!==a.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");r=r(e,t),r=(0,i.processCaretTraps)(r).maskWithoutCaretTraps}var n=t.guide,s=void 0===n||n,f=t.previousConformedValue,d=void 0===f?l:f,c=t.placeholderChar,p=void 0===c?a.placeholderChar:c,v=t.placeholder,h=void 0===v?(0,i.convertMaskToPlaceholder)(r,p):v,m=t.currentCaretPosition,y=t.keepCharPositions,g=s===!1&&void 0!==d,b=e.length,C=d.length,k=h.length,x=r.length,P=b-C,T=P>0,O=m+(T?-P:0),M=O+Math.abs(P);if(y===!0&&!T){for(var w=l,S=O;S<M;S++)h[S]===p&&(w+=p);e=e.slice(0,O)+w+e.slice(O,b)}for(var _=e.split(l).map(function(e,r){return{char:e,isNew:r>=O&&r<M}}),j=b-1;j>=0;j--){var V=_[j].char;if(V!==p){var A=j>=O&&C===x;V===h[A?j-P:j]&&_.splice(j,1)}}var E=l,N=!1;e:for(var F=0;F<k;F++){var I=h[F];if(I===p){if(_.length>0)for(;_.length>0;){var L=_.shift(),R=L.char,J=L.isNew;if(R===p&&g!==!0){E+=p;continue e}if(r[F].test(R)){if(y===!0&&J!==!1&&d!==l&&s!==!1&&T){for(var W=_.length,q=null,z=0;z<W;z++){var B=_[z];if(B.char!==p&&B.isNew===!1)break;if(B.char===p){q=z;break}}null!==q?(E+=R,_.splice(q,1)):F--}else E+=R;continue e}N=!0}g===!1&&(E+=h.substr(F,k));break}E+=I}if(g&&T===!1){for(var D=null,G=0;G<E.length;G++)h[G]===p&&(D=G);E=null!==D?E.substr(0,D+1):l}return{conformedValue:E,meta:{someCharsRejected:N}}}Object.defineProperty(r,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=n;var i=t(3),a=t(1),u=[],l=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function i(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function u(e){for(var r=[],t=void 0;t=e.indexOf(f),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isArray=o,r.isString=i,r.isNumber=a,r.processCaretTraps=u;var l=t(1),s=[],f="[]"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.previousPlaceholder,a=void 0===i?o:i,u=e.currentCaretPosition,l=void 0===u?0:u,s=e.conformedValue,f=e.rawValue,d=e.placeholderChar,c=e.placeholder,p=e.indexesOfPipedChars,v=void 0===p?n:p,h=e.caretTrapIndexes,m=void 0===h?n:h;if(0===l||!f.length)return 0;var y=f.length,g=t.length,b=c.length,C=s.length,k=y-g,x=k>0,P=0===g,T=k>1&&!x&&!P;if(T)return l;var O=x&&(t===s||s===c),M=0,w=void 0,S=void 0;if(O)M=l-k;else{var _=s.toLowerCase(),j=f.toLowerCase(),V=j.substr(0,l).split(o),A=V.filter(function(e){return _.indexOf(e)!==-1});S=A[A.length-1];var E=a.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,N=c.substr(0,A.length).split(o).filter(function(e){return e!==d}).length,F=N!==E,I=void 0!==a[A.length-1]&&void 0!==c[A.length-2]&&a[A.length-1]!==d&&a[A.length-1]!==c[A.length-1]&&a[A.length-1]===c[A.length-2];!x&&(F||I)&&E>0&&c.indexOf(S)>-1&&void 0!==f[l]&&(w=!0,S=f[l]);for(var L=v.map(function(e){return _[e]}),R=L.filter(function(e){return e===S}).length,J=A.filter(function(e){return e===S}).length,W=c.substr(0,c.indexOf(d)).split(o).filter(function(e,r){return e===S&&f[r]!==e}).length,q=W+J+R+(w?1:0),z=0,B=0;B<C;B++){var D=_[B];if(M=B+1,D===S&&z++,z>=q)break}}if(x){for(var G=M,H=M;H<=b;H++)if(c[H]===d&&(G=H),c[H]===d||m.indexOf(H)!==-1||H===b)return G}else if(w){for(var K=M-1;K>=0;K--)if(s[K]===S||m.indexOf(K)!==-1||0===K)return K}else for(var Q=M;Q>=0;Q--)if(c[Q-1]===d||m.indexOf(Q)!==-1||0===Q)return Q}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,m=n.pipe,g=n.placeholderChar,b=void 0===g?v.placeholderChar:g,C=n.keepCharPositions,k=void 0!==C&&C,x=n.showMask,P=void 0!==x&&x;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(m=s.pipe,s=s.mask);var T=void 0,O=void 0;if(s instanceof Array&&(T=(0,p.convertMaskToPlaceholder)(s,b)),s!==!1){var M=a(t),w=o.selectionEnd,S=r.previousConformedValue,_=r.previousPlaceholder,j=void 0;if(("undefined"==typeof s?"undefined":l(s))===v.strFunction){if(O=s(M,{currentCaretPosition:w,previousConformedValue:S,placeholderChar:b}),O===!1)return;var V=(0,p.processCaretTraps)(O),A=V.maskWithoutCaretTraps,E=V.indexes;O=A,j=E,T=(0,p.convertMaskToPlaceholder)(O,b)}else O=s;var N={previousConformedValue:S,guide:d,placeholderChar:b,pipe:m,placeholder:T,currentCaretPosition:w,keepCharPositions:k},F=(0,c.default)(M,O,N),I=F.conformedValue,L=("undefined"==typeof m?"undefined":l(m))===v.strFunction,R={};L&&(R=m(I,u({rawValue:M},N)),R===!1?R={value:S,rejected:!0}:(0,p.isString)(R)&&(R={value:R}));var J=L?R.value:I,W=(0,f.default)({previousConformedValue:S,previousPlaceholder:_,conformedValue:J,placeholder:T,rawValue:M,currentCaretPosition:w,placeholderChar:b,indexesOfPipedChars:R.indexesOfPipedChars,caretTrapIndexes:j}),q=J===T&&0===W,z=P?T:h,B=q?z:J;r.previousConformedValue=B,r.previousPlaceholder=T,o.value!==B&&(o.value=B,i(o,W))}}}}}function i(e,r){document.activeElement===e&&(g?b(function(){return e.setSelectionRange(r,r,m)},0):e.setSelectionRange(r,r,m))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return h;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(4),f=n(s),d=t(2),c=n(d),p=t(3),v=t(1),h="",m="none",y="object",g="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),b="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ }),

/***/ "./src/js/functions/aboutSlider.js":
/*!*****************************************!*\
  !*** ./src/js/functions/aboutSlider.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (wrap) => {

    /*
    *
    ********************* Variables
    *
    * */

    const arrImg = wrap.querySelectorAll('.aboutus .slider_imgbox__active .img_el');
    const arrInfo = wrap.querySelectorAll('.aboutus .slider_info .slider_info__el .info_el');
    const arrControls = wrap.querySelectorAll('.aboutus .min_img__wrap img');
    const sliderRight = wrap.querySelector('.slider_btn .btn_next.aboutus_btn');
    const sliderLeft = wrap.querySelector('.slider_btn .btn_prev.aboutus_btn');
    let count = 0, yak = true, mT = true, mC = true;


    for (let i = 0; i < arrControls.length; i++) {
        arrControls[i].addEventListener('click', function (evt) {
            if (evt.target.tagName === "IMG") {
                removeClass(arrControls);
                removeClass(arrImg);
                removeClass(arrInfo);
                this.classList.add('active');
                arrImg[i].classList.add('active');
                arrInfo[i].classList.add('active');
            }
        })
    }

    function removeClass(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
        }
    }

    function findActive(arr, boll) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].classList.contains('active') && boll) {
                return (arr[i + 1]) ? i + 1 : 0;
            } else if (arr[i].classList.contains('active')) {
                return (arr[i - 1]) ? i - 1 : arr.length - 1;
            }
        }
    }


    /*function lastElem(arr, int, boll) {
        if (boll) {
            return (arr[int + 1]) ? int + 1 : 0;
        } else {
            return (arr[int - 1]) ? int - 1 : arr.length - 1;
        }
    }*/

    function moveSlider(boll) {
        if (yak) {
            /*count = lastElem(arrImg, count, boll);*/
            console.log(count);
            count = findActive(arrControls, boll);
            console.log(count);
            arrImg[count].classList.remove('active');
            for (let i = 0; i < arrImg.length; i++) {
                arrImg[i].classList.remove('active');
            }
            arrImg[count].classList.add('active');
        }
    }

    function moveText(boll) {
        if (mT) {
            /*countText = lastElem(arrInfo, countText, boll);*/
            count = findActive(arrControls, boll);
            for (let i = 0; i < arrInfo.length; i++) {
                arrInfo[i].classList.remove('active');
            }
            arrInfo[count].classList.add('active');
        }
    }

    function moveControls(boll) {
        if (mC) {
            /*countControls = lastElem(arrControls, countControls, boll);*/
            count = findActive(arrControls, boll);
            for (let i = 0; i < arrControls.length; i++) {
                arrControls[i].classList.remove('active');
            }
            arrControls[count].classList.add('active');
        }
    }

    sliderRight.addEventListener('click', (even) => {
        even.preventDefault();
        moveSlider(true);
        moveText(true);
        moveControls(true);
    });
    sliderLeft.addEventListener('click', (even) => {
        even.preventDefault();
        moveSlider(false);
        moveText(false);
        moveControls(false);
    });
    arrImg[0].classList.add('active');
    arrInfo[0].classList.add('active');
    arrControls[0].classList.add('active');

};

/***/ }),

/***/ "./src/js/functions/checkFunction.js":
/*!*******************************************!*\
  !*** ./src/js/functions/checkFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (checkbox, button) => {
    const accept = document.querySelectorAll(checkbox);
    const btnForm = document.querySelectorAll(button);
    for (let i = 0; i < accept.length; i++) {
        btnForm[i].setAttribute("disabled", true);
        btnForm[i].classList.add('no_active');
        accept[i].addEventListener('click', (event => {
            if (accept[i].checked) {
                btnForm[i].removeAttribute("disabled");
                btnForm[i].classList.remove('no_active');
            }
            else {
                btnForm[i].setAttribute("disabled", true);
                btnForm[i].classList.add('no_active');
            }
        }));
    }
};

/***/ }),

/***/ "./src/js/functions/faqTabs.js":
/*!*************************************!*\
  !*** ./src/js/functions/faqTabs.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (wrap) => {
    /*
    *
    ************ Variables
    *
    * */
    const arrTabs = wrap.querySelectorAll('.c_item');
    const arrInfo = wrap.querySelectorAll('.faq_a__items');
    const arrItem = wrap.querySelectorAll('.faq_a__items > .a_item');
    const arrItemTitle = wrap.querySelectorAll('.faq_a__items > .a_item > .a_item__title');
    /*slider wrap overflow*/
    const itemWrap = document.querySelector('.faq_c__items');
    /*slider line*/
    const itemLine = document.querySelector('.c_item_list');
    /*slider items*/
    const items = itemLine.querySelectorAll('.c_item');
    /*controls*/
    const btnRight = document.querySelector('.faq_more_next');
    const btnLeft = document.querySelector('.faq_more_prev');
    /*offset*/
    let widthArray = [0], offset = -26, step = 1, ostatok = 0;
    const getHeight = __webpack_require__(/*! ./getHeight */ "./src/js/functions/getHeight.js");
    let heightWrap = 0, heightElem = {}, classItem;


    function findItem(arrClick, arrSet) {
        for (let p = 0; p < arrClick.length; p++) {
            arrClick[p].addEventListener('click', function (evt) {
                evt.preventDefault();
                removeClass(arrClick);
                arrClick[p].classList.add('active');
                classItem = this.getAttribute('data-class');
                for (let i = 0; i < arrSet.length; i++) {
                    if (arrSet[i].getAttribute('data-class') === classItem) {
                        removeClass(arrSet);
                        arrSet[i].classList.add('active');
                    }
                }
            })
        }
    }

    findItem(arrTabs, arrInfo);


    function addActive(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.add('active');
        }
    }


    function removeClass(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
        }
    }


    function close(elem, maxHeight) {
        let step = maxHeight;
        let speed = 3;
        requestAnimationFrame(function close() {
            speed += speed / 6;
            step -= speed;
            elem.style.height = `${step}px`;
            if (step >= maxHeight) {
                requestAnimationFrame(close);
            } else {
                elem.style.height = `${maxHeight}`;
            }
        });
    }

    function open(elem, maxHeight) {
        let step = 50;
        let speed = 3;

        requestAnimationFrame(function open() {
            speed += speed / 6;
            step += speed;
            elem.style.height = `${step}px`;
            if (step <= maxHeight) {
                requestAnimationFrame(open);
            } else {
                elem.style.height = 'auto';
            }
        });
    }

    for (let i = 0; i < arrItem.length; i++) {
        heightElem[i] = getHeight(arrItemTitle[i]);
        arrItem[i].style.height = `${heightElem[i]}px`;
        arrItem[i].addEventListener('click', () => {

            if (arrItem[i].classList.toggle('active')) {
                heightWrap = getHeight(arrItem[i]);
                open(arrItem[i], heightWrap);
            } else {
                heightWrap = getHeight(arrItemTitle[i]);
                close(arrItem[i], heightWrap);
            }
        });

    }


    arrTabs[0].classList.add('active');
    arrInfo[0].classList.add('active');


    for (let i = 0; i < items.length; i++) {
        widthArray.push(Math.floor(items[i].offsetWidth));
    }

    function moveRight() {
        ostatok = itemLine.offsetWidth - itemWrap.offsetWidth - (offset + widthArray[step]);
        if (ostatok >= 0) {
            offset = offset + widthArray[step] + 25;
            itemLine.style.marginLeft = `${-offset}px`;
            step++;
        } else {
            itemLine.style.marginLeft = -(itemLine.offsetWidth - itemWrap.offsetWidth + 25) + 'px';
            btnRight.classList.remove('active');
        }

        if (offset > 10) {
            btnLeft.classList.add('active');
        } else {
            btnLeft.classList.remove('active');
        }
        if (step >= items.length) {
            step = 0;
            offset = -56;
        }
    }

    function moveLeft() {
        offset = 0;
        step = 1;
        ostatok = 0;
        itemLine.style.marginLeft = `${offset}px`;
        btnLeft.classList.remove('active');
        btnRight.classList.add('active');
        offset = -26;
    }

    btnRight.addEventListener('click', function (evt) {
        evt.preventDefault();
        moveRight();
    });

    btnLeft.addEventListener('click', function (evt) {
        evt.preventDefault();
        moveLeft();
    });


    btnVisible();

    function btnVisible() {
        if (itemLine.clientWidth > itemWrap.clientWidth) {
            btnRight.classList.add('active');
        } else {
            btnRight.classList.remove('active');
        }
    }
};

/***/ }),

/***/ "./src/js/functions/getHeight.js":
/*!***************************************!*\
  !*** ./src/js/functions/getHeight.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (elem) => {
    elem = (typeof elem === 'string') ? document.querySelector(elem) : elem;

    let styles = window.getComputedStyle(elem);
    let margin = parseFloat(styles['marginTop']) +
        parseFloat(styles['marginBottom']);

    return Math.round(elem.scrollHeight + margin);
};

/***/ }),

/***/ "./src/js/functions/menu.js":
/*!**********************************!*\
  !*** ./src/js/functions/menu.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (header) => {

    const navBtn = header.querySelector('.burger_menu');
    const nav = header.querySelector('.header_main__nav');
    const clsNav = header.querySelector('.nav_cls');

    if (navBtn !== null && nav !== null) {
        navBtn.addEventListener('click', (even) => {
            even.preventDefault();
            nav.classList.add('active');
        });
        clsNav.addEventListener('click', (even) => {
            even.preventDefault();
            nav.classList.remove('active');
        });
    }

};

/***/ }),

/***/ "./src/js/functions/popup.js":
/*!***********************************!*\
  !*** ./src/js/functions/popup.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = () => {

    /*
    *
    * ***************Variables
    *
    * */
    const popupArr = document.querySelectorAll('.popup');

    const callBtn = document.querySelectorAll('.feedback');
    const signUpBtn = document.querySelectorAll('.sign_in');
    const playBtn = document.querySelectorAll('.play_p');

    const popupCall = document.querySelector('.popup[data-popup-role="call"]');
    const popupSign = document.querySelector('.popup[data-popup-role="sign"]');
    const popupVideo = document.querySelector('.popup[data-popup-role="video"]');

    const clsBtn = document.querySelectorAll('.cls_btn');

    const removeScroll = __webpack_require__(/*! ./removeScroll */ "./src/js/functions/removeScroll.js");

    document.addEventListener('keydown', (evt) => {
       evt = evt || window.event;
       if (evt.keyCode === 27) {
           for (let i = 0; i < popupArr.length; i++) {
               popupArr[i].classList.remove('active');
               removeScroll(false, popupArr[i]);
           }
       }
    });

    function openPopup(arr, elem) {
        if (arr.length > 0 && elem !== 0) {
            for (let i = 0; i < arr.length; i++) {
                arr[i].addEventListener('click', (even) => {
                    even.preventDefault();
                    elem.classList.add('active');
                    removeScroll(true, elem);
                });
            }
        }
    }

    function clsPopup (arr, btn) {
        if (1) {
            for (let i = 0; i < btn.length; i++) {
                btn[i].addEventListener('click', (even) => {
                    even.preventDefault();
                    for (let o = 0; o < arr.length; o++) {
                        arr[i].classList.remove('active');
                        removeScroll(false, arr[i]);
                    }
                });
            }
        }
    }

    function clsContains (arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].addEventListener('click', (even) => {
                if (even.target.classList.contains('popup')) {
                    arr[i].classList.remove('active');
                    removeScroll(false, arr[i]);
                }
            });
        }
    }

    clsContains(popupArr);

    /*popupCall.addEventListener('click', (even) => {
        if (even.target.classList.contains('popup')) {
            popupCall.classList.remove('active');
            removeScroll(false, popupCall);
        }
    });*/

    clsPopup(popupArr, clsBtn);

    openPopup(callBtn, popupCall);
    openPopup(signUpBtn, popupSign);
    openPopup(playBtn, popupVideo);

};

/***/ }),

/***/ "./src/js/functions/portfolio.js":
/*!***************************************!*\
  !*** ./src/js/functions/portfolio.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = () => {
    /*
    *
    ************ Variables
    *
    * */
    /*slider wrap overflow*/
    const itemWrap = document.querySelector('.portfolio_c__wrap');
    /*portfolio elem*/
    const portfolioElem = document.querySelectorAll('.portfolio_elem');
    /*slider line*/
    const itemLine = document.querySelector('.p_item_list');
    /*slider items*/
    const items = itemLine.querySelectorAll('.c_item');
    /*controls*/
    const btnRight = document.querySelector('.portfolio_more_next');
    const btnLeft = document.querySelector('.portfolio_more_prev');
    /*offset*/
    let widthArray = [0], offset = -26, step = 1, ostatok = 0, classItem, arrSetInfo = [];

    btnVisible();

    function btnVisible() {
        if (itemLine.clientWidth > itemWrap.clientWidth) {
            btnRight.classList.add('active');
        } else {
            btnRight.classList.remove('active');
        }
    }




    function removeClass(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
        }
    }

    function addClass(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.add('hidden');
        }
    }

    function findItem(arrClick, arrSet) {
        for (let p = 0; p < arrClick.length; p++) {
            arrClick[p].addEventListener('click', function (evt) {
                evt.preventDefault();
                removeClass(arrClick);
                arrClick[p].classList.add('active');
                classItem = this.getAttribute('data-class');
                arrSetInfo = [];
                for (let i = 0; i < arrSet.length; i++) {
                    if (arrSet[i].getAttribute('data-class') === classItem) {
                        arrSetInfo.push(arrSet[i]);
                    }
                    removeClass(arrSet);
                    addClass(arrSet);
                }
                arrSetInfo.forEach(function (elem) {
                    elem.classList.add('active');
                })
            })
        }
    }

    findItem(items, portfolioElem);


    for (let i = 0; i < items.length; i++) {
        widthArray.push(Math.floor(items[i].offsetWidth));
    }

    function moveRight() {
        ostatok = itemLine.offsetWidth - itemWrap.offsetWidth - (offset + widthArray[step]);
        if (ostatok >= 0) {
            offset = offset + widthArray[step] + 13;
            itemLine.style.marginLeft = `${-offset}px`;
            step++;
        } else {
            itemLine.style.marginLeft = -(itemLine.offsetWidth - itemWrap.offsetWidth + 25) + 'px';
            btnRight.classList.remove('active');
        }

        if (offset > 10) {
            btnLeft.classList.add('active');
        } else {
            btnLeft.classList.remove('active');
        }
        if (step >= items.length) {
            step = 0;
            offset = -56;
        }
    }

    function moveLeft() {
        offset = 0;
        step = 1;
        ostatok = 0;
        itemLine.style.marginLeft = `${offset}px`;
        btnLeft.classList.remove('active');
        btnRight.classList.add('active');
        offset = -13;
    }

    btnRight.addEventListener('click', function (evt) {
        evt.preventDefault();
        moveRight();
    });

    btnLeft.addEventListener('click', function (evt) {
        evt.preventDefault();
        moveLeft();
    });


};

/***/ }),

/***/ "./src/js/functions/removeScroll.js":
/*!******************************************!*\
  !*** ./src/js/functions/removeScroll.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (boll, elem) => {

    if (boll) {
        let scrollWidth = window.innerWidth - document.body.clientWidth;
        document.body.style.cssText = `overflow:hidden; padding-right:${(scrollWidth)}px`;
        if (elem) {
            elem.style.width = `calc(100% - ${scrollWidth}px)`;
        }
    } else {
        document.body.removeAttribute('style');
        if (elem) {
            elem.removeAttribute('style');
        }
    }
};

/***/ }),

/***/ "./src/js/functions/stepSlider.js":
/*!****************************************!*\
  !*** ./src/js/functions/stepSlider.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (wrap) => {

    const arrElem = wrap.querySelectorAll('.slider_box_list .slider_item');
    const sliderLeft = wrap.querySelector('.slider_btn .btn_prev');
    const sliderRight = wrap.querySelector('.slider_btn .btn_next');
    const activeImg = wrap.querySelector('.slider_box_active .slider_img img');
    const activeContent = wrap.querySelector('.slider_box_active .slider_info');
    const activeWrap = wrap.querySelector('.slider_box_active');
    let count = 0, yak = true, countNext = 1;

    function lastElem(arr, int, boll) {
        if (boll) {
            return (arr[int + 1]) ? int + 1 : 0;
        } else {
            return (arr[int - 1]) ? int - 1 : arr.length - 1;
        }
    }

    function getDataSlide(int) {
        activeContent.innerHTML = arrElem[int].querySelector('.slider_info').innerHTML;
        activeImg.setAttribute('src', `${arrElem[int].querySelector('.slider_img img').getAttribute('src')}`);
    }

    function moveSlider(boll) {
        if (yak) {
            count = lastElem(arrElem, count, boll);
            countNext = lastElem(arrElem, countNext, boll);
            activeWrap.classList.remove('active');
            setTimeout(() => {
                getDataSlide(count);
                activeWrap.classList.add('active');
            }, 500);
            for (let i = 0; i < arrElem.length; i++) {
                arrElem[i].classList.remove('active');
            }
            arrElem[countNext].classList.add('active');
        }
    }

    sliderRight.addEventListener('click', (even) => {
        even.preventDefault();
        moveSlider(true);
    });
    sliderLeft.addEventListener('click', (even) => {
        even.preventDefault();
        moveSlider(false);
    });

    arrElem[1].classList.add('active');
    activeWrap.classList.add('active');
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
****************** Variables
* */
/*Google Map*/
const mapBlock = document.getElementById('map');
/*form*/
const form = document.querySelectorAll('form');
/*slider steps*/
const sliderSteps = document.querySelector('.steps .slider_box');
/*slider about*/
const sliderAbout = document.querySelector('.aboutus .slider_box');
/*faq tabs*/
const faqTabs = document.querySelector('.faq_questions');
/*popup arr*/
const popup = document.querySelectorAll('.popup');
/*menu*/
const header = document.querySelector('.header_main');
/*answer*/
const arrAnswer = document.querySelectorAll('.a_item');
/*tel input*/
const telInput = document.querySelectorAll('[name="phone"]');
/*portfolio*/
const portfolio = document.querySelector('.portfolio_list');

if (header !== null) {
    (__webpack_require__(/*! ./functions/menu */ "./src/js/functions/menu.js"))(header);
}

if (portfolio !== null) {
    __webpack_require__(/*! ./functions/portfolio */ "./src/js/functions/portfolio.js")();
}

/*Form checkbox check*/
if (form.length > 0) {
    const check = __webpack_require__(/*! ./functions/checkFunction */ "./src/js/functions/checkFunction.js");
    check('#accept', 'button');
}

/*Steps Slider*/
if (sliderSteps !== null) {
    (__webpack_require__(/*! ./functions/stepSlider */ "./src/js/functions/stepSlider.js"))(sliderSteps);
}

/*About Slider*/
if (sliderAbout !== null) {
    (__webpack_require__(/*! ./functions/aboutSlider */ "./src/js/functions/aboutSlider.js"))(sliderAbout);
}

/*Faq Tabs*/
if (faqTabs !== null) {
    (__webpack_require__(/*! ./functions/faqTabs */ "./src/js/functions/faqTabs.js"))(faqTabs);
}

/*Map Options*/
if (mapBlock !== null) {
    const scriptMap = document.createElement('script');
    scriptMap.setAttribute('src', 'dist/js/mapGoogle.js');
    document.body.appendChild(scriptMap);
}


/*popup*/
if (popup.length > 0) {
    (__webpack_require__(/*! ./functions/popup */ "./src/js/functions/popup.js"))();
}

/*phone mask*/
if (telInput.length > 0) {
    let vanillaTextMask = __webpack_require__(/*! vanilla-text-mask */ "./node_modules/vanilla-text-mask/dist/vanillaTextMask.js");

    let phoneMask = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

    for (let i = 0; i < telInput.length; i++) {
        vanillaTextMask.maskInput({
            inputElement: telInput[i],
            mask: phoneMask,
            keepCharPositions: true,
            guide: false
        });
    }
}

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map