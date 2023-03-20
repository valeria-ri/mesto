(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n,o){var i=e.data,u=e.handleCardClick,c=e.handleLikeClick,a=e.handleDeleteClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=i,this._id=i._id,this._name=i.name,this._link=i.link,this._likes=i.likes,this._handleCardClick=u,this._handleLikeClick=c,this._handleDeleteClick=a,this._cardConfig=r,this._userId=n,this._owner=i.owner._id,this._api=o}var r,n;return r=t,(n=[{key:"_getCardFromTemplate",value:function(){this._element=document.querySelector(this._cardConfig.cardTemplateSelector).content.querySelector(this._cardConfig.cardSelector).cloneNode(!0),this._cardImage=this._element.querySelector(this._cardConfig.cardImgSelector),this._likeButton=this._element.querySelector(this._cardConfig.cardLikeSelector),this._likeCount=this._element.querySelector(this._cardConfig.cardLikeCount),this._deleteButton=this._element.querySelector(this._cardConfig.cardDeleteSelector),this._cardTitle=this._element.querySelector(this._cardConfig.cardTitleSelector)}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"_deleteDisplay",value:function(){this._owner!==this._userId&&(this._deleteButton.style.display="none")}},{key:"isLikeActive",value:function(){var t=this;return this._likes.some((function(e){return t._userId===e._id}))}},{key:"_toggleLikeState",value:function(){this._likeCount.textContent=this._likes.length,this.isLikeActive()?this._likeButton.classList.add(this._cardConfig.cardActiveLikeSelector):this._likeButton.classList.remove(this._cardConfig.cardActiveLikeSelector)}},{key:"updateLike",value:function(t){this._likes=t.likes,this._toggleLikeState()}},{key:"_setCardData",value:function(){this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name}},{key:"_addEventListeners",value:function(){var t=this;this._deleteButton.addEventListener("click",(function(){return t._handleDeleteClick()})),this._likeButton.addEventListener("click",(function(){return t._handleLikeClick()})),this._cardImage.addEventListener("click",(function(){return t._handleCardClick(t._data)}))}},{key:"generateCard",value:function(){return this._getCardFromTemplate(),this._setCardData(),this._deleteDisplay(),this._toggleLikeState(),this._addEventListeners(),this._element}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();const n=r;function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}const u=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){return e.addItem(e._renderer(t))}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&i(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function l(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,e,r){return(e=f(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}var p=l((function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"_showInputError",(function(t){var e=n._form.querySelector(".".concat(t.id,"-error"));t.classList.add(n._config.inputErrorClass),e.classList.add(n._config.errorClass),e.textContent=t.validationMessage})),s(this,"_hideInputError",(function(t){var e=n._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(n._config.inputErrorClass),e.classList.remove(n._config.errorClass),e.textContent=""})),s(this,"_checkInputValidity",(function(t){t.validity.valid?n._hideInputError(t):n._showInputError(t)})),s(this,"_hasInvalidInput",(function(){return n._inputList.some((function(t){return!t.validity.valid}))})),s(this,"_toggleButtonState",(function(){n._hasInvalidInput()?(n._submitButton.classList.add(n._config.inactiveButtonClass),n._submitButton.disabled=!0):(n._submitButton.classList.remove(n._config.inactiveButtonClass),n._submitButton.disabled=!1)})),s(this,"_setEventListeners",(function(){n._toggleButtonState(),n._inputList.forEach((function(t){t.addEventListener("input",(function(){n._checkInputValidity(t),n._toggleButtonState()}))}))})),s(this,"enableValidation",(function(){return n._setEventListeners()})),s(this,"resetValidation",(function(){n._toggleButtonState(),n._inputList.forEach((function(t){n._hideInputError(t)}))})),this._config=e,this._form=r,this._submitButton=this._form.querySelector(this._config.submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector))}));const d=p;function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var m=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._popupsElementsConfig=r,this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add(this._popupsElementsConfig.openedPopupSelector),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove(this._popupsElementsConfig.openedPopupSelector),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains(t._popupsElementsConfig.openedPopupSelector)||e.target.classList.contains(t._popupsElementsConfig.closePopupBtnSelector))&&t.close()}))}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();const _=m;function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},S.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(n);if(o){var r=k(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t,e))._popupImg=r._popup.querySelector(r._popupsElementsConfig.imageSelector),r._popupCaption=r._popup.querySelector(r._popupsElementsConfig.captionSelector),r}return e=u,(r=[{key:"open",value:function(t){S(k(u.prototype),"open",this).call(this),this._popupCaption.textContent=t.name,this._popupImg.alt=t.name,this._popupImg.src=t.link}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(_);const C=w;function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},O.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(n);if(o){var r=L(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,r){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t,r))._handleFormSubmit=e,n._form=n._popup.querySelector(n._popupsElementsConfig.popupFormSelector),n._inputList=Array.from(n._form.querySelectorAll(n._popupsElementsConfig.popupInputSelector)),n._submitBtn=n._popup.querySelector(n._popupsElementsConfig.popupSubmitBtnSelector),n._submitBtnText=n._submitBtn.textContent,n}return e=u,r=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputList.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;O(L(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitBtn.textContent=t?e:this._submitBtnText}},{key:"close",value:function(){this._form.reset(),O(L(u.prototype),"close",this).call(this)}}],r&&j(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(_);const T=I;function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},q.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(n);if(o){var r=x(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t,e))._confirmBtn=r._popup.querySelector(r._popupsElementsConfig.popupSubmitBtnSelector),r._confirmBtnText=r._confirmBtn.textContent,r}return e=u,r=[{key:"handleConfirm",value:function(t){this._handleConfirmCallback=t}},{key:"setEventListeners",value:function(){var t=this;q(x(u.prototype),"setEventListeners",this).call(this),this._confirmBtn.addEventListener("click",(function(){t._handleConfirmCallback()}))}},{key:"renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Удаление...";this._confirmBtn.textContent=t?e:this._confirmBtnText}}],r&&A(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(_);const V=D;function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==J(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===J(o)?o:String(o)),n)}var o}const U=function(){function t(e){var r=e.userNameSelector,n=e.userJobSelector,o=e.userAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(r),this._userJob=document.querySelector(n),this._userAvatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return this._userInfo={name:this._userName.textContent,about:this._userJob.textContent},this._userInfo}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about,n=t.avatar;this._userName.textContent=e,this._userJob.textContent=r,this._userAvatar.style.backgroundImage="url(".concat(n,")")}}])&&N(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function G(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===F(o)?o:String(o)),n)}var o}const H=function(){function t(e){var r=e.baseUrl,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=r,this._headers=n}var e,r;return e=t,(r=[{key:"_getJson",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"_request",value:function(t,e){return fetch(t,e).then(this._getJson)}},{key:"getUserInfo",value:function(){return this._request("".concat(this._url,"/users/me"),{headers:this._headers})}},{key:"getInitialCards",value:function(){return this._request("".concat(this._url,"/cards"),{headers:this._headers})}},{key:"editProfile",value:function(t){var e=t.name,r=t.about;return this._request("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:r})})}},{key:"addCard",value:function(t){var e=t.name,r=t.link;return this._request("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:r})})}},{key:"deleteCard",value:function(t){return this._request("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"like",value:function(t){return this._request("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers})}},{key:"dislike",value:function(t){return this._request("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"editAvatar",value:function(t){var e=t.avatar;return this._request("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}}])&&G(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();var M={cardTemplateSelector:".card-template",cardSelector:".card",cardLikeSelector:".card__like",cardActiveLikeSelector:"card__like_active",cardLikeCount:".card__like-count",cardDeleteSelector:".card__delete",cardTitleSelector:".card__title",cardImgSelector:".card__image",cardGridSelector:".card-grid__items"},z={userNameSelector:".profile__name",userJobSelector:".profile__about",userAvatarSelector:".profile__avatar",popupEditSelector:".popup_type_edit",popupAvatarSelector:".popup_type_avatar",btnEdit:document.querySelector(".profile__edit-button"),btnAvatar:document.querySelector(".profile__avatar"),formEdit:document.forms.user,formAvatar:document.forms.avatar,userNameInput:document.querySelector(".popup__input_type_name"),userJobInput:document.querySelector(".popup__input_type_about")},$={popupAddSelector:".popup_type_add",btnAdd:document.querySelector(".profile__add-button"),formAdd:document.forms.newcard},K={popupImgSelector:".popup_type_image",openedPopupSelector:"popup_opened",closePopupBtnSelector:"popup__close-btn",imageSelector:".popup__image",captionSelector:".popup__caption",popupFormSelector:".popup__form",popupInputSelector:".popup__input",popupSubmitBtnSelector:".popup__submit-btn"};function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var W,X=new H({baseUrl:"https://nomoreparties.co/v1/cohort-61",headers:{authorization:"dc4e7a03-585d-4419-af57-53fac49f94a8","Content-Type":"application/json"}});Promise.all([X.getInitialCards(),X.getUserInfo()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],a=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];W=i._id,nt.setUserInfo(i),rt.renderItems(o)})).catch((function(t){return console.log(t)}));var Y=new C(K.popupImgSelector,K);Y.setEventListeners();var Z=new V(".popup_type_confirm",K);Z.setEventListeners();var tt,et=function(t){var e=new n({data:t,handleCardClick:function(){Y.open(t)},handleLikeClick:function(){e.isLikeActive()?X.dislike(t._id).then((function(t){return e.updateLike(t)})).catch((function(t){return console.log(t)})):X.like(t._id).then((function(t){return e.updateLike(t)})).catch((function(t){return console.log(t)}))},handleDeleteClick:function(){Z.handleConfirm((function(){Z.renderLoading(!0),X.deleteCard(t._id).then((function(){e.deleteCard(),Z.close()})).catch((function(t){return console.log(t)})).finally((function(){return Z.renderLoading(!1)}))})),Z.open()}},M,W,X);return e.generateCard()},rt=new u(et,M.cardGridSelector),nt=new U({userNameSelector:z.userNameSelector,userJobSelector:z.userJobSelector,userAvatarSelector:z.userAvatarSelector}),ot={};tt={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},Array.from(document.querySelectorAll(tt.formSelector)).forEach((function(t){var e=new d(tt,t),r=t.getAttribute("name");ot[r]=e,e.enableValidation()}));var it=new T(z.popupEditSelector,(function(t){it.renderLoading(!0),X.editProfile(t).then((function(t){nt.setUserInfo(t),it.close()})).catch((function(t){return console.log(t)})).finally((function(){return it.renderLoading(!1)}))}),K);it.setEventListeners(),z.btnEdit.addEventListener("click",(function(){ot.user.resetValidation();var t=nt.getUserInfo();it.setInputValues(t),it.open()}));var ut=new T($.popupAddSelector,(function(t){ut.renderLoading(!0),X.addCard(t).then((function(t){rt.addItem(et(t)),ut.close()})).catch((function(t){return console.log(t)})).finally((function(){return ut.renderLoading(!1)}))}),K);ut.setEventListeners(),$.btnAdd.addEventListener("click",(function(){ot.newcard.resetValidation(),ut.open()}));var ct=new T(z.popupAvatarSelector,(function(t){ct.renderLoading(!0),X.editAvatar(t).then((function(t){nt.setUserInfo(t),ct.close()})).catch((function(t){return console.log(t)})).finally((function(){return ct.renderLoading(!1)}))}),K);ct.setEventListeners(),z.btnAvatar.addEventListener("click",(function(){ot.avatar.resetValidation(),ct.open()}))})();