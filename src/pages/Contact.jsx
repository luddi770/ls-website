import React from "react"

export default function Contact() {
    return (
        <div className="p-8">
            <h2 className="text-2xl font-semibold">Contact Me</h2>
            <form action="https://formspree.io/f/yourid" method="POST" className="mt-4 space-y-4 max-w-md">
                <input name="email" type="email" placeholder="Your email" className="w-full border p-2" required />
                <textarea name="message" placeholder="Your message" className="w-full border p-2"></textarea>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">Send</button>
            </form>
        </div>
    )
}



