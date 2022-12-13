export default {
  async sendUserData(context, payload) {
    const newData = {
      first: payload.first,
      last: payload.last,
      from: payload.from,
      to: payload.to,
      persons: payload.persons,
      total: payload.total,
    };

    const response = await fetch(
      "https://ticket-demo-data-default-rtdb.firebaseio.com/tickets.json",
      {
        method: "POST",
        body: JSON.stringify(newData),
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to send Data");
      throw error;
    }

    context.commit("userInput", newData);
  },

  async getUser(context) {
    const response = await fetch(
      "https://ticket-demo-data-default-rtdb.firebaseio.com/tickets.json"
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed To Fetch Data");
      throw error;
    }

    let users = [];
    for (const id in responseData) {
      const user = {
        first: responseData[id].first,
        last: responseData[id].last,
        from: responseData[id].from,
        to: responseData[id].to,
        persons: responseData[id].persons,
        total: responseData[id].total,
      };
      users.unshift(user);
    }
    context.commit("getUser", users);
  },
};
