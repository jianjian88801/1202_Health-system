const base = {
    get() {
        return {
            url : "http://localhost:8080/springboots3cpm/",
            name: "springboots3cpm",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboots3cpm/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "智能推荐的卫生健康系统"
        } 
    }
}
export default base
