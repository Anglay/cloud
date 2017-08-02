<template>
    <transition name="fade" mode="out-in">
        <div class="nav-side" v-show="visible">
            <div class="side-mask" @click="closeView"></div>
            <div class="side-content">{{text}}</div>
        </div>
    </transition>
</template>

<script type="text/javascript">
export default {
    data() {
        return {
            text: "Welcome to Your team page"
        }
    },
    props: ["visible"],
    components: {

    },
    methods:{
        closeView:function(){
            this.$router.push({
                path:this.$route.path
            })
        }
    }
}
</script>

<style lang="less" scoped>
.nav-side {
    bottom: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
    .side-mask {
        background: rgba(0, 0, 0, 0.2) none repeat scroll 0 0;
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
    }
    .side-content {
        background: #fff none repeat scroll 0 0;
        box-sizing: border-box;
        display: inline-block;
        height: 100%;
        left: 80px;
        margin-bottom: 30px;
        padding: 30px 0;
        position: fixed;
        top: 0;
        width: 400px;
    }
}
.fade-enter-active,
.fade-leave-active,
.side-content,
.side-mask {
    transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
}

.fade-enter .side-mask,
.fade-leave-active .side-mask {
    opacity: 0;
}

.fade-enter .side-content,
.fade-leave-active .side-content {
    transform: translate3d(-100%, 0px, 0px);
}
</style>
