export const getAllRockets = async() =>{
    const url = ("https://api.spacexdata.com/v4/rockets");
const options = {
    method: 'GET'
};

let data = await fetch(url, options);
let res = data.json();
return res;
}


export const getAllRocketsId =async(id)=>{
    let res = await fetch (`https://api.spacexdata.com/v4/rockets/${id}`);
    let data = await res.json();
    return data;
}

export const getmasatotalRockets = async()=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "mass": 1
                },
                "sort":{
                    "mass.kg": "desc"
                },
                "limit": 1
            }
        })
    }

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{mass} = maxMassRocket]} = await res.json();
    console.log(mass)
    return mass;
}


export const getAllCapsules = async() =>{
    const url = ("https://api.spacexdata.com/v4/capsules");
const options = {
    method: 'GET'
};

let data = await fetch(url, options);
let res = data.json();
return res;
}

export const getLaunches = async() =>{
    const url = "https://api.spacexdata.com/v4/launches";
    const options = {
    method: 'GET'
};

let data = await fetch(url, options);
let res = data.json();
return res;
}

export const getLaunch = async(id) =>{
    const url = `https://api.spacexdata.com/v4/launches/${id}`;
    const options = {
    method: 'GET'
};

let data = await fetch(url, options);
let res = data.json();
return res;
}



export const equipo = async () => {
    const url = "https://api.spacexdata.com/v4/crew";
    const options = {
        method: 'GET'
    };

    let response = await fetch(url, options);
    let data = await response.json();
    return data;
};



export const dragons = async () => {
    const url = "https://api.spacexdata.com/v4/dragons";
    const options = {
        method: 'GET'
    };

    let response = await fetch(url, options);
    let data = await response.json();
    return data;
};