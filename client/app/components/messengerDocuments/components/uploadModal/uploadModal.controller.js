/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

class uploadModalController {
    constructor($mdDialog, $scope) {
        this.mdDialog = $mdDialog;
    }

    /**
     * Hides the modal
     */
    hide() {
        this.mdDialog.hide();
    };

    /**
     * Closes the modal
     */
    cancel() {
        this.mdDialog.cancel();
    };

    /**
     * OK action for the modal
     * @param {String} answer 
     */
    answer(answer) {
        this.mdDialog.hide(answer);
    };
}

uploadModalController.$inject = ['$mdDialog', '$scope'];

export { uploadModalController };
