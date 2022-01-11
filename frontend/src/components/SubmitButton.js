import React from 'react'

const SubmitButton = ({ isPending, Content }) => {
    return (
        <div>
            {isPending?
                <div>
                    <button disabled className="flex relative w-full bg-amber-400 text-amber-800 rounded p-2 mt-6 justify-center">
                        <div className="flex space-x-8">
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute animate-spin h-5 w-5 items-center" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                            </svg>
                            <div className="font-bold">
                                Processing...
                            </div>
                        </div>        
                    </button>
                </div>:
                <div>
                    <button className="flex relative justify-center w-full bg-amber-500 hover:bg-amber-400 text-amber-800 rounded p-2 mt-6 font-bold">
                        {Content}
                    </button>
                </div>
            }
        </div>
    )
}

export default SubmitButton
