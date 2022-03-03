import https from './https'
import {host} from './config'

export function getSpot (res) {
  https.fetchGet(host + 'spot/').then(res)
}

export function getRoutes (params, res) {
  https.fetchGet(host + 'route/',params).then(res)
}

export function getRouteSpotMapping (params, res) {
  https.fetchPost(host + 'route_spot/', params).then(res)
}

export function getComment (id, res) {
  https.fetchGet(host + 'spot_comment/','', id).then(res)
}

