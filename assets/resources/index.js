System.register("chunks:///_virtual/en.ts",["cc"],(function(e){"use strict";var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"9b6bdig2s5C04FjO9XY6Tr1","en",void 0);var t=window,s=e("languages",{104001:"Insufficient balance",104002:"network error",104003:"Will it cost 30 to use Freeze?",104004:"Do not remind me",104005:"Message",105001:"Target",105002:"Frozen"});t.languages||(t.languages={}),t.languages.en=s,n._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./en.ts","./th.ts","./zh.ts"],(function(){"use strict";return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/th.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"d31e5GNRYNOXqj0tyuPs9vA","th",void 0);var s=window,u=e("languages",{104001:"ยอดคงเหลือไม่เพียงพอ",104002:"ข้อผิดพลาดของเครือข่าย",104003:"การใช้ Freeze จะมีค่าใช้จ่าย 30 เหรียญหรือไม่?",104004:"อย่าเตือนฉัน",104005:"ข้อความ",105001:"ล็อค",105002:"แช่แข็ง"});s.languages||(s.languages={}),s.languages.th=u,t._RF.pop()}}}));

System.register("chunks:///_virtual/zh.ts",["cc"],(function(e){"use strict";var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"35603w11kBCe44KW6O4p1fC","zh",void 0);var s=window,t=e("languages",{104001:"余额不足",104002:"网路错误",104003:"将花费30使用冰冻？",104004:"不再提醒",104005:"信息",105001:"锁定",105002:"冰冻"});s.languages||(s.languages={}),s.languages.zh=t,n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});