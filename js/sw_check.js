// If serviceworker is supported, register sw.js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then(
                () => console.log('ServiceWorker successfully registered'),
                error => console.log('ServiceWorker error: ', error)
            );
    });
}
