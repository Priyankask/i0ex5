(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n(83)},83:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(6),d=n.n(r),c=n(1),s=n(14),o=n(13),l=n(2),p=n.n(l);const b=[{id:p()(),content:"First task"},{id:p()(),content:"Second task"},{id:p()(),content:"Third task"},{id:p()(),content:"Fourth task"},{id:p()(),content:"Fifth task"}],m={[p()()]:{name:"Requested",items:b},[p()()]:{name:"To do",items:[]},[p()()]:{name:"In Progress",items:[]},[p()()]:{name:"Done",items:[]}},g=(e,t,n)=>{if(!e.destination)return;const a=e.source,i=e.destination;if(a.droppableId!==i.droppableId){const e=t[a.droppableId],r=t[i.droppableId],d=[...e.items],o=[...r.items],l=d.splice(a.index,1),p=Object(s.a)(l,1)[0];o.splice(i.index,0,p),n(Object(c.a)(Object(c.a)({},t),{},{[a.droppableId]:Object(c.a)(Object(c.a)({},e),{},{items:d}),[i.droppableId]:Object(c.a)(Object(c.a)({},r),{},{items:o})}))}else{const e=t[a.droppableId],r=[...e.items],d=r.splice(a.index,1),o=Object(s.a)(d,1)[0];r.splice(i.index,0,o),n(Object(c.a)(Object(c.a)({},t),{},{[a.droppableId]:Object(c.a)(Object(c.a)({},e),{},{items:r})}))}};var u=function(){const e=Object(a.useState)(m),t=Object(s.a)(e,2),n=t[0],r=t[1];return i.a.createElement("div",{style:{display:"flex",justifyContent:"center",height:"100%"}},i.a.createElement(o.a,{onDragEnd:e=>g(e,n,r)},Object.entries(n).map(([e,t],n)=>i.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},key:e},i.a.createElement("h2",null,t.name),i.a.createElement("div",{style:{margin:8}},i.a.createElement(o.c,{droppableId:e,key:e},(e,n)=>i.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,style:{background:n.isDraggingOver?"lightblue":"lightgrey",padding:4,width:250,minHeight:500}}),t.items.map((e,t)=>i.a.createElement(o.b,{key:e.id,draggableId:e.id,index:t},(t,n)=>i.a.createElement("div",Object.assign({ref:t.innerRef},t.draggableProps,t.dragHandleProps,{style:Object(c.a)({userSelect:"none",padding:16,margin:"0 0 8px 0",minHeight:"50px",backgroundColor:n.isDragging?"#263B4A":"#456C86",color:"white"},t.draggableProps.style)}),e.content))),e.placeholder)))))))};const j=document.getElementById("root");d.a.render(i.a.createElement(u,null),j)}},[[36,1,2]]]);
//# sourceMappingURL=main.30e81f54.chunk.js.map