
var projectName = '智能推荐的卫生健康系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '健康视频',
	url: './pages/jiankangshipin/list.html'
}, 
{
	name: '医生信息',
	url: './pages/yishengxinxi/list.html'
}, 
{
	name: '药品列表',
	url: './pages/yaopinliebiao/list.html'
}, 

{
	name: '健康论坛',
	url: './pages/forum/list.html'
}, 
{
	name: '健康资讯',
	url: './pages/news/list.html'
},
{
	name: '留言反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/springboots3cpm/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


chatFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"健康视频","menuJump":"列表","tableName":"jiankangshipin"}],"menu":"健康视频管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"视频类型","menuJump":"列表","tableName":"shipinleixing"}],"menu":"视频类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"科室类型","menuJump":"列表","tableName":"keshileixing"}],"menu":"科室类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"医生信息","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"在线预约","menuJump":"列表","tableName":"zaixianyuyue"}],"menu":"在线预约管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"药品类型","menuJump":"列表","tableName":"yaopinleixing"}],"menu":"药品类型管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"药品列表","menuJump":"列表","tableName":"yaopinliebiao"}],"menu":"药品列表管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"健康论坛","tableName":"forum"}],"menu":"健康论坛"},{"child":[{"buttons":["查看"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"健康资讯","tableName":"news"},{"buttons":["新增","查看","修改","删除"],"menu":"在线咨询","tableName":"chat"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"健康视频列表","menuJump":"列表","tableName":"jiankangshipin"}],"menu":"健康视频模块"},{"child":[{"buttons":["查看","预约"],"menu":"医生信息列表","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息模块"},{"child":[{"buttons":["查看","支付"],"menu":"药品列表列表","menuJump":"列表","tableName":"yaopinliebiao"}],"menu":"药品列表模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"健康视频","menuJump":"列表","tableName":"jiankangshipin"}],"menu":"健康视频管理"},{"child":[{"buttons":["查看","预约"],"menu":"医生信息","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息管理"},{"child":[{"buttons":["查看","新增","修改"],"menu":"在线预约","menuJump":"列表","tableName":"zaixianyuyue"}],"menu":"在线预约管理"},{"child":[{"buttons":["查看","支付"],"menu":"药品列表","menuJump":"列表","tableName":"yaopinliebiao"}],"menu":"药品列表管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看","查看评论"],"menu":"健康视频列表","menuJump":"列表","tableName":"jiankangshipin"}],"menu":"健康视频模块"},{"child":[{"buttons":["查看","预约"],"menu":"医生信息列表","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息模块"},{"child":[{"buttons":["查看","支付"],"menu":"药品列表列表","menuJump":"列表","tableName":"yaopinliebiao"}],"menu":"药品列表模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
