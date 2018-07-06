if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(
            () => console.log('ServiceWorker successfully registered'),
            error => console.log('ServiceWorker error: ', error)
        );
    });
}