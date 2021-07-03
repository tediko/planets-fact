import { AnimatePresence } from 'framer-motion';
import useToggleMenu from './useToggleMenu';
import { useEffect } from 'react';
import { Nav, Menu, Bars, List } from './NavbarStyles';
import ItemControler from './ItemControler';

const NavMobile = ({ windowWidth }) => {
    const [
        handleToggle,
        restoreToDefault,
        isOpen,
        isExpanded,
        tabletBreakpoint,
    ] = useToggleMenu();

    useEffect(() => {
        windowWidth >= tabletBreakpoint ? restoreToDefault() : '';
    }, [windowWidth]);

    return (
        <Nav>
            <Menu
                aria-label="Menu toggle"
                aria-expanded={isExpanded}
                aria-controls="nav-list"
                onClick={handleToggle}
            >
                <Bars isOpen={isOpen} />
            </Menu>
            <AnimatePresence>
                {isOpen && (
                    <List
                        id="nav-list"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'linear', duration: 0.3 }}
                        exit={{ opacity: 0 }}
                    >
                        <ItemControler mobile />
                    </List>
                )}
            </AnimatePresence>
        </Nav>
    );
};

export default NavMobile;
