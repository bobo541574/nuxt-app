import { useAuth } from "~/stores/user.js";

export default defineEventHandler( async (event) => {
    const paramsUrl = event.context.params._;
    const formData = await readBody(event);
    const auth = useAuth();

    const { data } = await $fetch(`http://localhost:8000/api/${paramsUrl}`, {
        method: event.req.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-API-TOKEN': auth.apiKey,
            Authorization: auth.token,
        },
        body: formData,
    });

    return data;
    // console.log(data);

    // if (data && data.data) {
    //     return data.data 
    // } else {
    //     return data;
    // }
});