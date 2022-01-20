import React, { useState, useEffect } from 'react'

function DataSourceLoader({ getDataFunc = () => {}, resourceName, children }) {

    const [ state, setState ] = useState(null)

    useEffect(() => {
        (async () => {
            const data = await getDataFunc()
            setState(data)
        })();
    }, [getDataFunc])

    return (
        <>
            {
                React.Children.map(children, child => {
                    if (React.isValidElement(child)){
                        return React.cloneElement(child, { [resourceName]: state })
                    }
                    return child
                })
            }
            
        </>
    )
}

export default DataSourceLoader

// Usage 
// <DataSourceLoader getDataFunc={func(url)} resourceName='name of prop to use data'>
//     Component that will use the loaded data
// </DataSourceLoader>

// const func = async (url) => {
//     const response = await axios.get(url)
//     return response.data
// }

// const func = key => () => {
//     return localStorage.getItem(key)
// }