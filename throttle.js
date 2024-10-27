function throttle(callfunction, delayy) {
    let last = 0;
    return function () {
        const curretnt = +new Date();
        if (curretnt - last > delayy) {
            callfunction.apply(this, arguments);
            last = curretnt;
        }
    };
}

function opThrottle(callfunction, delayy, { leading = false, trailing = true } = {}) {
    let last = 0;
    let timer = null;
    return function () {
        const curretnt = +new Date();
        if (!last && leading === false) {
            last = curretnt;
        }
        if (curretnt - last > delayy) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            callfunction.apply(this, arguments);
            last = curretnt;
        } else if (!timer && trailing !== false) {
            timer = setTimeout(() => {
                callfunction.apply(this, arguments);
                last = +new Date();
                timer = null;
            }, delayy);
        }
    };
}