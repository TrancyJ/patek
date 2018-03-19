$(()=>{
    //使用说明模块与设置模块切换
    $(".direction-btn").click((e)=>{
        $(".direction").show()
        $(e.target).addClass('active')
        $(".set").hide()
        $(".set-btn").removeClass('active')
        $(".banner-title-text").html("使用说明")
    })
    $(".set-btn").click((e)=>{
        $(".direction").hide()
        $(".set").show()
        $(e.target).addClass('active')
        $(".direction-btn").removeClass('active')
        $(".banner-title-text").html("设置")
    })
    //设置
    //手风琴效果
    $(".accordion").on("click","[data-toggle=collapse]",function(){
        $(this).next(".content").toggleClass("in")
            .siblings(".content").removeClass("in")}
    );
    //下拉菜单模块
    $(".accordion .dropdown-list input").on('click',(e)=>{
        var $tar = $(e.target)
        $tar.siblings(".values").toggleClass('show')
        $tar.siblings(".dropdown-down ").toggleClass('downorup')
    })
    $(".accordion .dropdown-list .values li").click((e)=>{
        var $tar=$(e.target)
        var value=$tar.html()
            $tar.parent().siblings('input').val(value)
            $tar.parent().removeClass('show')
    })
    //滑动模块
    $(".point").click((e)=>{
        $tar=$(e.target)
        var num=$tar.data('point')
        $(".slide-container").css('left',-num*100+'%'
        )
        $tar.addClass("checked").siblings().removeClass("checked")
    })




});
$(()=>{
    //floor1控制图片旋转

    var angle1 = 0
    $(".control-star-moon").click((e)=>{
        angle1 +=25
        $(".star-moon").css({'transform':'rotate('+angle1+'deg)'})
    })
});
$(()=>{
    //floor3控制图片旋转
    var angle2 = 0
    $(".control-innerMoon").click((e)=>{
        angle2+=10
        var $tar=$(e.target)
        $tar.parent().parent().parent().find('.innerMoon').css({'transform':'rotate('+angle2+'deg)'})
    })
})
$(()=>{
    //floor3控制文字上下移动部分
    var range=0
    var timer=null
    $(".accordion .text-down").mousedown(()=>{
         timer=setInterval(()=>{
             range-=15
             $(".accordion .text-content .move-text").css("top",range)
             },100
         )

    })
    $(".accordion .text-btn").mouseup(()=>{
        if(timer){
        clearInterval(timer)
        }
    })
    $(".accordion .text-up").mousedown(()=>{

        timer=setInterval(()=>{
                if(range>=0){
                return
                }
                range+=15
                $(".accordion .text-content .move-text").css("top",range)
            },100
        )

    })

})
$(()=>{
    
})