fetch('https://frontend-test-api.alex93.now.sh/api/languages?group=backend',{
        method: 'GET',
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
    });

function handleDownloadBtn() {
    const downloadBtn = document.querySelector('#btn-download');

    downloadBtn.addEventListener('click', function () {
        
    });
}
