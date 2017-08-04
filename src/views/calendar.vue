<template>
    <div class="page">
        <div class="page-header">
            <div class="header-left">
                <h2>
                    <em class="calendar-icon"></em>
                    我的日历
                </h2>
            </div>
            <div class="header-right"></div>
            <div class="header-center">
                <div class="header-calendar">
                    <div class="arrow-left">
                        <a class="el-icon-arrow-left" id="last-week"></a>
                    </div>
                    <div class="arrow-right">
                        <a class="el-icon-arrow-right" id="next-week"></a>
                    </div>
                    <div class="calendar-text">{{weekFirstDate+" 至 "+weekLastDate}}</div>
                </div>
            </div>
        </div>
        <div class="page-content">
            <div class="list">
                <div class="col-list" v-for="(item,index) in dateArr" :key="index">
                    <v-CalendarItem :date="item.date" :week="item.week"></v-CalendarItem>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script type="text/javascript">
import CalendarItem from '@/components/calendarItem.vue'

export default {
    data() {
        return {
            text: "calendar",
            dateArr: [],
            weekFirstDate: "",
            weekLastDate: ""
        }
    },
    components: {
        "v-CalendarItem": CalendarItem
    },
    mounted: function () {
        this.initDate()
    },
    methods: {
        initDate: function () {
            var that = this;
            var currentFirstDate;
            var formatDate = function (date) {
                var year = date.getFullYear() + '-';
                var month = (date.getMonth() + 1) + '-';
                var day = date.getDate();
                var week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][date.getDay()];
                return { "date": year + month + day, "week": week };
            };
            var addDate = function (date, n) {
                date.setDate(date.getDate() + n);
                return date;
            };
            var setDate = function (date) {
                var week = date.getDay();
                date = addDate(date, week * -1);
                currentFirstDate = new Date(date);
                var arr = []
                for (var i = 0; i < 7; i++) {
                    arr.push(formatDate(i == 0 ? date : addDate(date, 1)))
                }
                that.dateArr = arr;
                that.weekFirstDate = arr[0].date;
                that.weekLastDate = arr[arr.length - 1].date
            };
            document.getElementById('last-week').onclick = function () {
                setDate(addDate(currentFirstDate, -7));
            };
            document.getElementById('next-week').onclick = function () {
                setDate(addDate(currentFirstDate, 7));
            };
            setDate(new Date());
        }
    }
}
</script>

<style lang="less" scoped>
.page {
    height: 100%;
    overflow-y: auto;
    padding-top: 60px;
    .page-content {
        height: 100%;
        position: relative;
        z-index: 9;
        .list {
            height: 100%;
            overflow: auto;
            width: 100%;
            .col-list {
                background: #f8f8f8;
                border-right: 1px solid #dfdfdf;
                box-sizing: border-box;
                float: left;
                min-height: 100%;
                transition: all 0.3s ease 0s;
                width: 14.28%;
            }
        }
    }
    .page-header {
        position: fixed;
        left: 80px;
        right: 0;
        top: 0;
        height: 60px;
        padding: 0 20px;
        background: #fff;
        clear: both;
        z-index: 99;
        .header-left,
        .header-right {
            display: inline-block;
            width: 30%;
        }
        .header-left {
            float: left;
            h2 {
                line-height: 60px;
                color: #333;
                display: inline-block;
                font-size: 18px;
                max-width: 550px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                .calendar-icon {
                    background: url(../assets/calendar-icon.png) no-repeat center center;
                    display: inline-block;
                    height: 20px;
                    margin-top: -6px;
                    vertical-align: middle;
                    width: 32px;
                }
            }
        }
        .header-right {
            float: right;
        }
        .header-center {
            width: 40%;
            margin: 0 auto;
            .header-calendar {
                margin: 0 auto;
                width: 300px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                .arrow-left,
                .arrow-right {
                    display: inline-block;
                    height: 60px;
                    line-height: 60px;
                    width: 50px;
                    a {
                        color: #dbdbdb;
                        display: inline-block;
                        line-height: 30px;
                        text-align: center;
                        transition: all 0.3s ease 0s;
                        width: 50px;
                        cursor: pointer;
                    }
                    a:hover {
                        color: #20a0ff;
                    }
                }
                .arrow-left {
                    float: left;
                }
                .arrow-right {
                    float: right;
                }
                .calendar-text {
                    margin: 0 50px;
                    color: #666;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>
