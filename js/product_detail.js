
window.onload=function(){
        console.log(1)
        var pid=window.location.search.split("=")[1]
        $.ajax({
            type:"GET",
            url:"http://127.0.0.1:3002/product_detail",
            data:{pid:pid},
            xhrFilds:{withCredentials:true},
        }).then(data=>{
            console.log(data)
            var html1="",html2="",html3="",html4="",html5=""
            //加载标题
            html1=`<h1><span class="brown">${data.data.watch_name}</span> - ${data.data.series}</h1>
                    <p>自动上弦</p>`
            $(".load-title").html(html1)

            html2=`<p>${data.data.details1}</p>
                    <p>${data.data.details2}</p>
                    <p><b>价格${data.data.price}</b></p>
                    <i>建议零售价（含税）。价格可能随时更改，因此并不构成合约报价。</i>
                    <div class="toggle-cover"></div>`
            $(".text-container").html(html2)
            //加载展示图片
            html3=`<div class="col-xs-4">
                        <img src="${data.data.md1}" alt="" class="img-responsive">
                    </div>
                <div class="col-xs-4">
                    <img src="${data.data.md2}" alt="" class="img-responsive">
                  </div>
                <div class="col-xs-4 jewel-img">
                    <img src="img/md/275_7_1A_J3_530.jpg" alt="" class="img-responsive">
                </div>`
            $(".load-img").html(html3)
            //加载小图片
            var img=data.pic
                html4=`<div class="show-slide slide-1">
                            <img src="${img[0].sm}" alt="" >
                        </div>    
                        <div class="show-slide slide-2">
                            <img src="${img[1].sm}" alt="" >
                        </div>    
                        <div class="show-slide slide-3">
                            <img src="${img[2].sm}" alt="" >
                        </div>    
                        <div class="show-slide slide-4">
                            <img src="${img[3].sm}" alt="" >
                        </div>    
                        <div class="show-slide slide-5">
                            <img src="${img[4].sm}" alt="" >
                        </div>
                        <div class="show-slide slide-1">
                            <img src="${img[0].sm}" alt="" >
                        </div>    
                        <div class="show-slide slide-2">
                            <img src="${img[1].sm}" alt="" >
                        </div>    
                        <div class="show-slide slide-3">
                            <img src="${img[2].sm}" alt="" >
                        </div>    
                        <div class="show-slide slide-4">
                            <img src="${img[3].sm}" alt="" >
                        </div>    
                        <div class="show-slide slide-5">
                            <img src="${img[4].sm}" alt="" >
                        </div>
                        <div class="show-slide slide-1">
                            <img src="${img[0].sm}" alt="" >
                        </div>`
            $(".show-pic-container").html(html4)
                html5=`<div class="sm-pic">
                    <img src="${img[0].sm}" data-lg="${img[0].lg}"/>
                </div>
                <div class="sm-pic">
                    <img src="${img[1].sm}" data-lg="${img[1].lg}" />
                </div>
                <div class="sm-pic">
                    <img src="${img[2].sm}" data-lg="${img[2].lg}" />
                </div>
                <div class="sm-pic">
                    <img src="${img[3].sm}" data-lg="${img[3].lg}" />
                </div>
                <div class="sm-pic">
                    <img src="${img[4].sm}" data-lg="${img[4].lg}" />`
            $(".aside-sm-pic").html(html5)
        })
    }
$(()=>{
    //floor1控制图片旋转
    var angle1 = 0
    $(".control-star-moon").click((e)=>{
        angle1 +=25
        $(".star-moon").css({'transform':'rotate('+angle1+'deg)'})
    })
});
//滑动模块
$(()=>{
    $(".point").click((e)=>{
        $tar=$(e.target)
        var num=$tar.data('point')
        $(".slide-container").css('left',-num*100+'%'
        )
    })
})
//下拉菜单模块
$(".dropdown-list input").on('click',(e)=>{
    var $tar = $(e.target)
    $tar.siblings(".values").toggleClass('show')
    $tar.siblings(".dropdown-down ").toggleClass('downorup')
})
$(".dropdown-list .values li").click((e)=>{
    var $tar=$(e.target)
    var value=$tar.html()
    $tar.parent().siblings('input').val(value)
    $tar.parent().removeClass('show')
})
// 控制描述部分遮罩
$(()=>{
    $('.toggle_button').click(e=>{
        $(e.target).toggleClass("btn-rotate")
        $(".toggle-cover").fadeToggle()
        $(".text-container").toggleClass("hide-height")
    })
})
//控制图片滑动
$(()=>{
    //图片
    var $img=$(".show-sm-pic .show-pic-container .show-slide img")
    //图片容器
    var $picCtn=$(".show-sm-pic .show-pic-container")
    // 获取图片的高度
    var height=$img.height()
    // 设置容器的高度
    $picCtn.height(height)
    // 屏幕发生改变时动态加载高度
    $(window).resize(()=>{
        height=$img.height()
        $picCtn.height(height)
    })
    // 点击小点时发生的事件
    $(".pic-point-1").click((e)=>{
        $picCtn.css("right","0")
    })
    $(".pic-point-2").click((e)=>{
        $picCtn.css("right","100%")
    })
    $(".pic-point-3").click((e)=>{
        $picCtn.css("right","120%")
    })
    // 小点的选中时加载类
    $(".pic-point").click((e)=>{
        if(!$(e.target).hasClass('checked'))
        $(e.target).addClass('checked').siblings().removeClass('checked')
    })
})
//控制隐藏大图展示
$(()=>{
    // 外面大容器
    var $ctn=$(".hide-lg-pic")
    //侧边栏小图片容器
    var $smCtn=$(".aside-sm-pic")
    // 大图片
    var $lgImg=$(".show-lg-pic img")
    // 点击图片时发生的事件，改变大图片的路径
    $smCtn.on("click",".sm-pic img",(e)=>{
        var imgSrc=$(e.target).data("lg")
        $lgImg.attr("src",imgSrc)
    })
})



