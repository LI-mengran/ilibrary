<template>
	<head>
		<meta charset="utf-8">
		<meta content="IE=edge" http-equiv="X-UA-Compatible">
		<meta content="width=device-width,initial-scale=1" name="viewport">
		<title>ilibrary</title>
	</head>
	<div style="height:150px"></div>
	<div data-v-36afc1dd="" class=" el-table el-table--fit el-table--striped el-table--border el-table--enable-row-hover" style="margin: 30px; width:auto">
	<div class="el-table__header-wrapper">
		<table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 100%;">
			<colgroup>
				<col name="el-table_2_column_6" width="25%">
				<col name="el-table_2_column_7" width="25%">
				<col name="el-table_2_column_8" width="25%">
				<col name="el-table_2_column_9" width="25%">
				<col name="el-table_2_column_10" width="25%">
			</colgroup>
			<thead class="has-gutter">
				<tr class="">
					<th colspan="1" rowspan="1" class="el-table_2_column_6  is-center   is-leaf el-table__cell" width="25%">
						<div class="cell">座位号</div></th>
					<th colspan="1" rowspan="1" class="el-table_2_column_7  is-center   is-leaf el-table__cell" width="25%"><div class="cell">开始时间</div></th>
					<th colspan="1" rowspan="1" class="el-table_2_column_8  is-center   is-leaf el-table__cell" width="25%"><div class="cell">结束时间</div></th>
					<th colspan="1" rowspan="1" class="el-table_2_column_9  is-center   is-leaf el-table__cell" width="25%"><div class="cell">状态</div></th>
					<th colspan="1" rowspan="1" class="el-table_2_column_10  is-center   is-leaf el-table__cell" width="25%"><div class="cell">操作</div></th>
					<th class="el-table__cell gutter" style="width: 0px; display: none;"></th>
				</tr>
			</thead>
		</table>
	</div>
	<div class="el-table__body-wrapper is-scrolling-none">
		<table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 1640;">
			<colgroup>
				<col name="el-table_2_column_6" width="328">
				<col name="el-table_2_column_7" width="328">
				<col name="el-table_2_column_8" width="328">
				<col name="el-table_2_column_9" width="328">
				<col name="el-table_2_column_10" width="328">
			</colgroup>
			<tbody v-if="reservation_list.length != 0 && isReloadData">
				<tr class = "el-table__row" v-for="item in reservation_list" :key="item.resId">
				        <td rowspan="1" colspan="1" class="el-table_3_column_11 is-center  el-table__cell">
							  <div class="cell">{{item.seat}}</div>
						</td>
				        <td rowspan="1" colspan="1" class="el-table_3_column_12 is-center  el-table__cell">
				         	  <div class="cell">{{item.startTime}}</div>
				        </td>
				        <td rowspan="1" colspan="1" class="el-table_3_column_13 is-center  el-table__cell">
				        	  <div class="cell">{{item.endTime}}</div>
				        </td>
						<td rowspan="1" colspan="1" class="el-table_3_column_14 is-center  el-table__cell">
							  <div class="cell">{{item.status}}</div>
						</td>
						<td rowspan="1" colspan="1" class="el-table_3_column_15 is-center  el-table__cell">
							   <button data-v-36afc1dd="" type="button" @click="checkin(item.resId,item.startTime)" class="el-button el-button--success el-button--mini">
								   <span>签到 </span>
								</button>
								
								<button data-v-36afc1dd="" type="button" @click="cancel(item.resId)" class="el-button el-button--success el-button--mini">
											 <span>取消 </span>
								</button>
						</td>
				          <td>
				           
				          </td>
				        </tr>
			</tbody>
		</table>
		<div v-if="reservation_list.length==0" class="el-table__empty-block" style="height: 100%; width: auto;">
			<span class="el-table__empty-text">暂无预约座位</span></div>
	<div class="el-table__body-wrapper is-scrolling-none">
	</div>
	</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		
		name: 'Checkin',
		props:['username'],
		//Penglei Mao
		data() {
			return {
				reservation_list: [],
				isReloadData:true,
				userId: 0,
			}
		},
		methods: {
			checkin(id,starttime) {
				var date = Date.parse(starttime);
				var now = Date.parse(new Date());
				var minute = now - date;
				// alert(new Date() + "-" + starttime + '-' + minute)
				if(Math.abs(minute) < 600 * 1000)
				$.ajax({
						url:'http://10.177.44.64/ibooking/reservations/' + id ,
						type: 'PATCH',
						dataType: "json",
						contentType:"application/json",
						data : JSON.stringify({
								  "status":"CONFIRMED"
								}),
						
						success:(result) => {
							alert("签到成功");
							this.cancelled(result);
						},
						error: function(xhr,status,error){
							alert(xhr.status);
						},
					});
				else alert("未到签到时间");
					
			},
			cancelled(result){
				
				this.getreservationList();
			},
			cancel(id) {
				
				$.ajax({
						url:'http://10.177.44.64/ibooking/reservations/' + id ,
						type: 'PATCH',
						dataType: "json",
						contentType:"application/json",
						data : JSON.stringify({
								  "status":"CANCELED"
								}),
						
						success:(result) => {
							alert("取消成功");
							this.cancelled(result);
						},
						error: function(xhr,status,error){
							alert(xhr.status);
						},
					});
					
			},
			getreservationList() {
					const _this = this
					_this.reservation_list = [];
							 $.getJSON("http://10.177.44.64/ibooking/users/" + _this.userId + "/reservations",function(data,status){
								if(data.code != 1000)alert("加载错误");
								const info = JSON.parse(JSON.stringify(data.data));
								for(var index in info){
									if(info[index].status != "PENDING")continue;
										let res = {};
										res['id'] = index;
										res['resId'] = info[index].id;
									
										res['startTime'] = info[index].startTime;
										res['endTime'] = info[index].endTime;
										res['status'] = info[index].status;
										
										var date = Date.parse(info[index].startTime);
										var now = Date.parse(new Date());
										var minute = now - date;
										if(minute > 0) continue;
										if(Math.abs(minute) < 600 * 1000)
										alert("距签到时间还有" + -parseInt(minute/1000/60) + "分钟，请尽快签到！");
										
										$.getJSON("http://10.177.44.64/ibooking/reservations/" + info[index].id + "/seat" ,function(data,status){
											const seat = JSON.parse(JSON.stringify(data.data));
											res['seat'] = seat.seatNumber;
											_this.reservation_list.push(res);	
				
										});													
								}
			// 					// else _this.kindList = kind;
							  });
						},	
						getUserInfo(){
							const _this = this
							$.getJSON("http://10.177.44.64/ibooking/users",function(data,status){
								if(data.code != 1000)alert("用户信息请求失败！");
								
								const info = JSON.parse(JSON.stringify(data.data));
								for(let index in info){
									if(info[index].username == _this.username){
										_this.userId = info[index].id;
									}
								}
								_this.getreservationList();
							});
						}
		},
		mounted () {
			this.getUserInfo();
			
			// this.getname();
		  // this.$router.replace('/admin/dashboard')
		},
	}
</script>

<style>
</style>