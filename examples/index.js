import React from 'react';
import ReactDom from 'react-dom';
import MyComponent from '../src/index'

const Demo = () => {
    return <div>
        <h1>组件预览：</h1>
        <MyComponent />
    </div>
}

ReactDom.render(<Demo />, document.getElementById('root'));