//radios
const rockMetal = document.getElementById('rock-metal');
const funkBrasil = document.getElementById('funk-brasil');
const sertanejoRaiz = document.getElementById('sertanejo-raiz');
const mpb = document.getElementById('mpb');
const sertanejo = document.getElementById('sertanejo');
const lofi = document.getElementById('lo-fi');
const trap = document.getElementById('trap');
const forro = document.getElementById('forro');
const eletronica = document.getElementById('eletronica');
const pagode = document.getElementById('pagode');
const phonk = document.getElementById('phonk');
const reggae = document.getElementById('reggae');
const gospel = document.getElementById('gospel');
const samba = document.getElementById('samba');
const rockClassico = document.getElementById('rock-classico');
const hipHop = document.getElementById('hip-hop');
const romanticas = document.getElementById('romanticas');
const flashback = document.getElementById('flashback-80s');
const popRock = document.getElementById('pop-rock');
const popRock80s = document.getElementById('pop-rock-80s');

//radio atual
const radioAtual = document.getElementById('nome-radio');
const radioAtualImg = document.getElementById('img-radio');

//podcasts
const podcast1 = document.querySelector('podcast-1');
const podcast2 = document.getElementById('podcast-2');
const podcast3 = document.getElementById('podcast-3');
const podcast4 = document.getElementById('podcast-4');

//todas as radios
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

const music_sertanejo_raiz = [
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
function trocarRadioAtual(radio) {
    switch (radio.id) {
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
            ap.list.add(music_sertanejo_raiz);
            break;
        case 'mpb':
            radioAtual.textContent = 'MPB';
            radioAtualImg.src = mpb.src;
            ap.list.clear();
            ap.list.add(music_mpb);
            break;
        case 'sertanejo':
            radioAtual.textContent = 'Sertanejo';
            radioAtualImg.src = sertanejo.src;
            ap.list.clear();
            break;
        case 'lo-fi':
            radioAtual.textContent = 'Lo-Fi';
            radioAtualImg.src = lofi.src;
            ap.list.clear();
            break;
        case 'trap':
            radioAtual.textContent = 'Trap';
            radioAtualImg.src = trap.src;
            ap.list.clear();
            break;
        case 'forro':
            radioAtual.textContent = 'Forró';
            radioAtualImg.src = forro.src;
            ap.list.clear();
            break;
        case 'eletronica':
            radioAtual.textContent = 'Eletrônica';
            radioAtualImg.src = eletronica.src;
            ap.list.clear();
            break;
        case 'pagode':
            radioAtual.textContent = 'Pagode';
            radioAtualImg.src = pagode.src;
            ap.list.clear();
            break;
        case 'phonk':
            radioAtual.textContent = 'Phonk';
            radioAtualImg.src = phonk.src;
            ap.list.clear();
            break;
        case 'reggae':
            radioAtual.textContent = 'Reggae';
            radioAtualImg.src = reggae.src;
            ap.list.clear();
            break;
        case 'gospel':
            radioAtual.textContent = 'Gospel';
            radioAtualImg.src = gospel.src;
            ap.list.clear();
            break;
        case 'samba':
            radioAtual.textContent = 'Samba';
            radioAtualImg.src = samba.src;
            ap.list.clear();
            break;
        case 'rock-classico':
            radioAtual.textContent = 'Rock Clássico';
            radioAtualImg.src = rockClassico.src;
            ap.list.clear();
            break;
        case 'hip-hop':
            radioAtual.textContent = 'Hip Hop';
            radioAtualImg.src = hipHop.src;
            ap.list.clear();
            break;
        case 'romanticas':
            radioAtual.textContent = 'Românticas';
            radioAtualImg.src = romanticas.src;
            ap.list.clear();
            break;
        case 'flashback-80s':
            radioAtual.textContent = 'Flashback Anos 80';
            radioAtualImg.src = flashback.src;
            ap.list.clear();
            break;
        case 'pop-rock-80s':
            radioAtual.textContent = 'Pop Rock 80';
            radioAtualImg.src = popRock80s.src;
            ap.list.clear();
            break;
        case 'pop-rock':
            radioAtual.textContent = 'Pop Rock';
            radioAtualImg.src = popRock.src;
            ap.list.clear();
            break;
        default:
            radioAtual.textContent = '';
    }
}

function trocarPodcastAtual(podcast) {
    switch (podcast.id) {
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

//Evento de click para mudar as radios -------------------------------------------------------
rockMetal.addEventListener('click', () => {
    trocarRadioAtual(rockMetal);
});

funkBrasil.addEventListener('click', () => {
    trocarRadioAtual(funkBrasil);
});

mpb.addEventListener('click', () => {
    trocarRadioAtual(mpb);
});

sertanejoRaiz.addEventListener('click', () => {
    trocarRadioAtual(sertanejoRaiz);
});

sertanejo.addEventListener('click', () => {
    trocarRadioAtual(sertanejo);
});

lofi.addEventListener('click', () => {
    trocarRadioAtual(lofi);
});

trap.addEventListener('click', () => {
    trocarRadioAtual(trap);
});

forro.addEventListener('click', () => {
    trocarRadioAtual(forro);
});

eletronica.addEventListener('click', () => {
    trocarRadioAtual(eletronica);
});

pagode.addEventListener('click', () => {
    trocarRadioAtual(pagode);
});

phonk.addEventListener('click', () => {
    trocarRadioAtual(phonk);
});

reggae.addEventListener('click', () => {
    trocarRadioAtual(reggae);
});

gospel.addEventListener('click', () => {
    trocarRadioAtual(gospel);
});

samba.addEventListener('click', () => {
    trocarRadioAtual(samba);
});

rockClassico.addEventListener('click', () => {
    trocarRadioAtual(rockClassico);
});

hipHop.addEventListener('click', () => {
    trocarRadioAtual(hipHop);
});

romanticas.addEventListener('click', () => {
    trocarRadioAtual(romanticas);
});

flashback.addEventListener('click', () => {
    trocarRadioAtual(flashback);
});

popRock.addEventListener('click', () => {
    trocarRadioAtual(popRock);
});

popRock80s.addEventListener('click', () => {
    trocarRadioAtual(popRock80s);
});


//Evento de click para mudar os podcasts -------------------------------------------------------
podcast1.addEventListener('click', () => {
    trocarPodcastAtual(podcast1);
});

podcast2.addEventListener('click', () => {
    trocarPodcastAtual(podcast2);
});

podcast3.addEventListener('click', () => {
    trocarPodcastAtual(podcast3);
});

podcast4.addEventListener('click', () => {
    trocarPodcastAtual(podcast4);
});
