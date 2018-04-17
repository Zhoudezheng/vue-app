import ajax from './ajax'
// 请求获取首页导航和
export const  requestIndex=()=>ajax('/api/index');

// 获取轮播图广告和每日疯抢
export const requestCart=()=>ajax('/api/carousel');
