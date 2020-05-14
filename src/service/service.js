import React from "react";

class Service extends React.Component {
  async requestData(userData) {
    const url = "https://conduit.productionready.io/api/users";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return await response.json();
    }
  }
}

export default Service;
