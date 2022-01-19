import https from './https'
import {host} from './config'

export function getSpots (obj, success) {
  https.fetchPost(host + 'list/', obj).then(success)
}
export function getRoutes (obj, success) {
  https.fetchPost(host + 'getRoutes/', obj).then(success)
}
