(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{60:function(e,t,a){e.exports=a(75)},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),l=a(28),o=a(56),m=a(23),u=a(10),s=a(96),p=a(98),d=a(99),E=a(100),h=a(101),f=a(102),b=Object(s.a)(function(e){return{navbarLeft:{marginLeft:"auto"},button:{margin:e.spacing(2)}}}),g=r.a.forwardRef(function(e,t){return r.a.createElement(m.b,Object.assign({to:"/"},e))}),v=r.a.forwardRef(function(e,t){return r.a.createElement(m.b,Object.assign({to:"/cart"},e))});var y=function(){var e=b();return r.a.createElement(p.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement(h.a,{variant:"h6"},"Virtual Store"),r.a.createElement(f.a,{className:e.navbarLeft,component:g,color:"inherit"},"Product list"),r.a.createElement(f.a,{className:e.button,component:v,color:"inherit"},"My Cart"))))},j=a(37),O=a(38),C=a(43),k=a(42),S=a(116),_=a(118),x=a(103),w=a(104),R=a(105),A=a(106),P=a(107),L=a(108),M=a(109),T=a(110),z=a(111),B=a(112),N=a(113),q=function(e){Object(C.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onClickRemove=function(t){e.props.removeProduct(t)},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this,t=r.a.forwardRef(function(e,t){return r.a.createElement(m.b,Object.assign({to:"/"},e))}),a=this.props.cart.length,n=a?r.a.createElement(h.a,{variant:"caption",color:"textSecondary"},"Click on each item to see more details"):null,c=a?this.props.cart.map(function(t){return r.a.createElement(S.a,null,r.a.createElement(_.a,null,r.a.createElement("div",null,r.a.createElement(h.a,null,t.name)),r.a.createElement("div",{style:{marginLeft:"1%"}},r.a.createElement(h.a,{color:"textSecondary"}," x",t.qty)),r.a.createElement("div",{style:{marginLeft:"auto"}},r.a.createElement(h.a,null,"$",t.total))),r.a.createElement(x.a,{style:{display:"inherit"}},r.a.createElement("div",null,r.a.createElement("img",{src:t.img,alt:t.name,height:"100px"})),r.a.createElement(h.a,null,t.description),r.a.createElement(h.a,{variant:"caption",color:"textSecondary"},"Single price: $",t.price)),r.a.createElement(w.a,null),r.a.createElement(R.a,null,r.a.createElement(f.a,{onClick:function(){e.onClickRemove(t.id)},size:"small",color:"secondary"},"Remove")))}):r.a.createElement("div",null,r.a.createElement(h.a,{variant:"h6"},"There are no items in your cart"),r.a.createElement("br",null),r.a.createElement(f.a,{component:t,size:"small",variant:"contained",color:"primary"},"Add Items"));return r.a.createElement("div",{className:"Carrito"},r.a.createElement(d.a,null,r.a.createElement(A.a,{container:!0,spacing:4},r.a.createElement(A.a,{item:!0,xs:8},n,c),r.a.createElement(A.a,{item:!0,xs:4},r.a.createElement(P.a,null,r.a.createElement(L.a,null,r.a.createElement(h.a,{variant:"h6"},"Summary"),r.a.createElement("hr",null),r.a.createElement(M.a,null,r.a.createElement(T.a,null,r.a.createElement(z.a,null,r.a.createElement(B.a,null,"Sub total"),r.a.createElement(B.a,{align:"right"},"$",this.props.total)),r.a.createElement(z.a,null,r.a.createElement(B.a,null,"Taxes"),r.a.createElement(B.a,{align:"right"},"13%")),r.a.createElement(z.a,null,r.a.createElement(B.a,null,"Total"),r.a.createElement(B.a,{align:"right"},"$",(1.13*this.props.total).toFixed(2)))))),r.a.createElement(N.a,null,r.a.createElement(f.a,{style:{marginLeft:"auto"},variant:"outlined",color:"primary",size:"small"},"Finish purchase")))))))}}]),a}(n.Component),D=Object(l.b)(function(e){return{cart:e.inCart,total:e.total}},function(e){return{removeProduct:function(t){e(function(e){return{type:"REMOVE_FROM_CART",id:e}}(t))}}})(q),V=a(114),$=a(115),F=a(4),G=function(e){Object(C.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={open:!1},n.onClickAdd=function(e){n.props.addProduct(e),n.onSnackPress()},n.onSnackPress=function(){n.setState({open:!0})},n.onCloseSnack=function(){n.setState({open:!1})},n.state={open:!1},n}return Object(O.a)(a,[{key:"render",value:function(){var e=this,t=this.props.list.map(function(t){return r.a.createElement(A.a,{item:!0,xs:3},r.a.createElement(P.a,{key:t.id},r.a.createElement(V.a,{className:e.props.classes.media,image:t.img}),r.a.createElement(L.a,null,r.a.createElement(h.a,{variant:"h6"},t.name," ",r.a.createElement("small",null,"$",t.price)),r.a.createElement("hr",null),r.a.createElement(h.a,{color:"textSecondary"},t.description)),r.a.createElement(N.a,null,r.a.createElement(f.a,{onClick:function(){e.onClickAdd(t.id)},color:"secondary",size:"small"},"Add to cart"))))});return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(A.a,{container:!0,spacing:4},t)),r.a.createElement($.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.onCloseSnack,message:r.a.createElement("span",{id:"message-id"},"Product successfully added!")}))}}]),a}(n.Component),I=Object(l.b)(function(e){return{list:e.productList}},function(e){return{addProduct:function(t){e(function(e){return{type:"ADD_TO_CART",id:e}}(t))}}})(Object(F.a)({media:{height:140}})(G));var J=function(){return r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("div",{className:"content"},r.a.createElement(u.a,{exact:!0,path:"/cart",component:D}),r.a.createElement(u.a,{exact:!0,path:"/",component:I}))))},K=(a(74),a(49)),H=a(25),Q={productList:[{id:1,name:"Video game",description:"Video game of the year 2020",price:40,img:"https://cdn.pixabay.com/photo/2017/06/19/08/44/samus-2418643_960_720.png"},{id:2,name:"Shirt",description:"Shirt size M and L",price:20,img:"https://cdn.pixabay.com/photo/2016/07/17/20/19/t-shirt-1524677_960_720.jpg"},{id:3,name:"Bluetooth Speaker",description:"Bluetooth Speaker with 10 hours of battery life",price:50,img:"https://cdn.pixabay.com/photo/2018/01/30/15/53/speaker-3119037_960_720.jpg"},{id:4,name:"Nike Shoes",description:"Nike Shoes all sizes available",price:70,img:"https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_960_720.jpg"},{id:5,name:"Keyboard",description:"Keyboard with mechanical keys",price:15,img:"https://cdn.pixabay.com/photo/2014/09/20/13/55/keyboard-453795_960_720.jpg"},{id:6,name:"PS4 Controller",description:"PS4 Controller with 10 hours of battery life and 2 vibration motors",price:60,img:"https://cdn.pixabay.com/photo/2017/05/26/15/07/joystick-2346237_960_720.jpg"},{id:7,name:"MacBook",description:"MacBook Pro with 16GB of RAM and 512GB of storage",price:1500,img:"https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_960_720.jpg"}],inCart:[],total:0};var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var a=e.productList.find(function(e){return e.id===t.id});if(!a)return;var n=e.inCart.find(function(e){return e.id===t.id});if(n){n.qty=n.qty+1,n.total=n.qty*n.price;var r=e.inCart.filter(function(e){return e.id!==t.id});return Object(H.a)(Object(H.a)({},e),{},{inCart:[].concat(Object(K.a)(r),[n]),total:e.total+a.price})}return a.qty=1,a.total=a.price,Object(H.a)(Object(H.a)({},e),{},{inCart:[].concat(Object(K.a)(e.inCart),[a]),total:e.total+a.price});case"REMOVE_FROM_CART":var c=e.inCart.find(function(e){return e.id===t.id});if(!c)return;var i=e.inCart.filter(function(e){return e.id!==t.id}),l=e.total-(c.total||0);return Object(H.a)(Object(H.a)({},e),{},{inCart:i,total:l});default:return e}},W=Object(o.a)(U);i.a.render(r.a.createElement(l.a,{store:W},r.a.createElement(J,null)),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.f285a89f.chunk.js.map