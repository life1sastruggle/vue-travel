import axios from 'axios'
// import qs from 'qs'
// import md5 from 'js-md5'
import router from '../router'

axios.defaults.timeout = 50000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = '127.0.0.1:8000'

axios.interceptors.request.use((config) => {
  // if (config.method === 'post') {`
  //   config.data = qs.stringify(config.data)
  // }
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  let regex = /.*csrftoken=([^;.]*).*$/
  config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1]
  return config
}, (error) => {
  console.log('Wrong parameter')
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  if (!res.data.success) {
    return Promise.resolve(res)
  }
  return res
}, (error) => {
  console.log('Network exception')
  return Promise.reject(error)
})

export function fetchPost (url, param, noHeader) {
  console.log(param)
  var content = JSON.stringify(param)
  console.log(content)
  if (!content) {
    content = ''
  }
  const headers = {'Content-Type': 'application/json'}
  // if (!noHeader) {
  //   headers = genHeaders(content)
  // }
  return new Promise((resolve, reject) => {
    axios.post(url, content, {
      headers: headers
    })
      .then(response => {
        console.log(response)
        localStorage.setItem('code', response.data.code)
        if (response.data.code === 0) {
          resolve(response.data.data)
        } else {
          console.log(response.data.message)
        }
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchPut (url, param, noHeader) {
  var content = JSON.stringify(param)
  if (!content) {
    content = ''
  }
  // var headers = genHeaders(content)
  url = url + '?content=' + encodeURIComponent(content)

  return new Promise((resolve, reject) => {
    axios.put(url)
      .then(response => {
        if (response.data.code === 0) {
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

export function fetchGet (url, params, id) {
  return new Promise((resolve, reject) => {
    if(id) {
      url = url + id
    }
    axios.get(url, {
      // headers: headers,
      params: params
    })
      .then(response => {
        if (response.data.code === 0) {
          resolve(response.data)
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

export function fetchDelete (url) {

  return new Promise((resolve, reject) => {
    axios.delete(url, {
      // headers: headers,
      params: param
    })
      .then(response => {
        if (response.data.code === 0) {
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

// function genHeaders (content) {
//   var pcToken = localStorage.getItem('pcToken')
//   var userId = localStorage.getItem('userId')
//   var pre = pcToken.substring(16, 21) + content
//   if (userId.length < 32) {
//     pre += userId
//   } else {
//     pre += userId.substring(16, 21)
//   }
//   var sign = md5(pre)
//   return {
//     pcToken: pcToken,
//     sign: sign
//   }
// }

window.gg = {}
window.gg.router = router
// function invokeError (response) {
//   if (gg && gg.router && gg.router.app && gg.router.app.$message) {
//     if (response && response.data) {
//       if (response.data.message) {
//         gg.router.app.$message.error(response.data.message)
//       }
//     } else {
//       gg.router.app.$message.error('Server exception')
//     }
//   } else {
//     console.log('$Message exception')
//   }
// }

export default {
  fetchPost,
  fetchPut,
  fetchGet,
  fetchDelete
}
