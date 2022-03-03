import https from './https'
import {host} from './config'

export function getSpot (res) {
  https.fetchGet(host + 'spot/').then(res)
}

export function getRoutes (param, res) {
  https.fetchGet(host + 'route/',param).then(res)
}

export function getRouteSpotMapping (param, res) {
  https.fetchPost(host + 'route_spot/', param).then(res)
}

export function getComment (param, id, res) {
  https.fetchGet(host + 'spot_comment/',param, id).then(res)
}

