import css from "./popup.scss";

export class AbstractPageManager {

    constructor(document) {
        this.document = document;
    }

    generatePopupContent(div, key, elements, callback) {
        div.attachShadow({mode: 'open'})
        let style = document.createElement('style')
        style.textContent = css.toString();
        div.shadowRoot.append(style);
        if (Object.values(elements).length == 0) {
            let item = document.createElement('div')
            item.className = 'empty';
            item.append("nothing found. sign up ");
            let a = document.createElement('a')
            a.textContent = 'now';
            a.href = 'https://idriss-crypto.com/';
            item.append(a)
            div.shadowRoot.append(item)
        }
        for (const elementsKey in elements) {
            let item = document.createElement('div')
            let typeElement = document.createElement('div')
            typeElement.className = 'type'
            typeElement.textContent = elementsKey;
            item.append(typeElement)
            let keyElement = document.createElement('div')
            keyElement.className = 'key'
            keyElement.textContent = key;
            item.append(keyElement)
            let valueElement = document.createElement('div')
            valueElement.className = 'value'
            valueElement.textContent = elements[elementsKey];
            item.append(valueElement)
            let tooltip = document.createElement('div')
            tooltip.className = 'tooltip'
            tooltip.textContent = "Copied address!";
            item.append(tooltip)
            div.shadowRoot.append(item)
            item.onmousedown = () => {
                callback(elements[elementsKey])
                tooltip.style.visibility = "visible";
                setTimeout(function () {
                    tooltip.style.visibility = "hidden";
                }, 1000);
            }
        }
    }

    apiCall(value) {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage({type: "apiAddressesRequest", value}, response => {
                resolve(response);
            });
        });
    }
}