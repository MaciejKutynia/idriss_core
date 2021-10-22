chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.type === 'apiAddressesRequest') {
            fetch("https://www.idriss-crypto.com/v1/Addresses?InputCombination=" + encodeURIComponent(request.value))
                .then(fetchRequest => fetchRequest.json())
                .then(x => sendResponse(x));
            return true;
        }
    }
);
chrome.contextMenus.create({
    title: 'Open idriss',
    contexts: ["page"],
    id: "idriss-crypto-1"
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log(info, tab)
    chrome.windows.create({url: '/standalone.html', width: 450, height: 600, type: 'popup'})
})