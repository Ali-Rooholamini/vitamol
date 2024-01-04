export default defineNuxtRouteMiddleware((to , from) => {
    switch (to.params.name) {
        case "mane-guard" : 
            return;
        case "hue-harmony":
            return;
        case "skin-care":
            return;
        default :
            return navigateTo("/");
    }
})