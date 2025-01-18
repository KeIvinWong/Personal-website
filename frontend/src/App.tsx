// App.tsx
import React from 'react';
import ProjectBanner from './Components/Banner/ProjectBanner';

const App: React.FC = () => {
    return (
        <>

            <ProjectBanner
                title="Project Title"
                description="This is a brief description of the project."
                backgroundImage="#"
                demoVideo="#"
            />
            {/* Add more sections or components here */}
        </>
    );
};

export default App;