var TVE_Dash=TVE_Dash||{},ThriveGlobal=ThriveGlobal||{$j:jQuery.noConflict()};!function(a){TVE_Dash.ajax_sent=!1;var b={},c={};TVE_Dash.add_load_item=function(d,e,f){return e?("function"!=typeof f&&(f=a.noop),b[d]&&console.error&&console.error(d+" ajax action already defined"),b[d]=e,c[d]=f,!0):(console.error&&console.error("missing ajax data"),!1)},TVE_Dash.ajax_load_css=function(b){a.each(b,function(b,c){b+="-css",a("link#"+b).length||a('<link rel="stylesheet" id="'+b+'" type="text/css" href="'+c+'"/>').appendTo("head")})},TVE_Dash.ajax_load_js=function(b){var c=document.body;a.each(b,function(d,e){if(-1!==d.indexOf("_before"))return!0;var f=document.createElement("script");if(b[d+"_before"]){var g=a('<script type="text/javascript">'+b[d+"_before"]+"</script>");g.after(c.lastChild)}d&&(f.id=d+"-script"),f.src=e,c.appendChild(f)})},a(function(){setTimeout(function(){var d=new a.Event("tve-dash.load");return a(document).trigger(d),a.isEmptyObject(b)?!1:tve_dash_front.is_crawler?!1:(a.ajax({url:tve_dash_front.ajaxurl,data:{action:"tve_dash_front_ajax",tve_dash_data:b},dataType:"json",type:"post"}).done(function(b){b&&a.isPlainObject(b)&&(b.__resources&&(b.__resources.css&&TVE_Dash.ajax_load_css(b.__resources.css),b.__resources.js&&TVE_Dash.ajax_load_js(b.__resources.js),delete b.__resources),a.each(b,function(a,b){return"function"!=typeof c[a]?!0:void c[a].call(null,b)}))}),void(TVE_Dash.ajax_sent=!0))})})}(ThriveGlobal.$j);;var addComment={moveForm:function(a,b,c,d){var e,f,g,h,i=this,j=i.I(a),k=i.I(c),l=i.I("cancel-comment-reply-link"),m=i.I("comment_parent"),n=i.I("comment_post_ID"),o=k.getElementsByTagName("form")[0];if(j&&k&&l&&m&&o){i.respondId=c,d=d||!1,i.I("wp-temp-form-div")||(e=document.createElement("div"),e.id="wp-temp-form-div",e.style.display="none",k.parentNode.insertBefore(e,k)),j.parentNode.insertBefore(k,j.nextSibling),n&&d&&(n.value=d),m.value=b,l.style.display="",l.onclick=function(){var a=addComment,b=a.I("wp-temp-form-div"),c=a.I(a.respondId);if(b&&c)return a.I("comment_parent").value="0",b.parentNode.insertBefore(c,b),b.parentNode.removeChild(b),this.style.display="none",this.onclick=null,!1};try{for(var p=0;p<o.elements.length;p++)if(f=o.elements[p],h=!1,"getComputedStyle"in window?g=window.getComputedStyle(f):document.documentElement.currentStyle&&(g=f.currentStyle),(f.offsetWidth<=0&&f.offsetHeight<=0||"hidden"===g.visibility)&&(h=!0),"hidden"!==f.type&&!f.disabled&&!h){f.focus();break}}catch(q){}return!1}},I:function(a){return document.getElementById(a)}};