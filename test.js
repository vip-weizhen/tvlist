const html = `<!DOCTYPE html>
<body>


#EXTM3U
#EXTINF:-1 group-title="央视频道",CCTV-1 综合 高清
http://39.135.138.8:6610/PLTV/88888888/224/3221225642/2/index.m3u8?fmt=ts2hls
#EXTINF:-1 group-title="央视频道",CCTV-2 财经 高清
http://39.135.138.8:6610/PLTV/88888888/224/3221225643/2/index.m3u8?fmt=ts2hls
#EXTINF:-1 group-title="央视频道",CCTV-3 综艺 高清
http://39.135.138.8:6610/PLTV/88888888/224/3221225634/2/index.m3u8?fmt=ts2hls
#EXTINF:-1 group-title="央视频道",CCTV-5 体育 高清
http://39.135.138.8:6610/PLTV/88888888/224/3221225633/2/index.m3u8?fmt=ts2hls
#EXTINF:-1 group-title="央视频道",CCTV-5+ 体育赛事 高清
http://39.135.138.8:6610/PLTV/88888888/224/3221225706/2/index.m3u8?fmt=ts2hls
#EXTINF:-1 group-title="央视频道",CCTV-6 电影 高清
http://39.135.138.8:6610/PLTV/88888888/224/3221225632/2/index.m3u8?fmt=ts2hls
#EXTINF:-1 group-title="央视频道",CCTV-7 国防军事 高清
http://39.135.138.8:6610/PLTV/88888888/224/3221225644/2/index.m3u8?fmt=ts2hls
#EXTINF:-1 group-title="央视频道",CCTV-8 电视剧 高清
http://39.135.138.8:6610/PLTV/88888888/224/3221225631/2/index.m3u8?fmt=ts2hls
#EXTINF:-1 group-title="央视频道",CCTV-9 纪录 高清
http://39.135.138.8:6610/PLTV/88888888/224/3221225646/2/index.m3u8?fmt=ts2hls
#EXTINF:-1 group-title="央视频道",CCTV-10 科教 高清
http://39.135.138.8:6610/PLTV/88888888/224/3221225636/2/index.m3u8?fmt=ts2hls
#EXTINF:-1 group-title="央视频道",CCTV-12 社会与法 高清
http://39.135.138.8:6610/PLTV/88888888/224/3221225637/2/index.m3u8?fmt=ts2hls
#EXTINF:-1 group-title="央视频道",CCTV-14 少儿 高清
http://39.135.138.8:6610/PLTV/88888888/224/3221225640/2/index.m3u8?fmt=ts2hls
#EXTINF:-1 group-title="央视频道",CCTV-17 农业农村 高清
http://39.135.138.8:6610/PLTV/88888888/224/3221225909/2/index.m3u8?fmt=ts2hls
#EXTINF:-1 group-title="央视频道",中央新影 老故事
http://39.135.138.5:6610/PLTV/88888888/224/3221225517/2/index.m3u8
#EXTINF:-1 group-title="央视频道",中央新影 中学生
http://39.135.138.5:6610/PLTV/88888888/224/3221225515/2/index.m3u8
#EXTINF:-1 group-title="央视频道",中央新影 新科动漫
http://cctvtxyh5ca.liveplay.myqcloud.com/live/xinkedongman_2/index.m3u8
#EXTINF:-1 group-title="央视频道",中央新影 发现之旅
http://125.210.152.18:9090/live/FXZL_750.m3u8
#EXTINF:-1 group-title="央视频道",CETV-1 高清
http://39.135.138.8:6610/PLTV/88888888/224/3221225917/2/index.m3u8?fmt=ts2hls
#EXTINF:-1 group-title="央视频道",CETV 早期教育
http://39.135.138.8:6610/PLTV/88888888/224/3221225513/2/index.m3u8?fmt=ts2hls
#EXTINF:-1 group-title="央视频道",中国气象
http://hls.weathertv.cn/tslslive/qCFIfHB/hls/live_sd.m3u8



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
