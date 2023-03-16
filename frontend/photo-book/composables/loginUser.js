import { ref } from 'vue';

const loginUser = (username, pass) => {
    const post = ref(null);
    const error = ref(null);

    const query = {
        email: username,
        password: pass
    }

    const connect = async () => {
        try {
            let data = fetch('http://localhost:3000/user/login', {
                method: 'POST',
                headers: 'Content-Type: application/json',
                body: JSON.stringify(query)
            });
            post = await data.json();
            console.log(post);
        }
        catch(err) {
            error.value = err.message;
        }
    }

    return { post, error, connect }
}

export default loginUser
