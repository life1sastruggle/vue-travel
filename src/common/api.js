import https from './https'
import {host} from './config'

export function getSpots (obj, res) {
  https.fetchPost(host + 'list/', obj).then(res)
}

export function getRoutes (params, res) {
  https.fetchGet(host + 'route/',params).then(res)
}

export function getRouteSpotMapping (params, res) {
  https.fetchPost(host + 'route_spot/', params).then(res)
}

export function getComments (res) {
  https.fetchGet(host + 'comment/').then(res)
}

export function getComment (res) {
  https.fetchGet(host + 'comment/').then(res)
}
