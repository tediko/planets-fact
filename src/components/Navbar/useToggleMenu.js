import { useState } from 'react';

const useToggleMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTransitionend, setIsTransitionend] = useState(true);
    let transitionDuration = 1000;
    let tabletBreakpoint = 768;

    /**
     * Function to toggle showMenu() and closeMenu() depending
     * on isOpen state. It doesn't run untill isTransitionend is true.
     */
    const handleToggle = () => {
        if (!isTransitionend) return false;
        !isOpen ? showMenu() : closeMenu();
    };

    /**
     * Function to open menu
     */
    const showMenu = () => {
        setIsOpen(true);
        setIsTransitionend(false);
        setIsExpanded(true);

        setTimeout(() => {
            setIsTransitionend(true);
        }, transitionDuration);
    };

    /**
     * Function to close menu
     */
    const closeMenu = () => {
        setIsTransitionend(false);
        setIsOpen(false);
        setIsExpanded(false);

        setTimeout(() => {
            setIsTransitionend(true);
        }, transitionDuration);
    };

    /**
     * Function to restore all states to it default values.
     */
    const restoreToDefault = () => {
        setIsOpen(false);
        setIsExpanded(false);
        setIsTransitionend(true);
    };

    return [
        handleToggle,
        restoreToDefault,
        isOpen,
        isExpanded,
        tabletBreakpoint,
    ];
};

export default useToggleMenu;
