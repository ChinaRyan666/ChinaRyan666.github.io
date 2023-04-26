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
    "revision": "cd423f051e0caa3f2ea932d8c1318e08"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.73dc42e5.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.f90154aa.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.973b3142.js",
    "revision": "c40b5a1ae79ce713d091b83b378d4fdf"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.8de5ed19.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.fd6a517a.js",
    "revision": "9b90ef0f71190ca8f76b01c7fe6d870f"
  },
  {
    "url": "assets/js/16.60f506c7.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.4d1b88c1.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
  },
  {
    "url": "assets/js/18.285cfffd.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
  },
  {
    "url": "assets/js/4.d94921b7.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.aafec39e.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.fcea16c6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.7fcc8b8f.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.8dfc7fd6.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.e8364819.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.6f80fd19.js",
    "revision": "2eb6642a49c9122b4abc0a3996e4d19f"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "49485889b8617db3b3726e1200fc6f0d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "337a90e121a69eccbe47c01c275a741a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "b943c8ceabd10c8325e5be50691356cd"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "bdac5b3dd631707a0fd8edb4cc27f643"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a7f47860f1ec7e2937d1b52abad60ef1"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "9a836b753196d8cb15d11ee0f2957a0f"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "6cd1ca0ba63e0f3e919d988e69fbc3a9"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "2099ac23538efd6855a95c69185408b2"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "21b1a99b58c3426dbca780bfbccde68f"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "7803c6ceee0ea6e4b87e8d96e7ecbddc"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8218d7be8dc51d93e0ab5359ed59cfe9"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "bd654cf0dc0b7c9b804372db08ffbe35"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "4abe89651ba8b1f975f78a5c25cc7914"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "850c161550e889f9367cb2ee9d36061e"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "89ed473eeaec9a979ac6c5f7e6f9809d"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "2cd1c35d1830423188265f36b0cfc7fa"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e04f6d92ec160156fce5cb94b6d0eb45"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "e22209719a9f65ddd5bcc16c9ee6b0c2"
  },
  {
    "url": "timeline/index.html",
    "revision": "6eb66cbdb8b3b21a28fe6cb8e66627ca"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "fbe73f0f429ef897284686c111074358"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "dd4eb0ede27f114de5aaa426c458c940"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "a1673c11eca68d51d8271a639014da95"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "8f26f0b309b741b1279fdb432b2166b6"
  },
  {
    "url": "生活分享/life.html",
    "revision": "bc9246dbb3da6cb08dbc6dc4cfc1bfec"
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
