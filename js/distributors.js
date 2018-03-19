$(()=>{
        $.ajax({
            type:'GET',
            url:'http://127.0.0.1:3002/map_list',
            xhrFilds:{withCredentials:true},
        }).then(data=>{
            //直接加载地图
            //初始化地图
                var center = new qq.maps.LatLng(30.315988, 120.146484);
                var map = new qq.maps.Map(document.getElementById("container"), {
                    center: center,
                    zoom: 5,
                    disableDefaultUI: true,    //禁止所有控件
                    scrollwheel: false
                });
                //设置Marker自定义图标的属性，size是图标尺寸，该尺寸为显示图标的实际尺寸，origin是切图坐标，该坐标是相对于图片左上角默认为（0,0）的相对像素坐标，anchor是锚点坐标，描述经纬度点对应图标中的位置
                var anchor = new qq.maps.Point(0, 39),
                    size = new qq.maps.Size(40, 51),
                    origin = new qq.maps.Point(0, 0),
                    icon = new qq.maps.MarkerImage(
                        "img/distributors/Distributor_2.png",
                        size,
                        origin,
                        anchor
                    );

                var marker = new qq.maps.Marker({
                    map: map,
                    position: center
                });
                marker.setIcon(icon);
                var info = new qq.maps.InfoWindow({
                    map: map
                });
                function createCluster() {
                    for (var agent of data) {
                        var latLng = new qq.maps.LatLng(agent.x, agent.y);
                        var marker = new qq.maps.Marker({
                            'position': latLng,
                            map: map,
                            country:agent.country,
                            aname:agent.aname,
                            street:agent.street,
                            postalcode:agent.postalcode,
                            city:agent.city,
                            tel:agent.tel,
                            fax:agent.fax
                        });
                        marker.setIcon(icon);

                        //获取标记的点击事件
                        qq.maps.event.addListener(marker, 'click',  (e)=>{
                            info.open();
                            info.setContent(`<div style="text-align:center;white-space:nowrap;margin:10px;"><p>${e.target.country}</p> <p><b>${e.target.aname}</b></p> <p>${e.target.street}</p> <p><span>${e.target.postalcode}</span><span >${e.target.city}</span></p> <p>联系电话： ${e.target.tel}</p> <p>传真号码： ${e.target.fax}</p></div>`
                            );
                            info.setPosition(e.latLng);
                            map.zoomTo(13)
                            map.panTo(e.latLng)
                        });
                    }
                }
                createCluster()

                //地图的放大缩小
                var zoomin = document.getElementById("zoomin")
                var zoomout = document.getElementById("zoomout")
                var geoloc = document.getElementById("geoloc")
                qq.maps.event.addListener(zoomin, "click", function () {
                    map.zoomTo(map.getZoom() + 1)
                })
                qq.maps.event.addListener(zoomout, "click", function () {
                    map.zoomTo(map.getZoom() - 1)
                })
                qq.maps.event.addListener(geoloc, "click", function () {
                    map.zoomTo(5)

                })

            //加载代理商列表
            var html=""
            for(var agent of data){
                html+=`<div class="col-xs-12 col-md-4 text-left">
                <p>${agent.country}</p>
                <p><b>${agent.aname}</b></p>
                <p>${agent.street}</p>
                <p><span>${agent.postalcode}</span><span > ${agent.city}</span></p>
                <p>联系电话： ${agent.tel}</p>
                <p>传真号码： ${agent.fax}</p>
                <div class="map-btn" data-x="${agent.x}" data-y="${agent.y}">
                </div>
            </div>`
            }
            $(".list-agent").html(html)
            function clickMapBtn(x,y){

            }
            $('.list-agent').on("click",'.map-btn',(e)=>{
                var $tar=$(e.target)
                var x=$tar.data('x')
                var y=$tar.data('y')
                var latLng = new qq.maps.LatLng(x, y);
                map.zoomTo(13)
                map.panTo(latLng)
            })
        })
})


