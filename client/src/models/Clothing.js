

export const getAllClothing = async () => {
    const req = await fetch("http://localhost:3000/clothing", {
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
export const updateClothing = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/clothing/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(formData)
      });
      const data = await req.json();
      return {
        status: req.status,
        payload: data.payload,
        message: data.message,
      };
};
export const deleteClothing = async (id) => {
    const req = await fetch(`http://localhost:3000/clothing/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "DELETE"
    });
    const data = await req.json();
    return {
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}