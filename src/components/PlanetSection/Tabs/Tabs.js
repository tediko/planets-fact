import { Tabs, Tab } from './TabsStyles';

const TabsContainer = ({ planetData, handleClick, currentTab }) => {
    return (
        <Tabs>
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
                Structure
            </Tab>
            <Tab
                data-type="geology"
                planetData={planetData}
                onClick={handleClick}
                isActive={currentTab === 'geology' ? true : false}
            >
                Surface
            </Tab>
        </Tabs>
    );
};

export default TabsContainer;
