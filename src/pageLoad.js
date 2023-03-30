export let content = document.querySelector('#content');
// this function accept a 'elm' element that indicate where to append the childs nodes and a 'list'
// that represent a structure of the Text, items can have a class, an level of indentation
export const mkChildElments = (elm, list) => {
    for (let a = 0; a <= list.length - 1; a++) {
        let child = list[a];
        let className = undefined;
        if (list[a].includes('-')) {
            let formatet = list[a].split('-');
            [child, className] = [...formatet]
        }
        if (list[a] === '+') {
            elm = elm.lastElementChild;
        }
        else {
            let newNode = document.createElement(`${child}`);
            if (className != undefined) {
                newNode.classList.add(className)
            }
            elm.appendChild(newNode);
        }
    }
    return mkChildElments
};


export const mkinnerContent = (classElm, text) => {
    let target = document.querySelector(`.${classElm}`);
    target.textContent = text
    return mkinnerContent
}

