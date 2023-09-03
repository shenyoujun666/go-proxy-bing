// 同查找 _U 一样, 查找 KievRPSSecAuth 的值并替换下方的xxx
const KievRPSSecAuth = 'FACCBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACO2xmslcX0odQATkqFyNsT+EL7ldnEEOUvOmmtQ3S1pEcAN5qEQbK5X5LiGYScxfjuK+69pZ3oD/BCN3NEZ9kWb1skh08IqJUjTtlnFPPVNC6s0tZE4PW4a8sFc/M28phCNSoaU8C1qNrKaip5NpeqGTG+42zocS2F1LlFLCJMN2agg8B7d1JGt99hSAbbySKN3AVwK9sBujVc0uf5DAlCQRdVaUXa+k875OiaKiqx/iOkO26TE7O7oEMdFxt5/bUqLhaIZo4YQ/5tK67h6U1JzJ078pwrzF9to3TFzywzTSveEiNZqYsVHmbnzEnL8YVYEKM0ImkG7FijwCYn/m5olkCnyI7urOc92Ui2mKSUyb0ILsaDd03SoT0znbaD4QUUQSmtY8gOc8aNFcxKGR0zBREJ6cz3yvhEkHVaZWlHiM+SlIDseEFXWRtb+4lG+s5Qbgq0brVm/WmfiOGhZtKkzgbGNlsrSG5Ib4GaVnHJYYXsda0PygD6ESegkugQcRIv+iKDuPwr5ime6sSheD/9yglkRYQpRwboTzxGeld3kXSMFVAaENOdpkKw+aPvFyJfXzABsEnBz2143Jt/2SKjqTZXmCLh100XXyrC15cMPF/4jTPbZz9A5qyZcACK5SN/0EXH/DhXRkP2puovQ/wU7RhU389eHll37fOQ5F87lv3Mopd+gvTAwvIVb5J5nAjBEYpW2uI4oPqQEpQcFH6SOS1/KUfUAUxKEbZs4w8VPphIuYs0s1omMGze3T4nlLEqN58NnjiUFHJoT3uKrHnqPBAfgwwyvNPuPRdBuDFz8Vocan3HKpFHM756lFRPRC357wjyoQylGnD9pOsG/6frcehyd7Ir0MKt50YXVm7FyFFfSsgIbsEOc+IM7UD72yi3xZIwHDFuf9f4HrzEMsnUorKJyPBVSs6DcGmTPNARsrFa6T33ylB53t5wlcYuvOv1ab3wFQkMm+47HQjdi1DE520VZNnTK1qI3abrtgwNb/enbPE6jLCqFwtZNQ6VpEoFx4fj8Q7+waY3HDkb0AmS1PtplHb3nBY+k3l7IeZZMy2FgJGMzyTpauXleAg2R7k6QKceKMD5olbJ3lmTDf+DbNo4x07wYbciM1gD7bQ1hnn8ZMej8t8iMC5D8kCHxOdxErKzaPRZ+9vCR6FePLR2Pw9tR0jjrFHwvGfb7BY6F4/mYAVBzXw8sPqxW7NStauwDKJOTj9GKG5XfFTrZYw3vObTGDAnQ63zS4KvTw2oYNv9Rd0dbI10y3A9m593Fhgcjx7gcDT/BOhB5RTDhkdkJ73DuEiN0VDGgzwMvcDIosOESO5gDEmMDloDoiyJ8Llay0GmuOOySVhE8EQrJOWTvUI0qz13IW4bPndaLj8obBnHwPMZXAT7RwHDktrKxQ59KgpdD8VqQV3m0wNP+esBctxAQN4YeZIjYyN+wnR2vRYmcbai2egMVWEBQAZP/DhtK/orreDy9FWPsWcl1f64c=';
const _RwBf = 'r=0&ilt=2&ihpd=0&ispd=2&rc=10&rb=0&gb=0&rg=200&pc=5&mtu=0&rbb=0&g=0&cid=&clo=0&v=2&l=2023-09-02T07:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&o=2&p=&c=&t=0&s=0001-01-01T00:00:00.0000000+00:00&ts=2023-09-02T14:01:56.0745837+00:00&rwred=0&wls=2&wlb=&lka=0&lkt=0&TH=';
const MUID = '074AD7F106536BC6392FC4C907CA6AEA';
const _U = '1uDLEBQAnWGpj1qAJVs8fZ42-IVnB7nj0Jnz55xm56l1MMNs2ucaNcYRLzNbutqgE3OBfVnFQsg6b_M918WlsOwixFScwgCYfIQcYdV3Amva9MsQuXfuydDnfSZl0vIRQGOGqp0pvTg1OPLvYvJCDkVB-OF5v0PEdFEeQraN1EOM9yCVcF9jvQEbw8kqWFwyNTwYWIu8_Sp0mIdtRWXRVdx5uadNM6qry458axOmh9aI';

