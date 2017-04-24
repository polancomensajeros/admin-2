/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

class historyModalController {
    constructor($mdDialog, $scope) {
        this.mdDialog = $mdDialog;
        this.selected = [];
        this.query = {
            order: 'name',
            limit: 5,
            page: 1
        };
        this.desserts = [];
        this.start = new Date();
        this.end = new Date();
        for (let i = 0; i < 10; i++) {
            this.desserts.push({
                service: 'Cédula PDF',
                date: '17-Nov-2016 / 17:23:32',
                description: 'Jhonatan Acosta'
            });
        }
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

historyModalController.$inject = ['$mdDialog', '$scope'];

export { historyModalController };
