<template>
  <transition name="fade" mode="out-in">
    <div id="app">
      <v-nav></v-nav>
      <div class="main-container">
        <v-Team :visible="isShowTeam"></v-Team>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import nav from "@/components/nav.vue"
import Team from '@/components/team.vue'
export default {
  data() {
    return {
      isShowTeam: false
    }
  },
  mounted: function () {
    this.checkUrl(this.$route)
  },
  methods: {
    checkUrl: function (value) {
      if (value.query.type == "team") {
        this.isShowTeam = true;
      } else {
        this.isShowTeam = false;
      }
    }
  },
  watch: {
    $route: function (val, oldval) {
      this.checkUrl(val)
    }
  },
  components: {
    "v-nav": nav,
    "v-Team": Team
  }
}
</script>

<style lang="less">
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}

html,
body {
  height: 100%;
}






/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

q {
  quotes: none;
}

q:before,
q:after {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}



/* custom */

a {
  color: #7e8c8d;
  text-decoration: none;
  -webkit-backface-visibility: hidden;
  text-decoration: none;
}

li {
  list-style: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  height: 100%;
  .main-container {
    position: relative;
    height: auto;
    overflow: hidden;
    margin-left: 80px;
  }
}
</style>