const SYDNEY_ORIGIN = 'https://sydney.bing.com';
const BING_ORIGIN = 'https://www.bing.com';
const KEEP_REQ_HEADERS = [
  'accept',
  'accept-encoding',
  'accept-language',
  'authorization',
  'connection',
  'cookie',
  'upgrade',
  'user-agent',
  'sec-websocket-extensions',
  'sec-websocket-key',
  'sec-websocket-version',
  'x-request-id',
  'content-length',
  'content-type',
  'access-control-request-headers',
  'access-control-request-method',
  'sec-ms-gec',
  'sec-ms-gec-version',
  'x-client-data',
  'x-ms-client-request-id',
  'x-ms-useragent',
];
const IP_RANGE = [
  ['4.150.64.0', '4.150.127.255'],       // Azure Cloud EastUS2 16382
  ['4.152.0.0', '4.153.255.255'],        // Azure Cloud EastUS2 131070
  ['13.68.0.0', '13.68.127.255'],        // Azure Cloud EastUS2 32766
  ['13.104.216.0', '13.104.216.255'],    // Azure EastUS2 256
  ['20.1.128.0', '20.1.255.255'],        // Azure Cloud EastUS2 32766
  ['20.7.0.0', '20.7.255.255'],          // Azure Cloud EastUS2 65534
  ['20.22.0.0', '20.22.255.255'],        // Azure Cloud EastUS2 65534
  ['40.84.0.0', '40.84.127.255'],        // Azure Cloud EastUS2 32766
  ['40.123.0.0', '40.123.127.255'],      // Azure Cloud EastUS2 32766
  ['4.214.0.0', '4.215.255.255'],        // Azure Cloud JapanEast 131070
  ['4.241.0.0', '4.241.255.255'],        // Azure Cloud JapanEast 65534
  ['40.115.128.0', '40.115.255.255'],    // Azure Cloud JapanEast 32766
  ['52.140.192.0', '52.140.255.255'],    // Azure Cloud JapanEast 16382
  ['104.41.160.0', '104.41.191.255'],    // Azure Cloud JapanEast 8190
  ['138.91.0.0', '138.91.15.255'],       // Azure Cloud JapanEast 4094
  ['151.206.65.0', '151.206.79.255'],    // Azure Cloud JapanEast 256
  ['191.237.240.0', '191.237.241.255'],  // Azure Cloud JapanEast 512
  ['4.208.0.0', '4.209.255.255'],        // Azure Cloud NorthEurope 131070
  ['52.169.0.0', '52.169.255.255'],      // Azure Cloud NorthEurope 65534
  ['68.219.0.0', '68.219.127.255'],      // Azure Cloud NorthEurope 32766
  ['65.52.64.0', '65.52.79.255'],        // Azure Cloud NorthEurope 4094
  ['98.71.0.0', '98.71.127.255'],        // Azure Cloud NorthEurope 32766
  ['74.234.0.0', '74.234.127.255'],      // Azure Cloud NorthEurope 32766
  ['4.151.0.0', '4.151.255.255'],        // Azure Cloud SouthCentralUS 65534
  ['13.84.0.0', '13.85.255.255'],        // Azure Cloud SouthCentralUS 131070
  ['4.255.128.0', '4.255.255.255'],      // Azure Cloud WestCentralUS 32766
  ['13.78.128.0', '13.78.255.255'],      // Azure Cloud WestCentralUS 32766
  ['4.175.0.0', '4.175.255.255'],        // Azure Cloud WestEurope 65534
  ['13.80.0.0', '13.81.255.255'],        // Azure Cloud WestEurope 131070
  ['20.73.0.0', '20.73.255.255'],        // Azure Cloud WestEurope 65534
];

/**
 * 随机整数 [min,max)
 * @param {number} min
 * @param {number} max
 * @returns
 */
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

/**
 * ip 转 int
 * @param {string} ip
 * @returns
 */
const ipToInt = (ip) => {
  const ipArr = ip.split('.');
  let result = 0;
  result += +ipArr[0] << 24;
  result += +ipArr[1] << 16;
  result += +ipArr[2] << 8;
  result += +ipArr[3];
  return result;
};

/**
 * int 转 ip
 * @param {number} intIP
 * @returns
 */
const intToIp = (intIP) => {
  return `${(intIP >> 24) & 255}.${(intIP >> 16) & 255}.${(intIP >> 8) & 255}.${intIP & 255}`;
};

const getRandomIP = () => {
  const randIndex = getRandomInt(0, IP_RANGE.length);
  const startIp = IP_RANGE[randIndex][0];
  const endIp = IP_RANGE[randIndex][1];
  const startIPInt = ipToInt(startIp);
  const endIPInt = ipToInt(endIp);
  const randomInt = getRandomInt(startIPInt, endIPInt);
  const randomIP = intToIp(randomInt);
  return randomIP;
};

/**
 * 生成随机字符串
 * @param {number} e
 * @returns
 */
