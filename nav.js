document.addEventListener('DOMContentLoaded', function() {
    fetch('../nav.html').then(response => {
        if(!response.ok){
           throw new console.error('Falha ao carregar nav.')
        }
        return response.text();
    }).then(data =>{
        document.body.insertAdjacentHTML('afterbegin', data);
    }).catch(error =>{
        console.error(error);
    });
    fetch('../footer.html').then(erro =>{
        if(!erro.ok){
            throw new Error('Falha ao carregar o footer.');
        }
        return erro.text();
    }).then(elemento =>{
        document.body.insertAdjacentHTML('beforeend', elemento);
    }).catch(erro =>{
        console.error(erro);
    });
});
