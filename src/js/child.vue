<template>
	<article class="detail-msg">
		<h2 class="msg-box-title">{{ textMsg.part1.head }}</h2>
		<p class="msg-box-des">{{ textMsg.part1.content }}</p>
		<div class="progress-bar">
			<span v-bind:style="{width:textMsg['part1']['progress'] + '%'}"></span>
		</div>
		<div class="invest-info">
			<ul class="invest-info-line">
				<li class="msg-box-li">
					<span class="icon-img"></span>
					<span>{{ textMsg.part1.detail.percent }}%</span>
				</li>
				<li class="msg-box-li">
					<span class="icon-img"></span>
					<span>{{ textMsg.part1.detail.date }}天</span>
				</li>
				<li class="msg-box-li">
					<span class="icon-img"></span>
					<span>{{ textMsg.part1.detail.money }}元</span>
				</li>
			</ul>
		</div>
		<footer class="msg-box-footer">
			<div class="box-footer-left">{{textMsg.part1.footer.adress}}</div>
			<div class="box-footer-right">{{textMsg.part1.footer.name}}</div>
		</footer>
	</article>
</template>

<script>
	export default{
		data(){
			return {
				moveChange:false,
				textMsg:{
					"part1":{
						src: "./dist/images/big.jpg",
						head: "陶·一念执着",
						content:"我们一直笃信",
						progress:10,
						detail:{
							percent: 10,
							date: 133,
							money:133324
						},
						footer:{
							adress:"深圳 广东",
							name:"YUM堂堂"
						}
					},
				},
				methods:{
					imgMoveEnter:function(){/*鼠标经过大图，详细信息显示隐藏*/
						this.moveChange = true;
						console.log(this.moveChange);
					},
					imgMoveOut:function(){
						this.moveChange = false;
						console.log(this.moveChange);
					}
				}
			}
		}
	}
</script>

<style lang="sass">
@charset "utf-8";
@mixin font-dpr($font-size){
    font-size: $font-size;
    [data-dpr="1"] & {
        font-size: $font-size/2;
    }
    [data-dpr="3"] & {
        font-size: $font-size/2*3;
    }
}
@mixin flex(){ 
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}

@mixin flex-justify-left(){ //左对齐
    -webkit-box-pack:start;
    -moz-justify-content:flex-start;
    -webkit-justify-content:flex-start;
    justify-content: flex-start;
}
@mixin flex-justify-right(){ //右对齐
    -webkit-box-pack:end;
    -moz-justify-content:flex-end;
    -webkit-justify-content:flex-end;
    justify-content: flex-end;
}
@mixin flex-justify-between(){  //两端对齐
    -webkit-box-pack:justify;
    -moz-justify-content:space-between;
    -webkit-justify-content:space-between;
    justify-content: space-between;
}
@mixin flex-justify-center(){  //居中对齐
    -webkit-box-pack:center;
    -moz-justify-content:center;
    -webkit-justify-content:center;
    justify-content: center;
}

@mixin flex-align(){ //上下居中
    -webkit-box-align:center;
    -moz-align-items:center;
    -webkit-align-items:center;
    align-items: center;
}
@mixin flex-orient-row(){ //从左到右排列
    -webkit-box-direction:normal;
    -webkit-box-orient:horizontal;
    -moz-flex-direction:row;
    -webkit-flex-direction:row;
    flex-direction: row;
}
@mixin flex-orient-col(){ //从上到下排列
    -webkit-box-direction:normal;
    -webkit-box-orient:vertical;
    -moz-flex-direction:column;
    -webkit-flex-direction:column;
    flex-direction: column;
}

@mixin flex-item($num){ //子元素伸缩数
    -webkit-box-flex:$num;
    -moz-box-flex:$num;
    -webkit-flex:$num;
    -ms-flex:$num;
    flex: $num;
}
body, ul, ol, li, p, h1, h2, h3, h4, h5{
	margin: 0;
	padding: 0;
}
body{
    background-color: rgb(226,226,226);
}
.gu-header{
    width: 100%;
    height: 70px;
    background-color: #fff;
}
.header-content{
    width: 1180px;
    margin: 0 auto;
    height: 100%;
}
.gu-content{
    width: 1180px;
    margin: 0 auto;
    margin-top: 30px;
    background-color: #fff;
}
.show-big-img{/*
    @include flex();
    @include flex-align();
    @include flex-justify-right();*/
    position: relative;
    padding: 20px;
    overflow: hidden;
    box-shadow: 0 0 5px #574343;
    img{
        width: 100%;
        height: auto;
        font-size: 0;
    }
}
.detail-msg{
    display: none;
    position: absolute;
    width: 410px;
    height: 250px;
    top:50%;
    margin-top: -125px;
    padding: 20px;
    box-sizing: border-box;
    right: 20px;
    text-align: left;
    background: rgba(255,255,255,0.8);
}
.msgmove-enter{
    animation: msgmove-enter 0.5s forwards;
    display: block;
}
@keyframes msgmove-enter{
    0%{
        transform: translateX(410px);
    }
    100%{
        transform: translateX(0px);
    }
}
@-webkit-keyframes msgmove-enter{
    0%{
        -webkit-transform: translateX(410px);
    }
    100%{
        -webkit-transform: translateX(0px);
    }
}
h2.msg-box-title{
    font-size: 24px;
    margin: 10px 0;
    line-height: 24px;
    font-weight: bold;
}
.msg-box-des{
    font-size: 16px;
    line-height: 1.4;
    margin-bottom: 15px;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
}
.progress-bar{
    height: 6px;
    border-radius: 3px;
    border: 1px solid #30ca27;
    margin-bottom: 15px;
    span{
        display: block;
        background: #30ca27;
        height: 100%;
    }
}
.invest-info{
    margin-bottom: 20px;
}
.invest-info-line{
    @include flex();
    @include flex-justify-left();
}
ul{
    list-style: none;
}
.msg-box-li{
    margin-right: 20px;
    position: relative;
}
.msg-box-li:hover{
    &::after{
        content:"募集资金";
        display: block;
        position: absolute;
        top:120%;
        left: 50%;
        border: 1px solid #000;
        border-radius: 2px;
        background: #fff;
        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        text-align: center;
        padding: 2px 5px;
        white-space: nowrap;
    }
}
.msg-box-footer{
    @include flex();
    @include flex-justify-between();
}
</style>
