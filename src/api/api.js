import axios from 'axios';

// 使用代理
// const HOST = process.env.API_ROOT;
const HOST = '/api/';
export function fetch(url) {
  return new Promise((resolve, reject) => {
    axios.get(HOST + url)
      .then(response => {
        resolve(response.data);
      });
  });
};

// 首页轮播图
export function indexSlide() {
  return fetch(`common/slide?name=wx_index_slide`);
};
