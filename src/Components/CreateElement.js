import React from 'react'

const CreateElement = () => {
    return (
        React.createElement('div', { id: "test" }, "Hello World from Create Element Method")
    )
}
export default CreateElement