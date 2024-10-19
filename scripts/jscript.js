// Seleciona os elementos do modal
const obj_div_modal = document.querySelector('#div_modal');
const obj_bt_fechar = document.querySelector('#p_fechar span');
const array_logo_container = document.querySelectorAll('#logo_container img');
const obj_logo_modal = document.querySelector('#logo_modal');
// Adiciona eventos ao clicar nos logos ou no botão de fechar do modal
for (obj_logo_container of array_logo_container) {
    obj_logo_container.addEventListener('click', function() {funExibeModal(this.src, this.alt)})
}
obj_bt_fechar.addEventListener('click', funFechaModal);
// Função para exibir e fechar o modal
function funExibeModal(par_src, par_alt) {
    obj_logo_modal.setAttribute('src', par_src);
    obj_logo_modal.setAttribute('alt', par_alt);
    obj_div_modal.style.display = 'block';
}

function funFechaModal() {
    obj_div_modal.style.display = 'none';
}
/*############################################################*/
// Seleciona todas as thumbnails, botão play e os videos do youtube
const obj_thumbnail_1 = document.querySelector('#thumbnail_1');
const obj_thumbnail_2 = document.querySelector('#thumbnail_2');
const obj_botao_play_1 = document.querySelector('#botao_play_1');
const obj_botao_play_2 = document.querySelector('#botao_play_2');
const obj_youtube_video_1 = document.querySelector('#youtube_video_1');
const obj_youtube_video_2 = document.querySelector('#youtube_video_2');
// Adiciona eventos ao clicar nas thumbnails
obj_thumbnail_1.addEventListener('click', funIniciaVideo1);
obj_thumbnail_2.addEventListener('click', funIniciaVideo2);
// Função para ativar os vídeos
function funIniciaVideo1() {
    let videoUrl = 'https://www.youtube.com/embed/1bfJ0ZjGWoU?autoplay=1';
    obj_youtube_video_1.setAttribute('src', videoUrl);
    obj_youtube_video_1.style.display = 'block';
    obj_thumbnail_1.style.display = 'none';
    obj_botao_play_1.style.display = 'none';
}

function funIniciaVideo2() {
    let videoUrl = 'https://www.youtube.com/embed/KgInN9UhOA0?autoplay=1';
    obj_youtube_video_2.setAttribute('src', videoUrl);
    obj_youtube_video_2.style.display = 'block';
    obj_thumbnail_2.style.display = 'none';
    obj_botao_play_2.style.display = 'none';
}
/*############################################################*/
// Seleciona todos os botões, dots e slides
const array_world_button = document.querySelectorAll('#world_menu button');
const array_world_dot = document.querySelectorAll('#world_menu_dot .button_dot');
const array_world_slide = document.querySelectorAll('.world_slide');
const obj_bt_left_world = document.querySelector('#bt_left_world');
const obj_bt_right_world = document.querySelector('#bt_right_world');

// Mapeamento entre botões e slides
const worldSlideMap = {
    bt_dorn: 'dorn',
    bt_deeps: 'deeps',
    bt_fall: 'fall',
    bt_kahet: 'kahet',

    bt_dot_dorn: 'dorn',
    bt_dot_deeps: 'deeps',
    bt_dot_fall: 'fall',
    bt_dot_kahet: 'kahet'
}

// Adiciona eventos a todos os botões e dots
for (obj_world_button of array_world_button) {
    obj_world_button.addEventListener('click', function() {funActivateSlide(worldSlideMap[this.id])});
}

for (obj_world_dot of array_world_dot) {
    obj_world_dot.addEventListener('click', function() {
        funActivateSlide(worldSlideMap[this.id]);
    });
}

obj_bt_left_world.addEventListener('click', leftWorldSlide);
obj_bt_right_world.addEventListener('click', rightWorldSlide);

// Função para ativar um slide
function funActivateSlide (slideId) {
    for (obj_world_slide of array_world_slide) {
        obj_world_slide.classList.toggle('active', obj_world_slide.id === slideId);
    }
    updateActiveWorldDot(slideId);
    updateActiveWorldButton(slideId);  
}

