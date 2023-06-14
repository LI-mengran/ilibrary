<template>
	<head>
		<meta charset="utf-8">
		<meta content="IE=edge" http-equiv="X-UA-Compatible">
		<meta content="width=device-width,initial-scale=1" name="viewport">
		<title>ilibrary</title>
	</head>
		<body>
			<div style="height:150px"></div>
		<form data-v-36afc1dd="" class="el-form el-form--inline" lable-with="24px">
			<!-- 
			<div data-v-36afc1dd="" class="el-form-item">
				<label class="el-form-item__label">校区</label>
				<div class="el-form-item__content">
					<div data-v-36afc1dd="" class="el-select" @click="classroom_change()"> 
					<div class="el-input el-input--suffix"> 
					<input type="text" id="classroom" readonly="readonly" autocomplete="off" placeholder="请选择" class="el-input__inner">
			
					<span class="el-input__suffix">
						<span class="el-input__suffix-inner">
							<i class="el-select__caret el-input__icon el-icon-arrow-up"></i>     
						</span> 
					</span>  
					</div></div> 
				</div>
			</div> -->
			
			
			<div data-v-36afc1dd="" class="el-form-item">
				<label class="el-form-item__label">教室</label>
				<div class="el-form-item__content">
					<div data-v-36afc1dd="" class="el-select" @click="classroom_change()"> 
					<div class="el-input el-input--suffix"> 
					<input type="text" id="classroom" readonly="readonly" autocomplete="off" placeholder="请选择" class="el-input__inner">

					<span class="el-input__suffix">
						<span class="el-input__suffix-inner">
							<i class="el-select__caret el-input__icon el-icon-arrow-up"></i>     
						</span> 
					</span>  
					<div class="el-select-dropdown el-popper" id="classroom-list" style="float:left;display:none;min-width: 223px; transform-origin: center top; z-index: 2006; position: absolute;" x-placement="bottom-start" >
						<div class="el-scrollbar" style="">
							<div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -15px; margin-right: -15px;">
								<ul class="el-scrollbar__view el-select-dropdown__list">
								 <option data-v-36afc1dd="" @click="link(item.name)" class="el-select-dropdown__item" id="classroom_select" v-for="item in kindList" v-bind:value="item.id"  v-text="item.name">
								 </option>
								</ul>
								</div>
								<div class="el-scrollbar__bar is-horizontal">
									<div class="el-scrollbar__thumb" style="transform: translateX(0%);">
										
									</div>
								</div>
								<div class="el-scrollbar__bar is-vertical">
									<div class="el-scrollbar__thumb" style="transform: translateY(0%);">
											
									</div>
								</div>
							</div>
							<div x-arrow="" class="popper__arrow" style="left: 100px;">
							</div>
						</div>
					</div></div> 
				</div>
			</div>
			<div data-v-36afc1dd="" class="el-form-item">
				<label for="date" class="el-form-item__label">日期</label>
				<div class="el-form-item__content">
					<div data-v-36afc1dd="" class=" el-input el-input--prefix el-input--suffix " @click="date_change()"> 
					<input type="text" id="date" autocomplete="off" name="" placeholder="选择日期" class="el-input__inner">
					<span class="el-input__prefix">
						<i class="el-input__icon el-icon-date"></i> 
					</span>
					<span class="el-input__suffix">
						<span class="el-input__suffix-inner">
							<i class="el-input__icon"></i>    
						</span>
						<i class="el-input__icon el-input__validateIcon el-icon-circle-close" ></i>
					</span>
					  <div class="el-select-dropdown el-popper" id="date-list" style="display:none;float:left;min-width: 223px; transform-origin: center top; z-index: 2006; position: absolute; " x-placement="bottom-start" >
					  	<div class="el-scrollbar" style="">
					  		<div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -15px; margin-right: -15px;">
					  	<ul class="el-scrollbar__view el-select-dropdown__list">
					  	 <option data-v-36afc1dd="" @click="link_date(item.name)" class="el-select-dropdown__item" id="date_select" v-for="item in dateList" v-bind:value="item.id"  v-text="item.name">
					  	 </option>
					  	</ul>
					  </div>
					  <div class="el-scrollbar__bar is-horizontal">
					  	<div class="el-scrollbar__thumb" style="transform: translateX(0%);">		
					  	</div>
					  	</div>
					  	<div class="el-scrollbar__bar is-vertical">
					  		<div class="el-scrollbar__thumb" style="transform: translateY(0%);">			
					  		</div>
					  	</div>
					  	</div>
					  	<div x-arrow="" class="popper__arrow" style="left: 100px;">
					  	</div>
					  </div>
					</div>
				<div class="el-form-item__error" style="display:none">
		          请输入预约日期
		        </div>
				</div>
			</div>
		
			<div data-v-36afc1dd="" class="el-form-item ">
				<!-- is-error -->
				<label for="startTime" class="el-form-item__label">时间</label>
				<div class="el-form-item__content">
					<div data-v-36afc1dd="" class=" el-input el-input--prefix el-input--suffix "  @click="start_time_change()"> 
					<input type="text" id="start-time" autocomplete="off" name="" placeholder="起始时间" class="el-input__inner">
					<span class="el-input__prefix">
						<i class="el-input__icon el-icon-time"></i> 
					</span>
					<span class="el-input__suffix">
						<span class="el-input__suffix-inner">
							<i class="el-input__icon"></i>    
						</span><i class="el-input__icon el-input__validateIcon el-icon-circle-close"></i>
					</span>  
					<div class="el-select-dropdown el-popper" id="start-time-list" style="display:none;float:left;min-width: 223px; transform-origin: center top; z-index: 2006; position: absolute; " x-placement="bottom-start" >
						<div class="el-scrollbar" style="">
							<div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -15px; margin-right: -15px;">
								<ul class="el-scrollbar__view el-select-dropdown__list">
								 <option data-v-36afc1dd="" @click="link_start_time(item)" class="el-select-dropdown__item" id="start-time_select" v-for="item in timeList" v-bind:value="item"  v-text="item">
								 </option>
								</ul>
								</div>
								<div class="el-scrollbar__bar is-horizontal">
									<div class="el-scrollbar__thumb" style="transform: translateX(0%);">	
									</div>
								</div>
								<div class="el-scrollbar__bar is-vertical">
							<div class="el-scrollbar__thumb" style="transform: translateY(0%);">			
							</div></div></div>
						<div x-arrow="" class="popper__arrow" style="left: 100px;">
						</div>
					</div>
				</div>
				<div class="el-form-item__error" style="display:none">
		          请输入开始时间
		        </div>
			</div>
			</div>
			<div data-v-36afc1dd="" class="el-form-item">
				<label for="endTime" class="el-form-item__label"> - </label>
				<div class="el-form-item__content">
					<div data-v-36afc1dd=""  class=" el-input el-input--prefix el-input--suffix " @click="end_time_change()"> 
					<input type="text" id="end-time" autocomplete="off" name="" placeholder="结束时间" class="el-input__inner">
					<span class="el-input__prefix">
						<i class="el-input__icon el-icon-time"></i> 
					</span>
					<span class="el-input__suffix">
						<span class="el-input__suffix-inner">
							<i class="el-input__icon"></i>    
						</span>
						<i class="el-input__icon el-input__validateIcon el-icon-circle-close"></i>
						<div id="extwaiokist" style="display:none" v="fcoon" q="53c0c22b" c="211.2" i="215" u="1.217" s="05152315" sg="svr_04262315-ga_05152315-bai_04242318" d="1" w="false" e="" a="2" m="BMe=" vn="3gtra">
							<div id="extwaigglbit" style="display:none" v="fcoon" q="53c0c22b" c="211.2" i="215" u="1.217" s="05152315" sg="svr_04262315-ga_05152315-bai_04242318" d="1" w="false" e="" a="2" m="BMe=">
							</div>
						</div>
					</span>  
					<div class="el-select-dropdown el-popper" id="end-time-list" style="display:none; min-width: 223px; transform-origin: center top; z-index: 2006; position: absolute;" x-placement="bottom-start" >
							<div class="el-scrollbar" style="">
								<div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -15px; margin-right: -15px;">
									<ul class="el-scrollbar__view el-select-dropdown__list">
									 <option data-v-36afc1dd="" @click="link_end_time(item)" class="el-select-dropdown__item" id="end-time-select" v-for="item in timeList" v-bind:value="item"  v-text="item">
									 </option>
									</ul>
								</div>
								<div class="el-scrollbar__bar is-horizontal">
									<div class="el-scrollbar__thumb" style="transform: translateX(0%);">
											
									</div>
								</div>
								<div class="el-scrollbar__bar is-vertical">
									<div class="el-scrollbar__thumb" style="transform: translateY(0%);">
												
									</div>
								</div>
							</div>
							<div x-arrow="" class="popper__arrow" style="left: 100px;">
														</div>
					</div>
					</div>
					<div class="el-form-item__error" style="display:none">
		          请输入结束时间
					</div>
					</div>
					</div>
					<div data-v-36afc1dd="" class="el-form-item">
						<label class="el-form-item__label">插座</label>
						<div class="el-form-item__content">
							<div data-v-36afc1dd="" class="el-select"> 
							<div class="el-input el-input--suffix" @click="electricity_change()"> 
							<input type="text" id = "electricity" readonly="readonly" autocomplete="off" placeholder="请选择" class="el-input__inner"> 
							<span class="el-input__suffix">
								<span class="el-input__suffix-inner">
									<i class="el-select__caret el-input__icon el-icon-arrow-up"></i>     
								</span>
							</span> 
							<div class="el-select-dropdown el-popper" id="electricity-list" style="float:left;display:none;min-width: 223px; transform-origin: center top; z-index: 2006; position: absolute;" x-placement="bottom-start" >
									<div class="el-scrollbar" style="">
										<div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -15px; margin-right: -15px;">
											<ul class="el-scrollbar__view el-select-dropdown__list">
											 <option data-v-36afc1dd="" @click="link_electricity(item)" class="el-select-dropdown__item" id="electricity_select" v-for="item in electricity" v-bind:value="item"  v-text="item">
											 </option>
											</ul>
											</div>
											<div class="el-scrollbar__bar is-horizontal">
												<div class="el-scrollbar__thumb" style="transform: translateX(0%);">
													
												</div>
											</div>
											<div class="el-scrollbar__bar is-vertical">
												<div class="el-scrollbar__thumb" style="transform: translateY(0%);">
														
												</div>
											</div>
										</div>
										<div x-arrow="" class="popper__arrow" style="left: 100px;">
										</div>
									</div>
							</div>
						
							</div> 
						</div>
						</div>
						<div data-v-36afc1dd="" class="el-form-item"> 
						<div class="el-form-item__content">
							<button data-v-36afc1dd="" type="button" class="el-button el-button--primary is-circle" @click="search()"> 
							<i class="el-icon-search"></i> 
							</button> 
							</div>
						</div>
						</form>

					
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
										<div class="cell">楼栋</div></th>
									<th colspan="1" rowspan="1" class="el-table_2_column_7  is-center   is-leaf el-table__cell" width="25%"><div class="cell">教室</div></th>
									<th colspan="1" rowspan="1" class="el-table_2_column_8  is-center   is-leaf el-table__cell" width="25%"><div class="cell">座位号</div></th>
									<th colspan="1" rowspan="1" class="el-table_2_column_9  is-center   is-leaf el-table__cell" width="25%"><div class="cell">插座</div></th>
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
							<tbody v-if="room_info.length!=0">
								<tr class = "el-table__row" v-for="item in room_info" :key="item.id">
								        <td rowspan="1" colspan="1" class="el-table_3_column_11 is-center  el-table__cell">
											  <div class="cell">{{item.building}}</div>
										</td>
								        <td rowspan="1" colspan="1" class="el-table_3_column_12 is-center  el-table__cell">
								         	  <div class="cell">{{item.room}}</div>
								        </td>
								        <td rowspan="1" colspan="1" class="el-table_3_column_13 is-center  el-table__cell">
								        	  <div class="cell">{{item.seat}}</div>
								        </td>
										<td rowspan="1" colspan="1" class="el-table_3_column_14 is-center  el-table__cell">
											  <div class="cell">{{item.electricity}}</div>
										</td>
										<td rowspan="1" colspan="1" class="el-table_3_column_15 is-center  el-table__cell">
											   <button data-v-36afc1dd="" type="button" @click="choose_seat(item.seat)" class="el-button el-button--success el-button--mini">
												   <span>预约 </span>
												</button>
										
										</td>
								          <td>
								           
								          </td>
								        </tr>
							</tbody>
						</table>
						<div v-if="room_info.length==0" class="el-table__empty-block" style="height: 100%; width: auto;">
							<span class="el-table__empty-text">根据输入信息获取可用座位</span></div>
							</div>
							<div class="el-table__column-resize-proxy" style="display: none;">
							</div>
						</div>
		

	</body>
	
