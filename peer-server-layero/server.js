const { PeerServer } = require("peer");
const port = process.env.PORT || 9000;
PeerServer({ port, host: "0.0.0.0", path: "/peerjs", proxied: true });