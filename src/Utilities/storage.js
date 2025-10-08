const getInstalledApps = () => {
    const data = localStorage.getItem("installed")
    return data ? JSON.parse(data) : []

}


const setInstalledApp = (el) => {
    const existingApps = getInstalledApps()
    const newAppList = [...existingApps, el]
    const strApps = JSON.stringify(newAppList)
    localStorage.setItem("installed", strApps)
}

export { getInstalledApps, setInstalledApp }