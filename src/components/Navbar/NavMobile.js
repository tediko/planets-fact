import { Nav, Menu, Bars, List } from './NavbarStyles';
import ItemControler from './ItemControler';
import { AnimatePresence } from 'framer-motion';

const NavMobile = () => {
    return (
        <Nav>
            <Menu
                aria-label="Menu toggle"
                aria-expanded="false"
                aria-controls="nav-list"
            >
                <Bars />
            </Menu>
            <AnimatePresence>
                {false && (
                    <List
                        id="nav-list"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'linear', duration: 0.3 }}
                        exit={{ opacity: 0 }}
                    >
                        <ItemControler />
                    </List>
                )}
            </AnimatePresence>
        </Nav>
    );
};

export default NavMobile;
