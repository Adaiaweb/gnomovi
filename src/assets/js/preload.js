export function preloadImages(paths, callback) {
    let loaded = 0;

    paths.forEach((path) => {
        const img = new Image();
        img.src = path; // Use already resolved URLs
        img.onload = () => {
        loaded++;
        if (loaded === paths.length) {
            callback();
        }
        };
    });
}
