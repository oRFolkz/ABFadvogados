/* ### SLIDE SHOW ### */
/* ### SLIDE SHOW ### */
/* ### SLIDE SHOW ### */
/* ### SLIDE SHOW ### */
/* ### SLIDE SHOW ### */

const slideImgs = document.querySelectorAll('.jsSlide');
let currentIndex = 0
const slideShow = () => {
    currentIndex = (currentIndex + 1);
    if (currentIndex === 0) {
        /* dont know why this is empy */
    } else if (currentIndex === 1) {
        slideImgs[0].classList.remove("showing");
        slideImgs[0].classList.add("none");
        slideImgs[2].classList.remove("showing");
        slideImgs[2].classList.add("none");
        slideImgs[3].classList.remove("showing");
        slideImgs[3].classList.add("none");


        slideImgs[1].classList.remove("none");
        slideImgs[1].classList.add("showing");
    } else if (currentIndex === 2) {
        slideImgs[0].classList.remove("showing");
        slideImgs[0].classList.add("none");
        slideImgs[1].classList.remove("showing");
        slideImgs[1].classList.add("none");
        slideImgs[3].classList.remove("showing");
        slideImgs[3].classList.add("none");

        slideImgs[2].classList.remove("none");
        slideImgs[2].classList.add("showing");
    } else if (currentIndex === 3) {
        slideImgs[0].classList.remove("showing");
        slideImgs[0].classList.add("none");
        slideImgs[1].classList.remove("showing");
        slideImgs[1].classList.add("none");
        slideImgs[2].classList.remove("showing");
        slideImgs[2].classList.add("none");

        slideImgs[3].classList.remove("none");
        slideImgs[3].classList.add("showing");
    } else if (currentIndex === 4) {
        slideImgs[1].classList.remove("showing");
        slideImgs[1].classList.add("none");
        slideImgs[2].classList.remove("showing");
        slideImgs[2].classList.add("none");
        slideImgs[3].classList.remove("showing");
        slideImgs[3].classList.add("none");

        slideImgs[0].classList.remove("none");
        slideImgs[0].classList.add("showing");
        currentIndex = 0;
    };
};

setInterval(slideShow, 4500)

/* ### SLIDE SHOW ^^^ ### */
/* ### SLIDE SHOW ^^^ ### */
/* ### SLIDE SHOW ^^^ ### */
/* ### SLIDE SHOW ^^^ ### */
/* ### SLIDE SHOW ^^^ ### */

/* ### CLICK SCROLL ### */
/* ### CLICK SCROLL ### */
/* ### CLICK SCROLL ### */
/* ### CLICK SCROLL ### */
/* ### CLICK SCROLL ### */

const servicos = document.querySelector('.servicos')
const localizacao = document.querySelector('.localizacao')
const sobre = document.querySelector('.sobre')
const quemSomos = document.querySelector('.quemSomos')
const scrollToViewServicos = document.querySelector(".cardsInfo")
const scrollToViewSobre = document.querySelector(".advogado")
const scrollToViewLocalizacao = document.querySelector('footer')
const scrollToViewquemSomos = document.querySelector('.partners')

servicos.addEventListener('click', () => {
    scrollToViewServicos.scrollIntoView({ behavior: 'smooth' });
});

localizacao.addEventListener('click', () => {
    scrollToViewLocalizacao.scrollIntoView({ behavior: 'smooth' });
});

sobre.addEventListener('click', () => {
    scrollToViewSobre.scrollIntoView({ behavior : 'smooth' });
});

quemSomos.addEventListener('click', () => {
    scrollToViewquemSomos.scrollIntoView({ behavior : 'smooth' });
});

/* ### CLICK SCROLL ^^^ ### */
/* ### CLICK SCROLL ^^^ ### */
/* ### CLICK SCROLL ^^^ ### */
/* ### CLICK SCROLL ^^^ ### */
/* ### CLICK SCROLL ^^^ ### */


/* ### SKILL HOVER ### */
/* ### SKILL HOVER ### */
/* ### SKILL HOVER ### */
/* ### SKILL HOVER ### */
/* ### SKILL HOVER ### */

const firstImgHenrique = document.querySelector(".jsImgHenriqueSkill");
const firstImgAna = document.querySelector(".jsImgAnaSkill");
const secondImgLarissa = document.querySelector(".jsImgLarissaSkill");
const secondImgGabriele = document.querySelector(".jsImgGabrieleSkill");

const anaHover = document.querySelectorAll(".anafSkill");
const gabrieleHover = document.querySelectorAll(".gabrieleSkill");

var hoverAna = false
var hoverGabriele = false

anaHover.forEach(element => {
    element.addEventListener('mouseenter', () => {
        hoverAna = true;
        changeImgSkillOne()
    });
});

anaHover.forEach(element => {
    element.addEventListener('mouseleave', () => {
        hoverAna = false;
        changeImgSkillOne()
    });
});

gabrieleHover.forEach(element => {
    element.addEventListener('mouseenter', () => {
        hoverGabriele = true;
        changeImgSkillTwo()
    });
});

gabrieleHover.forEach(element => {
    element.addEventListener('mouseleave', () => {
        hoverGabriele = false;
        changeImgSkillTwo()
    });
});

changeImgSkillOne = () => {

    if (hoverAna) {
        firstImgAna.classList.remove("none");
        firstImgAna.classList.add("showing");
        firstImgHenrique.classList.add("none");
    } else {
        firstImgHenrique.classList.remove("none");
        firstImgHenrique.classList.add("showing");
        firstImgAna.classList.add("none");
    }
}

changeImgSkillTwo = () => {

    if (hoverGabriele) {
        secondImgGabriele.classList.remove("none");
        secondImgGabriele.classList.add("showing");
        secondImgLarissa.classList.add("none");
    } else {
        secondImgLarissa.classList.remove("none");
        secondImgLarissa.classList.add("showing");
        secondImgGabriele.classList.add("none");
    }
}

/* ### SKILL HOVER ^^^ ### */
/* ### SKILL HOVER ^^^ ### */
/* ### SKILL HOVER ^^^ ### */
/* ### SKILL HOVER ^^^ ### */
/* ### SKILL HOVER ^^^ ### */