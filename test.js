const html = `<!DOCTYPE html>
<body>


CCTV1,http://223.110.241.137:6610/gitv/live1/G_CCTV-1-HQ/G_CCTV-1-HQ/.m3u8<br>
CCTV-2,http://223.110.245.164/ott.js.chinamobile.com/PLTV/3/224/3221227696/index.m3u8<br>
CCTV3,http://223.110.241.137:6610/gitv/live1/G_CCTV-3-HQ/G_CCTV-3-HQ/.m3u8<br>
CCTV4,http://223.110.241.137:6610/gitv/live1/G_CCTV-4-HQ/G_CCTV-4-HQ/.m3u8<br>
CCTV5,http://223.110.241.137:6610/gitv/live1/G_CCTV-5-HQ/G_CCTV-5-HQ/.m3u8<br>
CCTV5+,http://223.110.241.137:6610/gitv/live1/G_CCTV-5PLUS-HQ/G_CCTV-5PLUS-HQ/.m3u8<br>
CCTV6,http://223.110.241.137:6610/gitv/live1/G_CCTV-6-HQ/G_CCTV-6-HQ/.m3u8<br>
CCTV7,http://223.110.241.137:6610/gitv/live1/G_CCTV-7-HQ/G_CCTV-7-HQ/.m3u8<br>
CCTV8,http://223.110.241.137:6610/gitv/live1/G_CCTV-8-HQ/G_CCTV-8-HQ/.m3u8<br>
CCTV9,http://223.110.241.137:6610/gitv/live1/G_CCTV-9/G_CCTV-9/.m3u8<br>
CCTV10,http://223.110.241.137:6610/gitv/live1/G_CCTV-10-HQ/G_CCTV-10-HQ/.m3u8<br>
CCTV11,http://223.110.241.137:6610/gitv/live1/G_CCTV-11-HQ/G_CCTV-11-HQ/.m3u8<br>
CCTV12,http://223.110.241.137:6610/gitv/live1/CCTV-12/CCTV-12/.m3u8<br>
CCTV13,http://223.110.241.137:6610/gitv/live1/G_CCTV-13-HQ/G_CCTV-13-HQ/.m3u8<br>
CCTV14,http://223.110.241.137:6610/gitv/live1/G_CCTV-14/G_CCTV-14/.m3u8<br>
CCTV15,http://223.110.241.137:6610/gitv/live1/G_CCTV-15/G_CCTV-15/.m3u8<br>
湖南卫视,http://39.135.138.8:6610/PLTV/88888888/224/3221225704/2/index.m3u8?fmt=ts2hls<br>


</body>`

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})
