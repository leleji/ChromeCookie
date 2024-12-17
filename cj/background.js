// 监听来自其他部分（如 popup 或 content script）的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getCookies") {
      // 获取 douyin.com 的 cookies
      chrome.cookies.getAll({ domain: "douyin.com" }, (cookies) => {
        sendResponse({ cookies: cookies });
      });
      return true;  // 允许异步响应
    }
  
    if (message.action === "setCookie") {
      // 设置 douyin.com 的 cookie
      chrome.cookies.set(message.cookieDetails, (cookie) => {
        sendResponse({ cookie: cookie });
      });
      return true;  // 允许异步响应
    }
  });
  