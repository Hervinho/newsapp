
import server from "./server";

const HTTP_PORT = 5500;

server.listen(HTTP_PORT, () => {
  console.log("Express server listening on port " + HTTP_PORT);
});

export default server;