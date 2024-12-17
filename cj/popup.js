document.getElementById("getCookies").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "getCookies" }, (response) => {
        const cookies = response.cookies;
        const cookiesDiv = document.getElementById("cookies");
        let cookiesText = '';
        cookies.forEach((cookie) => {
            cookiesText += `${cookie.name}=${cookie.value}; `;
        });
        cookiesDiv.innerHTML=cookiesText;
        // 将获取到的 cookie 复制到剪切板
        navigator.clipboard.writeText(cookiesText).then(function () {
            alert("复制成功，请粘贴到软件");
        }, function (err) {
            alert(err);
        });
    });
});

document.getElementById("setCookie").addEventListener("click", () => {
    const cookieDetails = {
        url: "http://douyin.com",
        name: "testCookie",
        value: "testValue",
        domain: "douyin.com",
        path: "/",
        secure: true,
        httpOnly: true
    };
    chrome.runtime.sendMessage({ action: "setCookie", cookieDetails: cookieDetails }, (response) => {
        alert("Cookie set successfully!");
    });
});
