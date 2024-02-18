/*
 *
 * Copyright (c) 2023 Melvin Jones Repol (mrepol742.github.io). All Rights Reserved.
 *
 * License under the GNU GENERAL PUBLIC LICENSE, version 3.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://github.com/mrepol742/mrepol742.github.io/blob/master/LICENSE
 *
 * Unless required by the applicable law or agreed in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var versionBrowser = new URLSearchParams(window.location.search).get("version");
var urlBrowser = getUrl(versionBrowser);

setTimeout(function () {
    window.location.href = urlBrowser;
}, 3000);

document.getElementById("retry-download").href = urlBrowser;

function getUrl(v) {
    if (versionBrowser == null) {
        return "https://mrepol742-released-stable.netlify.app/Webvium%20v" + latestVersionName + ".apk";
    }
    var versionF = versionBrowser.replace("v", "").replace(".", "");
    if (versionF > latestVersionCode || versionList[0] > versionF) {
        return "https://mrepol742.github.io/404.html?utm_source=mrepol742.github.io&utm_medium=vnf&utm_campaigns=webvium";
    }
    return "https://mrepol742-released-stable.netlify.app/Webvium%20" + version + ".apk";
}

const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});