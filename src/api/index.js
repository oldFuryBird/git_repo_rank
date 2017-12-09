
/*
php js css html python total

 */
export default {
  BASEURI: 'http://api.ccwc1.top/',
  getData (lang) {
    return this.getJson(this.BASEURI + lang)
  },
  getJson (url) {
    return new Promise((resolve, reject) => {
      const XHR = new window.XMLHttpRequest()
      const handler = function () {
        if (this.readyState !== 4) {
          return false
        }
        if (this.status === 200) {
          resolve(this.response)
        } else {
          reject(this.response)
        }
      }
      XHR.open('GET', url, true)
      XHR.onreadystatechange = handler
      XHR.responseType = 'json'
      XHR.setRequestHeader('Accept', 'application/json')
      XHR.send()
    })
  }
}
