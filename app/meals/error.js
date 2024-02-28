'use client'

export default function Error({error}) {
    //don't output becoming from next server error on the screen

    return <main className="error">
<h1>A Error occured!</h1>
<p>Failed to fetch meals data. Please try again later</p>
    </main>
}