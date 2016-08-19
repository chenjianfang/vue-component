import Vue from 'vue'
import articleBox from './child.vue'
new Vue({
	el: 'body',
	components: {
		"construct":{
			template:'<p>construct出来的</p>'
		},
		articleBox
	},
	data:{
		moveChange: false
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
})