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

    // list
    const question = document.querySelectorAll('.faq__list-item');

    // list-two
    const questionsTwo = document.querySelectorAll('.guarantees__list-item');

    function listActive(params) {
        params.forEach(question => {
            question.addEventListener('click', () => {
                if (question.classList.contains('guarantees__list-item')) {
                    question.firstElementChild.classList.toggle('guarantees__list-question_active');
                    question.lastElementChild.classList.toggle('guarantees__list-answer_active');
                } else {
                    question.classList.toggle('faq__list-item--active');
                    question.lastElementChild.classList.toggle('faq__list-answer--active');
                }
            });
        })
    }

    listActive(question);
    listActive(questionsTwo);

    //active - portfolio
    document.querySelectorAll('.portfolio__slide').forEach(slide => {
        slide.querySelectorAll('.portfolio__slide-link').forEach(btn => {
            btn.addEventListener('click', () => {
                slide.querySelectorAll('.portfolio__slide__hover').forEach((hover) => {
                    hover.classList.add('portfolio__slide__hover--active');

                    hover.addEventListener('click', (e) => {
                        if (e.target) {
                            hover.classList.remove('portfolio__slide__hover--active');
                        }
                    })
                })
            })
        })
    })

    const swiperOne = new Swiper('.laboratory__swiper', {
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

    const swiperTwo = new Swiper('.we__swiper', {
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.we__next',
            prevEl: '.we__prev',
        },

        breakpoints: {
            375: {
                slidesPerView: 1.2,
            },
            575: {
                slidesPerView: 2.1,
            },
            768: {
                slidesPerView: 2.7,
            },
            1024: {
                slidesPerView: 3.1,
                spaceBetween: 10,
            },
            1440: {
                slidesPerView: 5.1,
            }
        }
    });

    const swiperThree = new Swiper('.certificates__swiper', {
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.certificates__next',
            prevEl: '.certificates__prev',
        },

        breakpoints: {
            375: {
                slidesPerView: 1.5,
            },
            425: {
                slidesPerView: 1.7,
            },
            475: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            }
        }
    });

    const swiperFourMedia = window.innerWidth;

    if (swiperFourMedia < 1024) {
        const swiperFour = new Swiper('.portfolio__swiper', {
            spaceBetween: 20,
            navigation: {
                nextEl: '.portfolio__next',
                prevEl: '.portfolio__prev',
            },

            breakpoints: {
                375: {
                    slidesPerView: 1.2,
                },
                475: {
                    slidesPerView: 1.3,
                },
                575: {
                    slidesPerView: 1.8,
                },
                768: {
                    slidesPerView: 2.5,
                },
            }
        });
    }

    // list-three
    document.querySelectorAll('.vacancies__item').forEach(block => {
        block.querySelectorAll('.vacancies__item-body_preview-more').forEach(item => {
            item.addEventListener('click', () => {
                block.querySelectorAll('.vacancies__item-body_text').forEach(text => {
                    text.classList.add('vacancies__item-body_text--active')
                })
                item.classList.add('vacancies__item-body_preview-more--active')
            })
        })
    })

    // modal
    let modalMain = document.querySelector('[data-modal]'),
        modalClose = document.querySelector('[data-close]'),
        modalOpen = document.querySelectorAll('[modal-open]');

    modalOpen.forEach(btn => {
        btn.addEventListener('click', openModal)
    });
    modalClose.addEventListener('click', closeModal);

    function openModal() {
        modalMain.classList.add('modal-wrap-active')
        document.querySelector('body').style.cssText += `
            overflow: hidden;
        `;
    }
    function closeModal() {
        modalMain.classList.remove('modal-wrap-active');
        document.querySelector('body').style.cssText += `
            overflow: inherit;
        `;
    }
});