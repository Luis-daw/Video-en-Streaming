import VideoSystemApp from "./videoSystemApp.js";

const historyActions = {
    init: () => {
        VideoSystemApp.handleInit();
    },
    productionsCategoryList: (event) =>VideoSystemApp.handleProductionsCategoryList(event.state.category),
    showCast: (event) => VideoSystemApp.handleCastProductionList(event.state.production),
    showActors: () => VideoSystemApp.handleActors(),
    showDirectors: () => VideoSystemApp.handleDirectors(),
    showActor: (event) => VideoSystemApp.handleActor(event.state.actor),
    showDirector: (event) => VideoSystemApp.handleDirector(event.state.director),
    newProduction: () => VideoSystemApp.handleNewProduction(),
    removeProduction: () => VideoSystemApp.handleRemoveProduction(),
    assignDeassignPerson: () => VideoSystemApp.handleAssignDeassignPerson(),
    addRemoveCategory: () => VideoSystemApp.handleAddRemoveCategory(),
    newPerson: () => VideoSystemApp.handleNewPerson(),
    removePerson: () => VideoSystemApp.handleRemovePerson(),
}
window.addEventListener('popstate', function (event) {
    if (event.state) {
        historyActions[event.state.action](event);
    }
});
console.log(VideoSystemApp);
history.replaceState({action: 'init'}, null);