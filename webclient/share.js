(function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w=[].slice,E=function(e,t){return function(){return e.apply(t,arguments)}},S=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};window.sharejs=f={version:"0.5.0"},p=function(e){return setTimeout(e,0)},r=function(){function e(){}return e.prototype.on=function(e,t){var n;return this._events||(this._events={}),(n=this._events)[e]||(n[e]=[]),this._events[e].push(t),this},e.prototype.removeListener=function(e,t){var n,r,i,s=this;this._events||(this._events={}),r=(i=this._events)[e]||(i[e]=[]),n=0;while(n<r.length)r[n]===t&&(r[n]=void 0),n++;return p(function(){var t;return s._events[e]=function(){var n,r,i=this._events[e],s=[];for(n=0,r=i.length;n<r;n++)t=i[n],t&&s.push(t);return s}.call(s)}),this},e.prototype.emit=function(){var e,t,n,r,i,s=arguments[0],o=2<=arguments.length?w.call(arguments,1):[];if((r=this._events)!=null?!r[s]:!void 0)return this;i=this._events[s];for(t=0,n=i.length;t<n;t++)e=i[t],e&&e.apply(this,o);return this},e}(),r.mixin=function(e){var t=e.prototype||e;return t.on=r.prototype.on,t.removeListener=r.prototype.removeListener,t.emit=r.prototype.emit,e},f._bt=o=function(e,t,n,r){var i,s=function(e,n,r,i){return t(r,e,n,"left"),t(i,n,e,"right")};return e.transformX=e.transformX=i=function(e,t){var o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T;n(e),n(t),l=[];for(v=0,b=t.length;v<b;v++){d=t[v],f=[],o=0;while(o<e.length){c=[],s(e[o],d,f,c),o++;if(c.length!==1){if(c.length===0){x=e.slice(o);for(m=0,w=x.length;m<w;m++)u=x[m],r(f,u);d=null;break}T=i(e.slice(o),c),a=T[0],p=T[1];for(g=0,E=a.length;g<E;g++)u=a[g],r(f,u);for(y=0,S=p.length;y<S;y++)h=p[y],r(l,h);d=null;break}d=c[0]}d!=null&&r(l,d),e=f}return[e,l]},e.transform=e.transform=function(e,n,r){var s,o,u,a,f;if(r!=="left"&&r!=="right")throw new Error("type must be 'left' or 'right'");return n.length===0?e:e.length===1&&n.length===1?t([],e[0],n[0],r):r==="left"?(a=i(e,n),s=a[0],u=a[1],s):(f=i(n,e),u=f[0],o=f[1],o)}},v={},v.name="text",v.create=function(){return""},d=function(e,t,n){return e.slice(0,t)+n+e.slice(t)},u=function(e){var t,n;if(typeof e.p!="number")throw new Error("component missing position field");n=typeof e.i,t=typeof e.d;if(!(n==="string"^t==="string"))throw new Error("component needs an i or d field");if(!(e.p>=0))throw new Error("position cannot be negative")},a=function(e){var t,n,r;for(n=0,r=e.length;n<r;n++)t=e[n],u(t);return!0},v.apply=function(e,t){var n,r,i,s;a(t);for(i=0,s=t.length;i<s;i++){n=t[i];if(n.i!=null)e=d(e,n.p,n.i);else{r=e.slice(n.p,n.p+n.d.length);if(n.d!==r)throw new Error("Delete component '"+n.d+"' does not match deleted text '"+r+"'");e=e.slice(0,n.p)+e.slice(n.p+n.d.length)}}return e},v._append=s=function(e,t){var n,r,i;if(t.i===""||t.d==="")return;return e.length===0?e.push(t):(n=e[e.length-1],n.i!=null&&t.i!=null&&n.p<=(r=t.p)&&r<=n.p+n.i.length?e[e.length-1]={i:d(n.i,t.p-n.p,t.i),p:n.p}:n.d!=null&&t.d!=null&&t.p<=(i=n.p)&&i<=t.p+t.d.length?e[e.length-1]={d:d(t.d,n.p-t.p,n.d),p:t.p}:e.push(t))},v.compose=function(e,t){var n,r,i,o;a(e),a(t),r=e.slice();for(i=0,o=t.length;i<o;i++)n=t[i],s(r,n);return r},v.compress=function(e){return v.compose([],e)},v.normalize=function(e){var t,n,r,i,o=[];if(e.i!=null||e.p!=null)e=[e];for(n=0,r=e.length;n<r;n++)t=e[n],(i=t.p)==null&&(t.p=0),s(o,t);return o},g=function(e,t,n){return t.i!=null?t.p<e||t.p===e&&n?e+t.i.length:e:e<=t.p?e:e<=t.p+t.d.length?t.p:e-t.d.length},v.transformCursor=function(e,t,n){var r,i,s,o=n==="right";for(i=0,s=t.length;i<s;i++)r=t[i],e=g(e,r,o);return e},v._tc=m=function(e,t,n,r){var i,o,u,f,l,c;a([t]),a([n]);if(t.i!=null)s(e,{i:t.i,p:g(t.p,n,r==="right")});else if(n.i!=null)c=t.d,t.p<n.p&&(s(e,{d:c.slice(0,n.p-t.p),p:t.p}),c=c.slice(n.p-t.p)),c!==""&&s(e,{d:c,p:t.p+n.i.length});else if(t.p>=n.p+n.d.length)s(e,{d:t.d,p:t.p-n.d.length});else if(t.p+t.d.length<=n.p)s(e,t);else{f={d:"",p:t.p},t.p<n.p&&(f.d=t.d.slice(0,n.p-t.p)),t.p+t.d.length>n.p+n.d.length&&(f.d+=t.d.slice(n.p+n.d.length-t.p)),u=Math.max(t.p,n.p),o=Math.min(t.p+t.d.length,n.p+n.d.length),i=t.d.slice(u-t.p,o-t.p),l=n.d.slice(u-n.p,o-n.p);if(i!==l)throw new Error("Delete ops delete different text in the same region of the document");f.d!==""&&(f.p=g(f.p,n),s(e,f))}return e},h=function(e){return e.i!=null?{d:e.i,p:e.p}:{i:e.d,p:e.p}},v.invert=function(e){var t,n,r,i=e.slice().reverse(),s=[];for(n=0,r=i.length;n<r;n++)t=i[n],s.push(h(t));return s},f.types||(f.types={}),o(v,m,a,s),f.types.text=v,v.api={provides:{text:!0},getLength:function(){return this.snapshot.length},getText:function(){return this.snapshot},insert:function(e,t,n){var r=[{p:e,i:t}];return this.submitOp(r,n),r},del:function(e,t,n){var r=[{p:e,d:this.snapshot.slice(e,e+t)}];return this.submitOp(r,n),r},_register:function(){return this.on("remoteop",function(e){var t,n,r,i=[];for(n=0,r=e.length;n<r;n++)t=e[n],t.i!==void 0?i.push(this.emit("insert",t.p,t.i)):i.push(this.emit("delete",t.p,t.d));return i})}},f.extendDoc=function(e,t){return n.prototype[e]=t},n=function(){function e(e,t,n){this.connection=e,this.name=t,this.shout=E(this.shout,this),this.flushCursor=E(this.flushCursor,this),this.flush=E(this.flush,this),n||(n={}),this.version=n.v,this.snapshot=n.snaphot,n.type&&this._setType(n.type),this.state="closed",this.autoOpen=!1,this._create=n.create,this.cursor=null,this.cursorDirty=!1,this.cursors={},this.inflightOp=null,this.inflightCallbacks=[],this.inflightSubmittedIds=[],this.pendingOp=null,this.pendingCallbacks=[],this.serverOps={}}return e.prototype._xf=function(e,t){var n,r;return this.type.transformX?this.type.transformX(e,t):(n=this.type.transform(e,t,"left"),r=this.type.transform(t,e,"right"),[n,r])},e.prototype._otApply=function(e,t){var n=this.snapshot;this.snapshot=this.type.apply(this.snapshot,e),this.emit("change",e,n);if(t)return this.emit("remoteop",e,n)},e.prototype._connectionStateChanged=function(e,t){switch(e){case"disconnected":this.state="closed",this.inflightOp&&this.inflightSubmittedIds.push(this.connection.id),this.emit("closed");break;case"ok":this.autoOpen&&this.open();break;case"stopped":typeof this._openCallback=="function"&&this._openCallback(t)}return this.emit(e,t)},e.prototype._setType=function(e){var t,n,r;typeof e=="string"&&(e=y[e]);if(!e||!e.compose)throw new Error("Support for types without compose() is not implemented");this.type=e;if(e.api){r=e.api;for(t in r)n=r[t],this[t]=n;return typeof this._register=="function"?this._register():void 0}return this.provides={}},e.prototype._onMessage=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,x,T,N,C,k;switch(!1){case e.open!==!0:return this.state="open",this._create=!1,this.created==null&&(this.created=!!e.create),e.type&&this._setType(e.type),e.create?(this.created=!0,this.snapshot=this.type.create()):(this.created!==!0&&(this.created=!1),e.snapshot!==void 0&&(this.snapshot=e.snapshot)),e.meta&&(this.meta=e.meta),e.v!=null&&(this.version=e.v),this.inflightOp?(c={doc:this.name,op:this.inflightOp,v:this.version},this.inflightSubmittedIds.length&&(c.dupIfSource=this.inflightSubmittedIds),this.connection.send(c)):this.flush(),this.emit("open"),typeof this._openCallback=="function"?this._openCallback(null):void 0;case e.open!==!1:return e.error&&(typeof console!="undefined"&&console!==null&&console.error("Could not open document: "+e.error),this.emit("error",e.error),typeof this._openCallback=="function"&&this._openCallback(e.error)),this.state="closed",this.emit("closed"),typeof this._closeCallback=="function"&&this._closeCallback(),this._closeCallback=null;case e.op!==null||o!=="Op already submitted":break;case!(e.op===void 0&&e.v!==void 0||e.op&&(y=e.meta.source,S.call(this.inflightSubmittedIds,y)>=0)):a=this.inflightOp,this.inflightOp=null,this.inflightSubmittedIds.length=0,o=e.error;if(o){this.type.invert?(h=this.type.invert(a),this.pendingOp&&(b=this._xf(this.pendingOp,h),this.pendingOp=b[0],h=b[1]),this._otApply(h,!0)):this.emit("error","Op apply failed ("+o+") and the op could not be reverted"),w=this.inflightCallbacks;for(d=0,m=w.length;d<m;d++)n=w[d],n(o)}else{if(e.v!==this.version)throw new Error("Invalid version from server");this.serverOps[this.version]=a,this.version++,this.emit("acknowledge",a),E=this.inflightCallbacks;for(v=0,g=E.length;v<g;v++)n=E[v],n(null,a)}return this.flush(),this.flushCursor();case!e.op:if(e.v<this.version)return;if(e.doc!==this.name)return this.emit("error","Expected docName '"+this.name+"' but got "+e.doc);if(e.v!==this.version)return this.emit("error","Expected version "+this.version+" but got "+e.v);f=e.op,this.serverOps[this.version]=f,s=f,this.inflightOp&&(x=this._xf(this.inflightOp,s),this.inflightOp=x[0],s=x[1]),this.pendingOp&&(T=this._xf(this.pendingOp,s),this.pendingOp=T[0],s=T[1]),N=this.cursors;for(r in N)i=N[r],this.cursors[r]=this.type.transformCursor(i,f,r===e.meta.source.toString());return this.cursor&&(this.cursor=this.type.transformCursor(this.cursor,f,!1)),this.version++,this._otApply(s,!0),this.emit("cursors");case!e.cursor:C=e.cursor;for(u in C)t=C[u],t===null?delete this.cursors[u]:(this.inflightOp&&(t=this.type.transformCursor(t,this.inflightOp,!1)),this.pendingOp&&(t=this.type.transformCursor(t,this.pendingOp,!1)),this.cursors[u]=t);return this.emit("cursors");case!e.meta:k=e.meta,l=k.path,p=k.value;switch(l!=null?l[0]:void 0){case"shout":return this.emit("shout",p);default:return typeof console!="undefined"&&console!==null?console.warn("Unhandled meta op:",e):void 0}break;default:return typeof console!="undefined"&&console!==null?console.warn("Unhandled document message:",e):void 0}},e.prototype.flush=function(){if(this.connection.state!=="ok"||this.inflightOp!==null||this.pendingOp===null)return;return this.inflightOp=this.pendingOp,this.inflightCallbacks=this.pendingCallbacks,this.pendingOp=null,this.pendingCallbacks=[],this.connection.send({doc:this.name,op:this.inflightOp,v:this.version})},e.prototype.flushCursor=function(){if(this.cursorDirty===!1||this.inflightOp)return;return this.connection.send({doc:this.name,cursor:this.cursor,v:this.version}),this.cursorDirty=!1},e.prototype.submitOp=function(e,t){var n,r,i;this.type.normalize!=null&&(e=this.type.normalize(e)),this.snapshot=this.type.apply(this.snapshot,e),i=this.cursors;for(n in i)r=i[n],this.cursors[n]=this.type.transformCursor(r,e,!1);return this.cursor&&(this.cursor=this.type.transformCursor(this.cursor,e,!0)),this.cursorDirty=!1,this.pendingOp!==null?this.pendingOp=this.type.compose(this.pendingOp,e):this.pendingOp=e,t&&this.pendingCallbacks.push(t),this.emit("change",e),setTimeout(this.flush,0)},e.prototype.setCursor=function(e){var t;if(this.cursor&&(typeof (t=this.type).cursorEq=="function"?t.cursorEq(this.cursor,e):void 0))return;return this.cursor=e,this.cursorDirty=!0,setTimeout(this.flushCursor,0)},e.prototype.shout=function(e){return this.connection.send({doc:this.name,meta:{path:["shout"],value:e}})},e.prototype.open=function(e){var t,n=this;this.autoOpen=!0;if(this.state!=="closed")return;return t={doc:this.name,open:!0},this.snapshot===void 0&&(t.snapshot=null),this.type&&(t.type=this.type.name),this.version!=null&&(t.v=this.version),this._create&&(t.create=!0),this.connection.send(t),this.state="opening",this._openCallback=function(t){return n._openCallback=null,typeof e=="function"?e(t):void 0}},e.prototype.close=function(e){return this.autoOpen=!1,this.state==="closed"?typeof e=="function"?e():void 0:(this.connection.send({doc:this.name,open:!1}),this.state="closed",this.emit("closing"),this._closeCallback=e)},e}(),r.mixin(n),f.Doc=n,y=f.types,e=window.BCSocket,i=window.SockJS,t=function(){function t(t,n){var r=this;this.docs={},this.state="connecting",this.socket=typeof b!="undefined"&&b!==null?new i(t):new e(t,{reconnect:!0}),this.socket.send({auth:n?n:null}),this.socket.onmessage=function(e){var t;typeof b!="undefined"&&b!==null&&(e=JSON.parse(e.data));if(e.auth===null)return r.lastError=e.error,r.disconnect(),r.emit("connect failed",e.error);if(e.auth){r.id=e.auth,r.setState("ok");return}return t=e.doc,t!==void 0?r.lastReceivedDoc=t:e.doc=t=r.lastReceivedDoc,r.docs[t]?r.docs[t]._onMessage(e):typeof console!="undefined"&&console!==null?console.error("Unhandled message",e):void 0},this.connected=!1,this.socket.onclose=function(e){r.setState("disconnected",e);if(e==="Closed"||e==="Stopped by server")return r.setState("stopped",r.lastError||e)},this.socket.onerror=function(e){return r.emit("error",e)},this.socket.onopen=function(){return r.lastError=r.lastReceivedDoc=r.lastSentDoc=null,r.setState("handshaking")},this.socket.onconnecting=function(){return r.setState("connecting")}}return t.prototype.setState=function(e,t){var n,r,i,s;if(this.state===e)return;this.state=e,e==="disconnected"&&delete this.id,this.emit(e,t),i=this.docs,s=[];for(r in i)n=i[r],s.push(n._connectionStateChanged(e,t));return s},t.prototype.send=function(e){var t=e.doc;return t===this.lastSentDoc?delete e.doc:this.lastSentDoc=t,typeof b!="undefined"&&b!==null&&(e=JSON.stringify(e)),this.socket.send(e)},t.prototype.disconnect=function(){return this.socket.close()},t.prototype.makeDoc=function(e,t,r){var i,s=this;if(this.docs[e])throw new Error("Doc "+e+" already open");return i=new n(this,e,t),this.docs[e]=i,i.open(function(t){return t&&delete s.docs[e],r(t,t?void 0:i)})},t.prototype.openExisting=function(e,t){var n;return this.state==="stopped"?t("connection closed"):this.docs[e]?t(null,this.docs[e]):n=this.makeDoc(e,{},t)},t.prototype.open=function(e,t,n){var r;if(this.state==="stopped")return n("connection closed");if(this.state==="connecting"){this.on("handshaking",function(){return this.open(e,t,n)});return}typeof t=="function"&&(n=t,t="text"),n||(n=function(){}),typeof t=="string"&&(t=y[t]);if(!t)throw new Error("OT code for document type missing");if(e==null)throw new Error("Server-generated random doc names are not currently supported");if(this.docs[e]){r=this.docs[e],r.type===t?n(null,r):n("Type mismatch",r);return}return this.makeDoc(e,{create:!0,type:t.name},n)},t}(),r.mixin(t),f.Connection=t,l=window.BCSocket!==void 0,c=window.SockJS!==void 0;if(!l&&!c)throw new Error("Must load socks or browserchannel before this library");c&&!l&&(b=!0),f.open=function(){var e={},n=function(n,r){var i,s,o,u;return o=window.location,u=b?"sockjs":"channel",n==null&&(n=""+o.protocol+"//"+o.host+"/"+u),e[n]||(i=new t(n,r),s=function(){return delete e[n]},i.on("disconnected",s),i.on("connect failed",s),e[n]=i),e[n]},r=function(e){var t,n,r=0,i=e.docs;for(n in i)t=i[n],(t.state!=="closed"||t.autoOpen)&&r++;if(r===0)return e.disconnect()};return function(e,t,i,s){var o,u,a;return typeof i=="function"&&(s=i,i={}),typeof i=="string"&&(i={origin:i}),a=i.origin,o=i.authentication,u=n(a,o),u.numDocs++,u.open(e,t,function(e,t){return e?(s(e),r(u)):(t.on("closed",function(){return r(u)}),s(null,t))}),u.on("connect failed"),u}}()}).call(this)