import https from './https'
import {host} from './config'

export function getSpot (res) {
  https.fetchGet(host + 'attraction/').then(res)
}

export function getRoutes (param, res) {
  https.fetchGet(host + 'route/',param).then(res)
}

export function getRouteSpotMapping (param, res) {
  https.fetchPost(host + 'route_attraction/', param).then(res)
}

export function getComment (param, id, res) {
  https.fetchGet(host + 'attraction_comment/',param, id).then(res)
}

