
let handleEvents = {
    chooseCategory : function() {
        const categoryElements = document.querySelectorAll('.category');
        categoryElements.forEach((curCategory) => {
            //highlight selected node
            curCategory.onclick = () => {
                categoryElements.forEach((curCategory) => {
                    curCategory.classList.remove('select')
                })
                curCategory.classList.add('select')
            }
            //show sub navigation
            const subNavElement = document.querySelector('.sub-nav');
            curCategory.onmouseover = () => {
                if (curCategory.querySelector('.ti-angle-down')) {
                subNavElement.style.display = 'block';
                }
            }
            subNavElement.onmouseenter = () => {
                subNavElement.style.display = 'block';
            }
            subNavElement.onmouseleave = () => {
                subNavElement.style.display = 'none';
            }
            curCategory.onmouseleave = () => {
                subNavElement.style.display = 'none'
            }
        })
    },

    searchIconClicked : () => {
        document.querySelector('.search-icon').onclick = () => {
            const searchFormElement = document.querySelector('#search-form');
            if (searchFormElement.style.display == 'block') {
                searchFormElement.style.display = 'none'
            } else {
                searchFormElement.style.display = 'block';
            }
            
        }
    },

    scrollEvent: () => {
        window.onscroll = (e) => {
            console.log(e.target.all)
        }
    },

    scrollDownEvent : () => {
        let scrollIndex = window.scrollY;
        const otherElement = document.querySelector('#other');
        const lastNewsElement =document.querySelector('#lastNews');
        window.onscroll = () => {
            if (scrollIndex+window.innerHeight >= 1217+lastNewsElement.clientHeight) {
                Object.assign(otherElement.style, {
                    position: 'absolute',
                    top: 'auto',
                    bottom: '0',
                    right: '0px',
                });
                
            } else if (scrollIndex+window.innerHeight >= 1217+otherElement.clientHeight) {
                Object.assign(otherElement.style, {
                    position: 'fixed',
                    bottom: '0',
                    top: 'auto',
                    right: '420px',
                })
            } else {
                Object.assign(otherElement.style, {
                    position: 'absolute',
                    top: '0',
                    bottom: 'auto',
                    right: '0px',
                })
            }
        }

    },

    scrollUpEvent : () => {

        let scrollIndex = window.scrollY;
        const otherElement = document.querySelector('#other');
        const lastNewsElement =document.querySelector('#lastNews');
        window.onscroll = (e) => {
            console.log(e)
            if (scrollIndex <= 1217) {
                Object.assign(otherElement.style, {
                    position: 'absolute',
                    top: '0',
                    bottom: 'auto',
                    right: '0px',
                })
            } else if (scrollIndex<= lastNewsElement.clientHeight + 1217 - otherElement.clientHeight) {
                Object.assign(otherElement.style, {
                    position: 'fixed',
                    bottom: 'auto',
                    top: '20px',
                    right: '420px',
                })
            }
        }
    },
}

const animation = {
    biggestBannerZoomAni : () => {
        const hotNewsElements = document.querySelector('#hot-news #hottest-news');
        hotNewsElements.onmouseover = (e) => {
            Object.assign(document.querySelector(`#${e.target.offsetParent.id} img`).style, {
                transform: 'scale(1.1)'
            })
        }
        hotNewsElements.onmouseleave = (e) => {
            Object.assign(document.querySelector(`#${e.target.id} img`).style, {
                transform: 'none'
            })
        }
  
    },

    firstBannerZoomAni : () => {
        const hotNewsElements = document.querySelector('#first-news-anchors');
            hotNewsElements.onmouseover = (e) => {
                Object.assign(document.querySelector(`#${e.target.offsetParent.id} img`).style, {
                transform: 'scale(1.1)',
                // transition-duration: '5s'
            })
        }
            hotNewsElements.onmouseleave = (e) => {
                Object.assign(document.querySelector(`#${e.target.id} img`).style, {
                transform: 'none'
            })
        } 
    },

    doubleBannerZoomAni : () => {
        const hotNewsElements = document.querySelectorAll('.double-bottom-news');
        hotNewsElements.forEach((curElement) => {
            curElement.onmouseover = (e) => {
                Object.assign(document.querySelector(`#${e.target.offsetParent.id} img`).style, {
                transform: 'scale(1.1)'
            })
        }
            curElement.onmouseleave = (e) => {
                Object.assign(document.querySelector(`#${e.target.id} img`).style, {
                transform: 'none'
            })
        } 
        })
       
  
    }
}
const start = function () {
    handleEvents.searchIconClicked();
    handleEvents.chooseCategory();
    handleEvents.scrollEvent()
    window.onwheel = (e) => {
        if (e.deltaY >= 0){
            handleEvents.scrollDownEvent();
        } else if (e.deltaY <= 0){
            handleEvents.scrollUpEvent();
        }
    }

    animation.biggestBannerZoomAni();
    animation.firstBannerZoomAni();
    animation.doubleBannerZoomAni();
}
start();