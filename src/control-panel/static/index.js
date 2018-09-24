window.onload = function () {
    const apiWindow = document.querySelector('#api');

    document.querySelector('#audio_vol_up').addEventListener('click', function () {
        apiWindow.src = '/api/keyboard/audio_vol_up';
    });
    document.querySelector('#audio_vol_down').addEventListener('click', function () {
        apiWindow.src = '/api/keyboard/audio_vol_down';
    });

    document.querySelector('#left').addEventListener('click', function () {
        apiWindow.src = '/api/keyboard/left';
    });
    document.querySelector('#right').addEventListener('click', function () {
        apiWindow.src = '/api/keyboard/right';
    });
    document.querySelector('#space').addEventListener('click', function () {
        apiWindow.src = '/api/keyboard/space';
    });
    document.querySelector('#xiaobei-dialog').addEventListener('click', function () {
        apiWindow.src = '/api/xiaobei/dialog';
    });
    document.querySelector('#xiaobei-voice').addEventListener('click', function () {
        apiWindow.src = '/api/xiaobei/voice';
    });

}