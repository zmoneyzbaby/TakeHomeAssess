import { API_URL_BASE } from "../Constants";

export default class NutsAndBoltsRestService {
  getBuilders = () => {
    const url = API_URL_BASE + "/builders";
    return (
      fetch(url)
        .then((res) => res.json())
        // eslint-disable-next-line no-console
        .catch((error) => console.error("Error:", error))
        .then((builders) => {
          return builders;
        })
    );
  };

  addBuilder = (builderValue) => {
    const url = API_URL_BASE + "/builders";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(builderValue),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
}
