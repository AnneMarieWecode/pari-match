export default function Filter() {
    return (
        <>
            <div className="p-2">
                <form class="max-w-md mx-auto">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Equipe, compétition..." required />
                    </div>
                </form>

                <h1 className="font-bold my-4">Top des compétitions</h1>

                <div className="w-full px-2 border bg-gray-700 border-gray-300 rounded-lg text-gray-400 mb-6">
                    <div className="flex space-x-2 py-2">
                        <div className="flex -space-x-2">
                            <img src="https://media.istockphoto.com/id/652933170/vector/realistic-soccer-ball.webp?s=2048x2048&w=is&k=20&c=IwVMLYjFKcIiYGTk0sEiFEZz_xcxEdJAD1FzTHGql78=" alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 " />
                            <img src="https://media.istockphoto.com/id/652933170/vector/realistic-soccer-ball.webp?s=2048x2048&w=is&k=20&c=IwVMLYjFKcIiYGTk0sEiFEZz_xcxEdJAD1FzTHGql78=" alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 " />
                        </div>
                        <h1 className="mt-1">Top Football Européen</h1>
                    </div>
                    <div className="flex space-x-2 py-2">
                        <div className="flex -space-x-2">
                            <img src="https://media.istockphoto.com/id/652933170/vector/realistic-soccer-ball.webp?s=2048x2048&w=is&k=20&c=IwVMLYjFKcIiYGTk0sEiFEZz_xcxEdJAD1FzTHGql78=" alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 " />
                            <img src="https://media.istockphoto.com/id/652933170/vector/realistic-soccer-ball.webp?s=2048x2048&w=is&k=20&c=IwVMLYjFKcIiYGTk0sEiFEZz_xcxEdJAD1FzTHGql78=" alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 " />
                        </div>
                        <h1 className="mt-1">Ligue Europa</h1>
                    </div>
                    <div className="flex space-x-2 py-2">
                        <div className="flex -space-x-2">
                            <img src="https://media.istockphoto.com/id/652933170/vector/realistic-soccer-ball.webp?s=2048x2048&w=is&k=20&c=IwVMLYjFKcIiYGTk0sEiFEZz_xcxEdJAD1FzTHGql78=" alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 " />
                            <img src="https://media.istockphoto.com/id/652933170/vector/realistic-soccer-ball.webp?s=2048x2048&w=is&k=20&c=IwVMLYjFKcIiYGTk0sEiFEZz_xcxEdJAD1FzTHGql78=" alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 " />
                        </div>
                        <h1 className="mt-1">Ligue Conférence</h1>
                    </div>
                    <div className="flex space-x-2 py-2">
                        <div className="flex -space-x-2">
                            <img src="https://media.istockphoto.com/id/652933170/vector/realistic-soccer-ball.webp?s=2048x2048&w=is&k=20&c=IwVMLYjFKcIiYGTk0sEiFEZz_xcxEdJAD1FzTHGql78=" alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 " />
                            <img src="https://media.istockphoto.com/id/652933170/vector/realistic-soccer-ball.webp?s=2048x2048&w=is&k=20&c=IwVMLYjFKcIiYGTk0sEiFEZz_xcxEdJAD1FzTHGql78=" alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 " />
                        </div>
                        <h1 className="mt-1">Angl. Premier League </h1>
                    </div>
                    <div className="flex space-x-2 py-2">
                        <div className="flex -space-x-2">
                            <img src="https://media.istockphoto.com/id/652933170/vector/realistic-soccer-ball.webp?s=2048x2048&w=is&k=20&c=IwVMLYjFKcIiYGTk0sEiFEZz_xcxEdJAD1FzTHGql78=" alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 " />
                            <img src="https://media.istockphoto.com/id/652933170/vector/realistic-soccer-ball.webp?s=2048x2048&w=is&k=20&c=IwVMLYjFKcIiYGTk0sEiFEZz_xcxEdJAD1FzTHGql78=" alt="" className="w-8 h-8 border rounded-full dark:bg-gray-500 " />
                        </div>
                        <h1 className="mt-1">Espagne LaLiga </h1>
                    </div>
                </div>
                <h1 className="font-bold my-4">Sports</h1>

                <div className="w-full border border-gray-300 rounded-lg text-white mb-6">
                    <div className="px-4">
                        <h1 className="m-4">Football</h1>
                        <h1 className="m-4">Basketball</h1>
                        <h1 className="m-4">Hockey sur glace</h1>
                        <h1 className="m-4">Badminton</h1>
                        <h1 className="m-4">Baseball</h1>
                    </div>
                </div>
            </div>
        </>
    )
}