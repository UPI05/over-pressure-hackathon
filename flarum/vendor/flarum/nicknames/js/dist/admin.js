(()=>{var e={n:n=>{var a=n&&n.__esModule?()=>n.default:()=>n;return e.d(a,{a}),a},d:(n,a)=>{for(var t in a)e.o(a,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:a[t]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};(()=>{"use strict";e.r(n);const a=flarum.core.compat["admin/app"];var t=e.n(a);const r=flarum.core.compat["common/components/Alert"];var s=e.n(r);const i=flarum.core.compat["common/components/Link"];var l=e.n(i);t().initializers.add("flarum/nicknames",(function(){t().extensionData.for("flarum-nicknames").registerSetting((function(){if("nickname"!==t().data.settings.display_name_driver)return m("div",{className:"Form-group"},m(s(),{dismissible:!1},t().translator.trans("flarum-nicknames.admin.wrong_driver",{a:m(l(),{href:t().route("basics")})})))})).registerSetting({setting:"flarum-nicknames.set_on_registration",type:"boolean",label:t().translator.trans("flarum-nicknames.admin.settings.set_on_registration_label")}).registerSetting({setting:"flarum-nicknames.random_username",type:"boolean",label:t().translator.trans("flarum-nicknames.admin.settings.random_username_label"),help:t().translator.trans("flarum-nicknames.admin.settings.random_username_help")}).registerSetting({setting:"flarum-nicknames.unique",type:"boolean",label:t().translator.trans("flarum-nicknames.admin.settings.unique_label")}).registerSetting({setting:"flarum-nicknames.regex",type:"text",label:t().translator.trans("flarum-nicknames.admin.settings.regex_label")}).registerSetting({setting:"flarum-nicknames.min",type:"number",label:t().translator.trans("flarum-nicknames.admin.settings.min_label")}).registerSetting({setting:"flarum-nicknames.max",type:"number",label:t().translator.trans("flarum-nicknames.admin.settings.max_label")}).registerPermission({icon:"fas fa-user-tag",label:t().translator.trans("flarum-nicknames.admin.permissions.edit_own_nickname_label"),permission:"user.editOwnNickname"},"start")}))})(),module.exports=n})();
//# sourceMappingURL=admin.js.map