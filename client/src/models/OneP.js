

export const getAllOneP = async () => {
    const req = await fetch("http://localhost:3000/onep", {
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
export const getOnePById = async (id) => {
    const req = await fetch(`http://localhost:3000/onep/${id}`, {
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
export const createOneP = async (formData) => {
    const req = await fetch(`http://localhost:3000/onep`, {
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
export const updateOneP = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/onep/${id}`, {
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
export const deleteOneP = async (id) => {
    const req = await fetch(`http://localhost:3000/onep/${id}`, {
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