document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.accordion-accordins-accordin').forEach((el) => {
        let head = el.querySelector('.accordion-accordins-accordin__head');
        let content = el.querySelector('.accordion-accordins-accordin__content');
        let accordins = document.querySelectorAll('.second-accordion-accordin');
        head.addEventListener('click', () => {
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.paddingTop = null;
            } else {
                content.style.paddingTop = '30px';
                content.style.maxHeight = content.scrollHeight + 30 + 'px';
            }
            accordins.forEach((item) => {
                if (item != el) {
                    let contentClear = item.querySelector('.accordion-accordins-accordin__content');

                    contentClear.style.maxHeight = null;
                    contentClear.style.paddingTop = null;

                }
            });
            head.classList.toggle('active');
        });
    })




    // const menuBtn = document.querySelector('.menu-btn');
    // menuBtn.addEventListener('click', () => {
    //     const headerList = document.querySelector('.header-menu__list');
    //     headerList.classList.toggle('active');
    //     menuBtn.classList.toggle('active');
    // });
});