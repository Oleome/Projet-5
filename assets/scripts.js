const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("./service-worker.js", {
          scope: "./",
        });
        if (registration.installing) {
          console.log("Installation du service worker en cours");
        } else if (registration.waiting) {
          console.log("Service worker installé");
        } else if (registration.active) {
          console.log("Service worker actif");
        }
      } catch (error) {
        console.error(`L'enregistrement a échoué : ${error}`);
      }
    }
  };
  
  registerServiceWorker();



$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});


