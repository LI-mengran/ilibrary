<template>

	<div style="height:150px"></div>
    <div id='app'>
        <el-button @click='handleOpenDialog'>打开Dialog弹框</el-button>
        <el-dialog title='外部表格弹窗' center :visible.sync='outVisible' v-model='outVisible' :before-close='outClose' append-to-body>
           <el-table :data='gridData'>
                <el-table-column prop='date' label='日期'></el-table-column>
                <el-table-column prop='name' label='姓名'></el-table-column>
                <el-table-column prop='address' label='地址'></el-table-column>
                <el-table-column label='操作'>
                    <template slot-scope='scope'>
                        <el-button type='warning' size='mini' @click='handleEdit(scope.row)'>修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
           <el-dialog title='内部表单弹窗' center :visible.sync='innerVisible' v-model = 'innerVisible' :before-close='outClose' append-to-body>
                <el-form :model='formData' label-width='80px'>
                    <el-form-item label='日期'>
                        <el-input v-model='formData.date'></el-input>
                    </el-form-item>
                    <el-form-item label='姓名'>
                        <el-input v-model='formData.name'></el-input>
                    </el-form-item>
                    <el-form-item label='地址'>
                        <el-input v-model='formData.address'></el-input>
                    </el-form-item>
                </el-form>
                <span slot='footer'>
                    <el-button @click='innerVisible=false'>返回</el-button>
                </span>
            </el-dialog>
            <span slot='footer'>
                <el-button @click='outVisible=false'>返回</el-button>
            </span>
        </el-dialog>
    </div>


</template>

<script>
	import 'element-plus/dist/index.css'
	
    export default{
		
        data() {
            return {
                outVisible: false,
                innerVisible: false,
                formData: { date: '', name: '', address: '' },
                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
            }
        },
        methods: {
            handleOpenDialog() {
                this.outVisible = true
            },
            outClose(done) {
                this.$confirm('确认关闭', '提示框').then(() => {
                    done()
                }).catch(() => {

                })
            },
            handleEdit(row) {
                this.formData = row
                this.innerVisible = true
            }
        },
		mounted () {
			// alert("sc")
			// this.getname();
		  // this.$router.replace('/admin/dashboard')
		},
    }
</script>

<style>
</style>