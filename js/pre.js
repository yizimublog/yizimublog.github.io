const throttle = (e,t)=>{
    let s, o, n;
    return function() {
        const i = this
          , a = arguments;
        s ? (clearTimeout(o),
        o = setTimeout(function() {
            Date.now() - n >= t && (e.apply(i, a),
            n = Date.now())
        }, Math.max(t - (Date.now() - n), 0))) : (e.apply(i, a),
        n = Date.now(),
        s = !0)
    }
}
  , delayTime = 420;
window.addEventListener("DOMContentLoaded", e=>{
    const t = document.querySelector(".header");
    if (t) {
        const e = window.getComputedStyle(t, null).getPropertyValue("height");
        document.documentElement.style.setProperty("--header-height", e)
    }
}
, {
    once: !0
}),

window.addEventListener("DOMContentLoaded", e=>{
    const t = document.getElementById("back-to-top");
    t !== null && window.addEventListener("scroll", throttle(function() {
        window.scrollY > 100 ? t.classList.add("show") : t.classList.remove("show")
    }, delayTime))
}
, {
    once: !0
});
const userPrefers = localStorage.getItem("theme");
userPrefers === "dark" ? changeModeMeta("dark") : userPrefers === "light" && changeModeMeta("light"),
window.matchMedia("(prefers-color-scheme: dark)").addListener(e=>{
    changeMode()
}
),

window.addEventListener("storage", function(e) {
    if (e.key !== "theme")
        return;
    changeModeMeta(e.newValue === "dark" ? "dark" : "light"),
    changeMode()
});
function getCurrentTheme() {
    return JSON.parse(window.getComputedStyle(document.documentElement, null).getPropertyValue("--theme-name"))
}
function changeModeMeta(e) {
    document.documentElement.setAttribute("data-theme", e)
}

function storePrefers() {
    window.localStorage.setItem("theme", getCurrentTheme())
}
window.addEventListener("DOMContentLoaded", e=>{
    const t = document.getElementById("lang-switcher");
    if (t) {
        const e = document.getElementById("langs");
        t.addEventListener("mouseover", function() {
            e.style = "display: block"
        }),
        t.addEventListener("mouseout", function() {
            e.style = "display: none"
        })
    }
}
, {
    once: !0
}),
window.addEventListener("DOMContentLoaded", e=>{
    const t = "??????"
      , s = "?????????";
    document.querySelectorAll(".post-body > pre").forEach(e=>{
        const t = document.createElement("div");
        e.parentNode.replaceChild(t, e),
        t.appendChild(e)
    }
    );
    function n(e) {
        const n = document.querySelectorAll("table.lntable, .highlight > pre, .post-body > div > pre");
        n.forEach(n=>{
            n.parentNode.style.position = "relative";
            const o = document.createElement("button");
            o.className = "copy-button",
            o.type = "button",
            o.innerText = t;
            let i;
            n.classList.contains("lntable") ? i = n.querySelectorAll(".lntd")[1] : i = n.querySelector("code"),
            o.addEventListener("click", ()=>{
                e.writeText(i.innerText).then(()=>{
                    o.blur(),
                    o.innerText = s,
                    setTimeout(()=>{
                        o.innerText = t
                    }
                    , 1e3)
                }
                ).catch(e=>{
                    o.innerText = "Error",
                    console.error(e)
                }
                )
            }
            ),
            n.appendChild(o),
            n.parentNode.addEventListener("mouseover", ()=>{
                o.style = "visibility: visible; opacity: 1"
            }
            ),
            n.parentNode.addEventListener("mouseout", ()=>{
                o.style = "visibility: hidden; opacity: 0"
            }
            )
        }
        )
    }
    if (navigator && navigator.clipboard)
        n(navigator.clipboard);
    else {
        const e = document.createElement("script");
        e.src = "/libs/clipboard-polyfill.min.js",
        e.defer = !0,
        e.onload = function() {
            n(clipboard)
        }
        ,
        document.head.appendChild(e)
    }
}
, {
    once: !0
})