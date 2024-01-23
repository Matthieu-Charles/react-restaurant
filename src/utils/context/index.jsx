export async function getItem(url, id) {
  const res = await fetch(url + `/${id}`);
  try {
    if (res.ok) {
      const dataReceived = await res.json();
      if (dataReceived) {
        return dataReceived;
      }
    } else {
      console.log("pas de data");
    }
  } catch (e) {
    console.error("Impossible de récupérer la resource");
  }
}

export async function getItems(url) {
  const res = await fetch(url);
  try {
    if (res.ok) {
      const dataReceived = await res.json();
      if (dataReceived) {
        return dataReceived;
      }
    } else {
      console.log("pas de data");
    }
  } catch (e) {
    console.error("Impossible de récupérer la resource");
  }
}

export async function addItem(url = "", item) {
  try {
    const reponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const resultat = await reponse.json();
  } catch (erreur) {
    console.error("Impossible de récupérer la resource");
  }
}

export async function modifyItem(url, modifiedItem) {
  try {
    const reponse = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...modifiedItem,
      }),
    });
    const resultat = await reponse.json();
  } catch (erreur) {
    console.error("Impossible de récupérer la resource");
  }
}

export async function deleteItem(url) {
  try {
    const reponse = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resultat = await reponse.json();
  } catch (erreur) {
    console.error("Impossible de récupérer la resource");
  }
}
