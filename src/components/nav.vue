<template>
    <div class="nav">
        <router-link :to="{path:'/'}" class="item logo">
            <i></i>
            <span>云协作</span>
        </router-link>
        <router-link to="?type=team" class="item team" exact>
            <i></i>
            <span>团队</span>
        </router-link>
        <router-link :to="{path:'calendar'}" class="item calendar">
            <i></i>
            <span>日历</span>
        </router-link>
        <router-link :to="{path:'message'}" class="item message">
            <i></i>
            <span>消息</span>
        </router-link>
    </div>
</template>

<script type="text/javascript">
export default {
    data() {
        return {
            model: "calendar",
            list: [
                {
                    text: "云协作",
                    class: "item logo",
                    url: "index"
                }, {
                    text: "团队",
                    class: "item team",
                    url: "team"
                }, {
                    text: "日历",
                    class: "item calendar ",
                    url: "calendar"
                }, {
                    text: "消息",
                    class: "item message",
                    url: "message"
                }
            ]
        }

    }
}
</script>

<style lang="less" scoped>
.nav {
    float: left;
    height: 100%;
    min-height: 622px;
    position: relative;
    text-align: center;
    width: 80px;
    z-index: 9999;
    background: #20a0ff;
    .item {
        display: block;
        height: 80px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        i {
            display: inline-block;
            width: 50px;
            height: 50px;
        }
        span {
            display: block;
        }
    }
    .router-link-exact-active {
        background-color: #58B7FF;
    }
    .logo {
        padding: 10px 0;
        i {
            background: url(../assets/icon_logo.png) no-repeat center center;
            background-size: 40px;
        }
        span {
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 12px;
            color: #fff;
            font-weight: bold;
        }
    }
    .team i {
        background: url(../assets/icon_team.png) no-repeat center center;
    }
    .calendar i {
        background: url(../assets/icon_calendar.png) no-repeat center center;
    }
    .message i {
        background: url(../assets/icon_message.png) no-repeat center center;
    }
}
</style>
