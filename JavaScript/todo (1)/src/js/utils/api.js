export const getTodos = () => fetch('http://localhost:3004/notes').then(res => res.json());


export const updateById = (id,data) => {
    fetch(`http://localhost:3004/notes/${id}`, {
        method:"PUT",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(res => res.json()).then(() => console.log(data));
};