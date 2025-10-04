import Link from "next/link";

const login = () => {
    return ( <>
    
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Login</h2>

            <form className="space-y-5">

            <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" 
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">Password</label>
                <input type="password" name="password" id="password" 
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500" />
            </div>

            <button type="submit" 
                className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-medium text-white transition hover:bg-indigo-700">
                Create Account
            </button>
            <p className="text-center flex flex-row justify-center gap-3">New user?
                <Link href='/access/signup' className="hover:text-green-400 transition">Signup!</Link>
            </p>
            </form>
        </div>
    </div>

    
    
    
    </> );
}
 
export default login;