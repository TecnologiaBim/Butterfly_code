!function(){$("body").on("click","#logout",function(){Cookies.remove("token",{path:"/"}),window.location.href="/login"});var o=function(o){$.ajax({url:"/user/info",type:"get",contentType:"application/json",headers:{Authorization:"Token "+Cookies.get("token")},success:function(e){o(e)},error:function(o){alert(o.responseJSON.message),Cookies.remove("token",{path:"/"})}})};window.getSessionInfo=o;var e=Cookies.get("token");if(e)o(function(o){!!location.href.match(/login/)});else{!!location.href.match(/login/);console.log("Usuario no se encuentra logueado")}}();