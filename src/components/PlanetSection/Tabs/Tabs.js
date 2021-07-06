import { Tabs, Tab } from './TabsStyles';

const TabsContainer = ({
    planetData,
    handleClick,
    currentTab,
    windowWidth,
}) => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            x: 50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { delay: 1.5, duration: 1.5 },
        },
        exit: {
            opacity: 0,
            x: 50,
            transition: { duration: 1 },
        },
    };

    return (
        <Tabs
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Tab
                data-type="overview"
                planetData={planetData}
                onClick={handleClick}
                isActive={currentTab === 'overview' ? true : false}
            >
                Overview
            </Tab>
            <Tab
                data-type="structure"
                planetData={planetData}
                onClick={handleClick}
                isActive={currentTab === 'structure' ? true : false}
            >
                {windowWidth >= 768 ? 'Internal ' : ''}Structure
            </Tab>
            <Tab
                data-type="geology"
                planetData={planetData}
                onClick={handleClick}
                isActive={currentTab === 'geology' ? true : false}
            >
                Surface{windowWidth >= 768 ? ' Geology' : ''}
            </Tab>
        </Tabs>
    );
};

export default TabsContainer;
