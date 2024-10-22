import { createClient, type ClientConfig } from "@sanity/client";

//Sanity Client init
const config: ClientConfig = {
    projectId: "lq0ls1yg", // find this at manage.sanity.io or in your sanity.json
    dataset: "production", // this is from those question during 'sanity init'
    useCdn: true,
};

const client = createClient(config);

export default client;
