import { Tabs, Tab } from './TabsStyles';

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
