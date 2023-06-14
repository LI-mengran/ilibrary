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
					<th colspan="1" rowspan="1" class="el-table_2_column_7  is-center   is-leaf el-table__cell" width="25%"><div class="cell">楼栋</div></th>
					<th colspan="1" rowspan="1" class="el-table_2_column_8  is-center   is-leaf el-table__cell" width="25%"><div class="cell">插座</div></th>
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
			<tbody v-if="seats_list.length != 0 && isReloadData">
				<tr class = "el-table__row" v-for="item in seats_list" :key="item.id">
				        <td rowspan="1" colspan="1" class="el-table_3_column_11 is-center  el-table__cell">
							  <div class="cell" >{{item.id}}</div>
						</td>
				        <td rowspan="1" colspan="1" class="el-table_3_column_12 is-center  el-table__cell">
				         	  <div class="cell">{{item.room}}</div>
				        </td>
				        <td rowspan="1" colspan="1" class="el-table_3_column_13 is-center  el-table__cell">
				        	  <div class="cell">{{item.hasPower}}</div>
				        </td>
						<td rowspan="1" colspan="1" class="el-table_3_column_14 is-center  el-table__cell">
							  <div class="cell">{{item.status}}</div>
						</td>
						<td rowspan="1" colspan="1" class="el-table_3_column_15 is-center  el-table__cell">								
								<div>
									<button data-v-36afc1dd="" type="button"  @click="editSeat(item.id)" class="el-button el-button--success el-button--mini">
												<span>修改 </span>
									</button>
								  </div>
						</td>
				        </tr>
			</tbody>
			</table>
			<el-dialog
			        title="修改座位信息"
                :visible.sync="dialogFormVisible"
				v-model = "dialogFormVisible"
					 width="40%" top="10px"
					 style="text-align: center;align-items:center;"
					>
			  <el-form :model = "editseat" style="width: 40%; margin:0px auto" ref="dataForm">
			       
			        <el-form-item label="楼栋" :label-width="formLabelWidth" >
			            <el-input v-model="editseat.room" autocomplete="on" style="width: 100%;"></el-input>
			        </el-form-item>
					<el-form-item label="插座"  :label-width="formLabelWidth" >
					    <el-select v-model = "editseat.hasPower" placeholder="请选择" style="width: 100%;">
					        <el-option label="是" value="true"></el-option>
					        <el-option label="否" value="false"></el-option>
					    </el-select>
					</el-form-item>
					<el-form-item label="状态"  :label-width="formLabelWidth" >
					    <el-select v-model = "editseat.status" placeholder="请选择" style="width: 100%;">
					        <el-option label="可用" value="AVAILABLE"></el-option>
					        <el-option label="不可用" value="UNDER_MAINTENANCE"></el-option>
					    </el-select>
					</el-form-item>
			       <!-- <el-form-item prop="id" style="height: 0">
			            <el-input type="hidden" v-model="form.roomId" autocomplete="off"></el-input>
			        </el-form-item> -->
			    </el-form>
			    <div slot="footer" class="dialog-footer">
			        <el-button @click="dialogFormVisible = false">取 消</el-button>
			        <el-button type="primary" @click="onSubmit">确 定</el-button>
			    </div>
			</el-dialog>
			
		
	</div>
	</div>
	
	
</template>

<script>
	import $ from 'jquery'
	import 'element-plus/dist/index.css'
	export default {
		
		//Penglei Mao
		data() {
			return {
				seats_list: [],
				isReloadData:true,
				dialogFormVisible:false,
				editseat:{},
			}
		},
		methods: {
			getseats() {
					const _this = this
							let seats=[];
							_this.seats_list = [];
							 $.getJSON("http://10.177.44.64/ibooking/seats",function(data,status){
								if(status!='success')alert("加载错误");
								const info = JSON.parse(JSON.stringify(data.data));
								for(var index in info){
									let seat = {};
									seat['id'] = info[index].id;
									seat['hasPower'] = info[index].hasPower;
									seat['status'] =  info[index].status;
									 $.getJSON("http://10.177.44.64/ibooking/seats/" + info[index].id +"/room",function(data,status){
										 seat['room'] = data.data.name;
										 _this.seats_list.push(seat);
										 });
									}
								
							  });
						},	
			editSeat(id){
				for(var index in this.seats_list){
					if(this.seats_list[index].id == id)
						this.editseat = this.seats_list[index];
				}

				this.dialogFormVisible = true;
			},
			onSubmit(){
				// alert(JSON.stringify(this.editseat));
				let editedseat = {};
				editedseat['hasPower'] = this.editseat.hasPower;
				editedseat['status'] = this.editseat.status;
				$.ajax({
						url:'http://10.177.44.64/ibooking/seats/' + this.editseat.id ,
						type: 'PATCH',
						dataType: "json",
						contentType:"application/json",
						data : JSON.stringify(editedseat),
						success:(result) => {
							alert("修改成功");
							this.dialogFormVisible = false;
						},
						error: function(xhr,status,error){
							alert(xhr.status);
						},
					});
				
			}
		},
		mounted () {
			this.getseats(this.username);
			// this.getname();
		  // this.$router.replace('/admin/dashboard')
		},
	}
</script>

<style>
</style>