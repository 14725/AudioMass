(function ( w, d, PKAE ) {
'use strict';

setTimeout(function () {

	PKAudioEditor._deps.Wlc = function () {
			var body_str = '';
			var body_str2 = '';

			if (PKAE.isMobile) {
				change -= 15;
				body_str = '提示：<br/>请确认您的手机没有被静音。您或许需要切换物理静音开关。'+
				'<img src="phone-switch.jpg" alt="" style="max-width:224px;max-height:126px;width:40%;margin: 10px auto; display: block;"/>'+
				'<br/><br/>';
			}
			else {
				body_str = '提示：<br/>本程序绝大多数的快捷键都使用 <strong>Shift + <u>?</u></strong> 键组合。 （例如 Shift+Z 撤销, Shift+C 复制, Shift+X 剪切，等等）<br/><br/>';
				body_str2 = '访问 <a href="https://github.com/pkalogiros/audiomass" target="_blank">Github</a> 检出英语原版的源代码，或到 <a href="https://github.com/14725/AudioMass">https://github.com/14725/AudioMass</a> 帮我翻译。<br/><br/>'; // checkout the code on github
			}

			// Welcome to AudioMass,
			var md = new PKSimpleModal({
				title: '<font style="font-size:15px">Welcome to AudioMass</font>',
				ondestroy: function( q ) {
					PKAE.ui.InteractionHandler.on = false;
					PKAE.ui.KeyHandler.removeCallback ('modalTemp');
			},
			body:'<div style="overflow:auto;-webkit-overflow-scrolling:touch;max-width:580px;width:calc(100vw - 40px);max-height:calc(100vh - 340px);min-height:110px;font-size:13px; color:#95c6c6;padding-top:7px;">'+
				'AudioMass 是免费、自由、开源的网页版音频编辑器。<br />它只在浏览器中运行，不上传数据到服务器，也不用本机安装浏览器插件！'+
				'<br/><br/><br/>'+
				body_str+
				'你可以加载你的浏览器支持的任意格式文件，制作淡入淡出、剪切裁剪以及修改音量等编辑操作，还有用不完的音频特效！'+
				'<br/><br/>'+
				body_str2+
				'</div>',
			setup:function( q ) {
					PKAE.ui.InteractionHandler.checkAndSet ('modal');
					PKAE.ui.KeyHandler.addCallback ('modalTemp', function ( e ) {
						q.Destroy ();
					}, [27]);

					// ------
					var scroll = q.el_body.getElementsByTagName('div')[0];
					scroll.addEventListener ('touchstart', function(e){
						e.stopPropagation ();
					}, false);
					scroll.addEventListener ('touchmove', function(e){
						e.stopPropagation ();
					}, false);

					// ------
				}
			});
			md.Show ();
			document.getElementsByClassName('pk_modal_cancel')[0].innerHTML = '&nbsp; &nbsp; &nbsp; OK &nbsp; &nbsp; &nbsp;';
	};

	var change = 96;
	var exists = w.localStorage && w.localStorage.getItem ('k');

	if (!exists) {
		change = 0;
		w.localStorage && w.localStorage.setItem ('k', 1);
	}

	if ( ((Math.random () * 100) >> 0) < change) return ;
	PKAudioEditor._deps.Wlc ();

}, 320);

})( window, document, PKAudioEditor );
