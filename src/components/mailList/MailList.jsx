import './mailList.css'

export default function MailList() {
    return (
        <div className='mailList'>
            <h1 className='mailListTitle'>Save time, save money</h1>
            <span className='mailDesc'>Sign up and we'll send the best deals to you</span>
            <div className='mailInputContainer'>
                <input type='text' placeholder='Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}