<template>
    <div class="page-item">
        <div class="task-date" :class="{active:tody.date==date&&tody.week==week}">{{date+" "+week}}</div>
        <ul>
            <li class="my-schedule time-normal be-to-after">
                <div class="point"></div>
                <div class="context">
                    <h2>啥地方郭德纲</h2>
                </div>
            </li>
            
            <li class="schedule-add" v-if="isadd">
                <div class="icons">
                    <em class="el-icon-plus"></em>
                </div>
                <div class="context">
                    <h2>新建日程</h2>
                </div>
            </li>
        </ul>
    </div>
</template>

 <script type="text/javascript">

export default {
    data() {
        return {
            tody: {
                date: "",
                week: ""
            },
            isadd:false
        }
    },
    props: ["date", "week"],
    mounted: function () {
        this.initToday();
    },
    watch: {
        "date": function (val, val2) {
            this.setDate();
        }
    },
    components: {

    },
    methods: {
        initToday: function () {
            var tody = new Date();
            var date = tody.getFullYear() + "-" + (tody.getMonth() + 1) + "-" + tody.getDate();
            var week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][tody.getDay()];
            this.tody.date = date;
            this.tody.week = week;
            this.setDate();
        },
        timestamp:function(str1,str2){
             var timestamp1 = Date.parse(new Date(str1));
            timestamp1 = timestamp1 / 1000;
            var timestamp2 = Date.parse(new Date(str2));
            timestamp2 = timestamp2 / 1000;
            return timestamp1<=timestamp2
        },
        setDate: function () {
            this.isadd = this.timestamp(this.tody.date,this.date)
            // console.log(this.date + " " + this.week)
        }
    }
}
</script>

<style lang="less" scoped>
.page-item {
    height: auto;
    overflow: hidden;
    .task-date {
        background: #f0f0f0 none repeat scroll 0 0;
        border-bottom: 1px solid #dfdfdf;
        color: #333;
        font-size: 14px;
        line-height: 41px;
        text-align: center;
    }
    .active {
        color: #20a0ff;
    }
    ul {
        margin: 0 10px;
        li {
            border: 1px solid transparent;
            border-radius: 2px;
            box-shadow: 0 2px 4px 0 rgba(31, 61, 54, 0.08);
            height: 42px;
            margin-top: 10px;
            overflow: hidden;
            padding-left: 4.2%;
            transition: all 0.3s ease 0s;
            .context {
                color: #333;
                display: inline-block;
                padding: 9px 0 5px 10px;
                width: calc(100% - 18px - 30px);
                h2 {
                    cursor: pointer;
                    font-size: 14px;
                    letter-spacing: 2px;
                    line-height: 25px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
        .time-normal {
            .point {
                float: left;
                height: 42px;
                line-height: 42px;
                margin-left: 4px;
                width: 8px;
            }
            .point::after {
                background: #029c74 none repeat scroll 0 0;
                border-radius: 50%;
                content: " ";
                display: inline-block;
                height: 8px;
                width: 8px;
            }
            .point::after {
                background: #20a0ff none repeat scroll 0 0;
                transition: all 0.3s ease 0s;
            }
        }
        .schedule-add {
            background: transparent none repeat scroll 0 0;
            border: 1px solid transparent;
            box-shadow: none;
            cursor: pointer;
            line-height: 41px;
            margin-bottom: 60px;
            .icons {
                color: #20a0ff;
                float: left;
            }
        }
        .schedule-add:hover {
            border: 1px solid #20a0ff;
        }
    }
}
</style>
