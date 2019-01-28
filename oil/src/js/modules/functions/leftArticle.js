module.exports = (leftArticleElem) => {
    /*set active class to the element at left side of article page*/
    for (let i = 0; i < leftArticleElem.length; i++) {
        leftArticleElem[i].addEventListener('click', (even) => {
            let nodeParent = leftArticleElem[i].parentNode;
            nodeParent.classList.toggle('active');
        });
    }
};