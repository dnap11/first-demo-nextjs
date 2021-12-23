import { useRouter } from 'next/router'

export default function user() {
    const router = useRouter();
    console.log("router", router.query.id);

    function handleOnClick() {
        router.push('/login');
    }

    return (
        <div style={{background:'yellow'}}>
        <h1> User dnap tự tạo {router.query.id} </h1>
        <button onClick={handleOnClick}>
            go to login
        </button>
        </div>
    )
}