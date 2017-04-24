/**
 * @author Juan Sebastian Polanco Ramos <s.polanco@mensajerosurbanos.com>
 */

const titles = () => {
    let topBarTitle = 'Admin';

    const setTopbarTitle = (title) => {
        topBarTitle = title;
    }   

    const getTopbarTitle = () => {
        return topBarTitle;
    }   

    return {setTopbarTitle, getTopbarTitle};
}

export {titles};