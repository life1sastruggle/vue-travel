import axios from 'axios'
import qs from 'qs'
import md5 from 'js-md5'
import router from '../router'
axios.defaults.timeout = 50000 // 响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' // 配置请求头
axios.defaults.baseURL = '' // 配置接口地址

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  // 在发送请求之前做某件事
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error)
})

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  // 对响应数据做些事
  if (!res.data.success) {
    return Promise.resolve(res)
  }
  return res
}, (error) => {
  console.log('网络异常')
  return Promise.reject(error)
})

// 返回一个Promise(发送post请求)
export function fetchPost (url, param, noHeader) {
  console.log(param)
  var content = JSON.stringify(param)
  if (!content) {
    content = ''
  }
  var headers = {}
  if (!noHeader) {
    headers = genHeaders(content)
  }
  return new Promise((resolve, reject) => {
    axios.post(url, {
      content: content
    }, {
      headers: headers
    })
      .then(response => {
        localStorage.setItem('code', response.data.code)
        if (response.data.code === 0) {
          resolve(response.data.data)
        } else if (response.data.code === 9) { // 未登录
          router.push('/')
        } else {
          console.log(response.data.message)
          // invokeError(response)
        }
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 返回一个Promise(发送put请求)
export function fetchPut (url, param, noHeader) {
  var content = JSON.stringify(param)
  if (!content) {
    content = ''
  }
  var headers = genHeaders(content)
  url = url + '?content=' + encodeURIComponent(content)

  return new Promise((resolve, reject) => {
    axios.put(url, {
      params: param
    }, {
      headers: headers
    })
      .then(response => {
        if (response.data.code === 0) {
          resolve(response.data.data)
        } else if (response.data.code === 9) { // 未登录
          router.push('/')
        } else {
          console.log(response.data.message)
          // invokeError(response)
        }
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/// /返回一个Promise(发送get请求)
export function fetchGet (url, param) {
  var content = JSON.stringify(param)
  if (!content) {
    content = ''
  }
  var headers = genHeaders(content)
  if (content) {
    url = url + '?content=' + encodeURIComponent(content)
  }
  return new Promise((resolve, reject) => {
    axios.get(url, {
      headers: headers,
      params: param
    })
      .then(response => {
        if (response.data.code === 0) {
          resolve(response.data.data)
        } else if (response.data.code === 9) { // 未登录
          router.push('/')
        } else if (response.data.code === 2) {
          resolve(response.data.data)
        } else {
          console.log(response.data.message)
          // invokeError(response)
        }
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/// /返回一个Promise(发送delete请求)
export function fetchDelete (url, param) {
  var content = JSON.stringify(param)
  if (!content) {
    content = ''
  }
  var headers = genHeaders(content)
  url = url + '?content=' + encodeURIComponent(content)

  return new Promise((resolve, reject) => {
    axios.delete(url, {
      headers: headers,
      params: param
    })
      .then(response => {
        if (response.data.code === 0) {
          resolve(response.data.data)
        } else if (response.data.code === 9) { // 未登录
          router.push('/')
        } else {
          console.log(response.data.message)
          // invokeError(response)
        }
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// export function phpPost (url, param) {
//   var content = ''
//   var ctrl_center_id = localStorage.getItem('unitId')
//   if (param) {
//     if (!param.content.obj.ctrl_center_id) {
//       param.content.obj.ctrl_center_id = ctrl_center_id
//     }
//   } else {
//     param = {
//       content: {
//         obj: {
//           ctrl_center_id: ctrl_center_id
//         }
//       }
//     }
//   }
//   content = JSON.stringify(param)
//   var headers = {}
//   headers = {
//     pcToken: localStorage.getItem('pcToken')
//   }
//   return new Promise((resolve, reject) => {
//     axios.post(url, {
//       content: content
//     }, {
//       headers: headers
//     })
//       .then(response => {
//         if (response.data.code === 0) {
//           resolve(response.data.data)
//         } else if (response.data.code === 9) { // 未登录
//           router.push('/')
//         } else {
//           console.log(response.data.message)
//           invokeError(response)
//         }
//       }, err => {
//         reject(err)
//       })
//       .catch((error) => {
//         reject(error)
//       })
//   })
// }

function genHeaders (content) {
  var pcToken = localStorage.getItem('pcToken')
  var userId = localStorage.getItem('userId')
  var pre = pcToken.substring(16, 21) + content
  if (userId.length < 32) {
    pre += userId
  } else {
    pre += userId.substring(16, 21)
  }
  var sign = md5(pre)
  return {
    pcToken: pcToken,
    sign: sign
  }
}
window.gg = {}
window.gg.router = router
// function invokeError (response) {
//   if (gg && gg.router && gg.router.app && gg.router.app.$message) {
//     if (response && response.data) {
//       if (response.data.message) {
//         gg.router.app.$message.error(response.data.message)
//       }
//     } else {
//       gg.router.app.$message.error('服务器异常')
//     }
//   } else {
//     console.log('$message 异常')
//   }
// }

export default {
  fetchPost,
  fetchPut,
  fetchGet,
  fetchDelete
}
