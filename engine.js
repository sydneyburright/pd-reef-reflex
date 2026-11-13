(function(root){
'use strict';
function shuffled(items,random=Math.random){const a=items.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
class QuizRun{
 constructor(bank,random=Math.random){this.bank=bank;this.random=random;this.reset();}
 reset(){this.deck=shuffled(this.bank,this.random);this.correct=0;this.current=null;this.deadline=0;this.state='ready';this.seen=[];}
 start(){this.reset();this.state='running';}
 collide(now){if(this.state!=='running')return null;this.current=this.deck.pop();if(!this.current)throw Error('Question bank exhausted');this.seen.push(this.current.id);this.deadline=now+20000;this.state='question';return this.current;}
 answer(index,now){if(this.state!=='question')return null;const expired=now>=this.deadline;const right=!expired&&index===this.current.correctIndex;if(!right){this.state='lost';return expired?'timeout':'incorrect';}this.correct++;this.state=this.correct>=10?'won':'feedback';return this.state;}
 tick(now){if(this.state==='question'&&now>=this.deadline)return this.answer(-1,now);return null;}
 resume(){if(this.state==='feedback'||this.state==='paused')this.state='running';}
 pause(){if(this.state==='running')this.state='paused';}
}
function overlaps(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;}
const api={QuizRun,shuffled,overlaps};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.ReefCore=api;
})(typeof window!=='undefined'?window:this);
