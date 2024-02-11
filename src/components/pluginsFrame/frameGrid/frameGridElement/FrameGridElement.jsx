import React from 'react';

const FrameGridElement = ({item, id}) => {
    return (
        <section>
            {item.pluginData && item.pluginData.pluginName}
        </section>
    );
}

export default FrameGridElement;