</template>

<script>
	
	import $ from 'jquery'
	
	import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths, addDays, startOfWeek, endOfWeek, addHours, addMinutes, addSeconds } from 'date-fns'


	


	export default {
		name: 'classroom',
		props:['username'],
		
		 data () {
		            return {
		                keywords: '',
		                rooms: [],
		                cardLoading: [],
		                kindList:[{name:"教室A",id:1},{name:"教室B",id:2},{name:"教室C",id:3}],
						dateList : [],
						// dateValue:[1,2],
						timeList:["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],
						electricity:["是","否"],
						room_info:[	],
						userId: 0,
		            }
		        },
		methods: {
			classroom_change(){
				if($("#classroom-list").css('display')=='block')
					$("#classroom-list").css('display','none')
				else 	$("#classroom-list").css('display','block')
			},
			link(name) {
				$("#classroom").val(name)
				$("#classroom-list").css('display','none')
				this.classroom_change()
			},
			date_change(){
				if($("#date-list").css('display')=='block')
					$("#date-list").css('display','none')
				else 	$("#date-list").css('display','block')
			},
			link_date(name) {
				$("#date").val(name)
				$("#date-list").css('display','none')
				this.date_change()
			},
			start_time_change(){
				if($("#start-time-list").css('display')=='block')
					$("#start-time-list").css('display','none')
				else 	$("#start-time-list").css('display','block')
			},
			link_start_time(name) {
				$("#start-time").val(name)
				$("#start-time-list").css('display','none')
				this.start_time_change()
			},
			end_time_change(){
				if($("#end-time-list").css('display')=='block')
					$("#end-time-list").css('display','none')
				else 	$("#end-time-list").css('display','block')
			},
			link_end_time(name) {
				$("#end-time").val(name)
				$("#end-time-list").css('display','none')
				this.end_time_change()
			},
			electricity_change(){
				if($("#electricity-list").css('display')=='block')
					$("#electricity-list").css('display','none')
				else 	$("#electricity-list").css('display','block')
			},
			link_electricity(name) {
				$("#electricity").val(name)
				$("#electricity-list").css('display','none')
				this.electricity_change()
			},
			choose_seat(id){
				let addInfo = {
					  "userId": this.userId,
					  "seatId": id,
					  "startTime": $("#date").val() + "T" + $("#start-time").val()+ ":00+08:00",
					  "endTime": $("#date").val() + "T" + $("#end-time").val() + ":00+08:00",
				}
				const _this = this
				$.post({
				  url: "http://10.177.44.64/ibooking/reservations",
				  data: JSON.stringify(addInfo),
				  contentType: "application/json",
				}).done(function(data, textStatus, jqXHR) {
				  if (data.code == 1000) {
					alert("预约成功");
				  } else {
				    alert("信息错误");
				  }
				  _this.search();
				}).fail(function(jqXHR, textStatus, errorThrown) {
				  alert(textStatus + ": " + errorThrown);
				});
			},
			search(){
				if($("#start-time").val() > $("#end-time").val()){
					alert("开始时间需小于结束时间");
					return;
				}
				if($("#classroom").val() == "" || $("#start-time").val() == "" || $("#end-time").val() == ""){
					alert("信息不完善");
				}
				let room_info = [];
				const _this = this;
				_this.room_info= [];
				$.getJSON("http://10.177.44.64/ibooking/buildings/name/" + $("#classroom").val() + "/rooms",function(data,status){
					if(status != 'success')alert("无法获取信息");
					
					const info = data.data;
					
					for(let index in info){
						var additionalInfo = {
							name:info[index].name,
						};
						$.getJSON("http://10.177.44.64/ibooking/rooms/" + info[index].id + "/seats",additionalInfo ,function(data,status){
							const seats = data.data;
							let indexMap = [];
							for(let index in seats){
								if(indexMap.includes(seats[index].id))continue;
								indexMap.push(seats[index].id);
								if(seats[index].status == "AVAILABLE"){
									let a = ($("#electricity").val())==="是"? true :false ;
									if(seats[index].hasPower == a){
										let seat = {};
										seat['id'] = seats[index].id;
										seat['building'] = $("#classroom").val();
										seat['room'] = additionalInfo.name;
										seat['seat'] = seats[index].seatNumber;
										seat['electricity'] =  $("#electricity").val();
										
										$.getJSON("http://10.177.44.64/ibooking/seats/"+ seats[index].id +"/reservations", function(data,status){
											if(data.code != 1000)alert("error");
											const info1 = data.data;
											const getStart = Date.parse($("#date").val() + " " + $("#start-time").val()+ ":00");
											const getEnd = Date.parse($("#date").val() + " " + $("#end-time").val()+ ":00");
											let flag = true
											for(var index in info1){
												// alert(JSON.stringify(info));					
												if(info1[index].status == "CANCELED") continue;
												let start = Date.parse(info1[index].startTime);
												let end =  Date.parse(info1[index].endTime);
												if(getStart > end || getEnd < start)continue;
												else {
													flag = false;
													break;
												}
											}
											if(flag == true)
											_this.room_info.push(seat);
										});
										
									}
								}
							
							}
						});
					}
				});
				
				
			},
			isAvailable(id){
			
			},
			getkindList() {
				const _this = this
						const kind=[{name:"教室A",id:1},{name:"教室B",id:2},{name:"教室C",id:3}];
						 let kindList = [];
						 $.getJSON("http://10.177.44.64/ibooking/buildings",function(data,status){
							 if(status!='success')alert("加载错误");
		
							const info = data.data;
		
							for(var index in info){
								let aroom = {};
								aroom['id'] = info[index].id;
								aroom['name'] = info[index].name;
								kindList.push(aroom)
								
							}
	
							if(kindList.length != 0)_this.kindList= kindList;
							else _this.kindList = kind;
						  });
						
					},
					getUserId(){
						const _this = this
						$.getJSON("http://10.177.44.64/ibooking/users",function(data,status){
							if(data.code != 1000)alert("用户信息请求失败！");
							
							const info = data.data;
							for(let index in info){
								if(info[index].username == _this.username){
									_this.userId = info[index].id;
								}
							}
						})
					},
					getDateList(){
						const now = new Date();
						const year = now.getFullYear(); 
						const month = String(now.getMonth() + 1).padStart(2, '0'); 
						const day = String(now.getDate()).padStart(2, '0'); 
						var today = {name :year + '-' +month + '-' + day ,id:1};
						
						const tomorrow = addDays(now, 1);
						const tyear = tomorrow.getFullYear();
						const tmonth = String(tomorrow.getMonth() + 1).padStart(2, '0'); 
						const tday = String(tomorrow.getDate()).padStart(2, '0'); 
						var tom = {name:tyear + '-' +tmonth + '-' + tday,id:2} ;
						this.dateList.push(today);
						this.dateList.push(tom);
					},
					
		},
		computed: {
		
		},
		mounted () {
			this.getDateList();
			this.getkindList();
			this.getUserId();
			// this.getname();
		  // this.$router.replace('/admin/dashboard')
		},
	}
</script>

<style>
</style>