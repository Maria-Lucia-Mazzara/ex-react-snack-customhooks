import { useEffect, useState } from "react";

function useCustomPointer(component) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        document.addEventListener("mousemove", updatePosition);


        return () => {
            document.removeEventListener("mousemove", updatePosition);
        };
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                left: mousePosition.x,
                top: mousePosition.y,
                transform: "translate(-50%, -50%)",
                cursor: "none",
                fontSize: 24
            }}
        >
            {component}
        </div>
    );
}

export default useCustomPointer;