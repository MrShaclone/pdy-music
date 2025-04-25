const rockMetal = document.getElementById('rock-metal');
const funkBrasil = document.getElementById('funk-brasil');
const sertanejoRaiz = document.getElementById('sertanejo-raiz');
const mpb = document.getElementById('mpb');
const radioAtual = document.getElementById('nome-radio');
const radioAtualImg = document.getElementById('img-radio');
const podcast1 = document.getElementById('podcast-1');
const podcast2 = document.getElementById('podcast-2');
const podcast3 = document.getElementById('podcast-3');
const podcast4 = document.getElementById('podcast-4');

const radios = [rockMetal, funkBrasil, sertanejoRaiz, mpb];
const radioAleatoria = radios[Math.floor(Math.random() * radios.length)]

const music_rock = [
    {
        name: 'PDY Rádio Ao Vivo',
        artist: 'DJ Conectado',
        url: 'music/music-rock/shboom.mp3',
        cover: ''
    },
    {
        name: 'PDY Rádio Ao Vivo',
        artist: 'DJ Conectado',
        url: 'teste.mp3',
        cover: ''
    },
    {
        name: 'PDY Rádio Ao Vivo',
        artist: 'DJ Conectado',
        url: 'teste.mp3',
        cover: ''
    },
    {
        name: 'PDY Rádio Ao Vivo',
        artist: 'DJ Conectado',
        url: 'teste.mp3',
        cover: ''
    }
]

const music_mpb = [
    {
        name: 'Minha Felicidade',
        artist: 'Roberta Campos',
        url: '../music/music-mpb/minha-felicidade.mp3',
        cover: ''
    },
    {
        name: 'Meu Abrigo',
        artist: 'Melim',
        url: '../music/music-mpb/meu-abrigo.mp3',
        cover: ''
    },
    {
        name: 'Acenda o farol',
        artist: 'Tim Maia',
        url: '../music/music-mpb/acenda-o-farol.mp3',
        cover: ''
    },
    {
        name: 'Não Quero Dinheiro (Só Quero Amar)',
        artist: 'Tim Maia',
        url: '../music/music-mpb/não-quero-dinheiro-só-quero-amar.mp3',
        cover: ''
    }
]

const music_sertanejo = [
    {
        name: 'PDY Rádio Ao Vivo',
        artist: 'DJ Conectado',
        url: 'playlists/shboom.mp3',
        cover: ''
    },
    {
        name: 'PDY Rádio Ao Vivo',
        artist: 'DJ Conectado',
        url: 'teste.mp3',
        cover: ''
    },
    {
        name: 'PDY Rádio Ao Vivo',
        artist: 'DJ Conectado',
        url: 'teste.mp3',
        cover: ''
    },
    {
        name: 'PDY Rádio Ao Vivo',
        artist: 'DJ Conectado',
        url: 'teste.mp3',
        cover: ''
    }
]

const music_funk = [
    {
        name: 'PDY Rádio Ao Vivo',
        artist: 'DJ Conectado',
        url: 'playlists/shboom.mp3',
        cover: ''
    },
    {
        name: 'PDY Rádio Ao Vivo',
        artist: 'DJ Conectado',
        url: 'teste.mp3',
        cover: ''
    },
    {
        name: 'PDY Rádio Ao Vivo',
        artist: 'DJ Conectado',
        url: 'teste.mp3',
        cover: ''
    },
    {
        name: 'PDY Rádio Ao Vivo',
        artist: 'DJ Conectado',
        url: 'teste.mp3',
        cover: ''
    }
]

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    loop: 'all',
    order: 'random',
    preload: 'auto',
    audio: music_mpb,
    theme: '#0a3d62',
    listFolded: true
});

ap.on('loadedmetadata', () => {
    const progress = ap.container.querySelector('.aplayer-bar-wrap');
    if (progress) {
        progress.style.pointerEvents = 'none';
        progress.style.opacity = '0.6';
    }
});


// Funcao para trocar o radio atual para qual a pessoa selecionar
function trocarRadioAtual(radio){
    switch (radio.id){
        case 'rock-metal': 
            radioAtual.textContent = 'Rock / Metal';
            radioAtualImg.src = rockMetal.src;
            ap.list.clear();
            ap.list.add(music_rock);
            break;
        case 'funk-brasil':
            radioAtual.textContent = 'Funk Brasil';
            radioAtualImg.src = funkBrasil.src;
            ap.list.clear();
            ap.list.add(music_funk);
            break;
        case 'sertanejo-raiz':
            radioAtual.textContent = 'Sertanejo Raiz';
            radioAtualImg.src = sertanejoRaiz.src;
            ap.list.clear();
            ap.list.add(music_sertanejo);
            break;
        case 'mpb':
            radioAtual.textContent = 'MPB';
            radioAtualImg.src = mpb.src;
            ap.list.clear();
            ap.list.add(music_mpb);
            break;
        default:
            radioAtual.textContent = '';
    }  
}

function trocarPodcastAtual(podcast){
    switch (podcast.id){
        case 'podcast-1': 
            radioAtual.textContent = 'Podcast 1';
            radioAtualImg.src = podcast1.src;
            ap.list.clear();
            break;
        case 'podcast-2':
            radioAtual.textContent = 'Podcast 2';
            radioAtualImg.src = podcast2.src;
            ap.list.clear();
            break;
        case 'podcast-3':
            radioAtual.textContent = 'Podcast 3';
            radioAtualImg.src = podcast3.src;
            ap.list.clear();
            break;
        case 'podcast-4':
            radioAtual.textContent = 'Podcast 4';
            radioAtualImg.src = podcast4.src;
            ap.list.clear();
            break;
        default:
            radioAtual.textContent = '';
    }  
}

trocarRadioAtual(radioAleatoria);

//Evento de click para mudar a radio
rockMetal.addEventListener('click', () =>{
    trocarRadioAtual(rockMetal);
});

funkBrasil.addEventListener('click', () =>{
    trocarRadioAtual(funkBrasil);
});

mpb.addEventListener('click', () =>{
    trocarRadioAtual(mpb);
});

sertanejoRaiz.addEventListener('click', () =>{
    trocarRadioAtual(sertanejoRaiz);
});