function updateActiveWorldDot(slideId) {
    for (obj_world_dot of array_world_dot) {
        obj_world_dot.classList.toggle('active', obj_world_dot.id === `bt_dot_${slideId}`);
    }
}

function updateActiveWorldButton(slideId) {
    for (obj_world_button of array_world_button) {
        obj_world_button.classList.toggle('active', obj_world_button.id === `bt_${slideId}`);
    }
}

function indexWorldSlide () {
    for (let i = 0; i < array_world_slide.length; i++) {
        if (array_world_slide[i].classList.contains('active')) {
            return i;
        }
    }
    return -1; // Caso não encontre um slide ativo, mas isso não deve acontecer.
}

function leftWorldSlide () {
    let activeIndex, prevIndex, prevSlideId; 
    activeIndex = indexWorldSlide (); // Obtem o índice do slide
    if (activeIndex > 0) {
        prevIndex = activeIndex - 1;
    }
    else {
        prevIndex = array_world_slide.length - 1;
    }
    prevSlideId = array_world_slide[prevIndex].id;
    funActivateSlide(prevSlideId);
}

function rightWorldSlide () {
    let activeIndex, nextIndex, nextSlideId; 
    activeIndex = indexWorldSlide (); // Obtem o índice do slide
    if (activeIndex < array_world_slide.length - 1) {
        nextIndex = activeIndex + 1;
    }
    else {
        nextIndex = 0;
    }
    nextSlideId = array_world_slide[nextIndex].id;
    funActivateSlide(nextSlideId);
}
/*############################################################*/
/*
// Seleciona todos os botões, dots e slides
const array_world_button = document.querySelectorAll('#world_menu button');
const array_world_dot = document.querySelectorAll('#world_menu_dot .button_dot');
const array_world_slide = document.querySelectorAll('.world_slide');
const obj_bt_left_world = document.querySelector('#bt_left_world');
const obj_bt_right_world = document.querySelector('#bt_right_world');

// Mapeamento entre botões e slides
const worldSlideMap = {
    bt_dorn: 'dorn',
    bt_deeps: 'deeps',
    bt_fall: 'fall',
    bt_kahet: 'kahet',

    bt_dot_dorn: 'dorn',
    bt_dot_deeps: 'deeps',
    bt_dot_fall: 'fall',
    bt_dot_kahet: 'kahet'
}

// Adiciona eventos a todos os botões e dots
for (obj_world_button of array_world_button) {
    obj_world_button.addEventListener('click', function() {funActivateSlide(worldSlideMap[this.id])});
}

for (obj_world_dot of array_world_dot) {
    obj_world_dot.addEventListener('click', function() {
        funActivateSlide(worldSlideMap[this.id]);
    });
}

obj_bt_left_world.addEventListener('click', leftWorldSlide);
obj_bt_right_world.addEventListener('click', rightWorldSlide);

// Função para ativar um slide
function funActivateSlide (slideId) {
    for (obj_world_slide of array_world_slide) {
        obj_world_slide.classList.toggle('active', obj_world_slide.id === slideId);
    }
    updateActiveWorldDot(slideId);
}

function updateActiveWorldDot(slideId) {
    for (obj_world_dot of array_world_dot) {
        obj_world_dot.classList.toggle('active', obj_world_dot.id === `bt_dot_${slideId}`);
    }
}

function indexWorldSlide () {
    for (let i = 0; i < array_world_slide.length; i++) {
        if (array_world_slide[i].classList.contains('active')) {
            return i;
        }
    }
    return -1; // Caso não encontre um slide ativo, mas isso não deve acontecer.
}

function leftWorldSlide () {
    let activeIndex, prevIndex, prevSlideId; 
    activeIndex = indexWorldSlide (); // Obtem o índice do slide
    if (activeIndex > 0) {
        prevIndex = activeIndex - 1;
    }
    else {
        prevIndex = array_world_slide.length - 1;
    }
    prevSlideId = array_world_slide[prevIndex].id;
    funActivateSlide(prevSlideId);
}

function rightWorldSlide () {
    let activeIndex, nextIndex, nextSlideId; 
    activeIndex = indexWorldSlide (); // Obtem o índice do slide
    if (activeIndex < array_world_slide.length - 1) {
        nextIndex = activeIndex + 1;
    }
    else {
        nextIndex = 0;
    }
    nextSlideId = array_world_slide[nextIndex].id;
    funActivateSlide(nextSlideId);
}
*/
/*############################################################*/
// Seleciona todos os botões, dots e slides
const array_features_button = document.querySelectorAll('#features_menu button');
const array_features_dot = document.querySelectorAll('#features_menu_dot .button_dot');
const array_features_slide = document.querySelectorAll('.features_slide');
const obj_bt_left_features = document.querySelector('#bt_left_features');
const obj_bt_right_features = document.querySelector('#bt_right_features');

