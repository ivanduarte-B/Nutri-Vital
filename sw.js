if(!self.define){let e,c={};const s=(s,a)=>(s=new URL(s+".js",a).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(c[r])return;let d={};const o=e=>s(e,r),n={module:{uri:r},exports:d,require:o};c[r]=Promise.all(a.map((e=>n[e]||o(e)))).then((e=>(i(...e),d)))}}define(["./workbox-b3f8ee23"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"780214.png",revision:"e5937c3bcce701cf93394e4dc89c260e"},{url:"calculadorcalorias/foto_comida.png",revision:"89184ec4b677045f3c96e856f4d6090b"},{url:"calculadorcalorias/icono_descarga.png",revision:"82a26b18c563102ee4b444be4e5cbb75"},{url:"calculadorcalorias/icono_kcal.png",revision:"9ba57b79daf43c60a3f38b08310e9cd4"},{url:"calculadorcalorias/jardinero.png",revision:"5356359d6fd95eebbd4a395797c354ab"},{url:"calculadorcalorias/nadar.png",revision:"9b9f554e08ba3a301e2b9176ececee09"},{url:"calculadorcalorias/sentado.png",revision:"bcfa2ed4cafe61d978ec76550dc13e1f"},{url:"calculadorcalorias/trotar.png",revision:"3deda79f58f2cd12773010d3c965eb0b"},{url:"calDiarias.html",revision:"bc9db27b466a7b69202be0880c35e99e"},{url:"css/animate.min.css",revision:"a332e9019e2a787d926d9fa1abaeb9d4"},{url:"css/bootstrap.min.css",revision:"fee68c0f2f583161134a1fcb5950501d"},{url:"css/css_-ElmMUZ7YFTwRMXG8ZkuSKVVAgRypr5z12xHYuG5624.css",revision:"af2ac357070ca9b153687d6acb8e51c0"},{url:"css/css_2THG1eGiBIizsWFeexsNe1iDifJ00QRS9uSd03rY9co.css",revision:"afa73d72234482cefc35d80d68516bbe"},{url:"css/css_fMPx1t8A6k1C_1ml4n4ZtHmNljcaa6rj2F6uMi3xi7E.css",revision:"f44a4c879a98c0fe7241e82dd1f36ab0"},{url:"css/css_SQTJMKIip3Xa2On6LztwzgQUV8Xqv5eNwqHwel1J9DU.css",revision:"e78aca407b8629928b026839bffbcb33"},{url:"css/css_xE-rWrJf-fncB6ztZfd2huxqgxu4WO-qwma6Xer30m4.css",revision:"795b30fdbf5d29ebd7b4c7bebd2ad97e"},{url:"css/jquery-ui.css",revision:"c4a88ec0cb998929a670c0c58d7dc526"},{url:"css/jquery.mCustomScrollbar.min.css",revision:"f59e3f4c0087b4d8ddc27bdd9c9ab92b"},{url:"css/meanmenu.css",revision:"d315d517456adf639c68005809dab07d"},{url:"css/nice-select.css",revision:"7641aec4b8c405f570860925f7f64580"},{url:"css/normalize.css",revision:"8d9d541cc4c37ce152038f142628e199"},{url:"css/owl.carousel.min.css",revision:"351b4e5f569a83790bed10824208390d"},{url:"css/responsive.css",revision:"b839f441934a238127497c55e38a8fee"},{url:"css/slick.css",revision:"f46bd015743c36e5514de87e0c1b40e5"},{url:"css/style.css",revision:"500c8d9c06a8ee7ae9839916d46041f3"},{url:"css/styleIMC.css",revision:"348e1a2655f3a4a28092c791efca2f87"},{url:"css/wpsol_4e9a8b61b3ddf5ae6522e450c53d3c53.css",revision:"284ddf5b2867c02b2d3ee4e08cfebc59"},{url:"icon/icon_b.png",revision:"df032941ca012ff4c6cb7f7291511ed6"},{url:"images/about.jpg",revision:"6e4e3eb9a272022250cc3b2158569f1c"},{url:"images/aguac.png",revision:"10047da9f87f642b32d834e839634ea3"},{url:"images/artur-rutkowski-GdTLaWamFHw-unsplash.jpg",revision:"02c0acecbcf06eac3934f31930982c22"},{url:"images/banner2.png",revision:"e5bcd1bd735c913c9dce49111df9da8c"},{url:"images/crros.png",revision:"2248717864c7892edba3262d75069c51"},{url:"images/diana-polekhina-ZSpkUThb7qk-unsplash.jpg",revision:"64b6c6b0977aa8eb790da6636190b02e"},{url:"images/fibra.jpg",revision:"942bc597c5cc4aace7bcb9dea0c6ca07"},{url:"images/grasasatu.jpg",revision:"fd6dd70c77a28a92e879663fbc8d6b21"},{url:"images/img2.png",revision:"15767cf17f70020a92198be14142ccc2"},{url:"images/loading.gif",revision:"556e9ff845b7dd0c62dcdbbb00babb4b"},{url:"images/logggo.PNG",revision:"c6f38976a37782815dafceb753efe8e7"},{url:"images/logo.png",revision:"d8ed966733e3a9f3883f7558775a1bb2"},{url:"images/logo2.png",revision:"951a92f386046551248cdcb9d29a8d88"},{url:"images/logoNutri.png",revision:"60d0bd83ab8794a2a47e00d0b7da18b6"},{url:"images/margarita-zueva-CY-OkOICA9o-unsplash.jpg",revision:"5da549ae442565ed2acae63e38716835"},{url:"images/ovidiu-creanga-iNWjJJXeym4-unsplash.jpg",revision:"55c53a26b583468e86e51023ab7577a4"},{url:"images/potasio.png",revision:"43c22c868a04d2fa98d32a4795dc991a"},{url:"images/siora-photography-cixohzDpNIo-unsplash.jpg",revision:"c01120c428d0d0578f85fc06d70d294a"},{url:"images/tes.jpg",revision:"65b62a7f6ebe17274fbfd132b7039c3a"},{url:"images/test_con.png",revision:"fa856906c763a2b26e2afa1782c82935"},{url:"images/test.png",revision:"32280ae3fe5d631e256622996cd29320"},{url:"images/v1.jpg",revision:"747e88baf3dd317b0b82e2fc90663cd3"},{url:"images/v2.jpg",revision:"7c68f9a333078203cc5d7c5e0a90762b"},{url:"images/vege.png",revision:"879f1675918d25e1a033f08498ee456e"},{url:"img2.png",revision:"15767cf17f70020a92198be14142ccc2"},{url:"js/bootstrap.bundle.min.js",revision:"62e633210885066c625c46081cc2b339"},{url:"js/calordiarias.js",revision:"e3fcb15c46dd4ccc026f810cb64c64b5"},{url:"js/custom.js",revision:"e0c94f93847950a4a8701648f12baab4"},{url:"js/jquery-3.0.0.min.js",revision:"68c83ed206a2b972d61a89dfb6d250d0"},{url:"js/jquery.fancybox.min.js",revision:"eb00db2ecef59a9201f45268a06f976e"},{url:"js/jquery.mCustomScrollbar.concat.min.js",revision:"42a368e95b4a38989c8984c672d29ec0"},{url:"js/jquery.min.js",revision:"cbde2a48700724f03cee8c63d5911fbb"},{url:"js/jquery.validate.js",revision:"ed399222edd6d6afc491bc82ac5e5051"},{url:"js/plugin.js",revision:"776e9e7a11240b3a846c7e60f6fe9ba3"},{url:"js/popper.min.js",revision:"ccc533cf501d3f124323b95318c6bbb8"},{url:"js/ScriptCalorias.js",revision:"c5b9a00158c67884bcf61fc93a775e73"},{url:"js/ScriptCalorQuemadas.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"manifest.json",revision:"e5b2ebd33f845ab3652a7bfccf877290"},{url:"pagIMC.html",revision:"67f0f69ffa86093757f1c376ed51a833"},{url:"piñaa.png",revision:"e3128d30156ecd02af949f862c635c04"},{url:"QuemaCalori.html",revision:"1c6ad62d225e4e4fd835f1ea61a6cfa5"},{url:"Recetas.html",revision:"fb0f1f5c0d25a39b4eb1dd7cab1cf8f9"},{url:"tablacalorias.html",revision:"6a3975d69e37de6aa51f4c0175ff0e32"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
