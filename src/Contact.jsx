import React from 'react'
import chat from './assets/begin_chat.svg'

export default function Contact() {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [message, setMessage] = React.useState('')
  return (
    <div className='contact bg-gradient-to-r from-purple-500 to-pink-500' id='contact'>
      <div className="p-8 md:pl-32 flex flex-col md:grid md:grid-cols-7 justify-center justify-items-center place-content-center items-center">
            <div className="md:col-span-3">
              <img src={chat} alt="" className="" />
            </div>
            <div className="md:col-span-3">
              <h1 className="mb-8 text-4xl text-white font-bold">Let's Chat</h1>
              <form className='flex flex-col md:grid md:grid-cols-2 gap-2 text-white focus:text-black' action="" method="post">
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="bg-transparent font-semi-bold input input-bordered border-1 border-white text-white focus:border-none focus:outline-none focus:bg-white focus:text-black w-full col-span-1" />
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="bg-transparent input input-bordered input-secondary border-1 border-white text-white focus:border-none focus:outline-none focus:bg-white focus:text-black w-full col-span-1" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="bg-transparent input input-bordered input-secondary border-1 border-white text-white focus:border-none focus:outline-none focus:bg-white focus:text-black w-full col-span-1" />
              <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="bg-transparent input input-bordered input-secondary border-1 border-white text-white focus:border-none focus:outline-none focus:bg-white focus:text-black w-full col-span-1" />
              <textarea name="" value={message} onChange={(e) => setMessage(e.target.value)} id="" cols="60" rows="60" placeholder="Message" className="bg-transparent input input-bordered input-secondary border-1 border-white text-white focus:border-none focus:outline-none focus:bg-white focus:text-black w-full col-span-2 h-64"></textarea>
              </form>
              <button className='mt-8 ml-2 font-bold py-3 px-8 bg-white text-xl text-black hover:bg-black hover:text-white'> Send </button>
            </div>
      </div>
    </div>
  )
}
