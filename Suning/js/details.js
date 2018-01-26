
    function Fdj(){//放大镜的构造函数
        this.wrap=document.getElementById('wrap');
        this.spic=document.getElementById('spic');
        this.sf=document.getElementById('sf');
        this.bf=document.getElementById('bf');
        this.bpic=document.getElementById('bpic');
        this.list=document.getElementById('ulist');
        this.imgli=document.getElementsByTagName('li');//10
    }

    //1.鼠标经过小图，让大放大镜和小放大镜显示出来
    Fdj.prototype.init=function(){
        console.log(document.querySelector('#wrap'));
        var that=this;
       // alert(message)
        this.spic.onmouseover=function(){
            that.over();
        };
        this.spic.onmouseout=function(){
            that.out();
        };
        for(var i=0,len=this.imgli.length;i<len;i++){
            this.imgli[i].onclick=function(){
                var srcurl=this.getElementsByTagName('img')[0].src;
                that.spic.getElementsByTagName('img')[0].src=srcurl;
                that.bpic.src=srcurl;
            }
        }
    }
        /*var liwidth=this.imgli[0].offsetWidth;
        var picnum=6;//图片显示张数
        this.list.style.width=liwidth*this.imgli.length+'px';
        //this.imgli
        if(this.imgli.length<6){
            this.right.style.color='#fff';
        }*/
        /*this.right.onclick=function(){
            if(picnum<that.imgli.length){
                picnum++;
                if(picnum==that.imgli.length){
                    that.right.style.color='#fff';
                }
                that.left.style.color='#333';
            }
            bufferMove(that.list,{left:-(picnum-6)*liwidth});
        }

        this.left.onclick=function(){
            if(picnum>6){
                picnum--;
                if(picnum==6){
                    that.left.style.color='#fff';
                }
                that.right.style.color='#333';
            }
            bufferMove(that.list,{left:-(picnum-6)*liwidth});
        }

    }*/

    Fdj.prototype.out=function(){
        this.sf.style.visibility='hidden';
        this.bf.style.visibility='hidden';
    }
    Fdj.prototype.over=function(){
            var that=this;
            this.sf.style.visibility='visible';
            this.bf.style.visibility='visible';
            this.sf.style.width=this.spic.offsetWidth*this.bf.offsetWidth/this.bpic.offsetWidth+'px';
            this.sf.style.height=this.spic.offsetHeight*this.bf.offsetHeight/this.bpic.offsetHeight+'px';
            //求比例
            this.scale=this.spic.offsetWidth/this.sf.offsetWidth;
            this.spic.onmousemove=function(ev){
                var ev=ev||window.event;
                that.move(ev);
            }
    };

    Fdj.prototype.move=function(ev){
        var l=ev.clientX-this.wrap.offsetLeft-this.sf.offsetWidth/2;
        var t=ev.clientY-this.wrap.offsetTop-this.sf.offsetHeight/2;
        if(l<0){
            l=0;
        }else if(l>=this.spic.offsetWidth-this.sf.offsetWidth-2){
            l=this.spic.offsetWidth-this.sf.offsetWidth-2;
        }

        if(t<0){
            t=0;
        }else if(t>=this.spic.offsetHeight-this.sf.offsetHeight-2){
            t=this.spic.offsetHeight-this.sf.offsetHeight-2;
        }
        this.sf.style.left=l+'px';
        this.sf.style.top=t+'px';
        this.bpic.style.left=-this.scale*l+'px';
        this.bpic.style.top=-this.scale*t+'px';
    }

    new Fdj().init();//实例化
