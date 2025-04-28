export const getAllClothing = async (query) => {
    const req = await fetch(`http://localhost:3000/clothing?name=${encodeURIComponent(query || "")}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}

export const getClothingById = async (id) => {
    const req = await fetch(`http://localhost:3000/clothing/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}

export const createClothing = async (formData) => {
    const req = await fetch(`http://localhost:3000/clothing`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}

// updateClothing teď přijímá i password
export const updateClothing = async (id, formData, password) => {
    const req = await fetch(`http://localhost:3000/clothing/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({...formData, password})
    });
    const data = await req.json();
    return {
        status: req.status,
        payload: data.payload,
        message: data.message,
    };
};

// deleteClothing taky přijímá password
export const deleteClothing = async (id, password) => {
    const req = await fetch(`http://localhost:3000/clothing/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "DELETE",
        body: JSON.stringify({ password })
    });
    const data = await req.json();
    return {
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}
