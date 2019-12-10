let ports = []
self.onconnect = function (ev) {
    let port = ev.ports[0]
    ports.push(port)
    port.onmessage = function (e) {
        let _this = this
        ports.forEach( p => {
            if(p === _this) return
            p.postMessage(e.data)
        })
    }
}
