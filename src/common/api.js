import https from './https'
import * as host from './config'

export function getSpots (obj, success) {
  https.fetchGet(host + 'app/device/list', obj).then(success)
}