// Mapeamento entre botões e slides
const featuresSlideMap = {
    bt_delves: 'delves',
    bt_warbands: 'warbands',
    bt_talents: 'talents',
    bt_earthen: 'earthen',
    bt_flying: 'flying',
    bt_dungeons: 'dungeons',

    bt_dot_delves: 'delves',
    bt_dot_warbands: 'warbands',
    bt_dot_talents: 'talents',
    bt_dot_earthen: 'earthen',
    bt_dot_flying: 'flying',
    bt_dot_dungeons: 'dungeons'
}

// Adiciona eventos a todos os botões e dots
for (obj_features_button of array_features_button) {
    obj_features_button.addEventListener('click', function() {ActivateFeaturesSlide(featuresSlideMap[this.id])});
}

for (obj_features_dot of array_features_dot) {
    obj_features_dot.addEventListener('click', function() {
        ActivateFeaturesSlide(featuresSlideMap[this.id]);
    });
}

obj_bt_left_features.addEventListener('click', leftFeaturesSlide);
obj_bt_right_features.addEventListener('click', rightFeaturesSlide);

// Função para ativar um slide
function ActivateFeaturesSlide (slideId) {
    for (obj_features_slide of array_features_slide) {
        obj_features_slide.classList.toggle('active', obj_features_slide.id === slideId);
    }
    updateActiveFeaturesDot(slideId);
    updateActiveFeaturesButton(slideId);
}

function updateActiveFeaturesDot(slideId) {
    for (obj_features_dot of array_features_dot) {
        obj_features_dot.classList.toggle('active', obj_features_dot.id === `bt_dot_${slideId}`);
    }
}

function updateActiveFeaturesButton(slideId) {
    for (obj_features_button of array_features_button) {
        obj_features_button.classList.toggle('active', obj_features_button.id === `bt_${slideId}`);
    }
}

function indexFeaturesSlide () {
    for (let i = 0; i < array_features_slide.length; i++) {
        if (array_features_slide[i].classList.contains('active')) {
            return i;
        }
    }
    return -1; // Caso não encontre um slide ativo, mas isso não deve acontecer.
}

function leftFeaturesSlide () {
    let activeIndex, prevIndex, prevSlideId; 
    activeIndex = indexFeaturesSlide (); // Obtem o índice do slide
    if (activeIndex > 0) {
        prevIndex = activeIndex - 1;
    }
    else {
        prevIndex = array_features_slide.length - 1;
    }
    prevSlideId = array_features_slide[prevIndex].id;
    ActivateFeaturesSlide(prevSlideId);
}

function rightFeaturesSlide () {
    let activeIndex, nextIndex, nextSlideId; 
    activeIndex = indexFeaturesSlide (); // Obtem o índice do slide
    if (activeIndex < array_features_slide.length - 1) {
        nextIndex = activeIndex + 1;
    }
    else {
        nextIndex = 0;
    }
    nextSlideId = array_features_slide[nextIndex].id;
    ActivateFeaturesSlide(nextSlideId);
}
/*############################################################*/