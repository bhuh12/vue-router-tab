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
    "revision": "8cae03c459a220cf15e2e2222c827d48"
  },
  {
    "url": "api/index.html",
    "revision": "7c9274746c4f93e8228bcc1f166eecbd"
  },
  {
    "url": "api/router-alive.html",
    "revision": "9656511cf6172c9335dd3cd760cca0cd"
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
    "url": "assets/js/10.3e0fdd8f.js",
    "revision": "6696ba32a9d728694fee6f2b8e77e2d0"
  },
  {
    "url": "assets/js/11.591ddf35.js",
    "revision": "b243c693153d85832dacf7e77fd8e3dd"
  },
  {
    "url": "assets/js/12.cde9dc34.js",
    "revision": "3e830ba0b3b62312947a9a83fb8a577c"
  },
  {
    "url": "assets/js/13.69d8f8ba.js",
    "revision": "6826d3332a61d1e0ad7512e38dd972ee"
  },
  {
    "url": "assets/js/14.877428f0.js",
    "revision": "c6ee54f5fc94b95d3d1c9a209d5bf81a"
  },
  {
    "url": "assets/js/15.384df325.js",
    "revision": "8019a183f8ed7b608bfeb48bbd97c6f6"
  },
  {
    "url": "assets/js/16.ef442d4d.js",
    "revision": "e325195f7df0a3166cede44abaeb31ba"
  },
  {
    "url": "assets/js/17.5dbf17f0.js",
    "revision": "20aeab37310ba33df4701f710c58a326"
  },
  {
    "url": "assets/js/18.c673d957.js",
    "revision": "aebc048745923f9dec346544224e9035"
  },
  {
    "url": "assets/js/19.7205c0af.js",
    "revision": "ee55cfed89ccf0b0a2aead8dbf02cc79"
  },
  {
    "url": "assets/js/20.e7faf158.js",
    "revision": "b90a86a0f076342a866c24c76da27884"
  },
  {
    "url": "assets/js/21.be8d9113.js",
    "revision": "4a161a15cfe5aecc2a5556cf59b05142"
  },
  {
    "url": "assets/js/22.7a246693.js",
    "revision": "8b466193779ec7067345470598b2b387"
  },
  {
    "url": "assets/js/23.77abfad2.js",
    "revision": "f8ecd04e339391fc78706f0ef3702c7a"
  },
  {
    "url": "assets/js/24.3fe82117.js",
    "revision": "f1c4f95631a27d1ea3df350716bb7e4d"
  },
  {
    "url": "assets/js/25.07462e66.js",
    "revision": "285cf7689d389be590356f8b1bed1510"
  },
  {
    "url": "assets/js/26.8f8a6292.js",
    "revision": "c3dfb47b5025019da47e6ef0c91b0730"
  },
  {
    "url": "assets/js/27.85c61690.js",
    "revision": "cac3bf4e520132b5d433a12f888f8b5f"
  },
  {
    "url": "assets/js/28.a9524425.js",
    "revision": "c35aa7191e12126ae62b713c1f208879"
  },
  {
    "url": "assets/js/29.3fec34e8.js",
    "revision": "2e19ecbb63722c4068f18b6757324697"
  },
  {
    "url": "assets/js/3.a80d4e8d.js",
    "revision": "4c41b7e5b7346727430b48ad21e54833"
  },
  {
    "url": "assets/js/30.5e63188a.js",
    "revision": "e9b81b96714e7b5a577396025b8bbfce"
  },
  {
    "url": "assets/js/31.6b364ca6.js",
    "revision": "528ce5a456ebf6097fb681bcbc5143ce"
  },
  {
    "url": "assets/js/32.9b57a4c3.js",
    "revision": "c7399da2ab9df1f0425d8c152595279a"
  },
  {
    "url": "assets/js/33.d1c1a214.js",
    "revision": "cd3834b516f4e83348b3a1e1c55281ab"
  },
  {
    "url": "assets/js/34.37c18818.js",
    "revision": "bedd28a7f1a94de94fa38d673d950c76"
  },
  {
    "url": "assets/js/35.59777000.js",
    "revision": "90329c46da376e10fcbdad0230af162a"
  },
  {
    "url": "assets/js/36.0f5eb7f6.js",
    "revision": "42cf277036a5d21a29509f870423e93d"
  },
  {
    "url": "assets/js/37.c0f31ab6.js",
    "revision": "6235c86911f871f7e49b89cfb7fb94b3"
  },
  {
    "url": "assets/js/38.c31cea48.js",
    "revision": "fe45b6f249b060e810690b61f7b0b469"
  },
  {
    "url": "assets/js/39.0afde542.js",
    "revision": "1b14531775b2ced1ba9b7454c22af862"
  },
  {
    "url": "assets/js/4.b42bd54a.js",
    "revision": "8c2b185dd1bc7929a6851d9b60bb176d"
  },
  {
    "url": "assets/js/40.5f082ba5.js",
    "revision": "35f4b44e99841f47f95aa90a5983b3e9"
  },
  {
    "url": "assets/js/41.94957079.js",
    "revision": "b8a9c7d9c799adcd8dc274b3930144d8"
  },
  {
    "url": "assets/js/42.9d30fffb.js",
    "revision": "1d460a42bc4b71048773ab0b3de86882"
  },
  {
    "url": "assets/js/43.8dfe181d.js",
    "revision": "9418ae3a47d3e6cc59a1d9b97d2800e6"
  },
  {
    "url": "assets/js/44.3eda0ed4.js",
    "revision": "798fc644bdd43523828e663edbaa62f1"
  },
  {
    "url": "assets/js/45.3f33e307.js",
    "revision": "153ca3cb6f13880398d772d392a3bcc1"
  },
  {
    "url": "assets/js/46.25aa5b62.js",
    "revision": "c5ba22561909fc19a5eda158e5e225dc"
  },
  {
    "url": "assets/js/47.60898ed4.js",
    "revision": "ea70bc86bf6e3494b8e1eba29cb89e25"
  },
  {
    "url": "assets/js/48.180228eb.js",
    "revision": "13678e8c0b605082487c6f1473798666"
  },
  {
    "url": "assets/js/49.35597bc2.js",
    "revision": "befa32e92bdaa489134df9b25a39e706"
  },
  {
    "url": "assets/js/5.1da7acc7.js",
    "revision": "e18fdea3691512f3e6e5fff92071fed6"
  },
  {
    "url": "assets/js/50.d3325608.js",
    "revision": "59e59d954322d7ed4f3c8f307e8af2ad"
  },
  {
    "url": "assets/js/51.67f1fcc0.js",
    "revision": "2a22390d4ec734e0d19468fc3d60ee9a"
  },
  {
    "url": "assets/js/52.8b7ec7ae.js",
    "revision": "2690d22555722ccfbfa89d5e258d3974"
  },
  {
    "url": "assets/js/53.db3741e6.js",
    "revision": "86f13f3de70b11fad4ebde1d656594bd"
  },
  {
    "url": "assets/js/54.dd038643.js",
    "revision": "eda4bc061bbe2b642c5b84dfb56511fa"
  },
  {
    "url": "assets/js/55.21cb2643.js",
    "revision": "c71babd3e2d3171c17c4f16be3389449"
  },
  {
    "url": "assets/js/56.8a9905a0.js",
    "revision": "c176d26c04bd0554f5fa2bae245d620a"
  },
  {
    "url": "assets/js/57.80fdfb2b.js",
    "revision": "1517e7c3acb1c907afb6af1842b5367a"
  },
  {
    "url": "assets/js/58.bfa317f7.js",
    "revision": "ac925db660783469c9e89fd295efcf4e"
  },
  {
    "url": "assets/js/59.129cdbfc.js",
    "revision": "15a45613942450d5f9bc8ac395d99a60"
  },
  {
    "url": "assets/js/6.a764ca6c.js",
    "revision": "ba6c0f24eba2b297694535929967ea95"
  },
  {
    "url": "assets/js/60.2d2128a2.js",
    "revision": "a9959cc205f9523e707f4ff8ad82ba37"
  },
  {
    "url": "assets/js/61.b93899b7.js",
    "revision": "cf2e8571f29d92eb430427c7b2e9c78e"
  },
  {
    "url": "assets/js/7.7a7872b8.js",
    "revision": "d528d4eaf155aebdea0d9d9a9aec5319"
  },
  {
    "url": "assets/js/8.bef77a1a.js",
    "revision": "3ccb3ee8c842deb38372f97d185c21d8"
  },
  {
    "url": "assets/js/9.92ceea1c.js",
    "revision": "beb8a9860e689cb2ae644e1f86c9bcb8"
  },
  {
    "url": "assets/js/app.c8528959.js",
    "revision": "fb548124f78ca684f84964c3c112d452"
  },
  {
    "url": "assets/js/vendors~docsearch.46847213.js",
    "revision": "a6820c3d138967298b71c556309df6a4"
  },
  {
    "url": "guide/advanced/cache.html",
    "revision": "bfc8d5e05afc7191be7362eed0a3e0d6"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "06d8f503f6074d91d3ff2dffbb26960e"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "d6e163aac854afbb4cb5d27f5da4d558"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "9db4e0af8dba765a1a0e7d45dcac2ce7"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "55356dbb6541c9d574a16e8bf5fed986"
  },
  {
    "url": "guide/changelog.html",
    "revision": "4dfb12999b61b05de50da0d1c44fb7ca"
  },
  {
    "url": "guide/custom/contextmenu.html",
    "revision": "dda5c74a4081d3a0d89afc844cfa06e3"
  },
  {
    "url": "guide/custom/i18n.html",
    "revision": "9e93d36a539cc68a9f2f5f8a49ca74b8"
  },
  {
    "url": "guide/custom/index.html",
    "revision": "d2108d1923e3d90c88364b8843a667c2"
  },
  {
    "url": "guide/custom/scroll.html",
    "revision": "2ba56cf62b632f47313ab1323bf0bc3c"
  },
  {
    "url": "guide/custom/slot.html",
    "revision": "60b6cb5220e8407bdf0feb812fce008e"
  },
  {
    "url": "guide/custom/transition.html",
    "revision": "3d108930e1230d64776be8d68f7c97e4"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "bf9e1a648ff0abecdf6053ae551b5054"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "253b6645fa7b00668168ac7cbdbf56a2"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "71a30fe52f0c437b6da4335456e61f0d"
  },
  {
    "url": "guide/essentials/nuxt.html",
    "revision": "b1f6e1db445858f8cf4b61a1f61813a3"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "df0aa71c5da2c0bec09a68e43e68fbaf"
  },
  {
    "url": "guide/essentials/rule.html",
    "revision": "40e4b29df52904d4d84b791a75b942ed"
  },
  {
    "url": "guide/index.html",
    "revision": "c7eb7c0ec163eef6ee7ba08361841641"
  },
  {
    "url": "guide/meta/faqs.html",
    "revision": "a41c89beac3b0fe224754a2b5ad968c7"
  },
  {
    "url": "guide/meta/solutions.html",
    "revision": "33a8c6717d00ae5d8b0876238237e26e"
  },
  {
    "url": "guide/meta/uninstall.html",
    "revision": "cd8843c657dc563c088934dd62c1ced6"
  },
  {
    "url": "index.html",
    "revision": "94a28b90c5073bb9c61f62ec62cca709"
  },
  {
    "url": "zh/api/index.html",
    "revision": "8f85322d034abfe95479270179ddf93f"
  },
  {
    "url": "zh/api/router-alive.html",
    "revision": "8620fa7537d11012cd4022dffb766b84"
  },
  {
    "url": "zh/guide/advanced/cache.html",
    "revision": "04362f126faddb32e15d414b0de4ad7d"
  },
  {
    "url": "zh/guide/advanced/dynamic-tab-info.html",
    "revision": "4f7b3fd7eade65cb553bef0abfcf4ae0"
  },
  {
    "url": "zh/guide/advanced/initial-tabs.html",
    "revision": "b2b3fc494271b0121f11ae42bd495aa8"
  },
  {
    "url": "zh/guide/advanced/page-leave.html",
    "revision": "5a502e2197f87f9925f916c2675e2a94"
  },
  {
    "url": "zh/guide/advanced/restore.html",
    "revision": "2ff81c84eaf1ec4234dfe2eef7f470b8"
  },
  {
    "url": "zh/guide/changelog.html",
    "revision": "328428b41cf81e28d6b5b4a305f3d682"
  },
  {
    "url": "zh/guide/custom/contextmenu.html",
    "revision": "8a7d8b4376bac452a38d9557a9caf231"
  },
  {
    "url": "zh/guide/custom/i18n.html",
    "revision": "5885cfdf9bd0bae58214dce367206e5f"
  },
  {
    "url": "zh/guide/custom/index.html",
    "revision": "128a7cc31db2d4ff1152ca9a18f17960"
  },
  {
    "url": "zh/guide/custom/scroll.html",
    "revision": "e28fad8c6f1ad62abb1009cde0e720ce"
  },
  {
    "url": "zh/guide/custom/slot.html",
    "revision": "527319e0b2850a99028065915f8de609"
  },
  {
    "url": "zh/guide/custom/transition.html",
    "revision": "b97fa2db597ff2fe61cfe6555d91a2af"
  },
  {
    "url": "zh/guide/essentials/iframe.html",
    "revision": "5819ed6f0bc2029218ab4caa5d2416f1"
  },
  {
    "url": "zh/guide/essentials/index.html",
    "revision": "f05f3dcd0b80396a56b90fe8816184fb"
  },
  {
    "url": "zh/guide/essentials/installation.html",
    "revision": "15346c54fa274e9a99abdb4360ebffc5"
  },
  {
    "url": "zh/guide/essentials/nuxt.html",
    "revision": "346d736d8dc02b8255cb0cd3a6aaca2f"
  },
  {
    "url": "zh/guide/essentials/operate.html",
    "revision": "d66300bf519fca7ced4f235bf0ef4dbe"
  },
  {
    "url": "zh/guide/essentials/rule.html",
    "revision": "61a7a20b71c8fbccceee11e3ef9e120c"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "1443c1787dfbc15a10648a2451429878"
  },
  {
    "url": "zh/guide/meta/faqs.html",
    "revision": "016c07651754e73d5ed45e313c7dcb83"
  },
  {
    "url": "zh/guide/meta/solutions.html",
    "revision": "b1653f6aee776ab8c3345ee3095ab8c1"
  },
  {
    "url": "zh/guide/meta/uninstall.html",
    "revision": "9d8780704da85167f503d4a9d051c1bb"
  },
  {
    "url": "zh/index.html",
    "revision": "c1d6979a373da87d9dcdd87e3cc63e0a"
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
