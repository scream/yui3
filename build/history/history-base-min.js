YUI.add("history-base",function(G){var E=G.Lang,D=G.Object,C=YUI.namespace("Env.History"),A="change",F="historyBase",B=function(H){this._init.apply(this,arguments);};G.augment(B,G.Event.Target,null,null,{emitFacade:true,prefix:"history",preventable:false,queueable:true});if(!C._state){C._state={};}B.NAME=F;G.mix(B.prototype,{_init:function(H){this.publish(A,{broadcast:2,defaultFn:G.bind(this._defChangeFn,this)});if(E.isObject(H)&&!E.isFunction(H)&&!E.isArray(H)){this.add(G.merge(C._state,H));}},add:function(H){this._resolveChanges(G.merge(C._state,H));return this;},get:function(H){var I=C._state;if(H){return D.owns(I,H)?I[H]:undefined;}else{return G.mix({},I,true);}},replace:function(H){this._resolveChanges(G.merge(C._state,H),true);return this;},_fireChangeEvent:function(I,H){this.fire(H+"Change",{newVal:I.newVal,prevVal:I.prevVal});},_fireRemoveEvent:function(I,H){this.fire(H+"Remove",{prevVal:I});},_handleChanges:function(I,H){if(H){this._storeState(I.newState);}else{this.fire(A,{changed:I.changed,newVal:I.newState,prevVal:I.prevState,removed:I.removed});D.each(I.changed,this._fireChangeEvent,this);D.each(I.removed,this._fireRemoveEvent,this);}},_resolveChanges:function(L,I){var M={},H,K=C._state,J={};L=L||{};D.each(L,function(N,O){var P=K[O];if(N!==P){M[O]={newVal:N,prevVal:P};H=true;}},this);D.each(K,function(O,N){if(!D.owns(L,N)){J[N]=O;H=true;}},this);if(H){this._handleChanges({changed:M,newState:L,prevState:K,removed:J},I);}},_storeState:function(H){C._state=H||{};},_defChangeFn:function(H){this._storeState(H.newVal);}},true);G.HistoryBase=B;},"@VERSION@",{requires:["event-custom-complex"]});