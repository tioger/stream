$('#twitchsw').click(function(){
$('.twitchdayli').html('<object   data="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" type="application/x-shockwave-flash" height="462" width="100%"><param value="always" name="allowScriptAccess"><param value="true" name="allowFullScreen"><param value="loadCallback=onPlayerLoad&amp;embed=1&amp;channel=tioger&amp;auto_play=true" name="flashvars"></object>');
$('.twitchdaylitchat').html('<iframe scrolling="no" style="min-width: 362px;" src="http://twitch.tv/chat/embed?channel=tioger&amp;popout_chat=true" frameborder="0" height="462px" width="100%"></iframe>');
$('#twitchswimg').attr('src','img/tioger/gaucheswdark.png');
$('#dailyswimg').attr('src','img/tioger/droitesw.png');
});
$('#dailysw').click(function(){
$('.twitchdayli').html('<iframe frameborder="0" width="100%" height="462" src="//www.dailymotion.com/embed/video/xx6ua1" allowfullscreen ></iframe>');
$('.twitchdaylitchat').html('<iframe scrolling="no" src="https://games.dailymotion.com/chat/#xx6ua1" frameborder="0" height="462px" width="100%"></iframe>');
$('#twitchswimg').attr('src','img/tioger/gauchesw.png');
$('#dailyswimg').attr('src','img/tioger/droiteswdark.png');
});
