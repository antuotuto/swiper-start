var wanganan=function(n,i){function t(){this.MaxLine=550,this.MinLine=210,this.m={x:210,y:320},this.l={x:210,y:320},this.num=7,this.rSpeed=.05,this.yx=100,this.r=100,this.beginCur=1.5,this.closeCur=1.5,this.rFang=!1,this.once=0,this._init()}t.prototype._init=function(){var t=this;t.cas=i("#canvas")[0],t.ctx=this.cas.getContext("2d"),t.cas.width=n.innerWidth,t.cas.height=n.innerHeight,t.ctx.strokeStyle="#90d0df",t.ctx.lineWidth=50,t.ctx.lineCap="round",t.ctx.lineJoin="round",t.rafLine()},t.prototype.rafLine=function(){var n=this;n.l.x+=n.num,n.ctx.beginPath(),n.ctx.moveTo(n.m.x,n.m.y),n.ctx.lineTo(n.l.x,n.l.y),n.ctx.closePath(),n.ctx.stroke(),requestAnimationFrame(function(){if(n.l.x<n.MaxLine&&n.l.x>n.MinLine)n.rafLine();else{if(n.once+=1,n.once>3)return cancelAnimationFrame(n.rafLine),void cancelAnimationFrame(n.rafCur);cancelAnimationFrame(n.rafLine),n.rSpeed<0?n.rFang=!0:n.rFang=!1,n.rafCur()}})},t.prototype.rafCur=function(){var n=this;n.closeCur+=n.rSpeed,n.ctx.beginPath(),n.ctx.arc(n.l.x,n.l.y+n.yx,n.r,1.5*Math.PI,n.closeCur*Math.PI,n.rFang),n.ctx.stroke(),requestAnimationFrame(function(){n.closeCur<2.5&&n.closeCur>.5?n.rafCur():(cancelAnimationFrame(n.rafCur),n.rSpeed*=-1,n.closeCur=1.5,n.m.y=n.l.y+=200,n.m.x=n.l.x,n.num*=-1,n.rafLine())})};new t}(window,$);