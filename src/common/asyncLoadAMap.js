export default async function loadMap () {
  const mp = new Promise(function (resolve, reject) {
    window._AMapSecurityConfig = {
      securityJsCode:'e0015c7b90f380053577dfdcd4445073',
    }
    // let hasLoaded1 = document.getElementById('amap')
    // if (hasLoaded1) {
    //   return
    // }
    window.init = function () {
      resolve(window.AMap)
    }
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = 'https://webapi.amap.com/maps?v=1.4.15&key=314e8e673dd5048df671828de7a9267a&callback=init'
    script.id = 'amap'
    script.onerror = reject
    document.head.appendChild(script)
  })
  // const mpUI = new Promise(function (resolve, reject) {
  //   let hasLoaded2 = document.getElementById('amapUI')
  //   if (hasLoaded2) { // 只加载一次
  //     return
  //   }
  //   let script2 = document.createElement('script')
  //   script2.type = 'text/javascript'
  //   script2.src = 'https://webapi.amap.com/ui/1.1/main.js'
  //   script2.id = 'amapUI'
  //   script2.onerror = reject
  //   script2.onload = function (su) {
  //     resolve(window.AMapUI)
  //   }
  //   document.head.appendChild(script2)
  // })
  // return Promise.all([mp, mpUI])
  return Promise.all([mp])
    .then(function (result) {
      return result
    }).catch(e => {
      console.log(e)
    })
}
