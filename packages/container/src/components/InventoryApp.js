import { mount as mountInventory } from 'inventory/InventoryApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mountInventory(ref.current);
    });

    return <div ref={ref}></div>
};