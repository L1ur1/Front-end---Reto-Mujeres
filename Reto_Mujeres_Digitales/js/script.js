/* Evalua sí el tamaño de la pantalla es menor o igual a 990 píxeles de ancho (dispositivos móviles) */
const mobileScreen = window.matchMedia("(max-width: 990px )");
/* Es donde se espera a que el documento HTML esté completamente cargado antes de ejecutar el código que contiene. */
$(document).ready(function () {
    /* Se agrega un manejador de eventos para el clic en los elementos con la clase insertada, esto quiere decir que cuando se hace clic en uno de estos elementos, se ejecutará la función especificada. */
    $(".dashboard-nav-dropdown-toggle").click(function () {
        /* "$(this)" se refiere al elemento actual en el que se hizo clic, posterior a ello usa "closest(".dashboard-nav-dropdown")" para buscar el elemento más cercano con la clase "dashboard-nav-dropdown" y por último le agrega o quita la clase "show" usando "toggleClass". */
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            /* Dentro del elemento "dashboard-nav-dropdown" que se encontró antes, se buscan todos los elementos descendientes que también tengan la clase "dashboard-nav-dropdown" y se les quita la clase "show", en caso de que la tuvieran. */
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        /* Se busca el padre del elemento después de dar clic con "$(this).parent()" y se seleccionan todos sus elementos hermanos con "siblings()" para quitarles la clase show, se puede decir que esto asegura que sólo el elemento actual que se clickeó se muestre, mientras que los demás se oculten. */
        $(this).parent()
            .siblings()
            .removeClass("show");
    /* Cierre de la primera función */
    }); 
    /* Se agrega un segundo manejador de eventos, esta vez para los elementos con la clase "menu-toggle", cuando a estos elementos se les da clic, se ejecuta la función interna. */
    $(".menu-toggle").click(function () {
        /* Se evalúa si la condición "mobileScreen.matches" es verdadera, es decir, si el ancho de la pantalla es menor o igual a 990 píxeles. Si la condición es verdadera, significa que el usuario está en un dispositivo móvil. */
        if (mobileScreen.matches) {
            /* Si la pantalla es de un tamaño de dispositivo móvil, la clase "mobile-show" se alterna en el elemento con la clase "dashboard-nav", esto suele usarse para mostrar u ocultar el menú de navegación en dispositivos móviles. */
            $(".dashboard-nav").toggleClass("mobile-show");
        /* Significa "Sino" para dar otra opción aparte de la condición establecida anteriormente */
        } else {
            /* Si la pantalla no es de un tamaño móvil (mayor a 990 píxeles de ancho), en lugar de modificar la navegación móvil, se agrega o quita la clase "dashboard-compact" al elemento con la clase "dashboard", esto, probablemente ajusta el tamaño o diseño de la vista del dashboard en pantallas más grandes. */
            $(".dashboard").toggleClass("dashboard-compact");
    /* Cierre de la segunda función */
        }
    });
/* Cierre de la función "$(document).ready()", que toma todo el código anterior. */
});