const randomString = (e) => {    
  e = e || 32;
  const t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678_-+";
  var n = "";
  for (let i = 0; i < e; i++) n += t.charAt(getRandomInt(0, t.length));
  return n;
}

/**
 * home
 * @param {string} pathname
 * @returns
 */
const home = async (pathname) => {
  const baseUrl = 'https://usercontent.githubfast.com/raw/Harry-zklcdc/go-proxy-bingai/master/';
  let url;
  if (pathname.indexOf('/web/') === 0) {
    url = pathname.replace('/web/', baseUrl+'web/');
  } else {
    url = baseUrl + 'web/index.html';
  }
  const res = await fetch(url);
  const newRes = new Response(res.body, res);
  if (pathname.endsWith('.js')) {
    newRes.headers.set('content-type', 'application/javascript');
  } else if (pathname.endsWith('.css')) {
    newRes.headers.set('content-type', 'text/css');
  } else if (pathname.endsWith('.svg')) {
    newRes.headers.set('content-type', 'image/svg+xml');
  } else if (pathname.endsWith('.ico') || pathname.endsWith('.png')) {
    newRes.headers.set('content-type', 'image/png');
  } else {
    newRes.headers.set('content-type', 'text/html; charset=utf-8');
  }
  newRes.headers.delete('content-security-policy');
  return newRes;
};


export default {
  /**
   * fetch
   * @param {Request} request
   * @param {*} env
   * @param {*} ctx
   * @returns
   */
  async fetch (request, env, ctx) {
    const currentUrl = new URL(request.url);
    // if (currentUrl.pathname === '/' || currentUrl.pathname.startsWith('/github/')) {
    if (currentUrl.pathname === '/' || currentUrl.pathname.indexOf('/web/') === 0) {
      return home(currentUrl.pathname);
    }
    if (currentUrl.pathname === '/sysconf') {
      return new Response('{"code":200,"message":"success","data":{"isSysCK":false,"isAuth":true}}')
    }
    let targetUrl;
    if (currentUrl.pathname.includes('/sydney')) {
      targetUrl = new URL(SYDNEY_ORIGIN + currentUrl.pathname + currentUrl.search);
    } else {
      targetUrl = new URL(BING_ORIGIN + currentUrl.pathname + currentUrl.search);
    }

    const newHeaders = new Headers();
    request.headers.forEach((value, key) => {
      // console.log(`old : ${key} : ${value}`);
      if (KEEP_REQ_HEADERS.includes(key)) {
        newHeaders.set(key, value);
      }
    });
    newHeaders.set('host', targetUrl.host);
    newHeaders.set('origin', targetUrl.origin);
    newHeaders.set('referer', 'https://www.bing.com/search?q=Bing+AI');
    const randIP = getRandomIP();
    // console.log('randIP : ', randIP);
    newHeaders.set('X-Forwarded-For', randIP);
    const cookie = request.headers.get('Cookie') || '';
    let cookies = cookie;
    if (!cookie.includes('KievRPSSecAuth=')) {
      if (KievRPSSecAuth.length !== 0) {
        cookies += '; KievRPSSecAuth=' + KievRPSSecAuth;
      } else {
        cookies += '; KievRPSSecAuth=' + randomString(512);
      }
    }
    if (!cookie.includes('_RwBf=')) {
      if (_RwBf.length !== 0) {
        cookies += '; _RwBf=' + _RwBf
      } else {
        cookies += '; _RwBf=' + randomString(256);
      }
    }
    if (!cookie.includes('MUID=')) {
        if (_RwBf.length !== 0) {
          cookies += '; MUID=' + _RwBf
        } else {
          cookies += '; MUID=' + randomString(256);
        }
      }
    if (!cookie.includes('_U=')) {
      if (_U.length !== 0) {
        cookies += '; _U=' + _RwBf
      } else {
        cookies += '; _U=' + randomString(128);
      }
    }
    newHeaders.set('Cookie', cookies);
    const oldUA = request.headers.get('user-agent');
    const isMobile = oldUA.includes('Mobile') || oldUA.includes('Android');
    if (isMobile) {
      newHeaders.set(
        'user-agent',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.7 Mobile/15E148 Safari/605.1.15 BingSapphire/1.0.410427012'
      );
    } else {
      newHeaders.set('user-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 Edg/113.0.1774.35');
    }

    // newHeaders.forEach((value, key) => console.log(`${key} : ${value}`));
    const newReq = new Request(targetUrl, {
      method: request.method,
      headers: newHeaders,
      body: request.body,
    });
    // console.log('request url : ', newReq.url);
    const res = await fetch(newReq);
    const newRes = new Response(res.body, res);
    newRes.headers.set('Access-Control-Allow-Origin', request.headers.get('Origin'));
    newRes.headers.set('Access-Control-Allow-Methods', 'GET,HEAD,POST,OPTIONS');
    newRes.headers.set('Access-Control-Allow-Credentials', 'true');
    newRes.headers.set('Access-Control-Allow-Headers', '*');
    return newRes;
  },
};
