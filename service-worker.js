/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dc1ea53389059881be0f22e6e194b773"
  },
  {
    "url": "api/index.html",
    "revision": "6df06e34ac44f3ed94d15ab20fdd49e1"
  },
  {
    "url": "api/router-alive.html",
    "revision": "552d461e9b9d479be1a245e8565a29e8"
  },
  {
    "url": "assets/css/0.styles.b2ca6f38.css",
    "revision": "372c9ef6d5d8ced5428aa5d49260dee3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bc3a81ad.js",
    "revision": "8d3b2ebf7de9d040d16d4112009cf1a4"
  },
  {
    "url": "assets/js/11.5d25a917.js",
    "revision": "d99a6375e1701deb04552c5c4e6cfc78"
  },
  {
    "url": "assets/js/12.ae6015e0.js",
    "revision": "b237e6ba67fa7e9ee6f804c2e09da1c0"
  },
  {
    "url": "assets/js/13.9a634a72.js",
    "revision": "e5de4c00d94ace76a67f7c1c47933f3b"
  },
  {
    "url": "assets/js/14.aebfa463.js",
    "revision": "9e4d7e465c199efb0c931583f5942986"
  },
  {
    "url": "assets/js/15.d786087a.js",
    "revision": "3396484141622c52c4cfc91c8c304bfd"
  },
  {
    "url": "assets/js/16.d1095912.js",
    "revision": "eb917b464a4e951b08c5f55d7a2e6ed0"
  },
  {
    "url": "assets/js/17.e0ee85a1.js",
    "revision": "ac909a21ddc5d7c69db64fcc86ee0618"
  },
  {
    "url": "assets/js/18.2a0825ab.js",
    "revision": "ece8e9feff3afc23408cec6625bb986e"
  },
  {
    "url": "assets/js/19.bd981dd4.js",
    "revision": "fe8550ada015aac8c466ba7ff02e34e6"
  },
  {
    "url": "assets/js/20.faee6b78.js",
    "revision": "b3fadd7d5269e68a9565dbc86feaf5d7"
  },
  {
    "url": "assets/js/21.ef3d34d7.js",
    "revision": "68903085439cec935036bff8486158ed"
  },
  {
    "url": "assets/js/22.8779bee0.js",
    "revision": "667d723576630c161c9335d6da9fc6d3"
  },
  {
    "url": "assets/js/23.9ca49039.js",
    "revision": "0514b4525d301abb2c41f430761caac8"
  },
  {
    "url": "assets/js/24.d7d9e841.js",
    "revision": "6ebd8ad6ea71cb873193e800258715f8"
  },
  {
    "url": "assets/js/25.5ee81133.js",
    "revision": "4df76d42d9369dc656d2836fcbea9f03"
  },
  {
    "url": "assets/js/26.ce48513c.js",
    "revision": "f912420acf0538e21e71cb5a7fdc09d9"
  },
  {
    "url": "assets/js/27.e10928db.js",
    "revision": "c6cc3af56fd8de5a63a8372a1662501a"
  },
  {
    "url": "assets/js/28.3613970b.js",
    "revision": "0c3e3096a6bd4735d639d657d024a282"
  },
  {
    "url": "assets/js/29.c8639220.js",
    "revision": "5bc8f1051afd87bca7f96d20fd58fd89"
  },
  {
    "url": "assets/js/3.57c24d11.js",
    "revision": "6ee92625a648c334ea749aab8ea6d7ed"
  },
  {
    "url": "assets/js/30.0613c7b4.js",
    "revision": "bf3372cdc594521e71199b7dfed92d2a"
  },
  {
    "url": "assets/js/31.00af5238.js",
    "revision": "aab54d2dc2bf9261cea73ac9f7e21672"
  },
  {
    "url": "assets/js/32.52a95e05.js",
    "revision": "9270e30bb4fe49105bdb18dc9f47c6ac"
  },
  {
    "url": "assets/js/33.0c3373ba.js",
    "revision": "5fd2af44964a81970483d1c0667eb673"
  },
  {
    "url": "assets/js/34.a7af9032.js",
    "revision": "71387f897291b40da078a3dac45e0a7c"
  },
  {
    "url": "assets/js/35.f96a313b.js",
    "revision": "ebef08d239d1c63fe4f66e9f11eecb44"
  },
  {
    "url": "assets/js/36.b4b45577.js",
    "revision": "4b256732bf4c6317c79ad6ef1cc617d4"
  },
  {
    "url": "assets/js/37.f7718a13.js",
    "revision": "0be8d0638a0caada3c6f6876f25387cd"
  },
  {
    "url": "assets/js/38.16384724.js",
    "revision": "0e512c6cd2c9745b487c147904db368b"
  },
  {
    "url": "assets/js/39.a99ea590.js",
    "revision": "939a953f6a7a0139f35e99a20f989ec2"
  },
  {
    "url": "assets/js/4.68b7274f.js",
    "revision": "db6bfab6ec1d649e791cf29e5e8a1af0"
  },
  {
    "url": "assets/js/40.e279aa12.js",
    "revision": "d0e3a9d73748a70c40482b0184c71538"
  },
  {
    "url": "assets/js/41.40e3d830.js",
    "revision": "3dccdc84c255f97d2f31c53f6b153219"
  },
  {
    "url": "assets/js/42.5e05b49d.js",
    "revision": "2fc353af9c8f62e71624a9d556b596a4"
  },
  {
    "url": "assets/js/43.40f9e244.js",
    "revision": "4817d8395278f2e9027344ce267c9e48"
  },
  {
    "url": "assets/js/44.d5b7022e.js",
    "revision": "28a6d7e04fa9460ea1566e181e078730"
  },
  {
    "url": "assets/js/45.db417cff.js",
    "revision": "690abe484b64ed02ba9af10176ef7663"
  },
  {
    "url": "assets/js/46.94c7b2ff.js",
    "revision": "b4cc1c2b335a127e2624a08213068123"
  },
  {
    "url": "assets/js/47.00a90677.js",
    "revision": "948853326d30a3ff3a879f0c51977123"
  },
  {
    "url": "assets/js/48.6d45cb89.js",
    "revision": "e404f61cd507c488f819e8baeada73f8"
  },
  {
    "url": "assets/js/49.ca2c667f.js",
    "revision": "4501fda4c75aad807d93b26f84d719b2"
  },
  {
    "url": "assets/js/5.8e4d80df.js",
    "revision": "bae3a8eb00b21d729a94aa5135c3d831"
  },
  {
    "url": "assets/js/50.99ecba7a.js",
    "revision": "2a084c9a16b44d0675fda02e2df532ef"
  },
  {
    "url": "assets/js/51.9374d05f.js",
    "revision": "1e921be3110dc9c600c318f5168961ed"
  },
  {
    "url": "assets/js/52.cd9cfc76.js",
    "revision": "8ed597927c01d43e61e74eb1c0305f44"
  },
  {
    "url": "assets/js/53.ce0f893f.js",
    "revision": "0ecc69f1cf80b6d8e8dd1ffc6acecfc5"
  },
  {
    "url": "assets/js/54.46ee2d70.js",
    "revision": "63860017a3e1f94f527d00cc7f030242"
  },
  {
    "url": "assets/js/55.5f7448e7.js",
    "revision": "cf5f51e7e5a7e67dcdc5ebee1a42504f"
  },
  {
    "url": "assets/js/56.c64d5d73.js",
    "revision": "98cb4cee23b151b640c3cfc25b906434"
  },
  {
    "url": "assets/js/57.2717c776.js",
    "revision": "8b89939ca68ed25bd53e825fb0e22167"
  },
  {
    "url": "assets/js/58.b4119b8a.js",
    "revision": "2baf6f8c7501997eb2b4759de076b766"
  },
  {
    "url": "assets/js/59.0adfb262.js",
    "revision": "e67c5edbfcd999d9b2c251ec7dd386c5"
  },
  {
    "url": "assets/js/6.7cb4d303.js",
    "revision": "f80ed0e6b3a4016109bb74be3e265ca4"
  },
  {
    "url": "assets/js/60.1f856d75.js",
    "revision": "820a6a8fb694b9a4dcf3f73f5beb37f9"
  },
  {
    "url": "assets/js/61.68729b01.js",
    "revision": "390845f251444a5e8b211ce444513b43"
  },
  {
    "url": "assets/js/7.ef70a99f.js",
    "revision": "fab548c69f58cdba855badc86caac8e3"
  },
  {
    "url": "assets/js/8.b58adfb0.js",
    "revision": "f3e66b89477e4ae090d5b42096f4b1f2"
  },
  {
    "url": "assets/js/9.b70ab75c.js",
    "revision": "d3620ba5f146570b46e4c659b7bf26df"
  },
  {
    "url": "assets/js/app.51397fcb.js",
    "revision": "3a659ca7c32de7005f85953b1606b897"
  },
  {
    "url": "assets/js/vendors~docsearch.4a8594da.js",
    "revision": "a7f873a5253473dc3f052868e7f95f8e"
  },
  {
    "url": "guide/advanced/cache.html",
    "revision": "9dd7596d3913ddd0c7e0ea02512d3f5f"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "967089c09e4e494e8b558bdd995435b3"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "a09a901535dc9c46ae7accd34c6c804d"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "1a76d339c9c30e9c736172f6bb5716e8"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "260a495eecf4c9649c64dab3d3cb7c21"
  },
  {
    "url": "guide/changelog.html",
    "revision": "c8a81f5500da1b9f13d816d54f08c99b"
  },
  {
    "url": "guide/custom/contextmenu.html",
    "revision": "e1eafd182d1dc774e47a0fe7a70c3ed4"
  },
  {
    "url": "guide/custom/i18n.html",
    "revision": "9cf8f51030365de70feccb0ce044459f"
  },
  {
    "url": "guide/custom/index.html",
    "revision": "29b8a2919c847ae086a611df43d6be72"
  },
  {
    "url": "guide/custom/scroll.html",
    "revision": "7c0f96a866187f1eac634b1a2d90d1e9"
  },
  {
    "url": "guide/custom/slot.html",
    "revision": "d9f007a4f1d205ecba6d8ddf6beb2e83"
  },
  {
    "url": "guide/custom/transition.html",
    "revision": "5a51f7cfafb2fbf51227d45e12d7e1c6"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "8867eef40c34c3314b43d481b4a97ac3"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "2d66d7bcf7a1cc715297f3e740443a09"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "173d1a0505ecd78cceca8743a9f3e225"
  },
  {
    "url": "guide/essentials/nuxt.html",
    "revision": "1ecd99723f7ab225cc5fe1fd7e97bd02"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "9323e79cab6b0d0cbea6fc2ff23040c2"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "de677ac35455f9abd7c01f00d566ea62"
  },
  {
    "url": "guide/index.html",
    "revision": "a03b9eb64fb5ead630d6e1e69e327e4a"
  },
  {
    "url": "guide/meta/faqs.html",
    "revision": "dafe41a367432fd13df5c101b6644e71"
  },
  {
    "url": "guide/meta/solutions.html",
    "revision": "c72332a5b290c0de556af43d680da498"
  },
  {
    "url": "guide/meta/uninstall.html",
    "revision": "bd0b56b3d4b1590a07ed1f5432cb363f"
  },
  {
    "url": "index.html",
    "revision": "2abf71b9734b0426f9c78c9a46a7e798"
  },
  {
    "url": "zh/api/index.html",
    "revision": "355aea520fd3c5e37d38f28982a694bc"
  },
  {
    "url": "zh/api/router-alive.html",
    "revision": "722090fe7d36972a2be2eaea54c6639d"
  },
  {
    "url": "zh/guide/advanced/cache.html",
    "revision": "e28b1a6c4d7f0eb0c590cd8b4a051441"
  },
  {
    "url": "zh/guide/advanced/dynamic-tab-info.html",
    "revision": "f8bf18ea28019b6982bca04986b28326"
  },
  {
    "url": "zh/guide/advanced/initial-tabs.html",
    "revision": "174ee4b7b3f46df770f2e0839570452b"
  },
  {
    "url": "zh/guide/advanced/page-leave.html",
    "revision": "3b590713ab86a1ef5423e4e3c8563770"
  },
  {
    "url": "zh/guide/advanced/restore.html",
    "revision": "440b3d289b028f671e42d3712a6f7eee"
  },
  {
    "url": "zh/guide/changelog.html",
    "revision": "020855d1c28b3686711064d83bdcaea8"
  },
  {
    "url": "zh/guide/custom/contextmenu.html",
    "revision": "b3ff9b158ba3619b8a2919e835086e59"
  },
  {
    "url": "zh/guide/custom/i18n.html",
    "revision": "696c95efc1f9b344c86c1223ef7cbda3"
  },
  {
    "url": "zh/guide/custom/index.html",
    "revision": "fe0c50977017cf2282a6c09a62808ca4"
  },
  {
    "url": "zh/guide/custom/scroll.html",
    "revision": "9d07e3635e55635ec1cc7a30af2f1cf2"
  },
  {
    "url": "zh/guide/custom/slot.html",
    "revision": "20e012840c0d5755db98765ff3efb382"
  },
  {
    "url": "zh/guide/custom/transition.html",
    "revision": "796168ed58a40abbd15a76df992e7ded"
  },
  {
    "url": "zh/guide/essentials/iframe.html",
    "revision": "abac16bc7732115341c97f8d29415f78"
  },
  {
    "url": "zh/guide/essentials/index.html",
    "revision": "4845842e35c33a0af87a87c774880f44"
  },
  {
    "url": "zh/guide/essentials/installation.html",
    "revision": "5c9ba70ecb2e348984eecf5deb42d2e3"
  },
  {
    "url": "zh/guide/essentials/nuxt.html",
    "revision": "8dcf2739ef2c90b7540a3f3eebf990aa"
  },
  {
    "url": "zh/guide/essentials/operate.html",
    "revision": "7ec73bc1b02c83575bfb51ebc9299fae"
  },
  {
    "url": "zh/guide/essentials/rule.html",
    "revision": "2eb552a5135cd3e9ffefa591cd835a25"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "4a15705587fec1fb0c91b2e36897e6b8"
  },
  {
    "url": "zh/guide/meta/faqs.html",
    "revision": "40511669a468892605e4e42b58eb6f12"
  },
  {
    "url": "zh/guide/meta/solutions.html",
    "revision": "81cd90e6a7706ba9d9a55c582f780a9b"
  },
  {
    "url": "zh/guide/meta/uninstall.html",
    "revision": "63215ca64653f1591dcc63c4437d7f33"
  },
  {
    "url": "zh/index.html",
    "revision": "951ace9c13676e78a6fc2777faf6fd3f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
