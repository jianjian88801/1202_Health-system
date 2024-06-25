import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import yaopinliebiao from '@/views/modules/yaopinliebiao/list'
    import storeup from '@/views/modules/storeup/list'
    import jiankangshipin from '@/views/modules/jiankangshipin/list'
    import forum from '@/views/modules/forum/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yishengxinxi from '@/views/modules/yishengxinxi/list'
    import chat from '@/views/modules/chat/list'
    import yaopinleixing from '@/views/modules/yaopinleixing/list'
    import messages from '@/views/modules/messages/list'
    import shipinleixing from '@/views/modules/shipinleixing/list'
    import keshileixing from '@/views/modules/keshileixing/list'
    import zaixianyuyue from '@/views/modules/zaixianyuyue/list'
    import config from '@/views/modules/config/list'
    import discussjiankangshipin from '@/views/modules/discussjiankangshipin/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '健康资讯',
        component: news
      }
      ,{
	path: '/yaopinliebiao',
        name: '药品列表',
        component: yaopinliebiao
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/jiankangshipin',
        name: '健康视频',
        component: jiankangshipin
      }
      ,{
	path: '/forum',
        name: '健康论坛',
        component: forum
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/yishengxinxi',
        name: '医生信息',
        component: yishengxinxi
      }
      ,{
	path: '/chat',
        name: '在线咨询',
        component: chat
      }
      ,{
	path: '/yaopinleixing',
        name: '药品类型',
        component: yaopinleixing
      }
      ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
      ,{
	path: '/shipinleixing',
        name: '视频类型',
        component: shipinleixing
      }
      ,{
	path: '/keshileixing',
        name: '科室类型',
        component: keshileixing
      }
      ,{
	path: '/zaixianyuyue',
        name: '在线预约',
        component: zaixianyuyue
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/discussjiankangshipin',
        name: '健康视频评论',
        component: discussjiankangshipin
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
