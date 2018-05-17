
$(document).ready(function(){
	showLink();
    /***
	 * 初始化
     */
	function showLink() {
		$.ajax({
			type:'GET',
			data:{
				"pageNo":pageNo,
				"pageSize":pageSize,
				"type":"mp4"
			},
			url:reapi()+"/showLink",
			success:function(data){
				console.log(data);
				$("#videLink").empty();
				$("#videLinkTemplate").tmpl({links:data.data}).appendTo("#videLink");
				//$("#totalpage").text("共"+data.record+"部视频,"+data.totalPages+"页")
			},
			error:function(){
				alert("加载视频列表失败");
			}
		})
	}
	
	//调用跳页方法
	jumpage(showLink);

})

function delVideo(video,vid) {
		console.log(vid)
		 var btnArray = ['是', '否'];
		 mui.confirm('删除该视频，确认？', 'Hello MUI', btnArray, function(e) {
                    if (e.index == 0) {
                        mui.ajax({
							type:'GET',
							data:{
								"vid":vid
							},
							url:reapi()+"/delVideo",
							success:function(){
								mui.alert("删除成功！");
								var s=video;
								console.log(s.parentNode.parentNode);
								var node1=s.parentNode.parentNode;
								node1.parentNode.removeChild(node1);
							},
							error:function(){
					            mui.alert("删除失败，请联系管理员!");
							}
						})
                    } /*else if(e.index==1){
                        //mui.alert("已取消操作");
                    }*/
                })
		
	}




