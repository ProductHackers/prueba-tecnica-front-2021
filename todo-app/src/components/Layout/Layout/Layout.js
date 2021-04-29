// local imports
import Header from '../Header';
import Footer from '../Footer';
import './Layout.css';

function Layout({ children, ...props }) {
    return (
        <div>
            <Header {...props}/>
            <main className='content'>
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;