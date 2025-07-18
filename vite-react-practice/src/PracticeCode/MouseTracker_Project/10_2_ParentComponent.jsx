import { useState } from "react";
import MOuseTracker from "./10_1_MouseTraker";

function ParentComponent() {
    const [showComponent, setShowComponenet] = useState(true);

    const toggleComponent = () => {
        setShowComponenet((prev) => !prev);
    };

    return (
        <div className="ui">
            <button onClick={toggleComponent}>
                {showComponent ? 'Unmount Traker' : 'Mount Tracker'}
            </button>

            {showComponent && <MOuseTracker />}
        </div>
    )
}

export default ParentComponent;