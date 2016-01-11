import React, {Component, PropTypes} from 'react';

import AppBar      from '../../components/AppBar/AppBar.jsx';
import WelcomeDialog from '../../containers/WelcomeDialog.jsx';
import Footer        from '../../containers/Footer.jsx';

if (process.env.BROWSER) {
    require('./MainLayout.less');
}

export default class MainLayout extends Component {
    static contextTypes = {i18n: React.PropTypes.object};

    static propTypes = {
        showWelcomeScreen: PropTypes.bool,
        showFooter: PropTypes.bool,
        footerLinks: PropTypes.object,
        onWelcomeScreenClose: PropTypes.func
    };

    render() {
        const { l } = this.context.i18n;
        const {showWelcomeScreen, showFooter, footerLinks, onWelcomeScreenDismiss} = this.props;

        return (
            <div className='MainLayout'>
                <div className='MainLayout__content'>
                    <AppBar
                        title={l('Chicago Web App')}
                        className='ArticlesPage__app-bar'
                        fixOnScroll={false}
                        scrollOffset={65}
                    />
                    <WelcomeDialog
                        isOpen={showWelcomeScreen}
                        onDismiss={onWelcomeScreenDismiss}
                    />
                    {this.props.children}
                </div>

                {
                    showFooter
                        ? <Footer />
                        : null
                }
            </div>
        );
    }
}
