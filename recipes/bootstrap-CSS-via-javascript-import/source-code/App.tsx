import React from 'react';
// Assuming that Bootstrap's CSS is included in your HTML file or you're importing it in your project
// If you're using a module bundler like Webpack, you can also import it like this:
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div className="container">
            {/* Using Bootstrap's classes for styling */}
            <div className="text-center">
                <h1 className="p-5">Hello, world!</h1>
            </div>
        </div>
    );
};

export default App;

