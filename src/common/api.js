import https from './https'
import {host} from './config'

export function getAttraction (param, res) {
  https.fetchGet(host + '/attraction/', param).then(res)
}

export function getRoute (param, res) {
  https.fetchGet(host + '/route/', param).then(res)
}

export function getRouteSpotMapping (param, res) {
  https.fetchPost(host + '/route_attraction/', param).then(res)
}

export function getComment (param, id, res) {
  https.fetchGet(host + '/attraction_comment/', param, id).then(res)
}

export function getAttractionImage (param, res) {
  https.fetchGet(host + '/attraction_image/', param).then(res)
}
