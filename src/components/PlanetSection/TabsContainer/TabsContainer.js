import { Tabs, Tab } from './TabsContainerStyles';

const TabsContainer = () => {
    return (
        <Tabs>
            <Tab isActive>Overview</Tab>
            <Tab>Structure</Tab>
            <Tab>Surface</Tab>
        </Tabs>
    );
};

export default TabsContainer;
