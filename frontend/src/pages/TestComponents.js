import React, {useState} from 'react'

// Components
import SubmitButton from '../components/SubmitButton'

function TestComponents() {

    const [isPending, setIsPending] = useState(false)

    return (
        <div>
            <SubmitButton isPending={isPending}/>
        </div>
    )
}

export default TestComponents
