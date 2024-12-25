document.addEventListener("DOMContentLoaded", () => {
    // mobile menu
    let burgerBtn = document.querySelector('[data-burger]'),
        menu = document.querySelector('.menu');

    burgerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        burgerBtn.classList.toggle('burger-active');
        document.querySelector('body').classList.toggle('body-overflow');
        menu.classList.toggle('menu-active');
    })
});


const swiperTeam = new Swiper('.laboratory__swiper', {
    spaceBetween: 20,
    slidesPerView: 3.3,
    loop: true,
    navigation: {
        nextEl: '.laboratory-next',
        prevEl: '.laboratory-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1.2,
        },
        475: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3.3,
        }
    }
});

// const swiperReviews = new Swiper('.reviews__slider', {
//     spaceBetween: 40,
//     slidesPerView: 3,
//     loop: true,
//     pagination: {
//         el: '.reviews__slider-pagination',
//         type: 'bullets',
//     },

//     breakpoints: {
//         320: {
//             slidesPerView: 1.2,
//             spaceBetween: 15,
//         },
//         768: {
//             slidesPerView: 2.2,
//             spaceBetween: 20,
//         },
//         991: {
//             slidesPerView: 3,
//         }
//     }
// });


// list
const questions = document.querySelectorAll('.faq__list-item');

questions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('faq__list-item--active');
        question.lastElementChild.classList.toggle('faq__list-answer--active');
    });
})

// modal
// let modalMain = document.querySelector('[data-modal]'),
//     modalClose = document.querySelector('[data-close]'),
//     modalOpen = document.querySelectorAll('[modal-open]'),
//     btnModal = document.querySelectorAll('[data-submit]'),
//     modalThanks = document.querySelector('[data-thanks]');

// modalOpen.forEach(btn => {
//     btn.addEventListener('click', () => {
//         modalMain.classList.add('modal-wrap-active')
//         document.querySelector('body').style.cssText += `
//             overflow: hidden;
//         `;
//     })
// });

// modalClose.addEventListener('click', () => {
//     modalMain.classList.remove('modal-wrap-active');
//     document.querySelector('body').style.cssText += `
//             overflow: inherit;
//         `;
// })